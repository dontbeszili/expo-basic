import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "./globals.css";
// import Logo from "../../assets/bcr.svg";

export default function Index() {
  return (
    <View className='flex-1 justify-center items-center bg-primary'>
      {/* <Logo width={100} height={100} /> Use the SVG */}
      <Text className='text-bcr font-bold text-xl'>Welcome</Text>
      <StatusBar style='auto' />
    </View>
  );
}
