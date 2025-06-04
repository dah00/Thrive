import { useState, useEffect } from "react";
import { create } from "zustand";
import { router } from "expo-router";
import * as AuthService from "../services/authService";
import type { User } from "../services/authService";

// Define the auth store state
interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  setError: (error: string | null) => void;
  setLoading: (isLoading: boolean) => void;
  signOut: () => Promise<void>;
}

// Create a Zustand store for auth state
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  error: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setError: (error) => set({ error }),
  setLoading: (isLoading) => set({ isLoading }),
  signOut: async () => {
    try {
      await AuthService.logOut();
      set({ user: null, isAuthenticated: false });
      router.replace("/(intro)/Welcome");
    } catch (error: any) {
      set({ error: error.message });
    }
  },
}));

// Custom hook for authentication
export const useAuth = () => {
  const {
    user,
    isLoading,
    error,
    isAuthenticated,
    setUser,
    setError,
    setLoading,
    signOut,
  } = useAuthStore();

  // Email/Password Sign Up
  const signUp = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    setLoading(true);
    setError(null);
    try {
      // Create a mock user
      const mockUser: User = {
        uid: Math.random().toString(36).substring(7),
        email,
        displayName,
      };
      setUser(mockUser);
      router.replace("/(main)/Home");
      return mockUser;
    } catch (error: any) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Email/Password Sign In
  const signIn = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      // Create a mock user
      const mockUser: User = {
        uid: Math.random().toString(36).substring(7),
        email,
        displayName: email.split("@")[0],
      };
      setUser(mockUser);
      router.replace("/(main)/Home");
      return mockUser;
    } catch (error: any) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Password Reset
  const resetPassword = async (email: string) => {
    setLoading(true);
    setError(null);
    try {
      // Mock password reset
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error: any) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Google Sign In
  const signInWithGoogle = async () => {
    setLoading(true);
    setError(null);
    try {
      // Create a mock user
      const mockUser: User = {
        uid: Math.random().toString(36).substring(7),
        email: "google.user@example.com",
        displayName: "Google User",
      };
      setUser(mockUser);
      router.replace("/(main)/Home");
      return mockUser;
    } catch (error: any) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Apple Sign In
  const signInWithApple = async () => {
    setLoading(true);
    setError(null);
    try {
      // Create a mock user
      const mockUser: User = {
        uid: Math.random().toString(36).substring(7),
        email: "apple.user@example.com",
        displayName: "Apple User",
      };
      setUser(mockUser);
      router.replace("/(main)/Home");
      return mockUser;
    } catch (error: any) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Listen for auth state changes
  useEffect(() => {
    setLoading(false);
  }, []);

  return {
    user,
    isLoading,
    error,
    isAuthenticated,
    signUp,
    signIn,
    signOut,
    resetPassword,
    signInWithGoogle,
    signInWithApple,
  };
};
