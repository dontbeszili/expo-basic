import { StatusBar } from "expo-status-bar";
import { Image, Pressable, Text, View } from "react-native";
import NavigateButton from "../components/NavigateButton";
import GeorgeLogo from "@/assets/svgs/george-logo.svg";
import ConfettiSvg from "@/assets/svgs/confetti.svg";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View className='container mx-auto px-5 flex-1 justify-end items-center bg-bcr '>
      <ConfettiSvg className='h-[178px] w-[290px] top-0 left-0 absolute' />
      <GeorgeLogo className='mb-12' />
      <Text className='text-3xl font-bold text-bcr-primary mb-4'>Welcome</Text>
      <Text className='text-base text-bcr-primary text-center mb-10'>
        Please note: this prototype is designed to demonstrate top-level
        concepts and does not represent actual for final UX, functionality of
        user flows
      </Text>
      <Link href='/developer' asChild>
        <Pressable>
          <Text className="underline">Developer</Text>
        </Pressable>
      </Link>
      <View className='mb-10 flex items-center'>
        <Text className='text-3xl font-bold text-bcr-primary mb-4'>
          RM view
        </Text>
        <View className='flex-row items-center justify-center'>
          <Image
            source={require("@/assets/images/rm-user.png")}
            className='h-[54px] w-[54px] mr-4'
          />
          <View>
            <Text className='text-base text-bcr-primary font-medium'>
              Gabriela Petrescu
            </Text>
            <Text className='text-base text-bcr-primary font-medium'>
              Relationship Manager
            </Text>
          </View>
        </View>
      </View>
      <Text className='text-base text-bcr-primary text-center mb-10'>
        Tap ot to click to start, and hold down two fingers on screen to restart
        at any point
      </Text>
      <View className='mt-6 w-full mb-10'>
        <NavigateButton title='Start' href='/advisor' />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}
