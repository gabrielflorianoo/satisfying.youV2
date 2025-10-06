import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CardPesquisa from '../../components/cards/CardPesquisa'; // Caminho ajustado
import { getPesquisas } from "../services/pesquisas";
import { useEffect, useState } from "react";

export default function HomeScreen() {
    const { deletedId } = useLocalSearchParams();
    const router = useRouter();
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(getPesquisas());
    }, []);

    // Se deletedId mudar, atualiza a lista removendo o item deletado
    useEffect(() => {
        if (deletedId) {
            // Remove o item deletado da lista
            setData((d) => d.filter((i) => i.id !== deletedId));

            // Limpa o parâmetro deletedId para evitar loops
            router.replace({ pathname: "/(tabs)/home" });
        }
    }, [deletedId]);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.card} // Card com estilo básico
            onPress={() => router.push({
                pathname: "/(tabs)/acoes-pesquisa",
                params: { id: item.id, title: item.title, date: item.date, icon: item.icon }
            })}
        >
            <CardPesquisa
                nome={item.title}
                data={item.date}
                imagem={item.imagem}
                icon={item.icon}
            />
        </TouchableOpacity>
    );

    const handleSearch = (text) => {
        const filtered = getPesquisas().filter(p =>
            p.title.toLowerCase().includes(text.toLowerCase())
        );
        setData(filtered);
    }

    return (
        <View style={styles.container}>

            {/* Barra de busca */}
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#666" style={{ marginRight: 8 }} />
                <TextInput placeholder="Insira o termo de busca..." style={styles.searchInput} onChangeText={handleSearch} />
            </View>

            {/* Carrossel */}
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 10 }}
                style={{ marginTop: 20 }}
            />

            {/* Botão */}
            <TouchableOpacity
                style={[styles.button, styles.buttonLeft]} // Adicionei um estilo para margem
                onPress={() => router.push("/(tabs)/nova-pesquisa")}
            >
                <Text style={styles.buttonText}>NOVA PESQUISA</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2e2576",
        padding: 25,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        margin: 15,
        paddingHorizontal: 10,
        height: 40,
    },
    searchInput: {
        flex: 1,
    },
    card: {
        alignItems: "center",
        justifyContent: "center",
        marginRight: 15,
        marginBottom: 20, // Adicionando espaço entre os cards
    },
    button: {
        backgroundColor: "#2eb86c",
        marginHorizontal: 15,
        marginTop: 30,
        padding: 15,
        alignItems: "center",
        fontFamily: "Averia Libre",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});
