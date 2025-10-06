import { useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AgradecimentoParticipacao() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace("/(tabs)/coleta-satisfacao"); // redireciona para coleta
        }, 3000); // 3 segundos

        return () => clearTimeout(timer);
    }, []);


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Obrigado por participar da pesquisa!</Text>
            <Text style={[styles.text, { marginTop: 20 }]}>
                Aguardamos você no próximo ano!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2e2576", // fundo roxo
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        alignItems: "center",
        fontFamily: "Averia Libre",
    },
    text: {
        color: "#fff",
        fontSize: 48,
        textAlign: "center",
    },
});
