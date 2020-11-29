import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import TransactionRow from "./TransactionRow";

export interface Transaction {
  description: string;
  date: string;
  amount: string;
}

export interface TransactionsProps {
  transactions: Transaction[];
}

export default class Transactions extends React.Component<TransactionsProps> {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {this.props.transactions.map((transaction) => (
          <TransactionRow transaction={transaction} />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#035B96",
    alignItems: "center",
    justifyContent: "center",
  },
});
