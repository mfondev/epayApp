import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Card({ accountType, balance, name, accountNumber }) {
  return (
    <View style={styles.container}>
      <Text style={styles.accountType}>{accountType}</Text>
      <View style={styles.balanceContainer}>
        <FontAwesome6 name="naira-sign" size={15} color="white" />
        <Text style={styles.balance}>{balance}</Text>
        <FontAwesome name="eye" size={20} color="white" />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.accountNumberContainer}>
          <Text style={styles.accountNumber}>{accountNumber}</Text>
          <MaterialIcons name="content-copy" size={14} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    width: 350,
    height: 140,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
  },
  accountType: {
    textTransform: "uppercase",
    color: "#d1caca",
    marginBottom: 30,
  },
  accountNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  accountNumber: {
    color: "#d1caca",
    fontSize: 16,
    fontWeight: "medium",
  },
  nameContainer: {
    color: Colors.tertiary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    color: "#d1caca",
    textTransform: "uppercase",
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    gap: 2,
  },
  balance: {
    color: Colors.tertiary,
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 5,
  },
});
