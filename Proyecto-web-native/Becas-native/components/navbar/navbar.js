import React from "react";
import {Appbar} from 'react-native-paper'
import { StyleSheet , Touchable} from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


function Headernav(){

    const navigation = useNavigation();
  
    return (
      <Appbar.Header>
        <Appbar.Content title="Becas Colombia" style={{fontSize:5}} onPress={() => navigation.navigate('Inicio')}/>
        <Appbar.Content title= "Nacionales" onPress={() => navigation.navigate('BecasNacionales')}/>
        <Appbar.Content title= "Internacionales" onPress={() => navigation.navigate('BecasInternacionales')}/>
        <Appbar.Content title= "Registrar" onPress={() => navigation.navigate('FormBeca')}/>
      </Appbar.Header>
    );
  };

export default Headernav;
