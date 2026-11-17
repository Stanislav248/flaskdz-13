import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../components/theme";

export default function Tip() {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.content}>
        <Text style={styles.title}>Порада дня</Text>
        <View style={styles.card}>
          <Text style={styles.bulb}>💡</Text>
          <Text style={styles.text}>
            Пий склянку води перед кожним прийомом їжі — так легше контролювати апетит.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  content: { paddingHorizontal: 22, paddingTop: 36 },
  title: { fontSize: 26, fontWeight: "800", color: colors.text, textAlign: "center", marginBottom: 24 },
  card: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  bulb: { fontSize: 44, marginBottom: 12 },
  text: { fontSize: 16, lineHeight: 23, color: colors.brownText, fontWeight: "600", textAlign: "center" },
});
