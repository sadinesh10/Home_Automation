import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

function Light_Awaiting() {
  const navigation= useNavigation()
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <View
        style={{
          backgroundColor: "#1a8ae5",
          borderRadius: 15,
          paddingTop: 15,
          paddingBottom: 30,
          marginVertical: "80%",
          marginHorizontal: "27%",
        }}
      >
        <TouchableOpacity>
          <Image
            style={{
              alignSelf: "flex-end",
              width: 13,
              height: 13,
              paddingBottom: 10,
              marginRight: 13,
              tintColor: "white",
            }}
            source={require("../../assets/Unfilled/android-cancel.png")}
          ></Image>
        </TouchableOpacity>

        <View style={{ alignItems: "center" }}>
          <Image
            style={{
              width: 40,
              height: 40,
              resizeMode: "contain",
              marginTop: 20,
              tintColor: "white",
            }}
            source={require("../../assets/Unfilled/lamp.png")}
          ></Image>
          <Pressable onPress={()=>{
            navigation.navigate("Add_Light_Success")

          }} style={{alignItems:"center"}}>
            <Text
              style={{
                paddingTop: 35,
                fontWeight: "300",
                color: "white",
                alignContent: "center",
                fontSize: 16,
              }}
            >
              please wait while
            </Text>
            <Text
              style={{
                fontWeight: "300",
                color: "white",
                alignContent: "center",
                fontSize: 16,
              }}
            >
              configuring new light. It
            </Text>
            <Text
              style={{
                fontWeight: "300",
                color: "white",
                alignContent: "center",
                fontSize: 16,
              }}
            >
              will take some time
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default Light_Awaiting;
