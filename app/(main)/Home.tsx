import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const { width } = Dimensions.get("window");

type IconName =
  | "barbell-outline"
  | "heart-outline"
  | "briefcase-outline"
  | "cash-outline"
  | "leaf-outline"
  | "checkmark-circle-outline";

interface LifeAreaCardProps {
  title: string;
  icon: IconName;
  progress: number;
  color: string;
}

interface RecentActivityProps {
  title: string;
  description: string;
  time: string;
  icon: IconName;
}

const LifeAreaCard = ({ title, icon, progress, color }: LifeAreaCardProps) => (
  <TouchableOpacity style={styles.card}>
    <LinearGradient colors={[color, `${color}80`]} style={styles.cardGradient}>
      <View style={styles.cardContent}>
        <Ionicons name={icon} size={32} color={Colors.colors.white} />
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardProgress}>{progress}%</Text>
      </View>
    </LinearGradient>
  </TouchableOpacity>
);

const RecentActivity = ({
  title,
  description,
  time,
  icon,
}: RecentActivityProps) => (
  <View style={styles.activityItem}>
    <View style={styles.activityIcon}>
      <Ionicons name={icon} size={24} color={Colors.colors.primary} />
    </View>
    <View style={styles.activityContent}>
      <Text style={styles.activityTitle}>{title}</Text>
      <Text style={styles.activityDescription}>{description}</Text>
      <Text style={styles.activityTime}>{time}</Text>
    </View>
  </View>
);

export default function Home() {
  // Mock data - replace with real data from your backend
  const lifeAreas: LifeAreaCardProps[] = [
    {
      title: "Health & Fitness",
      icon: "barbell-outline",
      progress: 75,
      color: Colors.colors.primary,
    },
    {
      title: "Mental Wellbeing",
      icon: "heart-outline",
      progress: 60,
      color: Colors.colors.secondary,
    },
    {
      title: "Career Growth",
      icon: "briefcase-outline",
      progress: 85,
      color: "#FF9800",
    },
    {
      title: "Financial Wellness",
      icon: "cash-outline",
      progress: 45,
      color: "#2196F3",
    },
  ];

  const recentActivities: RecentActivityProps[] = [
    {
      title: "Morning Workout",
      description: "Completed 30-minute HIIT session",
      time: "2 hours ago",
      icon: "barbell-outline",
    },
    {
      title: "Meditation",
      description: "10 minutes of mindfulness practice",
      time: "4 hours ago",
      icon: "leaf-outline",
    },
    {
      title: "Project Milestone",
      description: "Completed Q2 goals review",
      time: "1 day ago",
      icon: "checkmark-circle-outline",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={[
          Colors.colors.gradientStart,
          Colors.colors.gradientMiddle,
          Colors.colors.gradientEnd,
        ]}
        style={styles.header}
      >
        <Text style={styles.greeting}>Welcome back!</Text>
        <Text style={styles.subtitle}>Track your growth journey</Text>
      </LinearGradient>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Life Areas</Text>
        <View style={styles.cardsContainer}>
          {lifeAreas.map((area, index) => (
            <LifeAreaCard key={index} {...area} />
          ))}
        </View>

        <Text style={styles.sectionTitle}>Recent Activities</Text>
        <View style={styles.activitiesContainer}>
          {recentActivities.map((activity, index) => (
            <RecentActivity key={index} {...activity} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colors.background,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.colors.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.colors.textSecondary,
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.colors.textPrimary,
    marginBottom: 16,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  card: {
    width: (width - 48) / 2,
    marginBottom: 16,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 3,
    shadowColor: Colors.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardGradient: {
    padding: 16,
    height: 140,
  },
  cardContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.colors.white,
    marginTop: 8,
  },
  cardProgress: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.colors.white,
  },
  activitiesContainer: {
    backgroundColor: Colors.colors.white,
    borderRadius: 16,
    padding: 16,
    elevation: 2,
    shadowColor: Colors.colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.colors.divider,
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: `${Colors.colors.primary}20`,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.colors.textPrimary,
    marginBottom: 4,
  },
  activityDescription: {
    fontSize: 14,
    color: Colors.colors.textSecondary,
    marginBottom: 4,
  },
  activityTime: {
    fontSize: 12,
    color: Colors.colors.textLight,
  },
});
