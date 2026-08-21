import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ProductDetailsScreen({ route, navigation }) {
  const { product } = route.params;

  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    Alert.alert("Added to cart", `${quantity} x ${product.name} added.`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={
            typeof product.image === "string"
              ? { uri: product.image }
              : product.image
          }
          style={styles.image}
          resizeMode="cover"
        />
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={22} color="#1F1F1F" />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.name}>{product.name}</Text>

        <View style={styles.ratingRow}>
          <Ionicons name="star" size={16} color="#F5A623" />
          <Text style={styles.ratingText}>{product.rating.toFixed(1)}</Text>
          <Text style={styles.colorText}> · {product.color}</Text>
        </View>

        <Text style={styles.price}>${product.price.toFixed(2)}</Text>

        <Text style={styles.description}>{product.description}</Text>

        <Text style={styles.quantityLabel}>Quantity</Text>
        <View style={styles.quantityRow}>
          <Pressable style={styles.qtyButton} onPress={decrease}>
            <Ionicons name="remove" size={18} color="#1F1F1F" />
          </Pressable>
          <Text style={styles.qtyValue}>{quantity}</Text>
          <Pressable style={styles.qtyButton} onPress={increase}>
            <Ionicons name="add" size={18} color="#1F1F1F" />
          </Pressable>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View>
          <Text style={styles.footerLabel}>Total</Text>
          <Text style={styles.footerPrice}>
            ${(product.price * quantity).toFixed(2)}
          </Text>
        </View>
        <Pressable style={styles.addButton} onPress={handleAddToCart}>
          <Ionicons name="cart-outline" size={18} color="#fff" />
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  imageWrapper: { width: "100%", height: 300 },
  image: { width: "100%", height: "100%" },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: { padding: 20, paddingBottom: 10 },
  name: {
    fontSize: 20,
    fontFamily: "HammersmithOne_400Regular",
    color: "#1F1F1F",
  },
  ratingRow: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  ratingText: { fontSize: 13, color: "#767676", marginLeft: 4 },
  colorText: { fontSize: 13, color: "#767676" },
  price: { fontSize: 22, fontWeight: "800", color: "#FF6B4A", marginTop: 12 },
  description: {
    fontSize: 14,
    lineHeight: 21,
    color: "#767676",
    marginTop: 14,
  },
  quantityLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1F1F1F",
    marginTop: 22,
    marginBottom: 10,
  },
  quantityRow: { flexDirection: "row", alignItems: "center" },
  qtyButton: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
  },
  qtyValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1F1F1F",
    marginHorizontal: 18,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#EDEDED",
  },
  footerLabel: { fontSize: 12, color: "#767676" },
  footerPrice: { fontSize: 18, fontWeight: "800", color: "#1F1F1F" },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF6B4A",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 12,
  },
  addButtonText: { color: "#fff", fontWeight: "700", marginLeft: 8 },
});
