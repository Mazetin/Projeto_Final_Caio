import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Platform } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function EscolhaTipo() {
  const router = useRouter();

  const tipos = ["Liso", "Ondulado", "Cacheado", "Crespo"];

  return (
    <ScrollView style={styles.container}>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={22} color="#DCEAFF" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <View style={Platform.OS === "web" ? styles.webWrapper : styles.mobileWrapper}>

        <Image 
          source={require("../assets/cabelos.png")}
          style={Platform.OS === "web" ? styles.webImage : styles.image}
          resizeMode="contain"
        />

        <View style={styles.optionsContainer}>
          <Text style={styles.title}>Escolha seu tipo de cabelo</Text>

          {tipos.map((tipo) => (
            <TouchableOpacity
              key={tipo}
              style={styles.button}
              onPress={() => router.push(`/infoTipo?tipo=${tipo}`)}
            >
              <Text style={styles.buttonText}>{tipo}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B3B6F",
    padding: 20,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    width: 120,
    padding: 10,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "rgba(220,234,255,0.35)",
    marginBottom: 15,
    backgroundColor: "rgba(220,234,255,0.15)",
    backdropFilter: Platform.OS === "web" ? "blur(6px)" : undefined,
  },

  backText: {
    color: "#DCEAFF",
    fontSize: 17,
    marginLeft: 6,
    fontWeight: "500",
  },

  mobileWrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: "100%",
    height: 260,
    borderRadius: 20,
  },

  webWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    maxWidth: 1100,
    marginLeft: "auto",
    marginRight: "auto",
    gap: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  webImage: {
    width: 800,
    height: 500,
    borderRadius: 20,
    marginTop: 80,
    marginLeft: -100,
  },

  optionsContainer: {
    flex: 1,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#DCEAFF",
    textAlign: "center",
    marginBottom: 20,
    marginTop: Platform.OS === "web" ? 70 : 5,
  },

  button: {
    padding: Platform.OS === "web" ? 30 : 15,
    borderRadius: 18,
    marginBottom: 18,
    borderWidth: 2,
    borderColor: "rgba(220,234,255,0.4)",
    backgroundColor: "rgba(220,234,255,0.15)",
    backdropFilter: Platform.OS === "web" ? "blur(8px)" : undefined,
  },

  buttonText: {
    color: "#DCEAFF",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
});
