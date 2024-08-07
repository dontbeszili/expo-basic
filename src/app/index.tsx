import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import NavigateButton from "../components/NavigateButton";
import GeorgeLogo from "@/assets/svgs/george-logo.svg";
import ConfettiSvg from "@/assets/svgs/confetti.svg";

export default function HomeScreen() {
  return (
    <View className='flex-1 justify-center items-center bg-primary'>
      <ConfettiSvg className='h-[178px] w-[290px] top-0 left-0 absolute' />
      <GeorgeLogo />
      <Text className='text-bcr font-bold text-xl'>Welcome</Text>
      <View className='mt-6'>
        <NavigateButton title='Start' href='/advisor' />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}
