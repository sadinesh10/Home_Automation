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
  const navigation= useNavigation()
  return (
    <View style={{backgroundColor:"white", width:"100%", height:"100%"}}>
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
          <TouchableOpacity
            style={imageStyles.duplicateIcon}
          ></TouchableOpacity>

          <TextInput
            keyboardType="number-pad"
            maxLength={10}
            style={imageStyles.input}
            placeholder="Phone No."
          ></TextInput>
        </View>

        <Pressable style={imageStyles.pressable} onPress={()=>{
          navigation.navigate("OtpScreen")
        }}>
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

export default LoginWithPhone;
