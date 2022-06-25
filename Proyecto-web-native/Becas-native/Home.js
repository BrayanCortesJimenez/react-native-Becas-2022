import {Text, View, StyleSheet, ScrollView} from 'react-native'
import BecasNacionales from './components/Nacionales/BecasNacionales';
import Headernav from './components/navbar/navbar';
import BecasInternacionales from './components/Internacionales/BecasInternacionales';
import Abstract from './components/Noticias/Abstract';
import FormularioBecas from './components/Becas/FormBeca';
import 'react-native-gesture-handler';
import PopularCarousel from './components/Popular/popular';

export default function Inicio(){

    return(
        <>
        <ScrollView>
            <Headernav/>
            <View style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>Becas mas populares</Text>
                    <PopularCarousel/>
                </View>
                <View>
                    <Text style={styles.textStyleNoticias}>Noticias</Text>
                    <Abstract/>
                </View>
            </View>
        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#1E2029',
    },
    textStyle:{
      color:"white",
      fontSize: 20,
    },
    textStyleNoticias:{
      color:"white",
      fontSize: 40,
      marginBottom:10,
      marginTop:40,
      marginLeft:20,
      marginRight:40,

    },
    seperator: {
      width: 600,
      height: 30,
      backgroundColor: 'black',
    },
    fab: {
      position:'absolute',
      margin:10,
      right:0,
      bottom:0, 
    }
  })