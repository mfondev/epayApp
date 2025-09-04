import { StyleSheet, Text, View } from "react-native";
import CreditIcon from "../../assets/icons/credit.svg";
import DebitIcon from "../../assets/icons/debit.svg";

export default function TransactionList({ type, description, time, amount }) {
  return (
    <View style={styles.transactionItem}>
      <View style={styles.transactionDetails}>
        {type === "credit" ? (
          <CreditIcon width={48} height={48} />
        ) : (
          <DebitIcon width={48} height={48} />
        )}
        <View>
          <Text>{description}</Text>
          <Text style={styles.transactionTime}>{time}</Text>
        </View>
      </View>
      <Text
        style={[
          styles.transactionAmount,
          { color: type === "credit" ? "#0BCC35" : "#FF3B30" },
        ]}
      >
        {type === "credit" ? `+${amount}` : `-${amount}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontWeight: "bold",
  },
  transactionTime: {
    fontSize: 12,
    color: "#aaa",
  },
});
