import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";


export default function Coleta() {
    const { id, title, date, icon } = useLocalSearchParams();
    const [selected, setSelected] = useState(null);

    const opcoes = [
        { id: 1, label: "Péssimo", icon: "sad-outline", color: "red" },
        { id: 2, label: "Ruim", icon: "sad", color: "orangered" },
        { id: 3, label: "Neutro", icon: "remove-circle-outline", color: "gold" },
        { id: 4, label: "Bom", icon: "happy-outline", color: "limegreen" },
        { id: 5, label: "Excelente", icon: "happy", color: "green" },
    ];

    const handleSelect = (id) => {
        setSelected(id);
        // lógica para salvar no backend, enviar via API, etc
        console.log("Resposta selecionada:", opcoes.find(o => o.id === id).label);

        // Vai para a tela de agradecimento
        router.push("/(tabs)/agradecimentos");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.question}>O que você achou do {title}?</Text>

            <View style={styles.optionsContainer}>
                {opcoes.map((opcao) => (
                    <TouchableOpacity
                        key={opcao.id}
                        style={styles.option}
                        onPress={() => handleSelect(opcao.id)}
                    >
                        <Ionicons
                            name={opcao.icon}
                            size={120}
                            color={selected === opcao.id ? opcao.color : "#aaa"}
                        />
                        <Text
                            style={[
                                styles.optionLabel,
                                { color: selected === opcao.id ? opcao.color : "#fff" },
                            ]}
                        >
                            {opcao.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2c1f5c", // fundo roxo
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    question: {
        fontSize: 50,
        color: "#fff",
        marginBottom: 40,
        textAlign: "center",
        fontFamily: "Averia Libre",
    },
    optionsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    option: {
        alignItems: "center",
        marginHorizontal: 10,
    },
    optionLabel: {
        marginTop: 8,
        fontSize: 14,
        color: "#fff",
        textAlign: "center",
        fontFamily: "Averia Libre",
    },
});
