import { StyleSheet, FlatList, View } from "react-native";
import { TRANSACTIONS } from "../../../components/home/transaction";
import TransactionList from "../../../components/home/transactionList";
import SearchBar from "../../../components/home/searchBar";

export default function Transaction() {
  return (
    <>
      <SearchBar />

      <View style={styles.container}>
        <FlatList
          data={TRANSACTIONS}
          renderItem={({ item }) => (
            <TransactionList
              type={item.type}
              description={item.description}
              time={item.time}
              amount={item.amount}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});
