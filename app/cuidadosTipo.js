import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Platform 
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

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
      "Evite cremes pesados que deixam o fio grudado."
    ],
    Ondulado: [
      "Ondulados precisam de hidratação equilibrada para reduzir frizz.",
      "Use leave-in com os fios úmidos para selar a cutícula.",
      "Não esfregue com toalha — use microfibra ou camiseta.",
      "Finalize com creme leve, gel ou ativadores de ondas.",
      "Evite secador direto; se usar, coloque difusor.",
      "Umectação leve nas pontas ajuda a controlar o frizz."
    ],
    Cacheado: [
      "Cacheados são naturalmente mais secos — hidrate 1 a 2 vezes por semana.",
      "Use produtos com óleos vegetais e manteigas nutritivas.",
      "Finalize com fitagem amassando de baixo pra cima.",
      "Use leave-in e creme/gel com o cabelo ainda bem úmido.",
      "Prefira secar com difusor no ar morno.",
      "Apare as pontas a cada 3 meses para manter o formato."
    ],
    Crespo: [
      "Crespos são os mais secos, então precisam de nutrição profunda constante.",
      "Faça umectação semanal com óleos naturais.",
      "Use produtos ricos em manteiga de karité, cacau e óleos vegetais.",
      "Evite lavar todos os dias — prefira co-wash.",
      "Evite penteados apertados que causam tração e quebra.",
      "Durma com touca ou fronha de cetim para reduzir fricção."
    ]
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        padding: Platform.OS === "web" ? 40 : 20,
        maxWidth: Platform.OS === "web" ? 900 : "100%",
        alignSelf: "center"
      }}
    >
      
      {/* Botão Voltar */}
      <TouchableOpacity style={styles.voltarBtn} onPress={() => router.back()}>
        <Text style={styles.voltarText}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Como cuidar do cabelo {tipo}</Text>

      {/* Card */}
      <View style={styles.card}>
        {cuidados[tipo].map((cuidado, index) => (
          <Text key={index} style={styles.item}>• {cuidado}</Text>
        ))}
      </View>

      {/* Botão */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/quedaCapilar")}
      >
        <Text style={styles.buttonText}>Problemas com queda capilar?</Text>
      </TouchableOpacity>

      <View style={{ height: 60 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A1F44",
  },

  voltarBtn: {
    backgroundColor: "rgba(220, 234, 255, 0.2)",
    paddingVertical: Platform.OS === "web" ? 14 : 10,
    paddingHorizontal: Platform.OS === "web" ? 28 : 20,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#DCEAFF",
    marginBottom: 25,
    alignSelf: "flex-start",
  },
  voltarText: {
    color: "#DCEAFF",
    fontSize: Platform.OS === "web" ? 22 : 18,
    fontWeight: "bold",
  },

  title: {
    fontSize: Platform.OS === "web" ? 40 : 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "rgba(220, 234, 255, 0.15)",
    padding: Platform.OS === "web" ? 28 : 18,
    borderRadius: 18,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },

  item: {
    fontSize: Platform.OS === "web" ? 22 : 18,
    color: "#EAF2FF",
    marginBottom: 14,
    lineHeight: Platform.OS === "web" ? 32 : 26,
  },

  button: {
    backgroundColor: "rgba(220, 234, 255, 0.35)",
    padding: Platform.OS === "web" ? 22 : 16,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#DCEAFF",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: Platform.OS === "web" ? 22 : 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
