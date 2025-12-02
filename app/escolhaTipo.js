// /escolhaTipo.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const THEME = {
  bg: "#0F2A4A",
  surface: "rgba(220,234,255,0.07)",
  accent: "#DCEAFF",
};

export default function EscolhaTipo() {
  const router = useRouter();
  const tipos = ["Liso", "Ondulado", "Cacheado", "Crespo"];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: THEME.bg }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          accessibilityLabel="Voltar"
        >
          <Ionicons name="arrow-back" size={20} color={THEME.accent} />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>

        <View style={styles.wrapper}>
          <Image
            source={require("../assets/cabelos.png")}
            style={styles.image}
            resizeMode="contain"
          />

          <View style={styles.optionsContainer}>
            <Text style={styles.title}>Escolha seu tipo de cabelo</Text>

            {tipos.map((tipo) => (
              <TouchableOpacity
                key={tipo}
                style={styles.optionButton}
                onPress={() => router.push(`/infoTipo?tipo=${tipo}`)}
                activeOpacity={0.85}
                accessibilityRole="button"
                accessibilityLabel={`Selecionar tipo ${tipo}`}
              >
                <Text style={styles.optionText}>{tipo}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: {
    padding: Platform.OS === "web" ? 40 : 20,
    alignItems: "center",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(220,234,255,0.18)",
    backgroundColor: "rgba(220,234,255,0.04)",
    alignSelf: "flex-start",
    marginBottom: 12,
  },
  backText: {
    color: THEME.accent,
    marginLeft: 8,
    fontWeight: "600",
  },
  wrapper: {
    width: "100%",
    maxWidth: 1100,
    flexDirection: Platform.OS === "web" ? "row" : "column",
    gap: Platform.OS === "web" ? 28 : 12,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: Platform.OS === "web" ? 700 : "100%",
    height: Platform.OS === "web" ? 600 : 240,
    borderRadius: 14,
    marginBottom: Platform.OS === "web" ? 0 : 20,
    marginTop: Platform.OS === "web" ? 50 : 0,
  },
  optionsContainer: {
    flex: 1,
  },
  title: {
    color: THEME.accent,
    fontSize: Platform.OS === "web" ? 30 : 22,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 18,
    marginTop: Platform.OS === "web" ? 50 : 0,
  },
  optionButton: {
    backgroundColor: THEME.surface,
    paddingVertical: Platform.OS === "web" ? 20 : 14,
    borderRadius: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "rgba(220,234,255,0.12)",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  optionText: {
    color: THEME.accent,
    fontSize: Platform.OS === "web" ? 18 : 16,
    fontWeight: "700",
  },
});
