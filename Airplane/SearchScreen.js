import { StyleSheet, Text, TextInput, View, TouchableOpacity, Modal, ScrollView, FlatList, Alert } from 'react-native';
import { useState,useEffect } from 'react';
import { RadioButton, Dialog, Portal, Provider } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Calendar } from 'react-native-calendars';
import moment from 'moment/moment';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA2sI-1M0skKYLN8JPRHH1hWMuBafMDFd8",
  authDomain: "fir-auth-80d83.firebaseapp.com",
  projectId: "fir-auth-80d83",
  storageBucket: "fir-auth-80d83.appspot.com",
  messagingSenderId: "169019440215",
  appId: "1:169019440215:web:b1361b04fbeea01dcbb712"
};

// Initialize Firebase
initializeApp(firebaseConfig)
//const auth = getAuth(initializeApp)
const db=getFirestore();
const collRef=collection(db,"Data");

export default function SearchScreen({navigation}) {

  const [radioChecked,setRadioChecked] = useState('Return');
  const [departCalVisibility,setDepartCalVisibility] = useState(false);
  const [returnCalVisibility,setReturnCalVisibility] = useState(false);
  const [showDepartDate,setShowDepartDate]= useState(moment().format('DD/MM/YYYY'));
  const [showReturnDate,setShowReturnDate]= useState(moment().format('DD/MM/YYYY'));
  const [classDialogVisibility,setClassDialogVisibility]=useState(false);

  const [departureAirportModal, setDepartureAirportModal]=useState(false);
  const [departureAirport, setDepartureAirport]=useState('Enter Departure Airport');
  const [departureCityandCountry, setDepartureCityandCountry]=useState('')

  const [arrivalAirportModal, setArrivalAirportModal]=useState(false);
  const [arrivalAirport,setArrivalAirport]=useState('Enter Arrival Airport');
  const [arrivalCityandCountry, setArrivalCityandCountry]=useState('');
  

  const [airportChecker,setAirportChecker]=useState('');

  let [departDate,setDepartDate]= useState('');
  let [departMonth,setDepartMonth]= useState('');
  let [departYear,setDepartYear]= useState('');

  let [returnDate,setReturnDate]= useState('');
  let [returnMonth,setReturnMonth]= useState('');
  let [returnYear,setReturnYear]= useState('');

  const [classRadioChecked,setClassRadioChecked] = useState('Economy');
  const [passClass,setPassClass]=useState(classRadioChecked);

  const [departureFlights,setDepartureFlights]=useState([{departureTime:'08.00', arrivalTime:'12.00', departureAirport:'DAC', arrivalAirport:'JFK', flightDuration:'12h 50m', flightName:'A300', ticketPrice:50000}]);
  const [returnFlights,setReturnFlights]=useState([{departureTime:'08.00', arrivalTime:'12.00', departureAirport:'JFK', arrivalAirport:'DAC', flightDuration:'12h 50m', flightName:'Boeing707', ticketPrice:50000}]);
  const [numberOfFlights, setNumberOfFlights]=useState('');

  const departureFlightQuery=query(collRef,where('departureDate','==',showDepartDate),where('departureAirport','==',departureAirport),where('arrivalAirport','==',arrivalAirport),where('class','==',passClass));
  const returnFlightQuery=query(collRef,where('departureDate','==',showReturnDate),where('departureAirport','==',arrivalAirport),where('arrivalAirport','==',departureAirport),where('class','==',passClass));

  const [departureTicketPrice, setDepartureTicketPrice]=useState();
  const [returnTicketPrice, setReturnTicketPrice]=useState();

  const [paymentModal,setPaymentModal]=useState(false);
  const [cardNumber,setCardNumber]=useState();
  const [fullName,setFullName]=useState();
  const [expiryDate,setExpiryDate]=useState();
  

  const DepartFullDate=()=>{
    if((departDate/10)<1)
        departDate='0'+departDate;
    if((departMonth/10)<1)
        departMonth='0'+departMonth;
    return departDate+'/'+departMonth+'/'+departYear
  }

  const ReturnFullDate=()=>{
      if((returnDate/10)<1)
          returnDate='0'+returnDate;
      if((returnMonth/10)<1)
          returnMonth='0'+returnMonth;
      return returnDate+'/'+returnMonth+'/'+returnYear
    }

  const Returndate=()=>{
    if(radioChecked==='Return')
    return (
        <TouchableOpacity style={{flex:1,alignItems:'flex-end'}}
        onPress={()=>{setReturnCalVisibility(true)}}>
         <Text style={{fontSize:12, marginRight:15, marginTop:7}}>Return</Text>
        <Text style={{fontSize:20, marginRight:15}}>{showReturnDate}</Text>
        </TouchableOpacity>
    )
    }

  const DepartureTicketScreen=()=>{
    return(
      <View>
        <Text style={{fontSize:20, marginLeft:15, marginTop:10}}>Search Result:</Text>
        <Text style={{fontSize:17, marginLeft:15, marginTop:5}}>{}</Text>
        <FlatList 
        data={departureFlights}
        renderItem={({item})=>(
          <ScrollView>
          <TouchableOpacity style={{backgroundColor:'white', height:100, margin:10, borderRadius:15, flexDirection:'column'}}
          onPress={()=>{
            setDepartureTicketPrice(item.ticketPrice);
            console.log(departureTicketPrice);
            if(radioChecked==='Return')
            {
              navigation.navigate('Return Ticket Screen');
            }
            else
            {
            setReturnTicketPrice(0);
            setPaymentModal(true);
            }
          }}
          >

          <Text style={{position:'absolute', left:35, top:10, fontWeight:'bold', fontSize:22,}}>{item.departureTime}</Text>
          <Text style={{left:35, top:35, fontSize:16}}>{item.departureAirport}</Text>
          <Text style={{left:35, top:45, fontSize:16}}>{item.flightName}</Text>
          <MaterialIcons name="flight-takeoff" size={28} color="black" style={{position:'absolute', top:10, alignSelf:'center'}}/>
          <Text style={{position:'absolute', top:37, fontSize:16, alignSelf:'center'}}>{item.flightDuration}</Text>
          <Text style={{position:'absolute', right:35, top:10, fontWeight:'bold', fontSize:22,}}>{item.arrivalTime}</Text>
          <Text style={{position:'absolute', right:35, top:35, fontSize:16}}>{item.arrivalAirport}</Text>
          <Text style={{position:'absolute', right:35, top:70, color:'#006a4e', fontWeight:'bold', fontSize:16}}>BDT {item.ticketPrice}</Text>
          </TouchableOpacity>
          </ScrollView>
    )}/>
      </View>
    )
  }


  const ReturnTicketScreen=()=>{

    return(
      <View>
        <Text style={{fontSize:20, marginLeft:15, marginTop:10}}>Search Result:</Text>
        <FlatList 
        data={returnFlights}
        renderItem={({item})=>(
          <ScrollView>
          <TouchableOpacity style={{backgroundColor:'white', height:100, margin:10, borderRadius:15, flexDirection:'column'}}
          onPress={()=>{
            setReturnTicketPrice(item.ticketPrice);
            console.log(departureTicketPrice+returnTicketPrice);
            setPaymentModal(true);
          }}
          >

          <Text style={{position:'absolute', left:35, top:10, fontWeight:'bold', fontSize:22,}}>{item.departureTime}</Text>
          <Text style={{left:35, top:35, fontSize:16}}>{item.departureAirport}</Text>
          <Text style={{left:35, top:45, fontSize:16}}>{item.flightName}</Text>
          <MaterialIcons name="flight-land" size={28} color="black" style={{position:'absolute', top:10, alignSelf:'center'}}/>
          <Text style={{position:'absolute', top:37, fontSize:16, alignSelf:'center'}}>{item.flightDuration}</Text>
          <Text style={{position:'absolute', right:35, top:10, fontWeight:'bold', fontSize:22,}}>{item.arrivalTime}</Text>
          <Text style={{position:'absolute', right:35, top:35, fontSize:16}}>{item.arrivalAirport}</Text>
          <Text style={{position:'absolute', right:35, top:70, color:'#006a4e', fontWeight:'bold', fontSize:16}}>BDT {item.ticketPrice}</Text>
          </TouchableOpacity>
          </ScrollView>
    )}/>
      </View>
    )
  }

  const PaymentScreen=()=>{
    return(
      <View>
            <ScrollView>
            <Text style={{fontSize:20, color:'gray', marginTop:25, marginLeft:12}}>Payment Information:</Text>
            <View style={{marginTop:10, margin:15, height:500, backgroundColor:'white'}}>
            <View style={{flexDirection:'row', marginTop:25, marginLeft:10}}>
            <Entypo name="credit-card" size={26} color="black" style={{marginLeft:10, marginTop:2, marginRight:10}}/>
            <Text style={{fontSize:22}}>Debit or Credit Card:</Text>
            </View>
            <TextInput
            cursorColor='black'
            placeholder='Card Number'
            //maxLength={16}
            style={{backgroundColor:'white', margin:15, fontSize:22, textColor:'black', height:60, padding:10 , borderWidth:1}}
            keyboardType='number-pad'
            />
            <TextInput
            cursorColor='black'
            placeholder='Full Name (as it appears on card)'

            style={{backgroundColor:'white', margin:15, fontSize:22, textColor:'black', height:60, padding:10 , borderWidth:1}}
            />
            <TextInput
            cursorColor='black'
            placeholder='Expiry Date'
            style={{backgroundColor:'white', margin:15, fontSize:22, textColor:'black', height:60, padding:10 , borderWidth:1}}
            keyboardType='number-pad'
            />
            <View style={{margin:17, marginTop:20, flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{fontSize:24}}>Total fare :</Text>
            <Text style={{color:'#006a4e', fontSize:24, fontWeight:'bold'}}>BDT {departureTicketPrice+returnTicketPrice}</Text>
            </View>
            <View style={{flex:1, justifyContent:'flex-end'}}>
            <TouchableOpacity style={{height:50, alignItems:'center', justifyContent:'center', flexDirection:'row', backgroundColor:'#006a4e', margin:15}}
             onPress={()=>{
              if((cardNumber!="")&&(fullName!="")&&(expiryDate!=""))
              {
              Alert.alert('Successful','Payment successful. Your boarding pass will be emailed to you',[
                {
                  text: 'OK',
                  onPress:()=>{navigation.pop(2)}
                }
              ])
              }
              else
              Alert.alert('Failed','Please enter proper card credentials',[
                {
                  text: 'OK',
                }
              ])
             }}
             >
           <View style={{marginTop:3, marginRight:2}}>
           </View>
           <Text style={{fontSize:25, color:'white'}}>Pay now</Text>
           </TouchableOpacity>
           </View>
           </View>
           </ScrollView>
           </View>
    )
  }
  const airports=[
  {city:"Kolkata", country:'India', airportName:'Netaji Subhash Chandra Bose International Airport', airportCode:'CCU'},
  {city:"London", country:'United Kingdom', airportName:'Heathrow Airport', airportCode:'LHR'},
  {city:"New York", country:'United States', airportName:'John F. Kennedy International Airport', airportCode:'JFK'},
  {city:"Toronto", country:'Canada', airportName:'Toronto Pearson International Airport', airportCode:'YYZ'}
];

  const MainScreen=()=>{
    return(
      <Provider>
      <ScrollView>
      <View>
      <Modal
      animationType="slide"
      visible={departureAirportModal}
      >
      <View style={{flex:1, backgroundColor:'#f2f2f2'}}>
      <View style={{height:60, backgroundColor:'white', flexDirection:'row', marginBottom:25, alignItems:'center'}}>
      <Text style={{fontSize:28, marginLeft:15}}>Select Departure Airport</Text>
      <View style={{flex:1, alignItems:'flex-end'}}>
        <Entypo name="cross" size={50} style={{marginRight:7}}
        onPress={()=>{setDepartureAirportModal(false)}}/>
      </View>
     </View>
           <TouchableOpacity style={{backgroundColor:'white', margin:10, padding:15, borderRadius:17, justifyContent:'center'}}
           onPress={()=>{
            setDepartureAirport('DAC');
            setDepartureAirportModal(false); 
            setDepartureCityandCountry('Dhaka, Bangladesh'); 
            }}>
            <Text style={{fontSize:24}}>Dhaka, Bangladesh</Text>
            <Text style={{fontSize:14}}>Hazrat Shahjalal International Airport (DAC)</Text>
            </TouchableOpacity>
            </View>
      </Modal>
      <TouchableOpacity style={{backgroundColor:'white', justifyContent:'center', borderRadius:20, marginTop:35, marginLeft:15, marginRight:15, paddingLeft:15, padding:10}}
      onPress={()=>{
        setAirportChecker('Departure');
        setDepartureAirportModal(true)}}>
      <Text style={{fontSize:18}}>From:</Text>
      <Text style={{fontSize:28}}>{departureAirport}</Text>
      <Text style={{fontSize:16}}>{departureCityandCountry}</Text>
      </TouchableOpacity>
      <Modal
      animationType="slide"
      visible={arrivalAirportModal}
      >
      <View style={{flex:1, backgroundColor:'#f2f2f2'}}>
      <View style={{height:60, backgroundColor:'white', flexDirection:'row', marginBottom:25, alignItems:'center'}}>
      <Text style={{fontSize:28, marginLeft:15}}>Select Arrival Airport</Text>
      <View style={{flex:1, alignItems:'flex-end'}}>
        <Entypo name="cross" size={50} style={{marginRight:7}}
        onPress={()=>{setArrivalAirportModal(false)}}/>
      </View>
     </View>
      <FlatList 
        data={airports}
        renderItem={({item})=>(
           <TouchableOpacity style={{backgroundColor:'white', margin:10, padding:15, borderRadius:17, justifyContent:'center'}}
           onPress={()=>{
            setArrivalAirport(item.airportCode);
            setArrivalAirportModal(false);
            setArrivalCityandCountry(item.city+', '+item.country);
            }}>
            <Text style={{fontSize:24}}>{item.city}, {item.country}</Text>
            <Text style={{fontSize:14}}>{item.airportName} ({item.airportCode})</Text>
            </TouchableOpacity>
    )}/>
      </View>
      </Modal>
      <TouchableOpacity style={{backgroundColor:'white', justifyContent:'center', borderRadius:20, marginTop:25, marginLeft:15, marginRight:15, paddingLeft:15, padding:10}}
      onPress={()=>{
        setAirportChecker('Arrival')
        setArrivalAirportModal(true)}}>
      <Text style={{fontSize:18}}>To:</Text>
      <Text style={{fontSize:28}}>{arrivalAirport}</Text>
      <Text style={{fontSize:16}}>{arrivalCityandCountry}</Text>
      </TouchableOpacity>
      <Text style={{fontSize:18, marginTop:25, marginLeft:22}}>Way Type:</Text>
      <View style={{marginTop:5, marginLeft:13, flexDirection:'row'}}>
      <TouchableOpacity style={{flexDirection:'row'}}
      onPress={() => setRadioChecked('Return')}>
      <RadioButton
        value="Return"
        status={ radioChecked === 'Return' ? 'checked' : 'unchecked' }
        onPress={() => setRadioChecked('Return')}
        color="#006a4e"
      />
      <Text style={{fontSize:18, marginTop:5, marginRight:15}}>Return</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row'}}
      onPress={() => setRadioChecked('One-Way')}>
      <RadioButton
        value="One-Way"
        status={ radioChecked === 'One-Way' ? 'checked' : 'unchecked' }
        onPress={() => setRadioChecked('One-Way')}
        color="#006a4e"
      />
      <Text style={{fontSize:18, marginTop:5}}>One-Way</Text>
      </TouchableOpacity>
      </View>
      <Portal>
      <Dialog visible={departCalVisibility} onDismiss={()=>{setDepartCalVisibility(false)}} style={{backgroundColor:'white'}}>
         <Dialog.Title>Pick Departure Date</Dialog.Title>
         <Dialog.Content>
           <Calendar
           enableSwipeMonths={true}
           onDayPress={({day,month,year})=>{
            setDepartDate(day);
            setDepartMonth(month);
            setDepartYear(year);
           }}
           theme={{
           todayTextColor: 'green'
           }}
           minDate={moment().format('YYYY-MM-DD')}
           />
         </Dialog.Content>
         <Dialog.Actions>
             <TouchableOpacity onPress={()=>setDepartCalVisibility(false)}><Text style={{color:'#006a4e', paddingRight:12}}>Cancel</Text></TouchableOpacity>
             <TouchableOpacity onPress={()=>{
              setShowDepartDate(DepartFullDate());
              setDepartCalVisibility(false);
              }}>
              <Text style={{color:'#006a4e', paddingRight:7}}>OK</Text></TouchableOpacity>
         </Dialog.Actions>
      </Dialog>
      </Portal>
      <Portal>
      <Dialog visible={returnCalVisibility} onDismiss={()=>{setReturnCalVisibility(false)}} style={{backgroundColor:'white'}}>
         <Dialog.Title>Pick Return Date</Dialog.Title>
         <Dialog.Content>
         <Calendar
           enableSwipeMonths={true}
           onDayPress={({day,month,year})=>{
            setReturnDate(day);
            setReturnMonth(month);
            setReturnYear(year);
           }}
           theme={{
           todayTextColor: 'green'
           }}
           minDate={moment().format('YYYY-MM-DD')}
           />
         </Dialog.Content>
         <Dialog.Actions>
             <TouchableOpacity onPress={()=>setReturnCalVisibility(false)}><Text style={{color:'#006a4e', paddingRight:12}}>Cancel</Text></TouchableOpacity>
             <TouchableOpacity onPress={()=>{
              setShowReturnDate(ReturnFullDate());
              setReturnCalVisibility(false);
             }
            }
              >
              <Text style={{color:'#006a4e', paddingRight:5}}>OK</Text></TouchableOpacity>
         </Dialog.Actions>
      </Dialog>
      </Portal>
      <Text style={{fontSize:18, marginTop:15, marginLeft:22}}>Travel Dates:</Text>
         <View style={{flexDirection:'row', backgroundColor:'white', borderRadius:20, marginTop:10, marginLeft:15, marginRight:15, height:60}}>
          <TouchableOpacity style={{flex:1,alignItems:'flex-start'}}
          onPress={()=>{setDepartCalVisibility(true)}}
          >
          
          <Text style={{fontSize:12, marginLeft:15, marginTop:7}}>Departure</Text>
          <Text style={{fontSize:20, marginLeft:15}}>{showDepartDate}</Text>
          </TouchableOpacity>
         <Returndate/>
         </View>
         <Portal>
      <Dialog visible={classDialogVisibility} onDismiss={()=>{setClassDialogVisibility(false)}} style={{backgroundColor:'white'}}>
         <Dialog.Title>Select a cabin class</Dialog.Title>
         <Dialog.Content>
         <TouchableOpacity style={{flexDirection:'row', marginBottom:5}}
          onPress={() => setClassRadioChecked('Business')}>
            <RadioButton
            value="Business"
            status={ classRadioChecked === 'Business' ? 'checked' : 'unchecked' }
            onPress={() => setClassRadioChecked('Business')}
            color="#006a4e"
            />
            <Text style={{fontSize:18, marginTop:5}}>Business</Text>
        </TouchableOpacity>
          <TouchableOpacity style={{flexDirection:'row'}}
          onPress={() => setClassRadioChecked('Economy')}>
          <RadioButton
            value="Economy"
            status={ classRadioChecked === 'Economy' ? 'checked' : 'unchecked' }
            onPress={() => setClassRadioChecked('Economy')}
            color="#006a4e"
          />
          <Text style={{fontSize:18, marginTop:5}}>Economy</Text>
          </TouchableOpacity>
         </Dialog.Content>
         <Dialog.Actions>
             <TouchableOpacity onPress={()=>setClassDialogVisibility(false)}><Text style={{color:'#006a4e', paddingRight:12}}>Cancel</Text></TouchableOpacity>
             <TouchableOpacity onPress={()=>{
              setPassClass(classRadioChecked);
              setClassDialogVisibility(false);
             }
            }
              >
              <Text style={{color:'#006a4e', paddingRight:7}}>OK</Text></TouchableOpacity>
         </Dialog.Actions>
      </Dialog>
      </Portal>
         <Text style={{fontSize:18, marginTop:15, marginLeft:22}}>Passengers & Cabin Class:</Text>
         <View style={{flexDirection:'row', backgroundColor:'white', borderRadius:20, marginTop:10, marginLeft:15, marginRight:15, height:60}}>
          <View style={{flex:1, flexDirection:'row', alignItems:'center'}}
          onPress={()=>{setModalVisibility(true)}}
          >
          <TouchableOpacity style={{flex:1, justifyContent:'flex-start'}}>
          <Text style={{fontSize:20, marginLeft:15}}>1 Adult</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1, alignItems:'flex-end'}}
          onPress={()=>{
            setClassDialogVisibility(true);
          }}
          >
          <Text style={{fontSize:20, marginRight:15}}>{passClass}</Text>
          </TouchableOpacity>
          </View>
         </View>
         <Modal
            animationType="slide"
            visible={paymentModal}
            >
            <View style={{flex:1, backgroundColor:'#f2f2f2'}}>
            <ScrollView>
            <View style={{height:60, backgroundColor:'white', flexDirection:'row', alignItems:'center'}}>
              <Text style={{fontSize:28, marginLeft:15}}>Payment</Text>
              <View style={{flex:1, alignItems:'flex-end'}}>
              <Entypo name="cross" size={50}
               onPress={()=>{
                Alert.alert('Are you sure to exit?','All selections you have made will be removed',[
                {
                  text:'Cancel'
                },
                {
                  text:'OK',
                  onPress:()=>{
                   setPaymentModal(false);
                   navigation.navigate('Main Screen');
                  }
                  }
                  ])
                    }}/>
                </View>
            </View>
            <Text style={{fontSize:20, color:'gray', marginTop:25, marginLeft:12}}>Payment Information:</Text>
            <View style={{marginTop:10, margin:15, height:500, backgroundColor:'white'}}>
            <View style={{flexDirection:'row', marginTop:25, marginLeft:10}}>
            <Entypo name="credit-card" size={26} color="black" style={{marginLeft:10, marginTop:2, marginRight:10}}/>
            <Text style={{fontSize:22}}>Debit or Credit Card:</Text>
            </View>
            <TextInput
            cursorColor='black'
            placeholder='Card Number'
            //maxLength={16}
            style={{backgroundColor:'white', margin:15, fontSize:22, height:60, padding:10 , borderWidth:1}}
            keyboardType='number-pad'
            />
            <TextInput
            cursorColor='black'
            placeholder='Full Name (as it appears on card)'

            style={{backgroundColor:'white', margin:15, fontSize:22,  height:60, padding:10 , borderWidth:1}}
            />
            <TextInput
            cursorColor='black'
            placeholder='Expiry Date'
            style={{backgroundColor:'white', margin:15, fontSize:22,  height:60, padding:10 , borderWidth:1}}
            keyboardType='number-pad'
            />
            <View style={{margin:17, marginTop:20, flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{fontSize:24}}>Total fare :</Text>
            <Text style={{color:'#006a4e', fontSize:24, fontWeight:'bold'}}>BDT {departureTicketPrice+returnTicketPrice}</Text>
            </View>
            <View style={{flex:1, justifyContent:'flex-end'}}>
            <TouchableOpacity style={{height:50, alignItems:'center', justifyContent:'center', flexDirection:'row', backgroundColor:'#006a4e', margin:15}}
             onPress={()=>{
              if((cardNumber!="")&&(fullName!="")&&(expiryDate!=""))
              {
              Alert.alert('Successful','Payment successful. Your boarding pass will be emailed to you',[
                {
                  text: 'OK',
                  onPress:()=>{
                    setPaymentModal(false);
                    navigation.navigate('Main Screen');
                   }
                }
              ])
              }
              else
              Alert.alert('Failed','Please enter proper card credentials',[
                {
                  text: 'OK',
                }
              ])
             }}
             >
           <View style={{marginTop:3, marginRight:2}}>
           </View>
           <Text style={{fontSize:25, color:'white'}}>Pay now</Text>
           </TouchableOpacity>
           </View>
           </View>
           </ScrollView>
           </View>
        </Modal> 
         <View style={{marginTop:65}}>
         <TouchableOpacity style={{height:50, alignItems:'center', justifyContent:'center', flexDirection:'row', backgroundColor:'#006a4e', margin:15, borderRadius:25}}
        onPress={()=>{
          setDepartureFlights([]);
          setReturnFlights([]);
         
          if(departureAirport!='Enter Departure Airport'&&arrivalAirport!='Enter Arrival Airport'){
            if(radioChecked==='Return'){
              if((departDate<returnDate)&&(departMonth<=returnMonth)){
                onSnapshot(departureFlightQuery,(snapshot)=>{
                snapshot.docs.forEach((doc)=>{
                setDepartureFlights(oldArray=>[...oldArray, doc.data()]);
                })
                })
                onSnapshot(returnFlightQuery,(snapshot)=>{
                  snapshot.docs.forEach((doc)=>{
                  setReturnFlights(oldArray=>[...oldArray, doc.data()]);
                  })
                })
                console.log(departureFlights);
                console.log(returnFlights);
                navigation.navigate('Departure Ticket Screen');
                }
                else
                Alert.alert('Invalid Date','Please select proper Departure and Return date',[
                  {
                    text: 'OK',
                  }
                ])
              }
            else{
              onSnapshot(departureFlightQuery,(snapshot)=>{
                snapshot.docs.forEach((doc)=>{
                setDepartureFlights(oldArray=>[...oldArray, doc.data()]);
                })
                })
                onSnapshot(returnFlightQuery,(snapshot)=>{
                  snapshot.docs.forEach((doc)=>{
                  setReturnFlights(oldArray=>[...oldArray, doc.data()]);
                  })
                })
                  console.log(departureFlights);
                  console.log(returnFlights);
                  navigation.navigate('Departure Ticket Screen');
                }
        }
          else
          Alert.alert('Invalid Airport','Please select proper Departure and Arrival Airport',[
            {
              text: 'OK',
            }
          ])
        }}

         >
          <View style={{marginTop:3, marginRight:2}}>
         <Ionicons name="search" color={'white'} size={25}/>
         </View>
         <Text style={{fontSize:25, color:'white'}}>Search</Text>
         </TouchableOpacity>
         </View>
         
     </View> 
     </ScrollView>
     </Provider>
    );
  }

  const stack=createNativeStackNavigator();
  return (
    <stack.Navigator>
      <stack.Screen name='Main Screen' component={MainScreen} options={{headerTitle:'Search Flights', headerTitleStyle:{fontSize:28, color:'#006a4e'}}}/>
      <stack.Screen name='Departure Ticket Screen' component={DepartureTicketScreen} options={{headerTitle:'Select Departure Flight', headerTitleStyle:{fontSize:24}}}/>
      <stack.Screen name='Return Ticket Screen' component={ReturnTicketScreen} options={{headerTitle:'Select Return Flight', headerTitleStyle:{fontSize:24}}}/>
      <stack.Screen name='Payment Screen' component={PaymentScreen} options={{headerTitle:'Select Return Flight', headerTitleStyle:{fontSize:24}}}/>
    </stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})