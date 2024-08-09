import Button from "@/src/components/Button";
import { userLoggedIn } from "@/src/store/slices/user/actions/userLoggedIn";
import { userLoggedOut } from "@/src/store/slices/user/actions/userLoggedOut";
import { Text, View } from "react-native";

export default function UsersDemoScreen() {
  const user = {
    uid: "1",
    name: "Gabriela Petrescu",
    role: "Relationship Manager",
  };

  return (
    <View className='container mx-auto px-5 flex-1 items-center bg-bcr '>
      <Text className='text-3xl font-bold text-bcr-primary mb-4'>
        Users Demo Screen
      </Text>
      <Button
        onPress={() => {
          userLoggedIn(user);
        }}
        title='Log In'
      />
      <Button
        onPress={() => {
          userLoggedOut();
        }}
        title='Log Out'
      />
    </View>
  );
}
