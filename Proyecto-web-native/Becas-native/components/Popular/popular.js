import React from "react";
import {useState, useEffect} from 'react';
import GetAllBecas from "../../Funciones/BackBecas";
import CardShowBecas from "../Card/CardShowBeca";
import { ScrollView, View, StyleSheet, Text, Alert } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import Grado from "../../Assets/img/Grado.jpg"
import { NavigationContainer, useNavigation } from '@react-navigation/native';

function PopularCarousel(){

  const[AllBecas, setAllBecas] = useState([]);

  useEffect( () => {
      GetAllBecas().then(setAllBecas);
    }, []);
    

  const Becapopular1 = AllBecas.slice((AllBecas.length)-1,AllBecas.length).map(beca =>{
    return(
      <CardShowBecas key={beca.id} beca={beca} />
    );
  
  

  });
  const Becapopular2 = AllBecas.slice((AllBecas.length)-2,AllBecas.length-1).map(beca =>{
    return(
      <CardShowBecas key={beca.id} beca={beca} />
    );
  
  

  });
  const Becapopular3 = AllBecas.slice((AllBecas.length)-3,AllBecas.length-2).map(beca =>{
    return(
      <CardShowBecas key={beca.id} beca={beca} />
    );
  
  

  });
  

    return(
      <View style={styles.container} >
        <Card style={styles.container}>
          {Becapopular1}
          </Card>
        <Card style={styles.container}>
          {Becapopular2}
        </Card>
        <Card style={styles.container}>
          {Becapopular3}
        </Card>
      </View>
    );
}


const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#1E2029',
  },
  seperator: {
    width: 600,
    height: 50,
    backgroundColor: 'black',
  },
  carder:{
      margin:10,
      padding:10,
      backgroundColor:'#6804ec',

  },
  fontColor:{
      color:"white",
  }
})
export default PopularCarousel;