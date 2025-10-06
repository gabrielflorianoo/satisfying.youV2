import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import PieChart from "react-native-pie-chart";

export default function Relatorio() {
    const params = useLocalSearchParams();
    const { id = "", title = "Sem título", date = "", icon = "📊" } = params;

    const rawSeries = [15, 10, 5, 20, 30]; // Dados fictícios
    const rawLabels = ["Excelente", "Bom", "Regular", "Ruim", "Péssimo"]; // Labels fictícias
    const colors = ["#2ecc71", "#a3d977", "#f1c40f", "#f39c12", "#e74c3c"]; // Cores para as fatias
    const series = rawSeries.map((value, i) => ({ value, color: colors[i % colors.length], label: rawLabels[i] }));

    const total = series.reduce((s, item) => s + item.value, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Relatório sobre a ação: {title}
                {id ? ` (ID: ${id})` : ""}
                {date ? ` - Data: ${date}` : ""}
            </Text>

            <View style={styles.chartWrapper}>
                <PieChart widthAndHeight={250} series={series} />
            </View>

            {/* Legenda */}
            <View style={styles.legendContainer}>
                {series.map((slice, i) => {
                    const percent = ((slice.value / total) * 100).toFixed(1);
                    return (
                        <View key={i} style={styles.legendItem}>
                            <View style={[styles.swatch, { backgroundColor: slice.color }]} />
                            <Text style={styles.legendText}>{`${slice.label}: ${slice.value} — ${percent}%`}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2d2174",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
    },
    chartWrapper: {
        alignItems: "center",
        justifyContent: "center",
    },
    legendContainer: {
        marginTop: 20,
        width: "100%",
        paddingHorizontal: 10,
    },
    legendItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    swatch: {
        width: 18,
        height: 18,
        borderRadius: 4,
        marginRight: 10,
    },
    legendText: {
        color: "#fff",
        fontSize: 14,
    },
});
