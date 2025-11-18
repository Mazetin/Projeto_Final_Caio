import { StatusBar } from "react-native-web";
import { Image, StyleSheet, Text, View, Platform } from "react-native";
import foto from "../assets/img.jpg";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Sobre mim</Text>
        <View>
          <Image source={foto} style={styles.foto} />
        </View>
        <View></View>
        <Text style={styles.subtitle}>Detalhes estudantis</Text>
      </View>
    </View>
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
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 20,
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
  }
});
