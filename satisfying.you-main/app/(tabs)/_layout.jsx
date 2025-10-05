import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Stack } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.drawer}>
            {/* Email do usuário */}
            <View style={styles.header}>
                <Text style={styles.email}>usuario@dominio.com</Text>
                <View style={styles.divider} />
            </View>

            {/* Item de navegação */}
            <DrawerItem
                label="Pesquisas"
                labelStyle={styles.itemLabel}
                icon={({ color, size }) => (
                    <Ionicons name="document-text-outline" size={size} color="#fff" />
                )}
                onPress={() => props.navigation.navigate("home")}
            />

            {/* Spacer */}
            <View style={{ flex: 1 }} />

            {/* Botão de sair */}
            <DrawerItem
                label="Sair"
                labelStyle={styles.itemLabel}
                icon={({ color, size }) => (
                    <Ionicons name="log-out-outline" size={size} color="#fff" />
                )}
                onPress={() => console.log("Sair")}
            />
        </DrawerContentScrollView>
    );
}

export default function Layout() {
    return (
        <Stack screenOptions={{ headerShown: true }}>
            <Stack.Screen name="home" options={{ title: "Home" }} />
            <Stack.Screen name="nova-pesquisa" options={{ title: "Nova Pesquisa" }} />
            <Stack.Screen name="modificar-pesquisa" options={{ title: "Modificar Pesquisa" }} />
            <Stack.Screen name="acoes-pesquisa" options={{ title: "Acoes da Pesquisa" }} />
            <Stack.Screen name="coleta-satisfacao" options={{ title: "Coleta de Satisfação" }} />
            <Stack.Screen name="agradecimentos" options={{ title: "Agradecimentos" }} />
        </Stack>
    );
}

const styles = StyleSheet.create({
    drawer: {
        flex: 1,
        backgroundColor: "#2d2174",
    },
    header: {
        padding: 16,
    },
    email: {
        color: "#fff",
        fontWeight: "bold",
        marginBottom: 10,
    },
    divider: {
        height: 1,
        backgroundColor: "#fff",
        opacity: 0.6,
    },
    itemLabel: {
        color: "#fff",
        fontSize: 16,
        marginLeft: -10,
        fontFamily: "Averia Libre",
    },
});
