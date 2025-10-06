import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { VacinaItem } from "../(tabs)/vacina-confirmacao";

export default function NovaPesquisa() {
    const { id, title, date, icon } = useLocalSearchParams();
    const [nome, setNome] = useState(title);
    const [data, setData] = useState(date);
    const [imagem, setImagem] = useState(icon);
    const [submitted, setSubmitted] = useState(false);

    const handleAtualizar = () => {
        setSubmitted(true);

        if (nome && data) {
            // lógica para atualizar
        }
    };

    const handleRemover = () => {
        Alert.alert(
            "Confirmar exclusão",
            `Deseja realmente excluir a vacina ${nome}?`,
            [
                { text: "Cancelar", style: "cancel" },
                { text: "Excluir", style: "destructive", onPress: () => console.log(`${nome} excluída`) }
            ]
        );
    };
    const handleRemover = () => {
        // Aqui você pode colocar a lógica para remover do backend ou state
        Alert.alert(
            "Remover Pesquisa",
            "Tem certeza que deseja remover esta pesquisa?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Remover",
                    style: "destructive",
                    onPress: () => {
                        console.log("Item removido:", { id, nome, data, imagem });
                        // Limpar campos como exemplo
                        setNome("");
                        setData("");
                        setImagem("");
                    },
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                {/* Nome */}
                <Text style={styles.label}>Nome</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome da pesquisa"
                    value={nome}
                    onChangeText={setNome}
                />
                {submitted && !nome && (
                    <Text style={styles.error}>Preencha o nome da pesquisa</Text>
                )}

                {/* Data */}
                <Text style={[styles.label, { marginTop: 15 }]}>Data</Text>
                <View style={styles.dateRow}>
                    <TextInput
                        style={[styles.input, { flex: 1 }]}
                        placeholder="DD/MM/AAAA"
                        value={data}
                        onChangeText={setData}
                    />
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="calendar-outline" size={22} color="#333" />
                    </TouchableOpacity>
                </View>
                {submitted && !data && (
                    <Text style={styles.error}>Preencha a data</Text>
                )}

                {/* Imagem */}
                <Text style={[styles.label, { marginTop: 15 }]}>Imagem</Text>
                <TouchableOpacity
                    style={styles.imagePicker}
                    onPress={() => console.log("Abrir câmera/galeria")}
                >
                    <Text style={{ color: "#666" }}>Câmera/Galeria de imagens</Text>
                </TouchableOpacity>

                {/* Botões Atualizar e Lixeira */}
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.button} onPress={handleAtualizar}>
                        <Text style={styles.buttonText}>CADASTRAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.deleteButton} onPress={handleRemover}>
                        <Ionicons name="trash-outline" size={40} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2e2576",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    form: {
        width: "70%",
    },
    label: {
        color: "#fff",
        fontWeight: "bold",
        marginBottom: 5,
        fontSize: 18,
        fontFamily: "Averia Libre",
    },
    input: {
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        height: 40,
        fontFamily: "Averia Libre",
    },
    error: {
        color: "red",
        fontSize: 12,
        marginTop: 3,
        fontFamily: "Averia Libre",
    },
    dateRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconButton: {
        backgroundColor: "#fff",
        padding: 8,
        marginLeft: 5,
    },
    imagePicker: {
        backgroundColor: "#fff",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        fontFamily: "Averia Libre",
    },
    button: {
        backgroundColor: "#2eb86c",
        marginTop: 15,
        paddingVertical: 15,
        alignItems: "center",
    },
    buttonRow: {
        flexDirection: "row",
        marginTop: 15,
        alignItems: "center",
    },
    button: {
        flex: 1,
        backgroundColor: "#2eb86c",
        paddingVertical: 15,
        alignItems: "center",
    },
    deleteButton: {
        marginLeft: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        fontFamily: "Averia Libre",
    },
});
