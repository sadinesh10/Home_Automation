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

function LoginWithPhone() {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      <Image
        style={imageStyles.logo}
        source={require("../../assets/Images/title.png")}
      ></Image>

      <Text style={imageStyles.OtherPagesLogin}>Login With Phone</Text>
      <Text style={imageStyles.noticeText}>
        We will send you the 4 digit verification
      </Text>
      <View style={imageStyles.OtherPagesButtonGap}>
        <View style={imageStyles.wrapperInput}>
          <TouchableOpacity>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.507"
              height="19.5"
              viewBox="0 0 19.507 19.5"
            >
              <Path
                d="M19.5,21.75h-.128C4.635,20.9,2.542,8.467,2.25,4.673A2.25,2.25,0,0,1,4.32,2.25H8.453A1.5,1.5,0,0,1,9.848,3.2L10.988,6a1.5,1.5,0,0,1-.33,1.62l-1.6,1.612a7.027,7.027,0,0,0,5.685,5.7l1.627-1.612A1.5,1.5,0,0,1,18,13.013l2.828,1.133a1.5,1.5,0,0,1,.922,1.394V19.5A2.25,2.25,0,0,1,19.5,21.75Zm-15-18a.75.75,0,0,0-.75.75v.06C4.095,9,6.308,19.5,19.455,20.25a.75.75,0,0,0,.8-.7V15.54l-2.828-1.133L15.27,16.545l-.36-.045C8.385,15.682,7.5,9.158,7.5,9.09l-.045-.36,2.13-2.152L8.46,3.75Z"
                transform="translate(-2.243 -2.25)"
                fill="#707070"
              />
            </Svg>
          </TouchableOpacity>

          <TextInput
            keyboardType="number-pad"
            maxLength={10}
            style={imageStyles.input}
            placeholder="Phone No."
          ></TextInput>
        </View>

        <Pressable
          style={imageStyles.pressable}
          onPress={() => {
            navigation.navigate("OtpScreen");
          }}
        >
          <Text style={imageStyles.pressableText}>Next</Text>
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
          style={{
            marginHorizontal: 5,
            backgroundColor: "#1a8ae5",
            alignSelf: "center",
            paddingVertical: 7,
            paddingHorizontal: 3,
          }}
        >
          <Image
            style={{ tintColor: "white" }}
            source={require("../../assets/Unfilled/email.png")}
          ></Image>
        </TouchableOpacity>
      </View>

      <View style={imageStyles.newUserSignUp}>
        <Text>Are you New User?</Text>
        <Text style={imageStyles.signUpText}>Sign Up</Text>
      </View>
    </View>
  );
}

export default LoginWithPhone;
