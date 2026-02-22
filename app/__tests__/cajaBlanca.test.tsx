import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import Card from "../componentes/card";
import { ThemeProvider } from "../themeContext";

describe("Test de Caja Blanca - Card (Estructura interna)", () => {
  const mockNavigation = {
    navigate: () => {},
    goBack: () => {},
  };

  test("Renderizado sin imagen", () => {
    const mockRoute = {
      params: {
        producto: {
          id: "2",
          titulo: "Juego Test",
          imagen: null,
          precio: "10.00",
          genero: "Indie",
        },
      },
    };

    const { queryByRole } = render(
      <ThemeProvider>
        <Card route={mockRoute as any} navigation={mockNavigation as any} />
      </ThemeProvider>,
    );
    expect(queryByRole("image")).toBeNull();
  });

  test("Interacción con funciones internas (Botón Volver)", () => {
    const mockRoute = {
      params: {
        producto: { id: "1", titulo: "Test", genero: "Accion", precio: "10" },
      },
    };

    const { getByText } = render(
      <ThemeProvider>
        <Card route={mockRoute as any} navigation={mockNavigation as any} />
      </ThemeProvider>,
    );

    const botonVolver = getByText("← VOLVER A LA TIENDA");
    fireEvent.press(botonVolver);
  });
});
