import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ThemeContext } from "../themeContext"; // Ajusta la ruta si es necesario

export default function Amigos() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#121212" : "#fff" },
      ]}
    ></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
