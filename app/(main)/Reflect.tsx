import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default function Reflect() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reflect</Text>
      <Text style={styles.subtitle}>Journal your thoughts and insights</Text>
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
