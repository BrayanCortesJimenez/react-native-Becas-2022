import GetAllBecas from '../../Funciones/BackBecas';
import {useState, useEffect} from 'react';
import CardShowBecas from '../Card/CardShowBeca';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Headernav from '../navbar/navbar';

function BecasInternacionales() {
  
  const[interBecas, setinterBecas] = useState([]);

  useEffect( () => {
      GetAllBecas().then(setinterBecas);
      // eslint-disable-next-line
    }, []);
  

    // eslint-disable-next-line
  const listItem = interBecas.map(beca =>{
    
    if (beca.pais !== "Colombia" && beca.pais !== "colombia" )
      return(
      <CardShowBecas key={beca.id} beca={beca} />
      
      )
      // eslint-disable-next-line
  });

  return (
    <>
    <ScrollView>
      <View style={styles.container}>
        <Headernav/>
        <View >
          <Text style={styles.textStyle}>BecasInternacionales</Text>
          <View >
              {listItem}
              <View style={styles.seperator}/>
          </View>
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
  seperator: {
    width: 600,
    height: 30,
    backgroundColor: 'black',
  },
})

  
  export default BecasInternacionales;