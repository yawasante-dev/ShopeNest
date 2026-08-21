import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const cardColors = ["#DDF5E3", "#E7E2FB", "#FDE2E6", "#FFF3D6"];

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item, index }) => (
    <ProductCard
      image={item.image}
      name={item.name}
      price={item.price}
      rating={item.rating}
      backgroundColor={cardColors[index % cardColors.length]}
      imageStyle={item.imageStyle}
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brand}>ShopNest</Text>
        <Text style={styles.subtitle}>Buy and sell with ease</Text>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <Text style={styles.sectionTitle}>Popular Products</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    backgroundColor: "#FF6B4A",
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  brand: {
    fontSize: 22,
    fontFamily: "InriaSans_700Bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 13,
    fontFamily: "InriaSans_400Regular",
    color: "#FFE8E1",
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 17,
    fontFamily: "InriaSans_700Bold",
    color: "#1F1F1F",
    marginTop: 18,
    marginBottom: 12,
  },
  list: { paddingHorizontal: 20, paddingBottom: 20 },
  row: { justifyContent: "space-between" },
});
