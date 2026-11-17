import React from "react";
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

// Іконки кладіть у assets/icons/ (PNG, ~96x96 px, прозорий фон)
const ICONS: Record<string, ImageSourcePropType> = {
  plan: require("../assets/icons/plan.png"),
  menu: require("../assets/icons/menu.png"),
  diary: require("../assets/icons/diary.png"),
  tip: require("../assets/icons/tip.png"),
};

// Підписи під іконками (ключ = name екрана в Tabs)
const LABELS: Record<string, string> = {
  plan: "План\nхарчування",
  menu: "Меню",
  diary: "Щоденник\nкалорій",
  tip: "Порада\nдня",
};

export default function BottomNavigate({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, { paddingBottom: Math.max(insets.bottom, 8) }]}>
      <View style={styles.bar}>
        {state.routes.map((route, index) => {
          if (route.name === "index") return null; // екран привітання без вкладки
          const focused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!focused && !event.defaultPrevented) {
              navigation.navigate(route.name as never);
            }
          };

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              style={styles.item}
              accessibilityRole="button"
              accessibilityState={focused ? { selected: true } : {}}
              accessibilityLabel={LABELS[route.name]?.replace("\n", " ")}
            >
              <Image
                source={ICONS[route.name]}
                style={[styles.icon, { opacity: focused ? 1 : 0.55 }]}
                resizeMode="contain"
              />
              <Text style={[styles.label, focused && styles.labelActive]}>
                {LABELS[route.name]}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#F6EBDD", // фон екрана
    paddingHorizontal: 10,
    paddingTop: 6,
  },
  bar: {
    flexDirection: "row",
    backgroundColor: "#FBF7F1", // світліша плашка
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 6,
    justifyContent: "space-between",
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  icon: {
    width: 34,
    height: 34,
    marginBottom: 4,
  },
  label: {
    fontSize: 11,
    lineHeight: 14,
    textAlign: "center",
    color: "#2B2118",
  },
  labelActive: {
    fontWeight: "700",
    color: "#A9794F",
  },
});
