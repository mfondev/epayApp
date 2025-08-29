import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen name="(home)" options={{  headerShown: false}} />
      <Drawer.Screen name="support" options={{ title: "Support", headerShown: false }} />
    </Drawer>
  );
}
