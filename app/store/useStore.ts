import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define types for our state
interface FocusArea {
  id: string;
  name: string;
  description?: string;
  icon?: string;
}

interface UserState {
  // User profile
  userId: string | null;
  username: string | null;
  email: string | null;

  // Onboarding state
  onboardingComplete: boolean;
  selectedFocusAreas: FocusArea[];

  // Actions
  setUser: (userId: string, username: string, email: string) => void;
  clearUser: () => void;
  completeOnboarding: () => void;
  selectFocusArea: (area: FocusArea) => void;
  unselectFocusArea: (areaId: string) => void;
  clearFocusAreas: () => void;
}

// Create the store with persistence
const useStore = create<UserState>()(
  persist(
    (set) => ({
      // Initial state
      userId: null,
      username: null,
      email: null,
      onboardingComplete: false,
      selectedFocusAreas: [],

      // Actions
      setUser: (userId, username, email) =>
        set({
          userId,
          username,
          email,
        }),

      clearUser: () =>
        set({
          userId: null,
          username: null,
          email: null,
        }),

      completeOnboarding: () =>
        set({
          onboardingComplete: true,
        }),

      selectFocusArea: (area) =>
        set((state) => ({
          selectedFocusAreas: [...state.selectedFocusAreas, area],
        })),

      unselectFocusArea: (areaId) =>
        set((state) => ({
          selectedFocusAreas: state.selectedFocusAreas.filter(
            (area) => area.id !== areaId
          ),
        })),

      clearFocusAreas: () =>
        set({
          selectedFocusAreas: [],
        }),
    }),
    {
      name: "thrive-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useStore;
