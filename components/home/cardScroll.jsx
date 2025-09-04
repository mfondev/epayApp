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
        }}
      >
        <Card
          accountType="Basic Current Account"
          balance="8,192,135.66"
          name="John Davis Howman"
          accountNumber="83914615249"
        />
        <Card
          accountType="Savings Account"
          balance="2,553,213.00"
          name="John Davis Howman"
          accountNumber="83914615249"
        />
      </ScrollView>
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({

});
