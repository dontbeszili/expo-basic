import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import NavigateButton from "../components/NavigateButton";

export default function HomeScreen() {
  return (
    <View className='flex-1 justify-center items-center bg-primary'>
      <Image source={require("@/assets/bcr.png")} className='mb-10' />
      <Text className='text-bcr font-bold text-xl'>Welcome</Text>
      <View className='mt-6'>
        <NavigateButton title='Start' href='/advisor' />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}
