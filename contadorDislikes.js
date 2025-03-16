import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ContadorDeDislikes = () => {
  const [dislikes, setDislikes] = useState(0); 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>dislikes: {dislikes}</Text>
      <TouchableOpacity style={styles.button} onPress={() => setDislikes(dislikes + 1)}>
        <Text style={styles.buttonText}>Curtir 👍</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#ff4081",
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ContadorDeDislikes;