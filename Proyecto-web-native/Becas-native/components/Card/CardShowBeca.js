import React from "react";
import { ScrollView, View, StyleSheet, Text, Alert } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import Grado from "../../Assets/img/Grado.jpg"
import { NavigationContainer, useNavigation } from '@react-navigation/native';

function CardShowBecas({beca}){

    const navigation = useNavigation();

    const DeleteHandle = (beca) => {

      console.log(beca)

      fetch(`http://192.168.10.44:80/api/beca/${beca}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
          }
      })
      .then(data => {
         navigation.navigate('Inicio');
      })
      .catch(error => Alert.alert("Error: ", error));
  }


    

    return( 
          <Card style={styles.carder}>
            <Card.Content>
              <Title style={styles.fontColor}>{beca.nombre}</Title>
              <Card.Cover source={Grado} />
              <Paragraph style={styles.fontColor}>Universidad:{beca.universidad}</Paragraph>
              <Paragraph style={styles.fontColor}>Pais:{beca.pais}</Paragraph>
              <Paragraph style={styles.fontColor}>Porcentaje:{beca.porcentaje}%</Paragraph>
              <Paragraph style={styles.fontColor}>Requerimientos:{beca.requerimientos}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => navigation.navigate('DetalleBecas', {beca})}><Text style={styles.fontColor}>Detalles</Text></Button>
              <Button onPress={() => navigation.navigate('FormEditar', {beca})}><Text style={styles.fontColor}>Actualizar</Text></Button>
              <Button onPress={() => DeleteHandle(beca.id)}><Text style={styles.fontColor}>Eliminar</Text></Button>
            </Card.Actions>
          </Card>
    );
}

const styles = StyleSheet.create({

  seperator: {
    width: 600,
    height: 50,
    backgroundColor: 'black',
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
  fontColor:{
      color:"white",
  }
})

export default CardShowBecas;