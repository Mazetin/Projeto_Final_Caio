import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

import liso from "../assets/liso.png";
import ondulado from "../assets/ondulado.png";
import cacheado from "../assets/cacheado.png";
import crespo from "../assets/crespo.png";
import painel from "../assets/painel.jpg";

export default function InfoTipo() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const tipoRaw = params?.tipo || "";
  const tipoKey = tipoRaw.toLowerCase();

  const data = {
    liso: {
      title: "Cabelo Liso",
      image: liso,
      paragraphs: [
        "O cabelo liso é caracterizado pela ausência de ondas ou cachos, com fios que crescem em linha reta.",
        "Tipo 1A: liso absoluto, fino e bem oleoso. Desafio: controlar oleosidade e evitar que o cabelo fique pesado.",
        "Tipo 1B: liso com mais corpo e volume, textura média. É o liso mais comum entre os homens.",
        "Tipo 1C: liso mais grosso, resistente e com leve volume na raiz."
      ]
    },

    ondulado: {
      title: "Cabelo Ondulado",
      image: ondulado,
      paragraphs: [
        "O cabelo ondulado forma ondas em “S” e fica entre o liso e o cacheado. É versátil, mas tende a frizz.",
        "Tipo 2A: ondas leves e discretas; mais fácil de alisar.",
        "Tipo 2B: ondas mais definidas e marcadas, com mais volume e tendência ao frizz.",
        "Tipo 2C: ondas densas desde a raiz, quase formando cachos; maior volume e frizz."
      ]
    },

    cacheado: {
      title: "Cabelo Cacheado",
      image: cacheado,
      paragraphs: [
        "O cabelo cacheado tem cachos bem definidos em espiral e é naturalmente mais seco.",
        "Tipo 3A: cachos largos, definidos e com brilho.",
        "Tipo 3B: cachos mais apertados, volumosos e com mais tendência ao frizz.",
        "Tipo 3C: cachos pequenos e densos; requer hidratação profunda."
      ]
    },

    crespo: {
      title: "Cabelo Crespo",
      image: crespo,
      paragraphs: [
        "O cabelo crespo é o mais frágil e seco; a estrutura em espiral dificulta a distribuição da oleosidade.",
        "Tipo 4A: cachos em mola apertada, mais definição que outros crespos.",
        "Tipo 4B: padrão em Z (zigue-zague), muita textura e pouca definição.",
        "Tipo 4C: padrão em Z muito fechado, encolhimento grande e alta fragilidade."
      ]
    }
  };

  const info = data[tipoKey];

  return (
    <ImageBackground
      source={painel}
      style={styles.bg}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.card}>
          {info ? (
            <>
              <Image source={info.image} style={styles.image} resizeMode="cover" />
              <Text style={styles.title}>{info.title}</Text>

              {info.paragraphs.map((p, i) => (
                <Text key={i} style={styles.paragraph}>
                  {p}
                </Text>
              ))}

              <TouchableOpacity
                style={styles.primaryButton}
                onPress={() => router.push(`/cuidadosTipo?tipo=${tipoRaw}`)}
              >
                <Text style={styles.primaryButtonText}>Como cuidar?</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.title}>Tipo não encontrado</Text>
              <Text style={styles.paragraph}>Parece que o tipo enviado não é válido.</Text>

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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  scroll: {
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 16,
  },

  card: {
    width: "100%",
    maxWidth: 880,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: "rgba(220,234,255,0.08)",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: 240,
    borderRadius: 12,
    marginBottom: 14,
  },

  title: {
    fontSize: 28,
    color: "#DCEAFF",
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
  },

  paragraph: {
    fontSize: 16,
    color: "#E6F2FF",
    lineHeight: 22,
    marginBottom: 10,
    textAlign: "left",
    width: "100%",
  },

  primaryButton: {
    width: "100%",
    backgroundColor: "rgba(220,234,255,0.22)",
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "rgba(220,234,255,0.28)",
    alignItems: "center",
  },

  primaryButtonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "700",
  },

});
