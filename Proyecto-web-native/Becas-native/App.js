import {Text, View, StyleSheet, ScrollView} from 'react-native'
import BecasNacionales from './components/Nacionales/BecasNacionales';
import Headernav from './components/navbar/navbar';
import BecasInternacionales from './components/Internacionales/BecasInternacionales';
import Abstract from './components/Noticias/Abstract';
import FormularioBecas from './components/Becas/FormBeca';
import {FAB} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Inicio from './Home';
import 'react-native-gesture-handler';
import VerDetalles from './components/VerDetalles/verDetalles';
import FormEditar from './components/Becas/FormEditar';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown:false}}>

      <Stack.Screen name= "Inicio" component= { Inicio}/>
      <Stack.Screen name= "BecasNacionales" component= {BecasNacionales}/>
      <Stack.Screen name= "BecasInternacionales" component= { BecasInternacionales}/>
      <Stack.Screen name= "FormBeca" component= { FormularioBecas }/>
      <Stack.Screen name= "DetalleBecas" component= { VerDetalles }/>
      <Stack.Screen name= "FormEditar" component= { FormEditar }/>
      
    </Stack.Navigator>
    </NavigationContainer>

  );
}


