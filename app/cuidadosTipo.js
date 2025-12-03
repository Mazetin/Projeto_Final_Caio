import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

const THEME = {
  bg: "#0A1F44",
  card: "rgba(220,234,255,0.06)",
  accent: "#DCEAFF",
};

export default function CuidadosTipo() {
  const { tipo } = useLocalSearchParams();
  const router = useRouter();

  const cuidados = {
    Liso: [
      "Cabelos lisos tendem a acumular oleosidade na raiz, então a limpeza regular é essencial.",
      "Use shampoo para controle de oleosidade (evite hidratação na raiz).",
      "Condicionador somente no comprimento e pontas.",
      "Evite água muito quente — ativa a produção de óleo.",
      "Finalizadores leves como mousse ou spray texturizador ajudam a manter o volume.",
      "Evite cremes pesados que deixam o fio grudado.",
    ],
    Ondulado: [
      "Ondulados precisam de hidratação equilibrada para reduzir frizz.",
      "Use leave-in com os fios úmidos para selar a cutícula.",
      "Não esfregue com toalha — use microfibra ou camiseta.",
      "Finalize com creme leve, gel ou ativadores de ondas.",
      "Evite secador direto; se usar, coloque difusor.",
      "Umectação leve nas pontas ajuda a controlar o frizz.",
    ],
    Cacheado: [
      "Cacheados são naturalmente mais secos — hidrate 1 a 2 vezes por semana.",
      "Use produtos com óleos vegetais e manteigas nutritivas.",
      "Finalize com fitagem amassando de baixo pra cima.",
      "Use leave-in e creme/gel com o cabelo ainda bem úmido.",
      "Prefira secar com difusor no ar morno.",
      "Apare as pontas a cada 3 meses para manter o formato.",
    ],
    Crespo: [
      "Crespos são os mais secos, então precisam de nutrição profunda constante.",
      "Faça umectação semanal com óleos naturais.",
      "Use produtos ricos em manteiga de karité, cacau e óleos vegetais.",
      "Evite lavar todos os dias — prefira co-wash.",
      "Evite penteados apertados que causam tração e quebra.",
      "Durma com touca ou fronha de cetim para reduzir fricção.",
    ],
  };

  const lista = cuidados[tipo] || ["Tipo desconhecido. Volte e selecione novamente."];

  console.log(tipo)

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: THEME.bg }]}>
      <ScrollView
        contentContainerStyle={{
          padding: Platform.OS === "web" ? 36 : 20,
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={styles.voltarBtn} onPress={() => router.replace('/infoTipo?tipo=' + encodeURIComponent(tipo))}>
          <Text style={styles.voltarText}>← Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Como cuidar do cabelo {tipo || ""}</Text>

        <View style={styles.card}>
          {lista.map((cuidado, index) => (
            <View key={index} style={styles.row}>
              <View style={styles.bullet} />
              <Text style={styles.item}>{cuidado}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push("/quedaCapilar")}
        >
          <Text style={styles.secondaryButtonText}>Problemas com queda capilar?</Text>
        </TouchableOpacity>

        <View style={{ height: 48 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  voltarBtn: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(220,234,255,0.04)",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(220,234,255,0.12)",
    marginBottom: 18,
  },
  voltarText: { color: THEME.accent, fontWeight: "700" },
  title: {
    color: "#FFFFFF",
    fontSize: Platform.OS === "web" ? 34 : 26,
    fontWeight: "800",
    marginBottom: 18,
    textAlign: "center",
  },
  card: {
    width: "100%",
    maxWidth: 900,
    backgroundColor: THEME.card,
    padding: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.04)",
    marginBottom: 18,
  },
  row: { flexDirection: "row", marginBottom: 12, alignItems: "flex-start" },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 6,
    backgroundColor: THEME.accent,
    marginTop: 6,
    marginRight: 12,
  },
  item: {
    flex: 1,
    color: "rgba(234,242,255,0.95)",
    fontSize: Platform.OS === "web" ? 18 : 16,
    lineHeight: Platform.OS === "web" ? 26 : 22,
  },
  secondaryButton: {
    width: "100%",
    maxWidth: 900,
    backgroundColor: "rgba(220,234,255,0.12)",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(220,234,255,0.12)",
  },
  secondaryButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },
});
