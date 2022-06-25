import React from "react";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-native";
import {registerBecas, getBecas, updateBecas} from "../../Funciones/BackBecas.js";
import { ScrollView, View, Text, StyleSheet, Alert } from "react-native";
import { Card, Title, Paragraph, Button, TextInput } from "react-native-paper";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Headernav from "../navbar/navbar.js";


function FormularioBecas(){

    const [nombre, setNombre] = useState('');
    const [pais, setPais] = useState('');
    const [porcentaje, setPorcentaje] = useState('');
    const [universidad, setUniversidad] = useState('');
    const [requerimientos, setRequerimientos] = useState('');

    const navigation = useNavigation();

    const registerBeca = () => {
        fetch("http://192.168.10.44:80/api/beca/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({nombre: nombre, pais: pais, porcentaje: porcentaje, universidad: universidad, requerimientos: requerimientos})
        })
        .then(response => response.json())
        .then(data => {
            navigation.navigate('Inicio', {data: data});
        })
        .catch(error => Alert.alert("Error: ", error));

    }
    

    return(
        <View style={styles.container}>
            <Headernav/>
            <Text style={styles.textStyle}>
                Registrar Becas
            </Text>
            <TextInput
                label="Nombre"
                value={nombre}
                mode = "outlined"

                onChangeText={text => setNombre(text)}
            />
            <TextInput
                label="Porcentaje"
                value={porcentaje}
                mode = "outlined"

                onChangeText={text => setPorcentaje(text)}
            />
            <TextInput
                label="Pais"
                value={pais}
                mode = "outlined"

                onChangeText={text => setPais(text)}
            />
            <TextInput
                label="Universidad"
                value={universidad}
                mode = "outlined"
                onChangeText={text => setUniversidad(text)}
            />
            <TextInput
                label="Requerimientos"
                value={requerimientos}
                mode = "outlined"
                onChangeText={text => setRequerimientos(text)}
            />
            <Button
            style = {styles.botonStyle}
            icon = "book-plus"
            mode = "contained"
            onPress = {() => registerBeca()}
            >
                Agregar Beca
            </Button>

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
        margin:10,
        padding:10,
        backgroundColor:'#6804ec',

    },

  })

export default FormularioBecas;