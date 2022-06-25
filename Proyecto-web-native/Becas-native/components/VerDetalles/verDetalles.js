import React from "react";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-native";
import {registerBecas, getBecas, updateBecas} from "../../Funciones/BackBecas.js";
import { ScrollView, View, Text, StyleSheet, Alert } from "react-native";
import { Card, Title, Paragraph, Button, TextInput } from "react-native-paper";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Headernav from "../navbar/navbar.js";




function VerDetalles({route}){

    const BecaNueva = route.params;



    
    return(
        <View style={styles.container}>
            <Headernav/>
            <Text style={styles.textStyle}>
                Detalles Becas
            </Text>
        <Card style={styles.carder}>
            <Text style={styles.textStyle}>
               Nombre: {BecaNueva.beca.nombre}
            </Text>
            <Text style={styles.textStyle}>
               Porcentaje: {BecaNueva.beca.porcentaje}%
            </Text>
            <Text style={styles.textStyle}>
               Pais: {BecaNueva.beca.pais}
            </Text>
            <Text style={styles.textStyle}>
               Universidad: {BecaNueva.beca.universidad}
            </Text>
            <Text style={styles.textStyle}>
               Requerimientos: {BecaNueva.beca.requerimientos}
            </Text>
        </Card>

        </View>
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
      carder:{
        borderRadius: 10,
        marginRight: 20,
        marginLeft: 20,
        marginBottom:10,
        marginTop:10,
        padding:10,
        backgroundColor:'#6804ec',
  
      },
  
    })

export default VerDetalles;