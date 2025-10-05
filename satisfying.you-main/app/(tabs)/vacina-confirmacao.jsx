import { Alert, TouchableOpacity, Text } from 'react-native';

export default function VacinaItem({ nome }) {
    const confirmarExclusao = () => {
        Alert.alert(
            "Confirmar exclusão",
            `Deseja realmente excluir a vacina ${nome}?`,
            [
                { text: "Cancelar", style: "cancel" },
                { text: "Excluir", style: "destructive", onPress: () => console.log(`${nome} excluída`) }
            ]
        );
    };

    return (
        <TouchableOpacity
            style={{
                backgroundColor: "#f44336",
                padding: 10,
                marginVertical: 5,
                borderRadius: 5
            }}
            onPress={confirmarExclusao}
        >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Excluir {nome}</Text>
        </TouchableOpacity>
    );
}