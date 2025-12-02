import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Men Hair</Text>
        <Text style={styles.subtitle}>Cuidar do cabelo não é só para mulheres, cuide você também do seu!</Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push("/escolhaTipo")}
        >
          <Text style={styles.buttonText}>Descobrir meu tipo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B3B6F", // fundo azul moderno
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 900,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#DCEAFF",
    textAlign: "center",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 20,
    color: "#8AA4C1",
    textAlign: "center",
    marginBottom: 40,
    width: "90%",
  },
  button: {
    backgroundColor: "#DCEAFF",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15,
    width: "75%",
    alignItems: "center",
  },
  buttonText: {
    color: "#1B3B6F",
    fontSize: 20,
    fontWeight: "bold",
  },
});
