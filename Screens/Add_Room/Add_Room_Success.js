import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
function Add_Room_Success() {
  const navigation = useNavigation();
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
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
            source={require("../../assets/Unfilled/couch.png")}></Image>
          <Text
            style={{
              paddingTop: 50,
              fontWeight: "600",
              color: "white",
              alignContent: "center",
              fontSize: 16,
            }}
          >
            Guest Room added
          </Text>
          <Text
            style={{
              fontWeight: "600",
              color: "white",
              alignContent: "center",
              fontSize: 16,
            }}
          >
            successfully
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Add_Room_Success;