import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking, Switch, Platform, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import background from "../assets/painel.jpg";

export default function Config() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const handleSupport = () => {
    Linking.openURL("mailto:suportemeuapp@gmail.com?subject=Ajuda%20no%20App");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ImageBackground source={background} style={styles.background} resizeMode="cover">
        <View style={styles.container}>

          <Text style={styles.title}>Configurações</Text>

          <TouchableOpacity style={styles.option} onPress={handleSupport}>
            <Text style={styles.optionText}>Entrar em contato com o suporte</Text>
          </TouchableOpacity>

          <View style={styles.themeRow}>
            <Text style={styles.optionText}>Modo Escuro</Text>
            <Switch value={darkTheme} onValueChange={toggleTheme} />
          </View>

          <View
            style={[
              styles.preview,
              { backgroundColor: darkTheme ? "#222" : "#eee" },
            ]}
          >
            <Text style={{ color: darkTheme ? "#fff" : "#000", fontSize: 18 }}>
              Pré-visualização do Tema
            </Text>
          </View>

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
  title: {
    fontSize: Platform.OS === "web" ? 45 : 32,
    color: "white",
    fontWeight: "bold",
    marginBottom: 30,
    textTransform: "uppercase",
  },
  option: {
    width: "85%",
    maxWidth: 700,
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  optionText: {
    color: "white",
    fontSize: Platform.OS === "web" ? 28 : 20,
  },
  themeRow: {
    width: "85%",
    maxWidth: 700,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    marginBottom: 25,
  },
  preview: {
    width: "85%",
    maxWidth: 700,
    padding: 25,
    borderRadius: 10,
    alignItems: "center",
  },
});
