import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function ProductCard({
  image,
  name,
  price,
  rating,
  backgroundColor,
  onPress,
  imageStyle,
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: backgroundColor || "#F5F5F5",
          opacity: pressed ? 0.85 : 1,
        },
      ]}
      onPress={onPress}
    >
      <View style={[styles.imageWrapper, imageStyle]}>
        <Image
          source={typeof image === "string" ? { uri: image } : image}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <Text style={styles.name} numberOfLines={2}>
        {name}
      </Text>

      <View style={styles.ratingRow}>
        <Ionicons name="star" size={13} color="#f7b64dff" />
        <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
      </View>

      <View style={styles.bottomRow}>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        <View style={styles.cartIcon}>
          <Ionicons name="cart-outline" size={16} color="#fff" />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    borderRadius: 14,
    padding: 12,
    marginBottom: 16,
  },
  imageWrapper: {
    width: "100%",
    aspectRatio: 0.85,
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  name: {
    fontSize: 13,
    fontFamily: "InriaSans_700Bold",
    color: "#1F1F1F",
    minHeight: 34,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  ratingText: {
    fontSize: 12,
    color: "#767676",
    marginLeft: 4,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  price: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1F1F1F",
  },
  cartIcon: {
    backgroundColor: "#FF6B4A",
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
});
