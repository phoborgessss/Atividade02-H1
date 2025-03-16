import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const CalculadoraIMC = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso) || 0;
    const alturaNum = parseFloat(altura) || 1;

    if (pesoNum === 0 || alturaNum === 0) {
      Alert.alert("Erro", "Por favor, insira valores válidos para peso e altura.");
      return;
    }

    const IMC = pesoNum / ((alturaNum / 100) * (alturaNum / 100));
    let resultado;

    if (IMC < 18.5) resultado = "Abaixo do Peso";
    else if (IMC < 25) resultado = "Peso Normal";
    else if (IMC < 30) resultado = "Sobrepeso";
    else if (IMC < 35) resultado = "Obesidade Grau 1";
    else if (IMC < 40) resultado = "Obesidade Grau 2";
    else resultado = "Obesidade Grau 3";

    Alert.alert("Resultado do IMC", `Seu IMC é ${IMC.toFixed(2)} - ${resultado}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <TextInput
        placeholder="Digite sua Altura em Centímetros"
        keyboardType="numeric"
        value={altura}
        onChangeText={(text) => setAltura(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Digite seu Peso em Kg"
        keyboardType="numeric"
        value={peso}
        onChangeText={(text) => setPeso(text)}
        style={styles.input}
      />
      <Button title="Calcular IMC" onPress={calcularIMC} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default CalculadoraIMC;