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

function ResetPassword() {
  const navigation = useNavigation()
  return (
    <View style={{backgroundColor:"white", width:"100%", height:"100%"}}>
      <Image
        style={imageStyles.logo}
        source={require("../../assets/Images/title.png")}
      ></Image>
      <Text style={imageStyles.loginText}>Reset Password</Text>
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
        <TextInput style={imageStyles.input} placeholder="Password"></TextInput>
      </View>
      <View style={imageStyles.ResetButtonGap}>
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
            placeholder="Confirm Password"
            secureTextEntry={true}
          ></TextInput>
          <TouchableOpacity
            style={imageStyles.duplicateIcon}
          ></TouchableOpacity>
        </View>

        <Pressable onPress={()=>{
          navigation.navigate("LoginScreen")
        }} style={imageStyles.pressable}>
          <Text style={imageStyles.pressableText}>Reset Password</Text>
        </Pressable>
      </View>
      <Text style={imageStyles.optionalLogin}>Or login using</Text>
      <View style={imageStyles.optionalIcons}>
        <TouchableOpacity style={imageStyles.duplicateIcon}></TouchableOpacity>
        <TouchableOpacity style={imageStyles.duplicateIcon}></TouchableOpacity>
        <TouchableOpacity style={imageStyles.duplicateIcon}></TouchableOpacity>
      </View>
    </View>
  );
}

export default ResetPassword;
