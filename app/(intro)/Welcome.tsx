import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const { width, height } = Dimensions.get("window");

const Welcome = () => {
  const handleGetStarted = () => {
    router.push("/(auth)/Signup");
  };

  const handleLogin = () => {
    router.push("/(auth)/Login");
  };

  return (
    <LinearGradient
      colors={[
        Colors.colors.gradientStart,
        Colors.colors.gradientMiddle,
        Colors.colors.gradientEnd,
      ]}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          {/* Replace with your actual logo */}
          <View style={styles.logoPlaceholder}>
            <Ionicons name="leaf" size={60} color={Colors.colors.primary} />
          </View>
          <Text style={styles.appName}>GrowthTracker</Text>
        </View>

        <Text style={styles.tagline}>
          Track your growth. See how far you've come.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={handleGetStarted}
          >
            <LinearGradient
              colors={[Colors.colors.primary, Colors.colors.primaryDark]}
              style={styles.gradient}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logoPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.colors.white,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Colors.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  appName: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.colors.textPrimary,
    marginTop: 16,
  },
  tagline: {
    fontSize: 18,
    color: Colors.colors.textSecondary,
    textAlign: "center",
    marginBottom: 60,
    lineHeight: 24,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  getStartedButton: {
    width: width * 0.8,
    borderRadius: 25,
    overflow: "hidden",
    marginBottom: 16,
    shadowColor: Colors.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  gradient: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  loginButton: {
    padding: 14,
  },
  loginButtonText: {
    color: Colors.colors.textPrimary,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Welcome;
