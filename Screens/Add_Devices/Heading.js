import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, Text } from "react-native";
import { View } from "react-native";
import { Path, Svg } from "react-native-svg";

function Heading() {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: "row" }}>
      <Pressable
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        {BackPressArrow()}
      </Pressable>
      <Text style={{ marginTop: 18, fontSize: 20, fontWeight: "700" }}>
        Add Device
      </Text>
    </View>
  );
}

export default Heading;
export function BackPressArrow() {
  return <Svg
    style={{ margin: 25 }}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="14.001"
    viewBox="0 0 16 14.001"
  >
    <Path
      d="M19,11H7.14l3.63-4.36A1,1,0,0,0,9.23,5.36l-5,6a1.19,1.19,0,0,0-.09.15.127.127,0,0,1-.07.13.961.961,0,0,0,0,.72.127.127,0,0,0,.07.13,1.19,1.19,0,0,0,.09.15l5,6a1,1,0,1,0,1.54-1.28L7.14,13H19a1,1,0,0,0,0-2Z"
      transform="translate(-4 -4.999)"
      fill="#000000" />
  </Svg>;
}

