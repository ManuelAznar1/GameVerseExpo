import React, { useContext, useState } from "react";
import {
  FlatList,
  Pressable,
  Switch,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { settingsStyles as styles } from "../estilos/settingsStyles";
import { ThemeContext } from "../themeContext";

export default function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { width } = useWindowDimensions();

  const isSmallScreen = width < 480;
  const responsivePadding = isSmallScreen ? 15 : 20;
  const responsiveFontSize = isSmallScreen ? 14 : 16;

  const [mostrandoSelectorDeTema, setMostrandoSelectorDeTema] = useState(false);
  const esModoOscuro = theme === "dark";

  const estilosSegunTema = {
    contenedorPrincipal: {
      backgroundColor: esModoOscuro ? "#121212" : "#f8f9fa",
    },
    textoGeneral: { color: esModoOscuro ? "#fff" : "#000" },
    tarjetaOpcional: {
      backgroundColor: esModoOscuro ? "#1e1e1e" : "#fff",
      borderBottomColor: esModoOscuro ? "#333" : "#eee",
    },
  };

  const dynamicStyles = {
    container: {
      padding: responsivePadding,
    },
    menuText: {
      fontSize: responsiveFontSize,
    },
    title: {
      fontSize: isSmallScreen ? 20 : 24,
    },
  };

  const opcionesDeMenu = [
    { id: "1", titulo: "Perfil y privacidad" },
    { id: "2", titulo: "Tema" },
    { id: "3", titulo: "Versión de la aplicación", version: "1.0.0" },
  ];

  return (
    <View
      style={[
        styles.container,
        dynamicStyles.container,
        estilosSegunTema.contenedorPrincipal,
      ]}
    >
      {!mostrandoSelectorDeTema ? (
        <>
          <FlatList
            data={opcionesDeMenu}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable
                style={[
                  styles.menuItem,
                  { padding: responsivePadding },
                  estilosSegunTema.tarjetaOpcional,
                ]}
                onPress={() =>
                  item.titulo === "Tema" && setMostrandoSelectorDeTema(true)
                }
              >
                <Text
                  style={[
                    styles.menuText,
                    dynamicStyles.menuText,
                    estilosSegunTema.textoGeneral,
                  ]}
                >
                  {item.titulo}
                </Text>
                {item.version && (
                  <Text style={{ color: "#888" }}>{item.version}</Text>
                )}
              </Pressable>
            )}
          />
        </>
      ) : (
        <View>
          <Pressable
            onPress={() => setMostrandoSelectorDeTema(false)}
            style={styles.backBtn}
          >
            <Text style={[estilosSegunTema.textoGeneral]}>← Volver</Text>
          </Pressable>

          <Text
            style={[
              styles.title,
              dynamicStyles.title,
              estilosSegunTema.textoGeneral,
            ]}
          >
            Tema
          </Text>

          <View
            style={[
              styles.row,
              { padding: responsivePadding },
              estilosSegunTema.tarjetaOpcional,
              styles.roundCard,
            ]}
          >
            <Text
              style={[
                styles.menuText,
                dynamicStyles.menuText,
                estilosSegunTema.textoGeneral,
              ]}
            >
              Modo {esModoOscuro ? "Oscuro" : "Claro"}
            </Text>
            <Switch
              value={esModoOscuro}
              onValueChange={toggleTheme}
              trackColor={{ false: "#767577", true: "#00d1ff" }}
            />
          </View>
        </View>
      )}
    </View>
  );
}
