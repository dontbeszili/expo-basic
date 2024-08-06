import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import "./globals.css";

export default function Index() {
  return (
    <View className='flex-1 justify-center items-center bg-primary'>
      <Image source={require("@/assets/bcr.png")} className='mb-10' />
      <Text className='text-bcr font-bold text-xl'>Welcome</Text>
      <StatusBar style='auto' />
    </View>
  );
}
