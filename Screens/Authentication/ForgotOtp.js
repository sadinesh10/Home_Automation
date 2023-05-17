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

function ForgotOtp() {
  const [otp, setOtp] = useState([]);
  const [isFocused, setIsFocused] = useState({ focused: true, index: 0 });
  const inputs = Array(4).fill(0);
  const navigation= useNavigation()
  return (

    <View style={{backgroundColor:"white", width:"100%", height:"100%"}}>
      <Image
        style={imageStyles.logo}
        source={require("../../assets/Images/title.png")}
      ></Image>
      <Text style={imageStyles.OtherPagesLogin}>OTP</Text>
      <Text style={imageStyles.noticeText}>Enter the OTP and login</Text>
      <View style={imageStyles.ForgotOtp}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 135,
          }}
        >
          <View style={imageStyles.OtpWrapText}>
            <TextInput
              maxLength={1}
              keyboardType="number-pad"
              style={imageStyles.otpInput}
              placeholder="0"
            ></TextInput>
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

        <Pressable style={imageStyles.pressable} onPress={()=>{
          navigation.navigate("ResetPassword")
        }}>
          <Text style={imageStyles.pressableText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default ForgotOtp;
