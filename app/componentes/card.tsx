import React, { useContext } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { cardStyles as baseStyles } from "../estilos/cardStyles";
import { ThemeContext } from "../themeContext";

export default function DetalleProducto({ route, navigation }: any) {
  const { producto } = route.params;
  const { theme } = useContext(ThemeContext);
  const { width } = useWindowDimensions();
  const isDark = theme === "dark";

  const isSmallScreen = width < 768;

  const dynamicStyles: any = {
    mainCard: {
      flexDirection: isSmallScreen ? "column" : "row",
      marginHorizontal: isSmallScreen ? 10 : 20,
      borderRadius: 4,
      overflow: "hidden",
      padding: isSmallScreen ? 15 : 20,
      gap: isSmallScreen ? 15 : 20,
    },
    leftColumn: {
      flex: isSmallScreen ? 1 : 1,
      alignSelf: isSmallScreen ? "center" : "flex-start",
      width: isSmallScreen ? "90%" : undefined,
    },
    rightColumn: {
      flex: isSmallScreen ? 1 : 1.5,
      justifyContent: "flex-start",
    },
    title: {
      fontSize: isSmallScreen ? 20 : 28,
      fontWeight: "300",
      marginBottom: 10,
      marginTop: isSmallScreen ? 15 : 0,
    },
    priceSection: {
      flexDirection: isSmallScreen ? "column" : "row",
      alignItems: isSmallScreen ? "stretch" : "center",
      justifyContent: isSmallScreen ? "flex-start" : "space-between",
      backgroundColor: "rgba(0,0,0,0.4)",
      padding: 8,
      borderRadius: 2,
      marginBottom: 15,
      gap: isSmallScreen ? 8 : 0,
    },
    buyButton: {
      flex: isSmallScreen ? 1 : undefined,
      height: isSmallScreen ? undefined : 32,
    },
    backButton: {
      padding: 15,
      paddingHorizontal: 20,
    },
    container: {
      backgroundColor: isDark ? "#1b2838" : "#f0f2f5",
    },
    text: {
      color: isDark ? "#fff" : "#000",
    },
    contentBox: {
      backgroundColor: isDark ? "rgba(0, 0, 0, 0.2)" : "#fff",
    },
    subtitle: {
      color: isDark ? "#acb2b8" : "#444",
    },
  };

  return (
    <ScrollView style={[baseStyles.container, dynamicStyles.container]}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={dynamicStyles.backButton}
      >
        <Text style={baseStyles.backText}>← VOLVER A LA TIENDA</Text>
      </Pressable>

      <View style={[dynamicStyles.mainCard, dynamicStyles.contentBox]}>
        {/* LADO IZQUIERDO: Imagen Grande */}
        <View style={dynamicStyles.leftColumn}>
          <Image
            source={{ uri: producto.imagen }}
            style={baseStyles.bigImage}
            resizeMode="cover"
          />
        </View>

        {/* LADO DERECHO: Info, Precio y Descripción */}
        <View style={dynamicStyles.rightColumn}>
          <Text style={[dynamicStyles.title, dynamicStyles.text]}>
            {producto.titulo}
          </Text>

          <View style={baseStyles.genreBadge}>
            <Text style={baseStyles.genreText}>
              {producto.genero.toUpperCase()}
            </Text>
          </View>

          <View style={dynamicStyles.priceSection}>
            <Text style={[baseStyles.priceValue, dynamicStyles.text]}>
              {producto.precio === "Gratis"
                ? "Free to Play"
                : `$${producto.precio} USD`}
            </Text>
            <Pressable style={[baseStyles.buyButton, dynamicStyles.buyButton]}>
              <Text style={baseStyles.buyButtonText}>Añadir al carro</Text>
            </Pressable>
          </View>

          <View style={baseStyles.separator} />

          <Text style={baseStyles.descTitle}>ACERCA DE ESTE JUEGO</Text>
          <Text style={[baseStyles.descText, dynamicStyles.subtitle]}>
            {producto.descripcion ||
              "No hay información adicional disponible para este título."}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
