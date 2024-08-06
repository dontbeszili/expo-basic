import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text } from "react-native";
import { Collapsible } from "@/src/components/Collapsible";
import { ExternalLink } from "@/src/components/ExternalLink";
import ParallaxScrollView from "@/src/components/ParallaxScrollView";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons
          size={310}
          name='code-slash'
          className='absolute text-gray-500 -bottom-22.5 -left-8.75'
        />
      }
    >
      <View className='flex flex-row '>
        <Text className='text-xl'>Explore</Text>
      </View>
      <Text>This app includes example code to help you get started.</Text>
      <Collapsible title='File-based routing'>
        <Text>This app has more screens:</Text>
        <ExternalLink href='https://docs.expo.dev/router/introduction'>
          <Text>Learn more</Text>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}
