import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from '../../constants/Colors';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarIconStyle:{
        color: Colors.accent,
        marginBottom: 5
      },
      tabBarActiveTintColor: Colors.primary,
      tabBarLabelStyle:{
        fontSize: 12,
        fontWeight: 'bold'
      }
    }
    }>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: 'Transaction',
          tabBarIcon: ({ color }) => <AntDesign name="linechart" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          title: 'Cards',
          tabBarIcon: ({ color }) => <AntDesign name="creditcard" size={24} color={color} />,
        }}
      />
        <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <AntDesign name="setting" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
