import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "./globals.css";
import DefaultBcrTheme from "../styles/DefaultBcrTheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultBcrTheme}>
      <Stack
        screenOptions={({ route }) => ({
          headerShown: true,
          // headerTitle: route.name,
          headerBackTitleVisible: false,
        })}
      >
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='developer/index' options={{headerTitle: "Developer"}}/>
        <Stack.Screen name='developer/roles' options={{headerTitle: "Roles Demo"}}/>
        <Stack.Screen name='developer/test' options={{headerTitle: "Test Demo"}}/>
        <Stack.Screen name='+not-found' options={{headerTitle: "Not Found"}}/>
      </Stack>
    </ThemeProvider>
  );
}
