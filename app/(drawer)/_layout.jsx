import { Drawer } from "expo-router/drawer";
import { Image } from "react-native";
import { CustomDrawerContent } from "../../components/customDrawerContent";


const drawerScreens = [
  { name: "person", title: "Person Management", image: require("../../assets/icons/person.svg"),headerTitle: 'Manage your personal information' },
  { name: "transfer", title: "Transfer", image: require("../../assets/icons/transfer.svg"),headerTitle: 'Transfer Money' },
  { name: "scan", title: "Scan To Pay", image: require("../../assets/icons/scan.svg"),headerTitle: 'Scan QR codes to make payments' },
  { name: "utilities", title: "Utilities", image: require("../../assets/icons/utilities.svg"),headerTitle: 'Manage your utility payments' },
  { name: "quick-loan", title: "Quick Loan", image: require("../../assets/icons/loan.svg"),headerTitle: 'Apply for a quick loan' },
  { name: "statement", title: "Statement", image: require("../../assets/icons/statement.svg"),headerTitle: 'View your account statements' },
  { name: "top-up", title: "Self Top-Up", image: require("../../assets/icons/topUp.svg"),headerTitle: 'Top up your account balance' },
  { name: "locator", title: "Locator", image: require("../../assets/icons/locator.svg"),headerTitle: 'Find nearby ATMs and branches' },
  { name: "contact", title: "Contact Us", image: require("../../assets/icons/contact.svg"),headerTitle: 'Get in touch with customer support' },
  { name: "refer", title: "Refer", image: require("../../assets/icons/refer.svg"),headerTitle: 'Refer a friend and earn rewards' },
];

export default function Layout() {
  return (
    <Drawer
    drawerContent={CustomDrawerContent}
      screenOptions={{
        drawerHideStatusBarOnOpen: true,
        drawerLabelStyle: {
          textTransform: "capitalize",
          fontSize: 14,
          color: 'black'
        },
        drawerActiveBackgroundColor: '#eee7f3',
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
          options={{
            title: screen.title,
            headerTitle: screen.headerTitle,
            drawerIcon: () => (
              <Image
                source={screen.image}
                style={{ width: 20, height: 20 }}
              />
            ),
          }}
        />
      ))}
    </Drawer>
  );
}
