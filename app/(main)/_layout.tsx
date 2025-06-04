import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { AuthGuard } from "../../components/AuthGuard";
import { View, StyleSheet } from "react-native";

export default function MainLayout() {
  return (
    <AuthGuard>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.colors.primary,
          tabBarInactiveTintColor: Colors.colors.textSecondary,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.colors.white,
            borderTopWidth: 1,
            borderTopColor: Colors.colors.divider,
            paddingBottom: 10,
            paddingTop: 10,
            height: 90,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginTop: 4,
            fontWeight: "bold",
          },
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Progress"
          options={{
            title: "Progress",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="trending-up" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Log"
          options={{
            title: "Log",
            tabBarIcon: ({ color, size }) => (
              <View style={styles.logIconContainer}>
                <Ionicons
                  name="add-circle"
                  size={size + 10}
                  color={Colors.colors.white}
                />
              </View>
            ),
            tabBarLabelStyle: {
              fontSize: 12,
              marginTop: 4,
              fontWeight: "bold",
              // color: colors,
            },
          }}
        />
        <Tabs.Screen
          name="Reflect"
          options={{
            title: "Reflect",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="journal" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </AuthGuard>
  );
}

const styles = StyleSheet.create({
  logIconContainer: {
    backgroundColor: Colors.colors.primary,
    borderRadius: 20,
    padding: 10,
    marginTop: -20,
    shadowColor: Colors.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
});
