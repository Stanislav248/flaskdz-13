import { Platform, StyleSheet, View, useWindowDimensions } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const PHONE_W = 390;
const PHONE_H = 844;

export default function RootLayout() {
  const { height } = useWindowDimensions();

  const app = (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );

  // У браузері показуємо застосунок у "рамці телефона"
  if (Platform.OS === "web") {
    const h = Math.min(PHONE_H, height);
    return (
      <View style={styles.page}>
        <View
          style={[
            styles.phone,
            { height: h, borderRadius: height >= PHONE_H ? 28 : 0 },
          ]}
        >
          {app}
        </View>
      </View>
    );
  }

  return app;
}

const styles = StyleSheet.create({
  page: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#E7E2DA" },
  phone: { width: PHONE_W, overflow: "hidden", backgroundColor: "#F6EBDD" },
});
