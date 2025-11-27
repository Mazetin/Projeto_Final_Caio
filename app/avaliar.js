import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, ImageBackground, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import foto from "../assets/img.jpg";

import background from "../assets/painel.jpg";

export default function Avaliacao() {
    const [rating, setRating] = useState(0);
    const [comentario, setComentario] = useState("");

    return (
        <SafeAreaView style={styles.safe}>
            <ImageBackground source={background} style={styles.background} resizeMode="cover">
                <View style={styles.container}>
                    <Text style={styles.title}>Me Avalie</Text>
                    <View>
                        <Image source={foto} style={styles.foto} />
                    </View>
                    <View style={styles.starsRow}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <TouchableOpacity key={star} onPress={() => setRating(star)}>
                                <Text style={[styles.star, rating >= star && styles.starSelected]}>
                                    ★
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <Text style={styles.label}>Deixe um comentário:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Escreva aqui sua opinião..."
                        placeholderTextColor="#ddd"
                        multiline
                        value={comentario}
                        onChangeText={setComentario}
                    />

                    <TouchableOpacity style={styles.button} onPress={() => alert("Avaliação enviada!")}>
                        <Text style={styles.buttonText}>Enviar Avaliação</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            <StatusBar style="light" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
    },
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems: "center",
    },
    title: {
        fontSize: Platform.OS === "web" ? 45 : 32,
        color: "white",
        fontWeight: "bold",
        marginBottom: 25,
        textTransform: "uppercase",
    },
    starsRow: {
        flexDirection: "row",
        marginBottom: 25,
    },
    star: {
        fontSize: Platform.OS === "web" ? 60 : 45,
        color: "#888",
        marginHorizontal: 8,
    },
    starSelected: {
        color: "gold",
    },
    label: {
        fontSize: Platform.OS === "web" ? 28 : 20,
        color: "white",
        marginBottom: 5,
        marginTop: Platform.OS === "web" ? 0 : -20,
        
    },
    input: {
        width: "85%",
        maxWidth: 700,
        height: 140,
        backgroundColor: "rgba(255,255,255,0.2)",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 12,
        padding: 12,
        fontSize: Platform.OS === "web" ? 22 : 16,
        color: "white",
        marginBottom: 25,
    },
    button: {
        backgroundColor: "rgba(255,255,255,0.3)",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "white",
    },
    buttonText: {
        fontSize: Platform.OS === "web" ? 26 : 18,
        color: "white",
        fontWeight: "bold",
    },
    foto: {
        width: Platform.OS === "web" ? 300 : 130,
        height: Platform.OS === "web" ? 300 : 130,
        borderRadius: Platform.OS === "web" ? 200 : 100,
        marginBottom: 5,
        marginLeft: Platform.OS === "web" ? 0 : 0,
        marginTop: Platform.OS === "web" ? 20 : 0,
    },
});
