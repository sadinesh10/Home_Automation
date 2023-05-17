import React from "react";
import { Image, Text } from "react-native";
import { View } from "react-native";

function Heading() {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        style={{ margin: 25 }}
        source={require("../../assets/Unfilled/arrow-back-fill.png")}
      ></Image>
      <Text style={{ marginTop: 18, fontSize: 20, fontWeight: "700" }}>
        Add Device
      </Text>
    </View>
  );
}

export default Heading;
