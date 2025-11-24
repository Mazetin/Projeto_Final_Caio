import { StatusBar } from "react-native-web";
import { Image, StyleSheet, Text, View, Platform, ImageBackground, } from "react-native";
import foto from "../assets/img.jpg";
import { SafeAreaView } from "react-native-safe-area-context";
import background from "../assets/painel.jpg";

export default function Page() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={background} style={styles.background} resize="center">
        <View style={styles.container}>
          <Text style={styles.title}>Sobre mim</Text>
          <View style={styles.main}>
            <View>
              <Image source={foto} style={styles.foto} />
        </View>
        <View>
          <Text style={styles.subtitle}>
          <Text style={{fontWeight: "bold"}}>Nome: </Text>Caio Mazeti</Text>
          <Text style={styles.subtitle}>
            <Text style={{fontWeight: "bold"}}>Idade: </Text>16 anos</Text>
            <Text style={styles.subtitle}>
            <Text style={{fontWeight: "bold"}}>RM: </Text>08299</Text>
          <Text style={styles.subtitle}>
            <Text style={{fontWeight: "bold"}}>Curso: </Text>Técnico em Informática</Text>
          <Text style={styles.subtitle}>
            <Text style={{fontWeight: "bold"}}>Escola: </Text>ETEC Milton Gazzetti</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
    </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    padding: 24,
  },
  main: {
    flexDirection: Platform.OS === "web" ? "row" : "column",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 42,
    fontSize: Platform.OS === "web" ? 48 : 36,
    fontWeight: Platform.OS === "web" ? "bold" : null,
    marginBottom: 20,
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  foto:{
    width: 200,
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  background:{
    height: "100%",
    width: "100%",
    flex: 1,
  }
});
