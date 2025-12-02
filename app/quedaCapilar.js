import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function QuedaCapilar() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Queda Capilar</Text>

      <Text style={styles.text}>
        A queda de cabelo faz parte do ciclo natural dos fios — um adulto saudável
        perde de 50 a 100 fios por dia. Porém, quando a queda é maior que isso,
        pode indicar problemas como estresse, alimentação inadequada, fatores hormonais,
        genética ou até impactos ambientais como o aquecimento global.
      </Text>

      <Text style={styles.subTitle}>1. Estresse</Text>
      <Text style={styles.text}>
        O estresse aumenta o cortisol, um hormônio que desequilibra o metabolismo e
        reduz a absorção de nutrientes essenciais. Isso enfraquece a fibra capilar,
        aumenta a quebra e acelera a queda.
      </Text>

      <Text style={styles.subTitle}>2. Problemas de saúde</Text>
      <Text style={styles.text}>• Puerpério (pós-gestação)</Text>
      <Text style={styles.text}>• Pós-cirurgias</Text>
      <Text style={styles.text}>• Febres fortes</Text>
      <Text style={styles.text}>• Obesidade, tabagismo, álcool e sedentarismo</Text>
      <Text style={styles.text}>• Hipotireoidismo e alterações hormonais</Text>
      <Text style={styles.text}>
        Em muitos desses casos, o corpo prioriza funções vitais e enfraquece os fios.
      </Text>

      <Text style={styles.subTitle}>3. Alimentação Desregulada</Text>
      <Text style={styles.text}>
        A saúde do cabelo depende diretamente dos nutrientes que você consome. Dietas
        restritivas e falta de vitaminas reduzem o brilho, o crescimento e aumentam a queda.
      </Text>
      <Text style={styles.text}>• Beba bastante água</Text>
      <Text style={styles.text}>• Consuma frutas e verduras</Text>
      <Text style={styles.text}>• Inclua carboidratos bons e proteínas de qualidade</Text>

      <Text style={styles.subTitle}>4. Higiene inadequada</Text>
      <Text style={styles.text}>
        Lavar pouco ou lavar mal o cabelo pode entupir os folículos e aumentar a queda.
      </Text>
      <Text style={styles.text}>• Não durma com o cabelo molhado</Text>
      <Text style={styles.text}>• Mantenha esfoliação capilar em dia</Text>
      <Text style={styles.text}>
        A dermatite seborréica (caspa) também causa queda e precisa de tratamento.
      </Text>

      <Text style={styles.subTitle}>5. Fatores Genéticos</Text>
      <Text style={styles.text}>
        A alopecia androgenética (calvície) é hereditária e precisa de acompanhamento
        dermatológico. Quando identificada cedo, o tratamento impede a progressão.
      </Text>

      <Text style={styles.subTitle}>6. Químicas em excesso</Text>
      <Text style={styles.text}>
        Descoloração, alisamentos e tinturas fortes podem enfraquecer profundamente os fios,
        causando quebra e queda. Esses casos precisam de reconstrução capilar contínua.
      </Text>

      <Text style={styles.subTitle}>7. Aquecimento Global</Text>
      <Text style={styles.text}>
        Com o aumento das temperaturas, o couro cabeludo sofre ainda mais:
      </Text>

      <Text style={styles.text}>• Ressecamento extremo dos fios</Text>
      <Text style={styles.text}>• Aumento da oleosidade e suor</Text>
      <Text style={styles.text}>• Maior inflamação no couro cabeludo</Text>
      <Text style={styles.text}>• Mais caspa, coceira e dermatites</Text>
      <Text style={styles.text}>
        A radiação UV intensa enfraquece a raiz e aumenta o risco de queda e afinamento.
      </Text>

      <Text style={styles.subTitle}>Como melhorar:</Text>
      <Text style={styles.text}>• Evite lavar o cabelo com água muito quente</Text>
      <Text style={styles.text}>• Massageie o couro cabeludo regularmente</Text>
      <Text style={styles.text}>• Não prenda o cabelo com muita força</Text>
      <Text style={styles.text}>• Use tônicos capilares fortalecedores</Text>
      <Text style={styles.text}>• Procure um dermatologista se a queda for intensa</Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B3B6F",
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#DCEAFF",
    marginBottom: 20,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#DCEAFF",
    marginTop: 30,
    marginBottom: 5,
  },
  text: {
    fontSize: 18,
    color: "#DCEAFF",
    marginBottom: 10,
    lineHeight: 24,
  },
});
