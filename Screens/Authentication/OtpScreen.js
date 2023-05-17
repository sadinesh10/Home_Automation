import React from "react";
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

function OtpScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      <Image
        style={imageStyles.logo}
        source={require("../../assets/Images/title.png")}
      ></Image>
      <Text style={imageStyles.OtherPagesLogin}>OTP</Text>
      <Text style={imageStyles.noticeText}>Enter the OTP and login</Text>
      <View style={imageStyles.OtherPagesButtonGap}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 135,
          }}
        >
          <View style={imageStyles.OtpWrapText}>
            <TextInput style={imageStyles.otpInput} placeholder="0"></TextInput>
          </View>
          <View style={imageStyles.OtpWrapText}>
            <TextInput style={imageStyles.otpInput} placeholder="0"></TextInput>
          </View>
          <View style={imageStyles.OtpWrapText}>
            <TextInput style={imageStyles.otpInput} placeholder="0"></TextInput>
          </View>
          <View style={imageStyles.OtpWrapText}>
            <TextInput style={imageStyles.otpInput} placeholder="0"></TextInput>
          </View>
        </View>

        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={imageStyles.pressable}
        >
          <Text style={imageStyles.pressableText}>Next</Text>
        </Pressable>
      </View>
      <Text style={imageStyles.optionalLogin}>Or login using</Text>
      <View style={imageStyles.optionalIcons}>
        <TouchableOpacity style={imageStyles.duplicateIcon}></TouchableOpacity>
        <TouchableOpacity style={imageStyles.duplicateIcon}></TouchableOpacity>
        <TouchableOpacity style={imageStyles.duplicateIcon}></TouchableOpacity>
      </View>

      <View style={imageStyles.newUserSignUp}>
        <Text>Are you New User?</Text>
        <Text style={imageStyles.signUpText}>Sign Up</Text>
      </View>
    </View>
  );
}

export default OtpScreen;
