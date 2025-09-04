import { Drawer } from "expo-router/drawer";
import { CustomDrawerContent } from "../../components/customDrawerContent";
import PersonIcon from "../../assets/icons/person.svg";
import TransferIcon from "../../assets/icons/transfer.svg";
import ScanIcon from "../../assets/icons/scan.svg";
import UtilitiesIcon from "../../assets/icons/utilities.svg";
import LoanIcon from "../../assets/icons/loan.svg";
import StatementIcon from "../../assets/icons/statement.svg";
import TopUpIcon from "../../assets/icons/topUp.svg";
import LocatorIcon from "../../assets/icons/locator.svg";
import ContactIcon from "../../assets/icons/contact.svg";
import ReferIcon from "../../assets/icons/refer.svg";
import { TouchableOpacity, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const drawerScreens = [
  {
    name: "person",
    title: "Person Management",
    Icon: PersonIcon,
    headerTitle: "Manage your personal information",
  },
  {
    name: "transfer",
    title: "Transfer",
    Icon: TransferIcon,
    headerTitle: "Transfer Money",
  },
  {
    name: "scan",
    title: "Scan To Pay",
    Icon: ScanIcon,
    headerTitle: "Scan QR codes to make payments",
  },
  {
    name: "utilities",
    title: "Utilities",
    Icon: UtilitiesIcon,
    headerTitle: "Manage your utility payments",
  },
  {
    name: "quick-loan",
    title: "Quick Loan",
    Icon: LoanIcon,
    headerTitle: "Apply for a quick loan",
  },
  {
    name: "statement",
    title: "Statement",
    Icon: StatementIcon,
    headerTitle: "View your account statements",
  },
  {
    name: "top-up",
    title: "Self Top-Up",
    Icon: TopUpIcon,
    headerTitle: "Top up your account balance",
  },
  {
    name: "locator",
    title: "Locator",
    Icon: LocatorIcon,
    headerTitle: "Find nearby ATMs and branches",
  },
  {
    name: "contact",
    title: "Contact Us",
    Icon: ContactIcon,
    headerTitle: "Get in touch with customer support",
  },
  {
    name: "refer",
    title: "Refer",
    Icon: ReferIcon,
    headerTitle: "Refer a friend and earn rewards",
  },
];

export default function Layout() {
  return (
    <Drawer
      drawerContent={CustomDrawerContent}
      screenOptions={{
        drawerType: "front",
        drawerHideStatusBarOnOpen: true,
        drawerLabelStyle: {
          textTransform: "capitalize",
          fontSize: 14,
          color: "black",
          fontWeight: "bold",
        },
        drawerActiveBackgroundColor: "#eee7f3",
      }}
    >
      <Drawer.Screen
        name="(home)"
        options={{ drawerItemStyle: { display: "none" }, headerShown: false }}
      />
      {drawerScreens.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          options={({ navigation }) => ({
            title: screen.title,
            drawerLabel: ({ color }) => (
              <View style={{ flexDirection: "row", alignItems: "center" ,justifyContent:"space-between"}}>
                <Text style={{ color: 'black', fontSize: 16 }}>{screen.title}</Text>
                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color='#5C2684'
                  style={{ marginLeft: 5 }}
                />
              </View>
            ),
            headerTitle: screen.headerTitle,
            drawerIcon: () => <screen.Icon width={20} height={20} />,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 10 }}
              >
                <Ionicons name="arrow-back" size={20} color="#5C2684" />
              </TouchableOpacity>
            ),
          })}
        />
      ))}
    </Drawer>
  );
}
