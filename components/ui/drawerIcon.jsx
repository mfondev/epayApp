import {  StyleSheet, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";


export default function DrawerIcon() {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.container} onPress={() => navigation.toggleDrawer()}>
   <Ionicons name="menu-outline" size={20} color="black" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#0000000F",
    borderWidth: 1,
    borderRadius: 6,
    padding: 5,
    marginLeft: 20,
  },
});
