// Mock user type
export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
}

// Mock auth state
let currentUser: User | null = null;
let authStateListeners: ((user: User | null) => void)[] = [];

// Mock sign up
export const signUp = async (
  email: string,
  password: string,
  displayName: string
): Promise<User> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const user: User = {
    uid: Math.random().toString(36).substring(7),
    email,
    displayName,
  };

  currentUser = user;
  authStateListeners.forEach((listener) => listener(user));
  return user;
};

// Mock sign in
export const signIn = async (
  email: string,
  password: string
): Promise<User> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const user: User = {
    uid: Math.random().toString(36).substring(7),
    email,
    displayName: email.split("@")[0],
  };

  currentUser = user;
  authStateListeners.forEach((listener) => listener(user));
  return user;
};

// Mock sign out
export const logOut = async (): Promise<void> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  currentUser = null;
  authStateListeners.forEach((listener) => listener(null));
};

// Mock password reset
export const resetPassword = async (email: string): Promise<void> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Password reset email sent to:", email);
};

// Mock Google sign in
export const signInWithGoogleCredential = async (): Promise<User> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const user: User = {
    uid: Math.random().toString(36).substring(7),
    email: "google.user@example.com",
    displayName: "Google User",
  };

  currentUser = user;
  authStateListeners.forEach((listener) => listener(user));
  return user;
};

// Mock Apple sign in
export const signInWithApple = async (): Promise<User> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const user: User = {
    uid: Math.random().toString(36).substring(7),
    email: "apple.user@example.com",
    displayName: "Apple User",
  };

  currentUser = user;
  authStateListeners.forEach((listener) => listener(user));
  return user;
};

// Mock auth state subscription
export const subscribeToAuthChanges = (
  callback: (user: User | null) => void
) => {
  authStateListeners.push(callback);
  // Initial callback with current state
  callback(currentUser);

  // Return unsubscribe function
  return () => {
    authStateListeners = authStateListeners.filter(
      (listener) => listener !== callback
    );
  };
};
