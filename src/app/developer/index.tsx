import NavigateButton from "@/src/components/NavigateButton";
import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { Text, View } from "react-native";

export default function DeveloperScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: "Developer" });
  }, [navigation]);

  return (
    <View className='container mx-auto px-5 flex-1 items-center bg-bcr'>
      <NavigateButton title='Roles Demo' href='/developer/roles' />
      <NavigateButton title='Test Demo' href='/developer/test' />
    </View>
  );
}
