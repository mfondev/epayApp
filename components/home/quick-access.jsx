import { StyleSheet, Text, View } from "react-native";
import TransferIcon from "../../assets/icons/gtransfer.svg";
import ScanIcon from "../../assets/icons/gscan.svg";
import UtilitiesIcon from "../../assets/icons/guitilities.svg";
import LoanIcon from "../../assets/icons/gloan.svg";
import StatementIcon from "../../assets/icons/gstatement.svg";
import AirtimeIcon from "../../assets/icons/gairtime.svg";
import EventIcon from "../../assets/icons/events.svg";
import BillIcon from "../../assets/icons/gbill.svg";
import { Colors } from "../../constants/Colors";

const DATA = [
  {
    id: "1",
    title: "Transfer",
    icon: TransferIcon,
  },
  {
    id: "2",
    title: "Scan",
    icon: ScanIcon,
  },
  {
    id: "3",
    title: "Utilities",
    icon: UtilitiesIcon,
  },
  {
    id: "4",
    title: "Loan",
    icon: LoanIcon,
  },
  {
    id: "5",
    title: "Statement",
    icon: StatementIcon,
  },
  {
    id: "6",
    title: "Airtime",
    icon: AirtimeIcon,
  },
  {
    id: "7",
    title: "Event",
    icon: EventIcon,
  },
  {
    id: "8",
    title: "Bill",
    icon: BillIcon,
  },
];

export default function QuickAccess() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Quick Access</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <View style={styles.quickAccessContainer}>
        {DATA.map((item) => (
          <View key={item.id} style={styles.item}>
            <item.icon style={styles.itemIcon} />
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        ))}
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
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  viewAll: {
    fontSize: 14,
    color: Colors.primary,
  },
  quickAccessContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  itemIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  item: {
    width: "22%",
    paddingVertical: 10,
    aspectRatio: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  itemText: {
    marginTop: 6,
    textAlign: "center",
    fontSize: 12,
  },
});
