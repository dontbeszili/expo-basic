import Ionicons from "@expo/vector-icons/Ionicons";
import { PropsWithChildren, useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";

export function Collapsible({
  children,
  title,
}: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  // const theme = useColorScheme() ?? 'light';

  return (
    <View>
      <TouchableOpacity
        className='flex-row items-center space-x-1.5'
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}
      >
        <Ionicons
          name={isOpen ? "chevron-down" : "chevron-forward-outline"}
          size={18}
        />
        <Text>{title}</Text>
      </TouchableOpacity>
      {isOpen && <View className='mt-1.5 ml-6'>{children}</View>}
    </View>
  );
}
