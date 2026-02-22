import { useContext, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import DetalleProducto from "../componentes/card";
import { indexStyles as styles } from "../estilos/indexStyles";
import { getColumnsForWidth } from "../estilos/responsiveUtils";
import { useSearch } from "../hooks/barraBusqueda";
import { JUEGOS } from "../juegos";
import { ThemeContext } from "../themeContext";

const searchInputStyle: any = {
  fontSize: 14,
  paddingVertical: 5,
  outlineStyle: "none",
};

export default function Index() {
  const [productoSeleccionado, setProductoSeleccionado] = useState<any>(null);
  const { width } = useWindowDimensions();

  const numColumns = getColumnsForWidth(width);
  const cardWidth = (width - 60) / numColumns;

  const { searchQuery, setSearchQuery, filteredData } = useSearch(JUEGOS);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const dynamicStyles = {
    container: {
      backgroundColor: isDark ? "#121212" : "#fff",
    },
    text: {
      color: isDark ? "#fff" : "#000",
    },
    searchBar: {
      backgroundColor: isDark ? "#333" : "#f0f0f0",
      borderColor: isDark ? "#444" : "#ddd",
    },
    subtitle: {
      color: isDark ? "#aaa" : "#666",
    },
    imageBg: {
      backgroundColor: isDark ? "#222" : "#eee",
    },
  };

  if (productoSeleccionado) {
    return (
      <DetalleProducto
        route={{ params: { producto: productoSeleccionado } }}
        navigation={{ goBack: () => setProductoSeleccionado(null) }}
      />
    );
  }

  // Si el estado es null, mostramos la lista principal
  return (
    <FlatList
      style={dynamicStyles.container}
      data={filteredData}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      columnWrapperStyle={styles.row}
      ListHeaderComponent={
        <View style={styles.headerContainer}>
          <View style={[styles.searchBarContainer, dynamicStyles.searchBar]}>
            <TextInput
              style={[searchInputStyle, dynamicStyles.text]}
              placeholder="Buscar juegos o géneros..."
              placeholderTextColor="#999"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          <View style={styles.sectionHeader}>
            <View style={styles.titleIndicator} />
            <Text style={[styles.sectionTitle, dynamicStyles.text]}>
              {searchQuery
                ? `RESULTADOS (${filteredData.length})`
                : "POPULARES"}
            </Text>
          </View>
        </View>
      }
      renderItem={({ item }) => (
        <Pressable
          onPress={() => setProductoSeleccionado(item)}
          style={({ hovered, pressed }: any) => [
            styles.card,
            { width: cardWidth },
            (hovered || pressed) && styles.cardHover,
          ]}
        >
          <View style={[styles.imageContainer, dynamicStyles.imageBg]}>
            <Image
              source={{ uri: item.imagen }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.title, dynamicStyles.text]} numberOfLines={1}>
              {item.titulo.toUpperCase()}
            </Text>
            <Text style={[styles.subtitle, dynamicStyles.subtitle]}>
              {item.genero}
            </Text>
            <Text style={[styles.price, dynamicStyles.text]}>
              {item.precio === "Gratis" ? "GRATIS" : `$${item.precio}`}
            </Text>
          </View>
        </Pressable>
      )}
      contentContainerStyle={styles.listPadding}
      key={numColumns}
    />
  );
}
