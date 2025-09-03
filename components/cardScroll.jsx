import { StyleSheet, TextInput, View, ScrollView } from "react-native";
import Card from "./card";
import SearchBar from "./searchBar";

export default function CardScroll() {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
          paddingHorizontal: 20,
          paddingTop: 10,
        //   height: 180,
          // width: "100%",
        }}
      >
        <Card
          accountType="Basic Current Account"
          balance="8,192,135.66"
          name="John Howman"
          accountNumber="123456789"
        />
        <Card
          accountType="Basic Current Account"
          balance="8,192,135.66"
          name="John Howman"
          accountNumber="123456789"
        />
      </ScrollView>
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({

});
