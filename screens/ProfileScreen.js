import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

const menuItems = [
  { icon: "person-outline", label: "Edit Profile" },
  { icon: "location-outline", label: "Shipping Address" },
  { icon: "card-outline", label: "Payment Methods" },
  { icon: "settings-outline", label: "Settings" },
  { icon: "log-out-outline", label: "Log Out" },
];

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image
          source={{ uri: "https://picsum.photos/seed/shopnest-user/200" }}
          style={styles.avatar}
        />
      </View>
      <Text style={styles.name}>Yaw Asante</Text>
      <Text style={styles.email}>yawasantedev@gmail.com</Text>

      <View style={styles.menu}>
        {menuItems.map((item) => (
          <View key={item.label} style={styles.menuItem}>
            <Ionicons name={item.icon} size={20} color="#1F1F1F" />
            <Text style={styles.menuText}>{item.label}</Text>
            <Ionicons name="chevron-forward" size={18} color="#B5B5B5" />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 70,
    alignItems: "center",
  },
  avatarWrapper: {
    width: 90,
    height: 90,
    borderRadius: 45,
    overflow: "hidden",
    backgroundColor: "#F0F0F0",
  },
  avatar: { width: "100%", height: "100%" },
  name: {
    fontSize: 18,
    fontFamily: "InriaSans_700Bold",
    color: "#1F1F1F",
    marginTop: 14,
  },
  email: { fontSize: 13, color: "#767676", marginTop: 2 },
  menu: { width: "100%", paddingHorizontal: 24, marginTop: 30 },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#EDEDED",
  },
  menuText: { flex: 1, marginLeft: 14, fontSize: 14, color: "#1F1F1F" },
});
