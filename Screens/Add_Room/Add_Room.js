import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import Heading, { BackPressArrow } from "../Add_Devices/Heading";
import { useNavigation } from "@react-navigation/native";
import { imageStyles } from "../Authentication/Authentication_util";
import { TextInput } from "react-native-gesture-handler";

function Add_Room() {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        >
         <BackPressArrow/>
        </Pressable>
        <Text style={{ marginTop: 18, fontSize: 20, fontWeight: "700" }}>
          Add Room
        </Text>
      </View>

      <Text
        style={{
          marginTop: 15,
          marginHorizontal: 30,
          marginBottom: 10,
          fontSize: 16,
        }}
      >
        Room Icon
      </Text>
      <View
        style={{
          padding: 15,
          borderRadius: 10,
          marginTop: 2,
          marginHorizontal: 25,
          marginBottom: 15,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#f2f2f2",
          fontSize: 18,
          justifyContent: "space-between",
        }}
      >
        <Image source={require("../../assets/Unfilled/couch.png")}></Image>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Choice_Icon");
          }}
        >
          <Image source={require("../../assets/Unfilled/image.png")}></Image>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          marginTop: 10,
          marginHorizontal: 30,
          marginBottom: 10,
          fontSize: 16,
        }}
      >
        Room Name
      </Text>
      <View
        style={{
          padding: 10,
          borderRadius: 10,
          marginTop: 2,
          marginHorizontal: 25,
          marginBottom: 15,
          backgroundColor: "#f2f2f2",
          fontSize: 18,
          marginBottom: 180,
          width:"86%"
        }}
      >
        <TextInput style={{flexDirection:"row"}} placeholder="Guest Room"></TextInput>
      </View>
      <View>
        <Pressable
          style={{
            marginTop: 130,
            alignItems: "center",
            paddingVertical: 15,
            paddingHorizontal: 32,
            borderRadius: 15,
            backgroundColor: "#1a8ae5",
            marginHorizontal: 25,
          }}
          onPress={() => {
            navigation.navigate("Add_Room_Success");
          }}
        >
          <Text style={imageStyles.pressableText}>Add Room`</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Add_Room;
