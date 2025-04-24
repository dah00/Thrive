import { useEffect, useState } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoadingIndicator from "./components/LoadingIndicator";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkFirstTime = async () => {
      try {
        const firstTime = await AsyncStorage.getItem("firstTime");

        if (!firstTime) {
          await AsyncStorage.setItem("firstTime", "false");
          router.replace("/(intro)/Welcome");
        } else {
          router.replace("/(intro)/Welcome");
        }
      } catch (error) {
        console.error("Error checking first time:", error);
        router.replace("/(intro)/Welcome");
      } finally {
        setIsLoading(false);
      }
    };

    checkFirstTime();
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return null;
}
