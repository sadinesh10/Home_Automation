import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Heading, { BackPressArrow } from "../Heading";
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Circle, G, Path, Svg } from "react-native-svg";
import { WifiIcon } from "../Add_Device_Authentication";

function Switch_Reset() {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      <View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Switch_Device_Authentication");
              console.log("hello");
            }}
          >
            <BackPressArrow />
          </TouchableOpacity>

          <Text style={{ marginTop: 18, fontSize: 20, fontWeight: "700" }}>
            Add Device
          </Text>
        </View>
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
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="50.04"
          height="50.885"
          viewBox="0 0 14.04 14.885"
        >
          <G transform="translate(-2.894 -1.85)">
            <Path
              d="M13.184,6.458l-.5.87a5.533,5.533,0,1,1-5.533,0l-.5-.87a6.539,6.539,0,1,0,6.539,0Z"
              transform="translate(0 -2.326)"
              fill="#1a8ae5"
              stroke-width="0.8"
            />
            <Path
              d="M16.875,2.25h1.006V9.292H16.875Z"
              transform="translate(-7.464 0)"
              fill="#1a8ae5"
              stroke-width="0.8"
            />
          </G>
        </Svg>
        <Text
          style={{
            fontSize: 16,
            marginTop: 15,
            opacity: 100,
          }}
        >
          Switch
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
          If the Plug is already flashing then skip the reset step.
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#707070",
            marginLeft: 15,
            opacity: 100,
            width: "90%",
          }}
        >
          Press Power button for 5 Sec till WIFI LED start blinking slowly.
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 50,
          marginHorizontal: 10,
          marginRight: 30,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 16,
              color: "#707070",
              marginLeft: 15,
              opacity: 100,
              marginRight: 15,
            }}
          >
            Power Button
          </Text>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.04"
            height="20.885"
            viewBox="0 0 14.04 14.885"
          >
            <G transform="translate(-2.894 -1.85)">
              <Path
                d="M13.184,6.458l-.5.87a5.533,5.533,0,1,1-5.533,0l-.5-.87a6.539,6.539,0,1,0,6.539,0Z"
                transform="translate(0 -2.326)"
                fill="#707070"
                stroke-width="0.8"
              />
              <Path
                d="M16.875,2.25h1.006V9.292H16.875Z"
                transform="translate(-7.464 0)"
                fill="#707070"
                stroke-width="0.8"
              />
            </G>
          </Svg>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 16,
              color: "#707070",
              marginLeft: 15,
              opacity: 100,
              marginRight: 15,
            }}
          >
            LED WIFI
          </Text>
          <WifiIcon/>
        </View>
      </View>
      <View style={{ marginTop: 90 }}>
        <Pressable
          onPress={() => {
            navigation.navigate("Switch_Awaiting");
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
              alignSelf: "center",
              marginTop: 10,
            }}
          >
            If Light is not flashing repeat this step.
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Switch_Reset;
