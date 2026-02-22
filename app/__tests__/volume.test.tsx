import { cleanup, render } from "@testing-library/react-native";
import React from "react";
import Index from "../(tabs)/index";
import { JUEGOS } from "../juegos";
import { ThemeProvider } from "../themeContext";

// --- MOCKS OBLIGATORIOS ---
jest.mock("react-native/Libraries/Utilities/useWindowDimensions", () => ({
  default: () => ({ width: 400, height: 800 }),
}));

jest.mock("expo-router", () => ({
  useRouter: () => ({ push: jest.fn() }),
  useLocalSearchParams: () => ({}),
}));

// Mock de expo-image para evitar sobrecarga en los tests de volumen
jest.mock("expo-image", () => ({
  Image: () => null,
}));

// Función generadora
const generarItemsVolumen = (cantidad: number) => {
  return Array.from({ length: cantidad }, (_, i) => ({
    ...JUEGOS[i % JUEGOS.length],
    id: `vol-${i}`,
  }));
};

const sizes = [25, 500, 1000, 3000];

describe("Tests de Volumen - Mediciones Netas", () => {
  const resultados: { cantidad: number; ms: number }[] = [];

  // 1. CALENTAMIENTO (Warm-up): Carga los módulos fuera de la medición real
  beforeAll(() => {
    render(
      <ThemeProvider>
        <Index />
      </ThemeProvider>,
    );
    cleanup(); // Limpiamos el calentamiento
  });

  // Limpiar después de cada test para evitar que la memoria afecte al siguiente
  afterEach(() => {
    cleanup();
  });

  sizes.forEach((size) => {
    test(`Carga de ${size} ítems`, () => {
      // Mockeamos los datos específicos para este tamaño antes de medir
      jest.doMock("../juegos", () => ({ JUEGOS: generarItemsVolumen(size) }));

      // 2. INICIO DE MEDICIÓN (Solo el renderizado)
      const inicio = performance.now();

      render(
        <ThemeProvider>
          <Index />
        </ThemeProvider>,
      );

      const fin = performance.now();
      // 3. FIN DE MEDICIÓN

      resultados.push({
        cantidad: size,
        ms: Math.round(fin - inicio),
      });
    });
  });

  afterAll(() => {
    console.log("\n--- RESULTADOS DE RENDIMIENTO (SIN ARRANQUE) ---");
    console.table(resultados);
  });
});
