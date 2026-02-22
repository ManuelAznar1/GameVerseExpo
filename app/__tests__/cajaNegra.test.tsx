import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import Card from "../componentes/card";
import { ThemeProvider } from "../themeContext";

describe("Test de Caja Negra - Card", () => {
  const mockNavigation = {
    navigate: () => {},
    goBack: () => {},
  };

  test("Debe mostrar la información correcta y permitir volver atrás", () => {
    const mockRoute = {
      params: {
        producto: {
          id: "1",
          titulo: "Elden Ring",
          genero: "RPG",
          precio: "59.90",
          imagen: "https://ejemplo.com/imagen.jpg",
        },
      },
    };

    const { getByText } = render(
      <ThemeProvider>
        <Card route={mockRoute as any} navigation={mockNavigation as any} />
      </ThemeProvider>,
    );

    expect(getByText("Elden Ring")).toBeTruthy();
    expect(getByText("RPG")).toBeTruthy();

    const botonVolver = getByText("← VOLVER A LA TIENDA");
    fireEvent.press(botonVolver);
  });
});
