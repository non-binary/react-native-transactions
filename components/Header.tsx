import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface HeaderProps {
  balance: string;
}

export default class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.descriptionLabel}>Balance</Text>
        <Text style={styles.balanceLabel}>{this.props.balance}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "#04396C",
    alignItems: "center",
    justifyContent: "center",
  },
  descriptionLabel: {
    fontSize: 15,
    color: "white",
  },
  balanceLabel: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
    marginBottom: 50,
  },
});
