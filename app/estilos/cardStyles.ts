import { StyleSheet } from "react-native";

const isSmallScreen = false; // Los valores se calculan en el componente

export const cardStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    padding: 15,
    paddingHorizontal: 20,
  },
  backText: {
    color: "#66c0f4",
    fontSize: 12,
    fontWeight: "bold",
  },
  bigImage: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  genreBadge: {
    backgroundColor: "#2a475e",
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 2,
    marginBottom: 15,
  },
  genreText: {
    color: "#66c0f4",
    fontSize: 10,
    fontWeight: "bold",
  },
  priceValue: {
    fontSize: 18,
    fontWeight: "500",
  },
  buyButton: {
    backgroundColor: "#75b022",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 2,
  },
  buyButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  separator: {
    height: 1,
    backgroundColor: "#2a475e",
    marginBottom: 15,
  },
  descTitle: {
    color: "#66c0f4",
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 8,
  },
  descText: {
    fontSize: 14,
    lineHeight: 22,
  },
});
