import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default function Log() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log Activity</Text>
      <Text style={styles.subtitle}>Record your daily progress</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.colors.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.colors.textSecondary,
  },
});
