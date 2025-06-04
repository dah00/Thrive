import React from "react";
import { View, ActivityIndicator } from "react-native";
import Colors from "../constants/Colors";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
