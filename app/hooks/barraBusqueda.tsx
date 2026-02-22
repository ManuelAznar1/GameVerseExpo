//Use memo lo utilizo para el filtrar dinámicamente la lista de juegos por título o género

import { useMemo, useState } from "react";
import { JUEGOS } from "../juegos";

export const useSearch = (data: typeof JUEGOS) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = useMemo(() => {
    return data.filter(
      (item) =>
        item.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.genero.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, data]);

  return {
    searchQuery,
    setSearchQuery,
    filteredData,
  };
};
