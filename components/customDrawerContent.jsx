import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Welcome</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4, justifyContent: "space-between" }}>
          <Text style={styles.name}>John Davis Howman</Text>
          <MaterialIcons name="arrow-forward-ios" size={14} color="#5A2184" />
        </View>
        <View style={styles.accountRow}>
          <Text style={styles.accountNo}>A/C No: 83914615249</Text>
          <MaterialIcons name="content-copy" size={14} color="black" />
        </View>
        <Text style={styles.accountType}>1 Account - Personal</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#0000000F",
    paddingBottom: 12,
    marginBottom: 8,
    paddingHorizontal: 20,
    gap: 4,
  },
  welcome: {
    fontSize: 14,
    color: "#6b7280", 
    marginBottom: 2,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
    marginBottom: 2,
  },
  accountRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 2,
  },
  accountNo: {
    fontSize: 14,
    color: "#5A2184",
    marginRight: 4,
    fontWeight: 'bold'
  },
  accountType: {
    fontSize: 14,
    color: "#6b7280", 
  },
});
