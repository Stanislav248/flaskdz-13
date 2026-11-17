import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FoodRow from "../../components/FoodRow";
import { colors } from "../../components/theme";

export default function Diary() {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{"Скільки ти\nсьогодні вже з’їв?"}</Text>

        <FoodRow emoji="🍳" title="Сніданок" kcal="320 ккал" />
        <FoodRow emoji="🐟" title="Обід" kcal="540 ккал" />
        <FoodRow emoji="🥦" title="Вечеря" kcal="400 ккал" />
        <FoodRow emoji="🍌" title="Перекус" kcal="150 ккал" />

        <View style={styles.progress}>
          <Text style={styles.chart}>📊</Text>
          <View style={styles.progressText}>
            <Text style={styles.progressTitle}>Прогрес калорій</Text>
            <Text style={styles.progressValue}>1410  /  1800 ккал</Text>
          </View>
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>+  Додати їжу</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  content: { paddingHorizontal: 16, paddingTop: 36, paddingBottom: 20 },
  title: { fontSize: 26, fontWeight: "800", color: colors.text, textAlign: "center", lineHeight: 34, marginBottom: 20 },
  progress: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginVertical: 14 },
  chart: { fontSize: 44, marginRight: 14 },
  progressText: { alignItems: "center" },
  progressTitle: { fontSize: 15, fontWeight: "800", color: colors.text, marginBottom: 6 },
  progressValue: { fontSize: 18, fontWeight: "700", color: colors.text },
  button: { backgroundColor: colors.brown, borderRadius: 30, paddingVertical: 14, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "700" },
});
