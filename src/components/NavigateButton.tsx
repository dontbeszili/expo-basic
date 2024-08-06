import { Link } from "expo-router";
import React from "react";
import { Text, Pressable } from "react-native";

export default function NavigateButton(props) {
  const { onPress, title, href } = props;
  return (
    <Link href={href} asChild>
      <Pressable
        className='lex items-center justify-center py-3 px-8 rounded-full shadow-md bg-black'
        onPress={onPress}
      >
        <Text className='text-lg leading-5 font-bold tracking-wide text-white'>
          {title}
        </Text>
      </Pressable>
    </Link>
  );
}
