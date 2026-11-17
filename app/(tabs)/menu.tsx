import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../components/theme";

const PRODUCTS = [
  { name: "Вівсянка", kcal: 150, checked: true },
  { name: "Яйця варені (2 шт)", kcal: 140, checked: true },
  { name: "Куряче філе (100 г)", kcal: 165, checked: false },
  { name: "Гречка (150 г)", kcal: 180, checked: false },
  { name: "Овочевий салат", kcal: 80, checked: true },
  { name: "Йогурт натуральний", kcal: 140, checked: true },
  { name: "Горіхи (30 г)", kcal: 180, checked: false },
];

export default function Menu() {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{"Обери продукти для\nсвого раціону"}</Text>

        {PRODUCTS.map((p) => (
          <View key={p.name} style={styles.row}>
            <View style={[styles.box, p.checked && styles.boxOn]}>
              {p.checked && <Text style={styles.check}>✓</Text>}
            </View>
            <Text style={styles.name}>{p.name}</Text>
            <Text style={styles.kcal}>{p.kcal} ккал</Text>
          </View>
        ))}

        <View style={styles.total}>
          <Text style={styles.totalLabel}>Разом:</Text>
          <Text style={styles.totalValue}>455/2000 ккал</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  content: { paddingHorizontal: 14, paddingTop: 36, paddingBottom: 20 },
  title: { fontSize: 20, fontWeight: "800", color: colors.text, textAlign: "center", lineHeight: 27, marginBottom: 20 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
    marginBottom: 7,
  },
  box: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  boxOn: { backgroundColor: colors.green, borderColor: colors.green },
  check: { color: "#fff", fontSize: 14, fontWeight: "800", marginTop: -1 },
  name: { flex: 1, fontSize: 12, fontWeight: "700", color: colors.brownText },
  kcal: { fontSize: 13, color: colors.text },
  total: { flexDirection: "row", justifyContent: "space-between", marginTop: 10, paddingHorizontal: 4 },
  totalLabel: { fontSize: 15, fontWeight: "800", color: colors.text },
  totalValue: { fontSize: 15, fontWeight: "800", color: colors.text },
});
