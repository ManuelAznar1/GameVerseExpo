import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import DetalleProducto from "../componentes/card";

const producto = {
  titulo: "Super Game",
  precio: 19.99,
  descripcion: "Descripción corta",
  genero: "Aventura",
  imagen: "https://example.com/game.png",
};

test("DetalleProducto - render básico muestra título y botón", () => {
  const route = { params: { producto } };

  const { getByText } = render(<DetalleProducto route={route} />);

  expect(getByText("Super Game")).toBeTruthy();
  expect(getByText("Añadir al carro")).toBeTruthy();
});

test("llama a navigation.goBack() al pulsar volver", () => {
  const navigation = { goBack: jest.fn() } as any;
  const route = { params: { producto } };

  const { getByText } = render(
    <DetalleProducto route={route} navigation={navigation} />,
  );

  fireEvent.press(getByText("← VOLVER A LA TIENDA"));
  expect(navigation.goBack).toHaveBeenCalled();
});
