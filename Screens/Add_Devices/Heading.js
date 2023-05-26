import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, Text } from "react-native";
import { View } from "react-native";

function Heading() {
  const navigation= useNavigation()
  return (
    <View style={{ flexDirection: "row" }}>
      <Pressable onPress={()=>{
        navigation.navigate("Home")
      }}>
        <Image
          style={{ margin: 25 }}
          source={require("../../assets/Unfilled/arrow-back-fill.png")}
        ></Image>
      </Pressable>
      <Text style={{ marginTop: 18, fontSize: 20, fontWeight: "700" }}>
        Add Device
      </Text>
    </View>
  );
}

export default Heading;
