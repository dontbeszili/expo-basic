import React from "react";
import { Text, Pressable } from "react-native";

export default function Button(props) {
  const { onPress, title } = props;
  return (
    <Pressable
      className='items-center justify-center py-3 px-8 rounded-xl shadow-md bg-white w-full	'
      onPress={onPress}
    >
      <Text className='text-lg leading-5 font-bold tracking-wide text-bcr'>
        {title}
      </Text>
    </Pressable>
  );
}
