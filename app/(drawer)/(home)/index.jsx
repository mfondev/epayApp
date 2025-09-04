import { SafeAreaView, StyleSheet,ScrollView, Text, View } from "react-native";
import CardScroll from "../../../components/home/cardScroll";
import { Colors } from "../../../constants/Colors";
import QuickAccess from "../../../components/home/quick-access";
import Transaction from "../../../components/home/transaction";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background} />
      <CardScroll />
      <QuickAccess />
      <Transaction />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  background: {
    backgroundColor: Colors.primary200,
    height: 100,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
});
