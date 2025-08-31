// import { View, Text } from "react-native";
// import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

// export default function DrawerIcon() {
//   return (
//     <View className="border border-gray-400 rounded-md p-1.5 ml-5">
//       <FontAwesome6 name="bars" size={20} color="black" />
//     </View>
//   );
// }

import { View, StyleSheet, Pressable } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function Example() {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.container} onPress={() => navigation.toggleDrawer()}>
      <FontAwesome6 name="bars" size={20} color="black" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 6,
    padding: 5,
    marginLeft: 20,
  },
});
