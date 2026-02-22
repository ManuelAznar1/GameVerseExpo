import { StyleSheet } from "react-native";

export const indexStyles = StyleSheet.create({
  headerContainer: {
    marginBottom: 20,
    marginTop: 10,
    paddingHorizontal: 15,
  },
  searchBarContainer: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 20,
    marginHorizontal: 15,
    borderWidth: 1,
  },
  searchInput: {
    fontSize: 14,
    paddingVertical: 5,
    outlineStyle: "none",
  } as any,
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    marginTop: 10,
  },
  titleIndicator: {
    width: 4,
    height: 24,
    backgroundColor: "#00d1ff",
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  listPadding: {
    paddingHorizontal: 20,
  },
  row: {
    justifyContent: "flex-start",
    gap: 10,
  },
  card: {
    marginBottom: 25,
  },
  cardHover: {
    transform: [{ scale: 1.05 }],
    zIndex: 10,
  },
  imageContainer: {
    borderRadius: 8,
    overflow: "hidden",
    aspectRatio: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    marginTop: 8,
    paddingHorizontal: 2,
  },
  title: {
    fontSize: 9,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 8,
    marginTop: 1,
  },
  price: {
    fontSize: 10,
    fontWeight: "900",
    marginTop: 3,
  },
});
