import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "./globals.css";
import DefaultBcrTheme from "../styles/DefaultBcrTheme";
import React from "react";
import { Provider } from 'react-redux'
import store from "../store";

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Provider store={store}>
      <ThemeProvider value={DefaultBcrTheme}>
        <Stack
          screenOptions={({ route }) => ({
            headerShown: true,
            // headerTitle: route.name,
            headerBackTitleVisible: false,
          })}
        >
          <Stack.Screen name='index' options={{ headerShown: false }} />
          <Stack.Screen
            name='developer/index'
            options={{ headerTitle: "Developer" }}
          />
          <Stack.Screen
            name='developer/users'
            options={{ headerTitle: "Users Demo" }}
          />
          <Stack.Screen
            name='developer/test'
            options={{ headerTitle: "Test Demo" }}
          />
          <Stack.Screen
            name='+not-found'
            options={{ headerTitle: "Not Found" }}
          />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}
