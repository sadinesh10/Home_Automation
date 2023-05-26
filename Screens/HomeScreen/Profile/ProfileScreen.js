import React from "react";
import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import UseSwitch from "../Switch";
import { useNavigation } from "@react-navigation/native";

function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Pressable
            onPress={() => {
              navigation.navigate("TabHome");
            }}
          >
            <Image
              style={{ margin: 27 }}
              source={require("../../../assets/Unfilled/arrow-back-fill.png")}
            ></Image>
          </Pressable>
          <Text style={{ marginTop: 18, fontSize: 22, fontWeight: "700" }}>
            My Profile
          </Text>
        </View>

        <Pressable
          onPress={() => {
            navigation.navigate("Edit_Profile");
          }}
        >
          <Image
            style={{
              margin: 25,
              alignSelf: "flex-end",
              tintColor: "#1A8AE5",
              width: 20,
              height: 20,
              resizeMode: "contain",
            }}
            source={require("../../../assets/Unfilled/bx-edit-alt.png")}
          ></Image>
        </Pressable>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ width: 55, height: 55, borderRadius: 100, marginLeft: 20 }}
          source={require("../../../assets/Images/profile_image.png")}
        ></Image>
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>Shruti Shah</Text>
          <Text style={{ fontSize: 14, color: "#707070" }}>UX Designer</Text>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={{ flexDirection: "row", marginLeft: 30 }}>
          <Image
            style={{
              marginRight: 30,
              width: 20,
              height: 20,
              resizeMode: "contain",
              marginBottom: 10,
            }}
            source={require("../../../assets/Unfilled/location.png")}
          ></Image>
          <Text style={{ fontSize: 14, color: "#707070" }}>Mumbai, India</Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 30 }}>
          <Image
            style={{
              marginRight: 30,
              marginBottom: 10,

              width: 20,
              height: 20,
              resizeMode: "contain",
            }}
            source={require("../../../assets/Unfilled/phone.png")}
          ></Image>
          <Text style={{ fontSize: 14, color: "#707070" }}>+91 2356847895</Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 30 }}>
          <Image
            style={{
              marginRight: 30,
              marginBottom: 10,

              width: 20,
              height: 20,
              resizeMode: "contain",
            }}
            source={require("../../../assets/Unfilled/email.png")}
          ></Image>
          <Text style={{ fontSize: 14, color: "#707070" }}>
            shah345@gmail.com
          </Text>
        </View>
      </View>
      <View
        style={{ borderWidth: 0.2, borderColor: "#707070", margin: 20 }}
      ></View>
      <View>
        <View style={{ flexDirection: "row", marginLeft: 30 }}>
          <Image
            style={{
              marginRight: 30,
              marginBottom: 10,
              marginTop: 10,
              tintColor: "#1A8AE5",
              width: 25,
              height: 25,
              resizeMode: "contain",
            }}
            source={require("../../../assets/Unfilled/devices.png")}
          ></Image>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 18, fontWeight: "700" }}>Devices</Text>
              <Text style={{ fontSize: 14, color: "#707070" }}>05 Devices</Text>
            </View>
            <TouchableOpacity onPress={()=>{
              navigation.navigate("Edit_Devices")
            }}>
              <View style={{ margin: 20, marginRight: 30 }}>
                <Image
                  source={require("../../../assets/Unfilled/arrow-ios-forward-outline.png")}
                ></Image>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 30 }}>
          <Image
            style={{
              marginRight: 30,
              marginBottom: 10,
              marginTop: 10,
              tintColor: "#1A8AE5",
              width: 25,
              height: 25,
              resizeMode: "contain",
            }}
            source={require("../../../assets/Unfilled/room.png")}
          ></Image>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 18, fontWeight: "700" }}>Rooms</Text>
              <Text style={{ fontSize: 14, color: "#707070" }}>05 Devices</Text>
            </View>
            <TouchableOpacity onPress={()=>{
              navigation.navigate("Edit_Rooms")
            }}>
              <View style={{ margin: 20, marginRight: 30 }}>
                <Image
                  source={require("../../../assets/Unfilled/arrow-ios-forward-outline.png")}
                ></Image>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 30 }}>
          <Image
            style={{
              marginRight: 30,
              marginBottom: 10,
              marginTop: 10,
              width: 25,
              height: 25,
              resizeMode: "contain",
            }}
            source={require("../../../assets/Unfilled/notification.png")}
          ></Image>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: "700" }}>
                Notifications
              </Text>
            </View>
            <View style={{ marginRight: 20 }}>
              <UseSwitch />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{ borderWidth: 0.2, borderColor: "#707070", margin: 20 }}
      ></View>
      <View style={{ flexDirection: "row", marginLeft: 30 }}>
        <Image
          style={{
            marginRight: 30,
            marginBottom: 10,
            marginTop: 10,
            tintColor: "#1A8AE5",
            width: 25,
            height: 25,
            resizeMode: "contain",
          }}
          source={require("../../../assets/Unfilled/login.png")}
        ></Image>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>Logout</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ProfileScreen;
