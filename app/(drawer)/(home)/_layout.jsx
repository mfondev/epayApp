import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "../../../constants/Colors";
import NotificationIcon from "../../../components/ui/notfIcon";
import Drawer from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarIconStyle: {
          color: Colors.accent,
          marginBottom: 5,
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "FNBC",
          headerTitleStyle: {
            color: Colors.primary,
            fontWeight: "bold",
            fontSize: 22,
            letterSpacing: 4,
          },
          headerStyle: {
            backgroundColor: "#eee7f3",
          },
          headerShadowVisible: false,
          headerRight: () => <NotificationIcon />,
          // headerLeft: () => <DrawerIcon />,
          headerLeft: () => <DrawerToggleButton />,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={20} color={color} />
          ),
        }}
        h
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: "Transactions",
          tabBarIcon: ({ color }) => (
            <AntDesign name="linechart" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          title: "Cards",
          tabBarIcon: ({ color }) => (
            <AntDesign name="creditcard" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <AntDesign name="setting" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
