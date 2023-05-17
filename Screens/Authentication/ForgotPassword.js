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

function ForgotPassword() {
  const navigation= useNavigation()
  return (
    <View style={{backgroundColor:"white", width:"100%", height:"100%"}}>
      <Image
        style={imageStyles.logo}
        source={require("../../assets/Images/title.png")}
      ></Image>
      <Text style={imageStyles.OtherPagesLogin}>Forgot</Text>
      <Text style={imageStyles.noticeText}>Enter Mail id to get code</Text>
      <View style={imageStyles.ForgotScreenButtomGap}>
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

        <Pressable style={imageStyles.pressable} onPress={()=>{
          navigation.navigate("ForgotOtpScreen")
        }}>
          <Text style={imageStyles.pressableText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default ForgotPassword;
