import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface TransactionRowProps {
  transaction: {
    description: string;
    date: string;
    amount: string;
  };
}

export default class TransactionRow extends React.Component<TransactionRowProps> {
  render() {
    const {
      description,
      date,
      amount,
    }: {
      description: string;
      date: string;
      amount: string;
    } = this.props.transaction;

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.5)",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  description: {
    color: "white",
    fontWeight: "bold",
  },
  date: {
    color: "white",
    fontStyle: "italic",
  },
  amount: {
    color: "white",
    fontWeight: "bold",
  },
});
