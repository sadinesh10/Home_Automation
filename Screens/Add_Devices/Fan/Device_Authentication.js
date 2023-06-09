import React, { useState } from "react";
import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { imageStyles } from "../../Authentication/Authentication_util";
import { BackPressArrow } from "../Heading";
import { PasswordLockIcon, WifiIcon, eyeIcon } from "../Add_Device_Authentication";
function Device_Authentication() {
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
          <WifiIcon />
          <TextInput
            style={imageStyles.input}
            placeholder="SSID Meghdoot"
          ></TextInput>
        </View>
        <View style={imageStyles.wrapperInput}>
          <PasswordLockIcon />

          <TextInput
            style={imageStyles.input}
            placeholder="Password"
            secureTextEntry={seePassword}
          ></TextInput>
          <TouchableOpacity
            style={imageStyles.wrapperIcon}
            onPress={() => setSeePassword(!seePassword)}
          >
            {seePassword ? eyeIcon() : eyeIcon()}
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
      <View style={{ marginTop: 100 }}>
        <Pressable
          onPress={() => {
            navigation.navigate("Fan_Reset");
          }}
          style={imageStyles.pressable}
        >
          <Text style={imageStyles.pressableText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Device_Authentication;
