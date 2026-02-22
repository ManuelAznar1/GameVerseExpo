export function generateItems(count: number) {
  const generos = [
    "Aventura",
    "RPG",
    "Shooter",
    "Sandbox",
    "Deportes",
    "Estrategia",
    "Indie",
  ];

  const items = new Array(count).fill(0).map((_, i) => {
    const id = String(i + 1);
    const titulo = `Juego ${id}`;
    const genero = generos[i % generos.length];
    const precio = ((i % 60) + 1).toFixed(2);
    const imagen = `https://placehold.co/300x180?text=Juego+${id}`;
    const descripcion = `Descripción del juego ${id}`;
    return {
      id,
      titulo,
      genero,
      precio,
      imagen,
      descripcion,
    };
  });

  return items;
}
