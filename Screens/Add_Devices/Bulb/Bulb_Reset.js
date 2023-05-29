import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BackPressArrow } from "../Heading";
import { G, Path, Svg } from "react-native-svg";

function Bulb_Reset() {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      <View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Add_Device_Authentication");
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
          style={{ alignSelf: "center" }}
          xmlns="http://www.w3.org/2000/svg"
          width="40.667"
          height="40.869"
          viewBox="0 0 12.667 18.869"
        >
          <G transform="translate(-3.187 -0.374)">
            <Path
              d="M11.382,14.772v-.931c0-1.125,1.223-2.188,2.016-2.947A5.612,5.612,0,0,0,15.1,6.707a5.583,5.583,0,1,0-11.167,0,5.748,5.748,0,0,0,1.706,4.187c.788.744,2.016,1.811,2.016,2.947v.931"
              fill="none"
              stroke="#1a8ae5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <Path
              d="M7.875,16.875h2.481"
              transform="translate(0.405 1.619)"
              fill="none"
              stroke="#1a8ae5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <Path
              d="M7.313,15.188h3.722"
              transform="translate(0.347 1.445)"
              fill="none"
              stroke="#1a8ae5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <Path
              d="M9,13.962V9"
              transform="translate(0.52 0.809)"
              fill="none"
              stroke="#1a8ae5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <Path
              d="M10.611,8.438a3.222,3.222,0,0,1-1.473.621,3.222,3.222,0,0,1-1.473-.621"
              transform="translate(0.383 0.752)"
              fill="none"
              stroke="#1a8ae5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
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
          Bulb
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
          <Image source={require("../../../assets/Images/Switch.png")}></Image>
          <AntDesign
            style={{ marginTop: 35, margin: 5 }}
            name="arrowright"
            size={25}
          ></AntDesign>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image source={require("../../../assets/Images/Switch.png")}></Image>
          <AntDesign
            style={{ marginTop: 35, margin: 5 }}
            name="arrowright"
            size={25}
          ></AntDesign>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image source={require("../../../assets/Images/Switch.png")}></Image>
          <AntDesign
            style={{ marginTop: 35, margin: 5 }}
            name="arrowright"
            size={25}
          ></AntDesign>
        </View>
        <View>
          <Image source={require("../../../assets/Images/Switch.png")}></Image>
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
          onPress={() => {
            navigation.navigate("Bulb_Awaiting");
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

export default Bulb_Reset;
