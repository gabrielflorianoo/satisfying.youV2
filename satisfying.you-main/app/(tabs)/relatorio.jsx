import { useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get('window').width;

const mockReport = [
    {
        question: 'O que achou do evento?',
        answers: [
            { name: 'Ruim', count: 10, color: '#4f8ef7' },
            { name: 'Neutro', count: 20, color: '#4caf50' },
            { name: 'Bom', count: 30, color: '#f44336' },
        ],
    }
];

export default function AcoesPesquisa() {
    return (
        <ScrollView contentContainerStyle={{ padding: 16 }}>
            {mockReport.map((q, idx) => {
                const total = q.answers.reduce((s, a) => s + a.count, 0);
                const data = q.answers.map(a => ({
                    name: a.name,
                    population: a.count,
                    color: a.color,
                    legendFontColor: '#333',
                    legendFontSize: 12,
                }));

                const chartWidth = Math.min(screenWidth - 32, 420);

                return (
                    <View key={idx} style={{ marginBottom: 28 }}>
                        <Text style={styles.question}>{q.question}</Text>

                        <View style={styles.row}>
                            <PieChart
                                data={data}
                                width={chartWidth}
                                height={220}
                                chartConfig={{
                                    backgroundGradientFrom: '#fff',
                                    backgroundGradientTo: '#fff',
                                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                    labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
                                }}
                                accessor="population"
                                backgroundColor="transparent"
                                paddingLeft="15"
                                absolute
                            />

                            <View style={styles.legend}>
                                {q.answers.map((a, i) => (
                                    <View key={i} style={styles.legendItem}>
                                        <View style={[styles.colorBox, { backgroundColor: a.color }]} />
                                        <Text style={styles.legendText}>{`${a.name} — ${a.count}`}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </View>
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    question: { fontSize: 16, fontWeight: '600', marginBottom: 8 },
    row: { flexDirection: 'row', alignItems: 'center' },
    legend: { marginLeft: 12, flex: 1 },
    legendItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
    colorBox: { width: 14, height: 14, marginRight: 8, borderRadius: 2 },
    legendText: { fontSize: 13, color: '#222' },
});