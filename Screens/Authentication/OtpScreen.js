import React, { useState } from "react";
import {
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { imageStyles } from "./Authentication_util.js";
import { G, Path, Svg, SvgUri } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

function OtpScreen() {
  const navigation = useNavigation();
  const [otp, setOtp] = useState("");

  const handleOtpChange = (text, index) => {
    let newOtp = otp;
    newOtp = newOtp.substring(0, index) + text + newOtp.substring(index + 1);
    setOtp(newOtp);
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
          <View style={imageStyles.OtpWrapText}>
            <TextInput
              keyboardType="number-pad"
              style={imageStyles.otpInput}
              placeholder=" "
              value={otp[0]}
              onChangeText={(text) => handleOtpChange(text, 0)}
            />
          </View>
          <View style={imageStyles.OtpWrapText}>
            <TextInput
              keyboardType="number-pad"
              style={imageStyles.otpInput}
              placeholder=" "
              value={otp[1]}
              onChangeText={(text) => handleOtpChange(text, 1)}
            />
          </View>
          <View style={imageStyles.OtpWrapText}>
            <TextInput
              keyboardType="number-pad"
              style={imageStyles.otpInput}
              placeholder=" "
              value={otp[2]}
              onChangeText={(text) => handleOtpChange(text, 2)}
            />
          </View>
          <View style={imageStyles.OtpWrapText}>
            <TextInput
              keyboardType="number-pad"
              style={imageStyles.otpInput}
              placeholder=" "
              value={otp[3]}
              onChangeText={(text) => handleOtpChange(text, 3)}
            />
          </View>
        </View>

        <Pressable
          onPress={() => {
            if (otp.length === 4) {
              navigation.navigate("Home");
            }
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
