import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Transactions from "./components/Transactions";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header balance={"$3,987.51"} />
      <Transactions
        transactions={[
          {
            description: "Uber Eats San Francisco",
            date: "29 Nov 2020",
            amount: "$37.14",
          },
          {
            description: "Pharmaprix",
            date: "28 Nov 2020",
            amount: "$32.75",
          },
          {
            description: "Apple.com/ca Toronto",
            date: "27 Nov 2020",
            amount: "$320.78",
          },
          {
            description: "Amazon MKTP CA",
            date: "27 Nov 2020",
            amount: "$52.49",
          },
          {
            description: "Send E-Transfer CA***4bF",
            date: "24 Nov 2020",
            amount: "$780.52",
          },
          {
            description: "Walmart Montreal",
            date: "24 Nov 2020",
            amount: "$83.13",
          },
          {
            description: "Rona, Inc.",
            date: "23 Nov 2020",
            amount: "$62.27",
          },
          {
            description: "Uber Eats San Francisco",
            date: "21 Nov 2020",
            amount: "$46.12",
          },
          {
            description: "CDN SHR Invest INV",
            date: "17 Nov 2020",
            amount: "$1,000.00",
          },
          {
            description: "YouTube Premium",
            date: "17 Nov 2020",
            amount: "$17.92",
          },
        ]}
      />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#04396C",
  },
});
