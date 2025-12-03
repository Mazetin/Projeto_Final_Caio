import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Platform, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const THEME = {
  bg: "#0F2A4A",
  accent: "#DCEAFF",
};

export default function QuedaCapilar() {
   const router = useRouter();
  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: THEME.bg }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <TouchableOpacity
          style={styles.voltarBtn}
          onPress={() => router.back()}
        >
          <Text style={styles.voltarText}>← Voltar para o início</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Queda Capilar</Text>

        <Text style={styles.lead}>
          A queda de cabelo faz parte do ciclo natural dos fios — um adulto saudável
          perde de 50 a 100 fios por dia. Quando passar disso, investigue causas.
        </Text>

        <Section title="1. Estresse">
          <Text style={styles.text}>
            O estresse aumenta o cortisol, que pode enfraquecer a fibra capilar e acelerar a queda.
            Técnicas de gestão de estresse e sono adequado ajudam.
          </Text>
        </Section>

        <Section title="2. Problemas de saúde">
          <Text style={styles.text}>• Puerpério (pós-gestação)</Text>
          <Text style={styles.text}>• Pós-cirurgias</Text>
          <Text style={styles.text}>• Febres fortes</Text>
          <Text style={styles.text}>• Obesidade, tabagismo, álcool e sedentarismo</Text>
          <Text style={styles.text}>• Hipotireoidismo e alterações hormonais</Text>
        </Section>

        <Section title="3. Alimentação">
          <Text style={styles.text}>
            Nutrição adequada é essencial — vitaminas, proteínas e hidratação fazem diferença.
          </Text>
          <Text style={styles.text}>• Beba bastante água</Text>
          <Text style={styles.text}>• Consuma frutas e verduras</Text>
          <Text style={styles.text}>• Inclua proteínas de qualidade</Text>
        </Section>

        <Section title="4. Higiene">
          <Text style={styles.text}>Lavar corretamente e esfoliar o couro cabeludo evita obstruções e queda.</Text>
          <Text style={styles.text}>• Não durma com o cabelo molhado</Text>
        </Section>

        <Section title="5. Genética">
          <Text style={styles.text}>
            A alopecia androgenética é hereditária — procurar um dermatologista acelera o diagnóstico.
          </Text>
        </Section>

        <Section title="6. Químicas e calor">
          <Text style={styles.text}>
            Excesso de descoloração, alisamento e calor aumentam a quebra — prefira tratamentos suaves.
          </Text>
        </Section>

        <Section title="Como melhorar">
          <Text style={styles.text}>• Evite água muito quente</Text>
          <Text style={styles.text}>• Massageie o couro cabeludo regularmente</Text>
          <Text style={styles.text}>• Use tônicos fortalecedores quando indicado</Text>
          <Text style={styles.text}>• Consulte um dermatologista caso a queda seja intensa</Text>
        </Section>

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function Section({ title, children }) {
  return (
    <View style={{ width: "100%", maxWidth: 900, marginBottom: 14 }}>
      <Text style={styles.subTitle}>{title}</Text>
      <View style={styles.sectionContent}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: {
    padding: Platform.OS === "web" ? 36 : 20,
    alignItems: "center",
  },
  title: {
    fontSize: Platform.OS === "web" ? 34 : 28,
    fontWeight: "800",
    color: THEME.accent,
    textAlign: "center",
    marginBottom: 8,
  },
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
  lead: {
    color: "rgba(220,234,255,0.9)",
    fontSize: 16,
    marginBottom: 18,
    textAlign: "center",
    maxWidth: 900,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: THEME.accent,
    marginBottom: 8,
  },
  sectionContent: {
    backgroundColor: "rgba(255,255,255,0.03)",
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(220,234,255,0.05)",
  },
  text: {
    fontSize: 16,
    color: "rgba(220,234,255,0.95)",
    marginBottom: 8,
    lineHeight: 22,
  },
});
