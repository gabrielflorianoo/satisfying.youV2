import { Stack } from 'expo-router';

export default function AuthLayout() {
    return (
        <Stack screenOptions={{
            headerStyle: { backgroundColor: "#2d2174" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
            headerTitleStyle: { fontSize: 28, fontFamily: "Averia Libre" }
        }}>
            <Stack.Screen
                name="login"
                options={{
                    headerShown: false, // login sem header
                }}
            />
            <Stack.Screen
                name="criar-conta"
                options={{
                    title: "Nova Conta",
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="recuperar-senha"
                options={{
                    title: "Recuperar Senha",
                    headerShown: true,
                }}
            />
        </Stack>
    );
    return (
        <Stack screenOptions={{
            headerStyle: { backgroundColor: "#2d2174" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold", fontSize: 28, fontFamily: "Averia Libre" },
        }}>
            <Stack.Screen
                name="login"
                options={{ headerShown: false }} // Tela de login sem header
            />
            <Stack.Screen
                name="criar-conta"
                options={{ title: "Nova Conta", headerShown: true }}
            />
            <Stack.Screen
                name="recuperar-senha"
                options={{ title: "Recuperar Senha", headerShown: true }}
            />
        </Stack>
    );
}
