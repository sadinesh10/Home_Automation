import React from "react";
import { Image, Text, View } from "react-native";
import Heading from "./Heading";
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { imageStyles } from "../Authentication/Authentication_util";
import { useNavigation } from "@react-navigation/native";

function Light_Reset() {
  const navigation= useNavigation()
  return (
    <View style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      <View>
        <Heading />
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            color: "#707070",
            marginLeft: 15,
            opacity: 100,
          }}
        >
          Reset the device
        </Text>
      </View>
      <View
        style={{
          width: "85%",
          height: "20%",
          borderRadius: 15,
          margin: 25,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ECECECE0",
        }}
      >
        <Image
          style={{
            tintColor: "#1a8ae5",
            width: 40,
            height: 40,
            resizeMode: "contain",
          }}
          source={require("../../assets/Unfilled/lamp.png")}
        ></Image>
        <Text
          style={{
            fontSize: 16,
            marginTop: 15,
            opacity: 100,
          }}
        >
          Light
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            color: "#707070",
            marginLeft: 15,
            opacity: 100,
            width: "90%",
          }}
        >
          Power ON-OFF the Light three times until the light will flash
        </Text>
      </View>
      <View style={{ flexDirection: "row", margin: 18, marginTop: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <Image source={require("../../assets/Images/Switch.png")}></Image>
          <AntDesign
            style={{ marginTop: 35, margin: 5 }}
            name="arrowright"
            size={25}
          ></AntDesign>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image source={require("../../assets/Images/Switch.png")}></Image>
          <AntDesign
            style={{ marginTop: 35, margin: 5 }}
            name="arrowright"
            size={25}
          ></AntDesign>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image source={require("../../assets/Images/Switch.png")}></Image>
          <AntDesign
            style={{ marginTop: 35, margin: 5 }}
            name="arrowright"
            size={25}
          ></AntDesign>
        </View>
        <View>
          <Image source={require("../../assets/Images/Switch.png")}></Image>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Text>ON</Text>
        <Text>OFF</Text>
        <Text>ON</Text>
        <Text>OFF</Text>
      </View>

      <View style={{ marginTop: 70 }}>
        <Pressable
          onPress={()=>{
            navigation.navigate("Light_Awaiting")
          }}
          style={{
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 32,
            borderRadius: 15,
            backgroundColor: "#1a8ae5",
            marginHorizontal: 25,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              lineHeight: 21,
              fontWeight: "700",
              letterSpacing: 0.25,
              color: "white",
            }}
          >
            Confirm the light is
          </Text>
          <Text
            style={{
              fontSize: 18,
              lineHeight: 23,
              fontWeight: "700",
              letterSpacing: 0.25,
              color: "white",
            }}
          >
            flashing
          </Text>
        </Pressable>
        <View>
          <Text
            style={{
              fontSize: 16,
              color: "#707070",
              opacity: 100,
              alignSelf:"center",
              marginTop: 10
            }}
          >
            If Light is not flashing repeat this step.
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Light_Reset;
