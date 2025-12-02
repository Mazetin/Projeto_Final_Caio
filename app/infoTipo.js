import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  Platform,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

import liso from "../assets/liso.png";
import ondulado from "../assets/ondulado.png";
import cacheado from "../assets/cacheado.png";
import crespo from "../assets/crespo.png";
import painel from "../assets/painel.jpg";

const THEME = {
  bg: "#0F2A4A",
  card: "rgba(255,255,255,0.04)",
  accent: "#DCEAFF",
  primaryBtn: "rgba(220,234,255,0.22)",
};

export default function InfoTipo() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const tipoRaw = params?.tipo || "";
  const tipoKey = String(tipoRaw).toLowerCase();

  const data = {
    liso: {
      title: "Cabelo Liso",
      image: liso,
      paragraphs: [
        "O cabelo liso é caracterizado pela ausência de ondas ou cachos, com fios que crescem em linha reta.",
        "Tipo 1A: liso absoluto, fino e bem oleoso. Desafio: controlar oleosidade e evitar que o cabelo fique pesado.",
        "Tipo 1B: liso com mais corpo e volume, textura média. É o liso mais comum entre os homens.",
        "Tipo 1C: liso mais grosso, resistente e com leve volume na raiz.",
      ],
    },

    ondulado: {
      title: "Cabelo Ondulado",
      image: ondulado,
      paragraphs: [
        "O cabelo ondulado forma ondas em “S” e fica entre o liso e o cacheado. É versátil, mas tende a frizz.",
        "Tipo 2A: ondas leves e discretas; mais fácil de alisar.",
        "Tipo 2B: ondas mais definidas e marcadas, com mais volume e tendência ao frizz.",
        "Tipo 2C: ondas densas desde a raiz, quase formando cachos; maior volume e frizz.",
      ],
    },

    cacheado: {
      title: "Cabelo Cacheado",
      image: cacheado,
      paragraphs: [
        "O cabelo cacheado tem cachos bem definidos em espiral e é naturalmente mais seco.",
        "Tipo 3A: cachos largos, definidos e com brilho.",
        "Tipo 3B: cachos mais apertados, volumosos e com mais tendência ao frizz.",
        "Tipo 3C: cachos pequenos e densos; requer hidratação profunda.",
      ],
    },

    crespo: {
      title: "Cabelo Crespo",
      image: crespo,
      paragraphs: [
        "O cabelo crespo é o mais frágil e seco; a estrutura em espiral dificulta a distribuição da oleosidade.",
        "Tipo 4A: cachos em mola apertada, mais definição que outros crespos.",
        "Tipo 4B: padrão em Z (zigue-zague), muita textura e pouca definição.",
        "Tipo 4C: padrão em Z muito fechado, encolhimento grande e alta fragilidade.",
      ],
    },
  };

  const info = data[tipoKey];

  return (
    <ImageBackground source={painel} style={styles.bg} resizeMode="cover">
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.card}>
            {info ? (
              <>
                <Image source={info.image} style={styles.image} resizeMode="cover" />
                <Text style={styles.title}>{info.title}</Text>

                <View style={styles.textBlock}>
                  {info.paragraphs.map((p, i) => (
                    <Text key={i} style={styles.paragraph}>
                      {p}
                    </Text>
                  ))}
                </View>

                <TouchableOpacity
                  style={styles.primaryButton}
                  onPress={() => router.push(`/cuidadosTipo?tipo=${tipoRaw}`)}
                  accessibilityRole="button"
                >
                  <Text style={styles.primaryButtonText}>Como cuidar?</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.title}>Tipo não encontrado</Text>
                <Text style={styles.paragraph}>
                  Parece que o tipo enviado não é válido. Volte e tente novamente.
                </Text>
                <TouchableOpacity
                  style={styles.primaryButton}
                  onPress={() => router.push("/escolhaTipo")}
                >
                  <Text style={styles.primaryButtonText}>Voltar para escolher</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, width: "100%", height: "100%" },
  safe: { flex: 1 },
  scroll: {
    alignItems: "center",
    paddingHorizontal: Platform.OS === "web" ? 40 : 16,
    paddingVertical: 18,
  },
  card: {
    width: "100%",
    maxWidth: 880,
    backgroundColor: THEME.card,
    borderRadius: 16,
    padding: Platform.OS === "web" ? 90 : 30,
    borderWidth: 1,
    borderColor: "rgba(220,234,255,0.06)",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
    marginTop: Platform.OS === "web" ? 90 : 0,
  },
  image: {
    width: Platform.OS === "web" ? 250 : 140,
    height: Platform.OS === "web" ? 250 : 140,
    borderRadius: Platform.OS === "web" ? 1000 : 100,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "rgba(220,234,255,0.08)",
  },
  title: {
    fontSize: Platform.OS === "web" ? 40 : 20,
    color: THEME.accent,
    fontWeight: "800",
    marginBottom: 12,
    textAlign: "center",
  },
  textBlock: { width: "100%" },
  paragraph: {
    fontSize: Platform.OS === "web" ? 20 : 15,
    color: "rgba(230,242,255,0.95)",
    lineHeight: 22,
    marginBottom: 10,
  },
  primaryButton: {
    marginTop: 12,
    width: "100%",
    backgroundColor: THEME.primaryBtn,
    paddingVertical: Platform.OS === "web" ? 20 : 12,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(220,234,255,0.12)",
    
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: Platform.OS === "web" ? 20 : 16,
  },
});
