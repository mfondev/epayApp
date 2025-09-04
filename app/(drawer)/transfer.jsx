import {
  StyleSheet,
  Text,
  View,
 TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import PersonIcon from "../../assets/icons/person.svg";
import BankIcon from "../../assets/icons/bank.svg";

function InputField({ label, placeholder, icon }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.inputWrapper}>
        {icon && <View style={styles.iconLeft}>{icon}</View>}
        <TextInput
          style={[styles.input, icon ? { paddingLeft: 40 } : null]}
          placeholder={placeholder}
          placeholderTextColor="#999"
        />
      </View>
    </View>
  );
}

export default function Transfer() {
  const beneficiaries = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Michael Lee" },
    { id: 4, name: "Sarah Kim" },
    { id: 5, name: "David Park" },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.balanceBox}>
        <Text style={styles.balanceLabel}>Available Balance</Text>
        <Text style={styles.balanceAmount}>₦ 2,940,000.00</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Frequent Beneficiaries</Text>
        <View style={styles.beneficiariesRow}>
          {beneficiaries.map((b) => (
            <View key={b.id} style={styles.beneficiary}>
              <View style={styles.iconWrapper}>
                <PersonIcon width={24} height={24} />
              </View>
              <Text style={styles.beneficiaryName}>{b.name}</Text>
            </View>
          ))}
        </View>
      </View>
      <InputField
        label="Bank"
        placeholder="Select Bank"
        icon={<BankIcon width={20} height={20} />}
      />
      <InputField
        label="Beneficiary Account Number"
        placeholder="Enter account number"
      />
      <InputField label="Amount" placeholder="Enter amount" />
      <InputField label="Description" placeholder="Enter description" />
      <TouchableOpacity style={styles.transferBtn}>
        <Text style={styles.transferText}>Make Transfer</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  balanceBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  balanceLabel: {
    color: "#62248F",
    fontSize: 16,
    fontWeight: "500",
  },
  balanceAmount: {
    color: "#1FA804",
    fontSize: 18,
    fontWeight: "700",
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 15,
  },
  beneficiariesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  beneficiary: {
    alignItems: "center",
    flex: 1,
  },
  iconWrapper: {
    backgroundColor: "#F7F1FB",
    padding: 15,
    borderRadius: 50,
    marginBottom: 8,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  beneficiaryName: {
    fontSize: 12,
    textAlign: "center",
  },
  
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
  },
  inputWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  iconLeft: {
    position: 'absolute',
    left: 10,
    zIndex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 14,
    height: 52,
    backgroundColor: '#fff',
  },
  transferBtn: {
    backgroundColor: "#62248F",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  transferText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
