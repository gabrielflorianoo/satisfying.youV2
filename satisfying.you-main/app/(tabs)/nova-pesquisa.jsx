import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { addPesquisa } from "../services/pesquisas";
import { useRouter } from "expo-router";

export default function NovaPesquisa() {
    const [nome, setNome] = useState("");
    const [data, setData] = useState("");
    const [imagem, setImagem] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const router = useRouter();

    const handleCadastrar = () => {
        setSubmitted(true);

        if (nome && data) {
            addPesquisa({ title: nome, date: data, imagem: imagem != null ? imagem : "https://example.com/imagem4.jpg", icon: "calendar-outline" });

            // Volta para a tela inicial
            router.push("/(tabs)/home");
        }
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

                {/* Botão */}
                <TouchableOpacity style={styles.button} onPress={handleCadastrar}>
                    <Text style={styles.buttonText}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2e2576",
        padding: 20,
    },
    form: {
        marginTop: 20,
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
    },
    button: {
        backgroundColor: "#2eb86c",
        marginTop: 30,
        paddingVertical: 15,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        fontFamily: "Averia Libre",
    },
});
