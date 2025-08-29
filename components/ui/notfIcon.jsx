import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function NotificationIcon() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="notifications-none" size={20} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 6,
    padding: 5,
    marginRight: 20,
  },
});
