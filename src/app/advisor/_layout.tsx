import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";

export default function AdvisorLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
