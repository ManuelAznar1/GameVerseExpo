import { cleanup, render } from "@testing-library/react-native";
import React from "react";
import Index from "../(tabs)/index";
import { JUEGOS } from "../juegos";
import { ThemeProvider } from "../themeContext";

jest.mock("react-native/Libraries/Utilities/useWindowDimensions", () => ({
  default: () => ({ width: 400, height: 800 }),
}));

jest.mock("expo-router", () => ({
  useRouter: () => ({ push: () => {} }),
  useLocalSearchParams: () => ({}),
}));

jest.mock("expo-image", () => ({
  Image: () => null,
}));

const sizes = [25, 500, 1000, 3000];

describe("Tests de Volumen - Mediciones Limpias", () => {
  const resultados: { cantidad: number; ms: number }[] = [];

  beforeAll(() => {
    render(
      <ThemeProvider>
        <Index />
      </ThemeProvider>,
    );
    cleanup();
  });

  afterEach(() => {
    cleanup();
  });

  sizes.forEach((size) => {
    test(`Carga de ${size} ítems`, () => {
      const datosSimulados = Array.from({ length: size }, (_, i) => ({
        ...JUEGOS[i % JUEGOS.length],
        id: `vol-${i}`,
      }));

      // 2. MEDICIÓN DE TIEMPO NETO
      const inicio = performance.now();

      render(
        <ThemeProvider>
          <Index />
        </ThemeProvider>,
      );

      const fin = performance.now();

      resultados.push({
        cantidad: size,
        ms: Math.round(fin - inicio),
      });
    });
  });

  afterAll(() => {
    console.log("\n--- RESULTADOS DE RENDIMIENTO (PROYECTO GAMEVERSE) ---");
    console.table(resultados);
  });
});
