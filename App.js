import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ContadorDeLikes from './src/components/contadorLikes';
import ContadorDeDislikes from './src/components/contadorDislikes';
import CalculadoraIMC from './src/components/calculoIMC';



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Seja bem vindo</Text>
      <ContadorDeLikes />

      <ContadorDeDislikes />

      <CalculadoraIMC />

      <StatusBar style="auto" />

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
   fontSize:14,
   borderWidth:1,
   padding:10,
   marginBottom:10,
   marginTop:10,
   width:300

  },
});
