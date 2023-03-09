import { View, Text, StyleSheet, ScrollView } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const text1 = ' 1.Agreement to Use'
const text2 = 'You warrant that you are over the age of legal majority and possess the legal capacity to enter into this agreement and to use this Website in accordance with all Terms of Use herein. You agree to be financially responsible for all of your use of this Site (as well as for use of your account by others).These Terms of Use govern Your use of the Website, and all applications, software, and services (collectively, "Services") available on the Website, except to the extent such Services are the subject of a separate agreement. Specific conditions may apply to the use of certain Services and other items provided to You on the Website ("Service Agreement(s)").'
const text3 = '2.Your Commites'
const text4 = 'In addition to other restrictions set forth in these Terms of Use, You agree that:(a) You shall not disguise the origin of information transmitted through the Website.(b) You will not place false or misleading information on the Website.(c) You will not use or access any service, information, application or software available via the Website in a manner not expressly permitted by BD Airways.(d) You will not input or upload to the Website any information which contains viruses, Trojan horses, worms, time bombs or other computer programming routines that are intended to damage, interfere with, intercept or expropriate any system, the Website or Information or that infringes the Intellectual Property (defined below) rights of another.(e) Certain areas of the Website are restricted to customers of BD Airways.(f)  You may not use or access the Website or the BD Airways Systems or Services in any way that, in BD Airways judgment, adversely affects the performance or function of the BD Airways Systems, Services or the Website or interferes with the ability of authorized parties to access the BD Airways Systems, Services or the Website.(g) You may not frame or utilize framing techniques to enclose any portion or aspect of the Content or the Information, without the express written consent of BD Airways.'
const text5 = 'Disclaimers and limitations of liability'
const text6 = '(a) Whilst the Product Information and all other website, mobile site and mobile applications material are provided in good faith, by using this website, mobile site and mobile applications, You agree and acknowledge that BD Airways makes no representations, warranties, or claims as to the accuracy of the Product Information or any other material on this website, mobile site and mobile applications. Furthermore, You agree that the Product Information and website, mobile site and mobile applications material does not constitute any form of advice or recommendation to You. (b) BD Airways disclaims all implied warranties relating to Your use of this website, mobile site and mobile applications and the information, products, and services contained in this website, mobile site and mobile applications. To the maximum extent permissible under law, all information on this website, mobile site and mobile applications is provided without any warranty (either express or implied by law or otherwise) or implied term of any kind, including but not limited to any implied warranties or implied terms of satisfactory quality, fitness for a particular purpose, or non-infringement of third party rights.(c) By using this website, mobile site and mobile applications, You agree that BD Airways will not be liable to you for any direct, indirect, consequential, or any other loss arising from the use (or non-use) of the information, products, and services contained in this website, mobile site and mobile applications or from your access of other material via links from this website, mobile site and mobile applications. The exclusions and limitations contained in these Terms and Conditions apply to the maximum extent permitted by law.(d) BD Airways does not guarantee that use of this website, mobile site and mobile applications will be compatible with all hardware and software which may be used by visitors to the site. '

const TermText = () => {
    
    return(
        <ScrollView>
          <View style={style.cover}>
             <Text style ={style.Txt}>{text1}</Text>
             <Text style={style.Txt1}>{text2}</Text>
             <Text style={style.Txt}>{text3}</Text>
             <Text style={style.Txt1}>{text4}</Text>
             <Text style ={style.Txt}>{text5}</Text>
             <Text style={style.Txt1}>{text6}</Text>


          </View>

</ScrollView>

    )
}

const stack = createNativeStackNavigator()

export default function Terms() {
       
       return(
    <stack.Navigator>
        <stack.Screen name ="Terms & Conditions" component={TermText} options={{headershowm : false}} />
    </stack.Navigator>
       );
}
const style = StyleSheet.create({
    cover:{
        backgroundColor:'white',
        },
    Txt:{
        marginLeft:20,
     fontSize:20,
    },
    Txt1:{
       marginLeft:20 
    }



})