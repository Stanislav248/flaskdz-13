import { StyleSheet, Text, View } from "react-native";
import { colors } from "./theme";

// Рядок "іконка + назва + (ккал)". Іконка поки емодзі — за бажанням замініть на <Image />.
export default function FoodRow({
  emoji,
  title,
  kcal,
}: {
  emoji: string;
  title: string;
  kcal?: string;
}) {
  return (
    <View style={styles.row}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={[styles.title, kcal ? styles.titleLeft : null]}>{title}</Text>
      {kcal ? <Text style={styles.kcal}>{kcal}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginBottom: 8,
  },
  emoji: { fontSize: 26, width: 40 },
  title: { flex: 1, fontSize: 16, fontWeight: "700", color: colors.brownText, textAlign: "center" },
  titleLeft: { textAlign: "left", marginLeft: 6 },
  kcal: { fontSize: 15, color: colors.text },
});
