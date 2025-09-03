import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import CardScroll from "../../../components/cardScroll";
import { Colors } from "../../../constants/Colors";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background} />
      <CardScroll />
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
