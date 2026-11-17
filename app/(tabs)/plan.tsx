import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FoodRow from "../../components/FoodRow";
import { colors } from "../../components/theme";

const GOALS = [
  { label: "Втратити вагу", selected: true },
  { label: "Підтримувати вагу", selected: false },
  { label: "Набирати м’язову вагу", selected: false },
];

export default function Plan() {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Яка твоя ціль?</Text>

        {GOALS.map((g) => (
          <View key={g.label} style={styles.goal}>
            <View style={[styles.radio, g.selected && styles.radioOn]}>
              {g.selected && <View style={styles.radioDot} />}
            </View>
            <Text style={styles.goalText}>{g.label}</Text>
          </View>
        ))}

        <Text style={styles.subtitle}>Складений план харчування</Text>

        <FoodRow emoji="🍳" title="Сніданок" />
        <FoodRow emoji="🐟" title="Обід" />
        <FoodRow emoji="🥦" title="Вечеря" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  content: { paddingHorizontal: 22, paddingTop: 36, paddingBottom: 20 },
  title: { fontSize: 26, fontWeight: "800", color: colors.text, textAlign: "center", marginBottom: 24 },
  goal: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 10,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  radioOn: { borderColor: colors.blue },
  radioDot: { width: 12, height: 12, borderRadius: 6, backgroundColor: colors.blue },
  goalText: { flex: 1, fontSize: 16, fontWeight: "700", color: colors.brownText },
  subtitle: { fontSize: 15, fontWeight: "700", color: colors.text, marginTop: 14, marginBottom: 10 },
});
