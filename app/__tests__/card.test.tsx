import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import DetalleProducto from "../componentes/card";
import { ThemeProvider } from "../themeContext";

const productoBase = {
  titulo: "Super Game",
  precio: 19.99,
  descripcion: "Descripción corta",
  genero: "Aventura",
  imagen: "https://example.com/game.png",
};

describe("Pruebas de Componente - Card / Detalle", () => {
  test("DetalleProducto - muestra título y botón", () => {
    const mockRoute = { params: { producto: productoBase } };
    const mockNavigation = { goBack: () => {} };

    const { getByText } = render(
      <ThemeProvider>
        <DetalleProducto
          route={mockRoute as any}
          navigation={mockNavigation as any}
        />
      </ThemeProvider>,
    );

    expect(getByText("Super Game")).toBeTruthy();
    expect(getByText("Añadir al carro")).toBeTruthy();
  });

  test("Simulación de pulsación - Botón volver", () => {
    let pulsado = false;
    const mockNavigation = {
      goBack: () => {
        pulsado = true;
      },
    };
    const mockRoute = { params: { producto: productoBase } };

    const { getByText } = render(
      <ThemeProvider>
        <DetalleProducto
          route={mockRoute as any}
          navigation={mockNavigation as any}
        />
      </ThemeProvider>,
    );

    fireEvent.press(getByText("← VOLVER A LA TIENDA"));
    expect(pulsado).toBe(true);
  });

  test("Debe renderizar correctamente incluso si faltan datos opcionales", () => {
    const mockRoute = {
      params: {
        producto: {
          id: "2",
          titulo: "Juego Sin Datos",
          genero: "", // <--- Le damos un string vacío para que toUpperCase() no falle
          precio: "0.00",
          imagen: null, // <--- Esto probará la rama de "no hay imagen"
        },
      },
    };
    const mockNavigation = { goBack: () => {} };

    const { getByText } = render(
      <ThemeProvider>
        <DetalleProducto
          route={mockRoute as any}
          navigation={mockNavigation as any}
        />
      </ThemeProvider>,
    );

    expect(getByText("Juego Sin Datos")).toBeTruthy();
  });
});
