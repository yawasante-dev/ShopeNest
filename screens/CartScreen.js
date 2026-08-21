import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { CartContext } from "../context/CartContext";

export default function CartScreen() {
  const { items, removeFromCart } = useContext(CartContext);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.meta}>
          Qty {item.quantity} · ${item.price.toFixed(2)}
        </Text>
      </View>
      <Text style={styles.lineTotal}>
        ${(item.price * item.quantity).toFixed(2)}
      </Text>
      <Pressable
        onPress={() => removeFromCart(item.id)}
        style={styles.removeButton}
      >
        <Ionicons name="trash-outline" size={18} color="#E74C3C" />
      </Pressable>
    </View>
  );

  if (items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons name="cart-outline" size={48} color="#B5B5B5" />
        <Text style={styles.emptyText}>Your cart is empty</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      <View style={styles.footer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: "InriaSans_700Bold",
    color: "#1F1F1F",
    marginBottom: 16,
  },
  list: { paddingBottom: 20 },
  row: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  image: {
    width: 56,
    height: 56,
    borderRadius: 10,
    backgroundColor: "#F0F0F0",
  },
  info: { flex: 1, marginLeft: 12 },
  name: { fontSize: 14, fontWeight: "600", color: "#1F1F1F" },
  meta: { fontSize: 12, color: "#767676", marginTop: 4 },
  lineTotal: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1F1F1F",
    marginRight: 10,
  },
  removeButton: { padding: 6 },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#EDEDED",
  },
  totalLabel: { fontSize: 15, fontWeight: "600", color: "#767676" },
  totalValue: { fontSize: 18, fontWeight: "800", color: "#FF6B4A" },
  emptyContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  emptyText: { marginTop: 10, fontSize: 14, color: "#767676" },
});
