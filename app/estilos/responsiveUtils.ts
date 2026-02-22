import { Dimensions, useWindowDimensions } from "react-native";

export const getResponsiveValue = (
  small: number,
  medium: number,
  large: number,
) => {
  const width = Dimensions.get("window").width;
  if (width < 480) return small;
  if (width < 768) return medium;
  return large;
};

export const getColumnsForWidth = (width: number): number => {
  if (width < 480) return 2; // Móvil pequeño
  if (width < 768) return 3; // Tablet pequeña
  if (width < 1024) return 4; // Tablet
  return 5; // Desktop
};

export const getMainCardDirection = (width: number): "row" | "column" => {
  return width < 768 ? "column" : "row";
};

export const useResponsiveDimensions = () => {
  const { width, height } = useWindowDimensions();
  const columns = getColumnsForWidth(width);
  const cardWidth = (width - 60) / columns;
  const isSmallScreen = width < 480;
  const isMediumScreen = width < 768;
  const isLargeScreen = width >= 768;

  return {
    width,
    height,
    columns,
    cardWidth,
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
  };
};
