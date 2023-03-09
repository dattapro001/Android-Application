import { View, Text, StyleSheet, ScrollView } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const text = '1.OverView'
const text1 = 'Your privacy is very important to BD Airways Group and we understand how important it is to you. We want you to feel safe when visiting our websites or using our services and are committed to maintaining your privacy when you do. We require our employees, suppliers and partners to maintain confidentiality in accordance with applicable data protection laws.   This Privacy Notice can be changed over time to comply with law or to meet our changing business requirements. The most up-to-date Privacy Notice can be found on our website. We will inform you appropriately of any relevant changes to this Privacy Notice. Subject to applicable laws, the English version of this Privacy Notice will prevail over any version of this Privacy Notice in another language. '
const text2 = '2.Definitions'
const text3 = 'By "Personal Data" we mean any information relating to an identified or identifiable natural person.'
const text4 = '3.Who is resposible for personal Data?'
const text5 = 'BD Airways is responsible for the processing of all Personal Data described in this Privacy Notice. In this Privacy Notice we explain what Personal Data we process and for what purposes, and to which persons or entities the Personal Data will be provided. Our Website and Mobile Apps may contain links to enable you to visit third-party websites, mobile sites and mobile applications which are governed by their own privacy policies. Please note that we do not have any control over these and are not responsible or liable for the protection and privacy of any information that you provide whilst visiting those sites '
const text6 = '4.How do we keep your data safe? '
const text7 = 'BD Airways has taken adequate safeguards to ensure the confidentiality and security of your personal data. We are committed to ensuring that your Personal Data is secure. In an effort to prevent unauthorised access to, or disclosure of, your Personal Data, we have put in place physical, technical, and administrative safeguards to protect your Personal Data against accidental or unlawful destruction or accidental loss, damage, alteration, unauthorised disclosure or access, as well as all other forms of unlawful processing (including, but not limited to, unnecessary collection) or further processing. In order to protect the security of your information, where necessary, we use encryption technology when collecting or transferring Personal Data.Although we use reasonable and appropriate efforts to protect your Personal Data we cannot guarantee the security of your Personal Data transmitted to our Website or Mobile Apps via internet or similar connection.     Except for required passenger details, we do not intentionally gather Personal Data about children. We are not able to identify the age of persons who access and use our Website or Mobile Apps or subscribe to our newsletters. If you believe we have inadvertently collected Personal Data about your child or if the child has provided us with Personal Data without parental or guardian consent, the parent or guardian should contact us, and we will erase the Personal Data and where relevant unsubscribe the child.  We will retain Personal Data for as long as it is necessary to fulfil the purpose for which it was collected, the legal or business purposes of Qatar Airways as described in this Privacy Notice and in line with our data retention policies, or as required by relevant laws. When erasing Personal Data, we will take commercially reasonable and technically possible measures to make the Personal Data irrecoverable or irreproducible in accordance with the applicable laws.'
const PriText = () => {
      
    return(
        <ScrollView>
           <View style={style.cover}>
            <Text style = {style.Txt}>{text}  </Text>
            <Text style ={style.Txt1}>{text1}  </Text>
            <Text style = {style.Txt}>{text2}</Text>
            <Text style ={style.Txt1}>{text3}   </Text>
            <Text style = {style.Txt}>{text4}  </Text>
            <Text style ={style.Txt1}>{text5}</Text>
            <Text style = {style.Txt}>{text6}</Text>
            <Text style ={style.Txt1}>{text7}</Text>
           </View>
</ScrollView>
       );
}


const stack = createNativeStackNavigator();
export default function Privacy() {

    return(

    <stack.Navigator>
        <stack.Screen name ='Privacy & Policy' component={PriText} option ={{headerShown : false}}/>
    </stack.Navigator>

    );

}
const style = StyleSheet.create({
    cover:{
    backgroundColor:'white',
    },
    Txt:{
        marginLeft:20 ,
     fontSize:20,
    },

    Txt1:{
        marginLeft:20 
     }

})