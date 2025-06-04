// App theme colors
const colors = {
  // Primary colors
  primary: "#4CAF50",
  primaryDark: "#2E7D32",
  primaryLight: "#A5D6A7",

  // Secondary colors
  secondary: "#7E57C2",
  secondaryDark: "#4527A0",
  secondaryLight: "#D1C4E9",

  // Background gradients
  gradientStart: "#e0f7fa",
  gradientMiddle: "#b2ebf2",
  gradientEnd: "#d1c4e9",

  // Text colors
  textPrimary: "#333333",
  textSecondary: "#666666",
  textLight: "#999999",

  // UI colors
  background: "#FFFFFF",
  card: "#FFFFFF",
  input: "#FFFFFF",
  divider: "#CCCCCC",
  error: "#F44336",
  success: "#4CAF50",
  warning: "#FFC107",

  // Status colors
  active: "#4CAF50",
  inactive: "#9E9E9E",

  // Common colors
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
};

// Legacy theme support
const tintColorLight = colors.primary;
const tintColorDark = colors.white;

export default {
  colors,
  light: {
    text: colors.textPrimary,
    background: colors.background,
    tint: tintColorLight,
    tabIconDefault: colors.textLight,
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: colors.white,
    background: colors.black,
    tint: tintColorDark,
    tabIconDefault: colors.textLight,
    tabIconSelected: tintColorDark,
  },
};
