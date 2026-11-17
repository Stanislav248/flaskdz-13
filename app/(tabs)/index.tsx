import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { colors } from "../../components/theme";

export default function Welcome() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.top}>
        <Text style={styles.title}>Вітаю, Олексію!</Text>
        <Pressable style={styles.button} onPress={() => router.push("/plan")}>
          <Text style={styles.buttonText}>Почати</Text>
        </Pressable>
      </View>
      {/* Замініть assets/images/hero.png ілюстрацією з авокадо */}
      <Image source={require("../../assets/images/hero.png")} style={styles.hero} resizeMode="contain" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  top: { alignItems: "center", marginTop: 70 },
  title: { fontSize: 26, fontWeight: "800", color: colors.text, marginBottom: 24 },
  button: { backgroundColor: colors.brown, paddingVertical: 12, paddingHorizontal: 54, borderRadius: 30 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  hero: { flex: 1, width: "100%", marginTop: 20, marginBottom: 10 },
});
