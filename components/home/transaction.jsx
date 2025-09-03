import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import CreditIcon from "../../assets/icons/credit.svg";

export default function Transaction() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Transaction</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <View style={styles.transactionItem}>
        <View style={styles.transactionDetails}>
          <CreditIcon width={48} height={48} />
          <View style={styles.transactionInfo}>
            <Text>Received from John</Text>
            <Text>3:00 PM</Text>
          </View>
        </View>
        <Text style={styles.transactionAmount}>+3,982.5</Text>
      </View>
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
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  viewAll: {
    fontSize: 14,
    color: Colors.primary,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  transactionDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  transactionAmount: {
    color: '#0BCC35',
    fontWeight: "bold",
  }
});
