import React, { useState } from "react";
import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { imageStyles } from "./Authentication_util.js";
import { G, Path, Svg, SvgUri } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

function LoginScreen() {
  const navigation = useNavigation();
  const [seePassword, setSeePassword] = useState(true);

  return (
    <View style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      <Image
        style={imageStyles.logo}
        source={require("../../assets/Images/title.png")}
      ></Image>
      <Text style={imageStyles.loginText}>Login</Text>
      <View style={imageStyles.wrapperInput}>
        <Svg
          style={{ marginRight: 5 }}
          width="21"
          height="15"
          viewBox="0 0 21 15"
        >
          <Path
            d="M21,4.5H3A1.5,1.5,0,0,0,1.5,6V18A1.5,1.5,0,0,0,3,19.5H21A1.5,1.5,0,0,0,22.5,18V6A1.5,1.5,0,0,0,21,4.5ZM19.35,6,12,11.085,4.65,6ZM3,18V6.683l8.572,5.933a.75.75,0,0,0,.855,0L21,6.683V18Z"
            transform="translate(-1.5 -4.5)"
            fill="#707070"
          ></Path>
        </Svg>
        <TextInput style={imageStyles.input} placeholder="Email"></TextInput>
      </View>
      <View style={imageStyles.wrapperInput}>
        <Svg
          style={imageStyles.svgImage}
          width="14.666"
          height="21.092"
          viewBox="0 0 14.666 21.092"
        >
          <G transform="translate(-4.667 -1.574)">
            <Path
              d="M12.06,13.727a1.607,1.607,0,0,0-.727,3.033v1.907h1.333V16.82a1.607,1.607,0,0,0-.607-3.093Z"
              fill="#707070"
            ></Path>
            <Path
              d="M17.333,10V7.147A5.467,5.467,0,0,0,12,1.574,5.467,5.467,0,0,0,6.667,7.147V10h-2V21.333A1.333,1.333,0,0,0,6,22.666H18a1.333,1.333,0,0,0,1.333-1.333V10ZM8,7.147a4.133,4.133,0,0,1,4-4.24,4.133,4.133,0,0,1,4,4.24V10H8ZM6,21.333v-10H18v10Z"
              fill="#707070"
            ></Path>
          </G>
        </Svg>
        <TextInput
          style={imageStyles.input}
          placeholder="Password"
          secureTextEntry={seePassword}
        ></TextInput>
        <TouchableOpacity
          style={imageStyles.wrapperIcon}
          onPress={() => setSeePassword(!seePassword)}
        >
          {seePassword ? (
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
          ) : (
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
          )}
        </TouchableOpacity>
      </View>
      <View style={imageStyles.ButtonGap}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ForgotScreem");
          }}
        >
          <Text
            style={{
              alignSelf: "flex-end",
              marginHorizontal: 20,
              fontSize: 16,
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={imageStyles.pressable}
        >
          <Text style={imageStyles.pressableText}>Login</Text>
        </Pressable>
      </View>
      <Text style={imageStyles.optionalLogin}>Or login using</Text>
      <View style={imageStyles.optionalIcons}>
        <TouchableOpacity style={{ marginHorizontal: 5 }}>
          <Image source={require("../../assets/filled/Group1.png")}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 5 }}>
          <Image source={require("../../assets/filled/Group2.png")}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginHorizontal: 5 }}
          onPress={() => {
            navigation.navigate("LoginWithPhone");
          }}
        >
          <Image source={require("../../assets/filled/Group3.png")}></Image>
        </TouchableOpacity>
      </View>

      <View style={imageStyles.newUserSignUp}>
        <Text>Are you New User?</Text>
        <Text style={imageStyles.signUpText}>Sign Up</Text>
      </View>
    </View>
  );
}

export default LoginScreen;
