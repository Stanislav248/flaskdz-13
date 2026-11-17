import { Tabs } from "expo-router";
import BottomNavigate from "../../components/BottomNavigate";

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <BottomNavigate {...props} />}
      screenOptions={{ headerShown: false }}
    >
      {/* index = екран привітання, у нижній панелі не показується */}
      <Tabs.Screen name="index" />
      <Tabs.Screen name="plan" />
      <Tabs.Screen name="menu" />
      <Tabs.Screen name="diary" />
      <Tabs.Screen name="tip" />
    </Tabs>
  );
}
