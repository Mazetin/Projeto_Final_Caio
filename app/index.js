import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";

const THEME = {
  bg: "#0F2A4A",
  surface: "rgba(220,234,255,0.06)",
  accent: "#DCEAFF",
  muted: "#8AA4C1",
};

export default function Page() {
  const router = useRouter();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: THEME.bg }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={THEME.bg}
        translucent={false}
      />
      <View style={styles.main}>
        <Text style={styles.title}>Men Hair</Text>
        <Text style={styles.subtitle}>
          Cuidar do cabelo não é só para mulheres. Cuide você também.
        </Text>

        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.primaryButton}
          onPress={() => router.push("/escolhaTipo")}
        >
          <Text style={styles.primaryButtonText}>Descobrir meu tipo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === "web" ? 36 : 20,
  },
  main: {
    flex: 1,
    maxWidth: 980,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    color: THEME.accent,
    fontSize: Platform.OS === "web" ? 48 : 36,
    fontWeight: "800",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    color: THEME.muted,
    fontSize: Platform.OS === "web" ? 20 : 16,
    textAlign: "center",
    marginBottom: 32,
    width: Platform.OS === "web" ? "64%" : "90%",
    lineHeight: 24,
  },
  primaryButton: {
    backgroundColor: THEME.accent,
    paddingVertical: Platform.OS === "web" ? 18 : 14,
    paddingHorizontal: 28,
    borderRadius: 14,
    width: Platform.OS === "web" ? "45%" : "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  primaryButtonText: {
    color: THEME.bg,
    fontSize: Platform.OS === "web" ? 18 : 16,
    fontWeight: "700",
  },
  footer: {
    marginTop: 30,
    alignItems: "center",
  },
  small: {
    color: "rgba(220,234,255,0.6)",
    fontSize: 13,
  },
});
