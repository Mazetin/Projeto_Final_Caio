import { StatusBar } from "react-native-web";
import {Image, StyleSheet, Text, View, Platform, ImageBackground,} from "react-native";
import foto from "../assets/img.jpg";
import { SafeAreaView } from "react-native-safe-area-context";
import background from "../assets/painel.jpg";

export default function Page() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={background}style={styles.background}resizeMode="cover">
        <View style={styles.container}>
          <Text style={styles.title}>Sobre mim</Text>
          <View style={styles.main}>
            <View>
              <Image source={foto} style={styles.foto} />
            </View>
            <View>
              <Text style={styles.subtitle2}>
                <Text style={{ fontWeight: "bold" }}>Nome: </Text>Caio Mazeti
              </Text>
              <Text style={styles.subtitle}>
                <Text style={{ fontWeight: "bold" }}>Idade: </Text>16 anos
              </Text>
              <Text style={styles.subtitle}>
                <Text style={{ fontWeight: "bold" }}>RM: </Text>08299
              </Text>
              <Text style={styles.subtitle}>
                <Text style={{ fontWeight: "bold" }}>Curso: </Text>Técnico em
                Informática
              </Text>
              <Text style={styles.subtitle}>
                <Text style={{ fontWeight: "bold" }}>Escola: </Text>ETEC Milton
                Gazzetti
              </Text>
              {Platform.OS === "web" && (
                <Text style={styles.subtitle}>
                  <Text style={{ fontWeight: "bold" }}>Contato: </Text>
                  caio.camargo7@etec.sp.gov.br
                </Text>
              )}
            </View>
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "gray",
    alignItems: "center",
    padding: 24,
  },
  main: {
    flexDirection: Platform.OS === "web" ? "row" : "column",
    gap: Platform.OS === "web" ? 30 : 10,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 42,
    fontSize: Platform.OS === "web" ? 48 : 36,
    fontWeight: "bold",
    marginTop: Platform.OS === "web" ? 20 : 0,
    marginBottom: 20,
    textTransform: "uppercase",
    color: "white",
  },
  subtitle: {
    fontSize: Platform.OS === "web" ? 35 : 23,
    marginTop: Platform.OS === "web" ? 10 : 3,
    marginLeft: Platform.OS === "web" ? 0 : 15,
    color: "white",
  },
  subtitle2: {
    fontSize: Platform.OS === "web" ? 35 : 23,
    marginTop: Platform.OS === "web" ? 100 : 3,
    marginLeft: Platform.OS === "web" ? 0 : 15,
    color: "white",
  },
  foto: {
    width: Platform.OS === "web" ? 380 : 200,
    height: Platform.OS === "web" ? 380 : 200,
    borderRadius: 15,
    marginBottom: 5,
    marginLeft: Platform.OS === "web" ? 750 : 0,
    marginTop: Platform.OS === "web" ? 120 : 0,
  },

  background: {
    height: Platform.OS === "web" ? "100%" : "200%",
    width: "100%",
    flex: 1,
  },
});
