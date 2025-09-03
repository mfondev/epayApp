import SearchIcon from "../../assets/icons/search.svg";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.searchWrapper}>
      <SearchIcon width={18} height={18} style={styles.icon} />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#999"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 10,
    paddingHorizontal: 12,
    margin: 20,
    height: 44,
    backgroundColor: "#fff",
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
});
