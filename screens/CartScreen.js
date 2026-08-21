import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function CartScreen() {
  return (
    <View style={styles.emptyContainer}>
      <Ionicons name="cart-outline" size={48} color="#B5B5B5" />
      <Text style={styles.emptyText}>Your cart is empty</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  emptyText: {
    marginTop: 10,
    fontSize: 14,
    color: "#767676",
  },
});
