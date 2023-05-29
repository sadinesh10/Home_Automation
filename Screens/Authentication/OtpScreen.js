import React, { useState, useRef } from "react";
import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { imageStyles } from "./Authentication_util.js";
import { useNavigation } from "@react-navigation/native";

function OtpScreen() {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Focus the next OTP field if it exists
    if (text !== "" && index < 3 && otpInputRefs[index + 1].current) {
      otpInputRefs[index + 1].current.focus();
    }
  };

  return (
    <View style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      <Image
        style={imageStyles.logo}
        source={require("../../assets/Images/title.png")}
      />
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
          {otp.map((digit, index) => (
            <View key={index} style={imageStyles.OtpWrapText}>
              <TextInput
                ref={otpInputRefs[index]}
                style={imageStyles.otpInput}
                placeholder="0"
                value={digit}
                onChangeText={(text) => handleOtpChange(text, index)}
                keyboardType="numeric"
                maxLength={1}
              />
            </View>
          ))}
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
        <TouchableOpacity style={{ marginHorizontal: 5 }}>
          <Image source={require("../../assets/filled/Group1.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 5 }}>
          <Image source={require("../../assets/filled/Group2.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginHorizontal: 5,
            backgroundColor: "#1a8ae5",
            alignSelf: "center",
            paddingVertical: 7,
            paddingHorizontal: 3,
          }}
          onPress={() => {
            navigation.navigate("LoginWithPhone");
          }}
        >
          <Image
            style={{ tintColor: "white" }}
            source={require("../../assets/Unfilled/email.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={imageStyles.newUserSignUp}>
        <Text>Are you New User?</Text>
        <Text style={imageStyles.signUpText}>Sign Up</Text>
      </View>
    </View>
  );
}

export default OtpScreen;
