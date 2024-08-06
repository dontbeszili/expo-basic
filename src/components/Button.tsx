import React from "react";
import { Text, Pressable } from "react-native";

export default function Button(props) {
  const { onPress, title } = props;
  return (
    <Pressable
      className='lex items-center justify-center py-3 px-8 rounded-md shadow-md bg-black'
      onPress={onPress}
    >
      <Text className='text-lg leading-5 font-bold tracking-wide text-white'>
        {title}
      </Text>
    </Pressable>
  );
}
