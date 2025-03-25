import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Insira algo:</Text>
      <TextInput style={styles.input} placeholder="Digite algo"/>
      <Button title="Enviar" color="#613659" />
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Salvar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 100,
        paddingHorizontal: 25,
        gap: 20,
        backgroundColor: "#D3BBDD",
    },
    titulo: {
        fontSize: 32,
        fontWeight: "800",
        textAlign: "center",
        color: "#613659",
    },
    texto: {
        fontSize: 20,
        textAlign: "center",
    },
    input: {
      border: "1px solid #613659",
      borderRadius: 8,
      textAlign: "center",
      height: 30
    },
    botao: {
      backgroundColor: "#BC96CA",
      padding: 10,
      borderRadius: 8,
      alignItems: "center",
  },
  textoBotao: {
      color: "white",
      fontSize: 20,
  },
});