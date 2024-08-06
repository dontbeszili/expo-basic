import { Image, View, Text } from "react-native";

// import { HelloWave } from '@/src/components/HelloWave';
import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#000", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          className='h-[178px] w-[290px] bottom-0 left-0 absolute'
        />
      }
    >
      <View className='flex-1 justify-center items-center '>
        <Text className='text-black font-bold text-xl'>Advisor Home</Text>
        <StatusBar style='auto' />
      </View>
    </ParallaxScrollView>
  );
}
