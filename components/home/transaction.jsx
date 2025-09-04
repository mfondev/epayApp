import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { FlatList } from "react-native";
import TransactionList from "./transactionList";
import { Link } from "expo-router";

export const TRANSACTIONS = [
  {
    id: 1,
    type: "credit",
    description: "Received from John",
    time: "3:00 PM",
    amount: 3982.5,
  },
  {
    id: 2,
    type: "debit",
    description: "Sent to Alice",
    time: "5:15 PM",
    amount: 1200,
  },
  {
    id: 3,
    type: "credit",
    description: "Refund from Store",
    time: "11:45 AM",
    amount: 500,
  },
  {
    id: 4,
    type: "debit",
    description: "Paid to Netflix",
    time: "8:30 AM",
    amount: 15.99,
  },
  {
    id: 5,
    type: "credit",
    description: "Salary",
    time: "9:00 AM",
    amount: 2500,
  },
];

export default function Transaction() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Transactions</Text>
        <Link href="/transactions" style={styles.viewAll}>View All</Link>
      </View>
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
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  viewAll: {
    fontSize: 14,
    color: Colors.primary,
  },
});
