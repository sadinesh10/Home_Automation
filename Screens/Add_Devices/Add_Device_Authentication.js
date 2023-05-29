import React, { useState } from "react";
import Heading, { BackPressArrow } from "./Heading";
import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { imageStyles } from "../Authentication/Authentication_util";
import { useNavigation } from "@react-navigation/native";
import { G, Path, Svg } from "react-native-svg";

function Add_Device_Authentication() {
  const navigation = useNavigation();
  const [seePassword, setSeePassword] = useState(true);

  return (
    <View style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Select_Device");
          }}
        >
          <BackPressArrow />
        </TouchableOpacity>

        <Text style={{ marginTop: 18, fontSize: 20, fontWeight: "700" }}>
          Add Device
        </Text>
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
          Ensure thst the device is power up and ready for newtork setup
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={imageStyles.wrapperInput}>
          {WifiIcon()}
          <TextInput
            style={imageStyles.input}
            placeholder="SSID Meghdoot"
          ></TextInput>
        </View>
        <View style={imageStyles.wrapperInput}>
          {PasswordLockIcon()}

          <TextInput
            style={imageStyles.input}
            placeholder="Password"
            secureTextEntry={seePassword}
          ></TextInput>
          <TouchableOpacity
            style={imageStyles.wrapperIcon}
            onPress={() => setSeePassword(!seePassword)}
          >
            {seePassword ? ( eyeIcon() ) : ( eyeIcon() ) }
          </TouchableOpacity>
        </View>
        <View style={{ width: "90%" }}>

          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                borderWidth: 1,
                width: "3%",
                height: "30%",
                borderRadius: 300,
                marginTop: 15,
                marginLeft: 20,
                backgroundColor: "#707070",
              }}
            ></View>

            <Text
              style={{
                margin: 8,
                fontSize: 16,
                color: "#707070",
                marginLeft: 15,
                opacity: 100,
              }}
            >
              This Device will only work on 2.4GHz Wi-fi.
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                borderWidth: 1,
                width: "3%",
                height: "19%",
                borderRadius: 300,
                marginTop: 15,
                marginLeft: 20,
                backgroundColor: "#707070",
              }}
            ></View>
            <Text
              style={{
                margin: 8,
                fontSize: 16,
                color: "#707070",
                marginLeft: 15,
                opacity: 100,
              }}
            >
              Connect your mobile to 2.4GHz Wi-Fi newtork first.
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                borderWidth: 1,
                width: "3%",
                height: "19%",
                borderRadius: 300,
                marginTop: 15,
                marginLeft: 20,
                backgroundColor: "#707070",
              }}
            ></View>
            <Text
              style={{
                margin: 8,
                fontSize: 16,
                color: "#707070",
                marginLeft: 15,
                opacity: 100,
              }}
            >
              Please enable 2.4GHz newtork in your router if router is 5GHz
              Wi-fi.
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 130 }}>
        <Pressable
          onPress={() => {
            navigation.navigate("Light_Reset");
          }}
          style={imageStyles.pressable}
        >
          <Text style={imageStyles.pressableText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Add_Device_Authentication;
export function eyeIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.397"
      height="12.265"
      viewBox="0 0 18.397 12.265"
    >
      <G transform="translate(-1.123 -6.75)">
        <Path
          d="M18.406,15.953A2.453,2.453,0,1,1,15.953,13.5,2.453,2.453,0,0,1,18.406,15.953Z"
          transform="translate(-5.63 -3.071)"
          fill="#707070"
        />
        <Path
          d="M19.323,12.216a12.992,12.992,0,0,0-3.8-3.853A9.628,9.628,0,0,0,10.309,6.75,9.182,9.182,0,0,0,5.546,8.134a13.964,13.964,0,0,0-4.2,4.065,1.223,1.223,0,0,0-.025,1.362,12.806,12.806,0,0,0,3.767,3.858,9.5,9.5,0,0,0,5.225,1.6,9.673,9.673,0,0,0,5.22-1.6,12.808,12.808,0,0,0,3.8-3.868,1.234,1.234,0,0,0,0-1.332Zm-9,4.346A3.679,3.679,0,1,1,14,12.882,3.679,3.679,0,0,1,10.322,16.562Z"
          transform="translate(0)"
          fill="#707070"
        />
      </G>
    </Svg>
  );
}

export function PasswordLockIcon() {
  return (
    <Svg
      style={{ marginLeft: 5, marginRight: 2 }}
      xmlns="http://www.w3.org/2000/svg"
      width="14.666"
      height="21.092"
      viewBox="0 0 14.666 21.092"
    >
      <G transform="translate(-4.667 -1.574)">
        <Path
          d="M12.06,13.727a1.607,1.607,0,0,0-.727,3.033v1.907h1.333V16.82a1.607,1.607,0,0,0-.607-3.093Z"
          fill="#707070"
        />
        <Path
          d="M17.333,10V7.147A5.467,5.467,0,0,0,12,1.574,5.467,5.467,0,0,0,6.667,7.147V10h-2V21.333A1.333,1.333,0,0,0,6,22.666H18a1.333,1.333,0,0,0,1.333-1.333V10ZM8,7.147a4.133,4.133,0,0,1,4-4.24,4.133,4.133,0,0,1,4,4.24V10H8ZM6,21.333v-10H18v10Z"
          fill="#707070"
        />
      </G>
    </Svg>
  );
}

export function WifiIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="22.594"
      height="15.439"
      viewBox="0 0 22.594 15.439"
    >
      <G transform="translate(-0.703 -4.5)">
        <Path
          d="M23.078,9.172a.728.728,0,0,0-.072-1.1A18.755,18.755,0,0,0,1,8.069a.728.728,0,0,0-.072,1.1.777.777,0,0,0,1,.075,17.254,17.254,0,0,1,20.15,0,.776.776,0,0,0,1-.074Z"
          fill="#707070"
        />
        <Path
          d="M19.843,12.407a.721.721,0,0,0-.095-1.117,14.257,14.257,0,0,0-15.5,0,.72.72,0,0,0-.1,1.117.788.788,0,0,0,.978.1,12.762,12.762,0,0,1,13.731,0,.786.786,0,0,0,.978-.1Zm-3.274,3.274a.7.7,0,0,0-.15-1.125,9.774,9.774,0,0,0-8.838,0,.7.7,0,0,0-.15,1.125l.022.022a.8.8,0,0,0,.916.135,8.274,8.274,0,0,1,7.261,0,.8.8,0,0,0,.916-.137l.022-.022ZM13.59,18.66a.623.623,0,0,0-.06-.99,3,3,0,0,0-3.06,0,.623.623,0,0,0-.06.99l1.059,1.059a.75.75,0,0,0,1.062,0l1.06-1.06Z"
          fill="#707070"
        />
      </G>
    </Svg>
  );
}
