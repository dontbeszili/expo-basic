import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-primary">
      <Text className='text-bcr font-bold text-xl'>Welcome</Text>
      <StatusBar style="auto" />
    </View>
  );
}
