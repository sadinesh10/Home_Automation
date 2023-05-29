import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Heading, { BackPressArrow } from "./Heading";
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { imageStyles } from "../Authentication/Authentication_util";
import { useNavigation } from "@react-navigation/native";
import { G, Path, Svg } from "react-native-svg";

function Light_Reset() {
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
          width="50.549"
          height="50.594"
          viewBox="0 0 14.549 18.594"
        >
          <G transform="translate(-206.361 -7.853)">
            <Path
              d="M217.741,24.011H215.6a2.587,2.587,0,0,0-2.481-2.118l-4.511-4.511a1.132,1.132,0,0,0,.017-1.327l3.783-3.783a3.957,3.957,0,0,0,1.125,3.274.319.319,0,0,0,.451,0l1.289-1.289h0a1.952,1.952,0,1,0,2.761-2.761h0l1.079-1.079a.319.319,0,0,0,0-.451,3.919,3.919,0,0,0-2.789-1.155,3.98,3.98,0,0,0-1.473.284l-.74-.74a1.038,1.038,0,0,0-1.468,0l-.721.721a1.039,1.039,0,0,0,0,1.468l.656.656-4.454,4.454a1.135,1.135,0,1,0-.029,2.114l4.2,4.2a2.548,2.548,0,0,0-1.931,2.037h-2.14a.319.319,0,0,0-.319.319v1.6a.319.319,0,0,0,.319.319h9.513a.319.319,0,0,0,.319-.319v-1.6A.318.318,0,0,0,217.741,24.011Zm-.157-12.063a1.315,1.315,0,0,1-1.86,1.86h0l1.86-1.86Zm-5.211-1.853a.4.4,0,0,1,0-.567l.72-.721a.4.4,0,0,1,.567,0l.884.884.009.009a.319.319,0,0,0,.361.063,3.331,3.331,0,0,1,1.409-.314,3.282,3.282,0,0,1,2.1.754l-4.656,4.656a3.318,3.318,0,0,1-.44-3.512.319.319,0,0,0-.063-.361l-.009-.009ZM207.2,16.706a.5.5,0,1,1,.5.5A.5.5,0,0,1,207.2,16.706Zm5.786,5.82a1.973,1.973,0,0,1,1.969,1.484h-3.937A1.973,1.973,0,0,1,212.984,22.526Zm4.438,3.083h-8.876v-.961h8.876v.961Z"
              transform="translate(0)"
              fill="#1a8ae5"
              stroke-width="0.4"
            />
            <Path
              d="M1372.53,664.35a.319.319,0,1,0-.45.451l.578.578a.319.319,0,0,0,.451-.451Z"
              transform="translate(-1153.553 -649.519)"
              fill="#1a8ae5"
              stroke="#1a8ae5"
              stroke-width="0.4"
            />
            <Path
              d="M1202.128,744.966a.319.319,0,0,0-.318.319v.817a.319.319,0,0,0,.319.319h0a.319.319,0,0,0,.319-.319v-.817a.319.319,0,0,0-.318-.319Z"
              transform="translate(-985.109 -729.406)"
              fill="#1a8ae5"
              stroke="#1a8ae5"
              stroke-width="0.4"
            />
            <Path
              d="M1453.839,494.081h-.817a.319.319,0,1,0,0,.637h.817a.319.319,0,1,0,0-.637Z"
              transform="translate(-1233.447 -481.077)"
              fill="#1a8ae5"
              stroke="#1a8ae5"
              stroke-width="0.4"
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
          onPress={() => {
            navigation.navigate("Light_Awaiting");
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

export default Light_Reset;
