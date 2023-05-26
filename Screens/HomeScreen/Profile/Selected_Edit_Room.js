import React from "react";
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { imageStyles } from "../../Authentication/Authentication_util";
function Selected_Edit_Room() {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => {
            navigation.navigate("Edit_Rooms");
          }}
        >
          <Image
            style={{ margin: 25 }}
            source={require("../../../assets/Unfilled/arrow-back-fill.png")}
          ></Image>
        </Pressable>
        <Text style={{ marginTop: 18, fontSize: 20, fontWeight: "700" }}>
          Edit Room
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
          height: "7%",
          width: "86%",
          borderRadius: 10,
          marginTop: 2,
          marginHorizontal: 25,
          marginBottom: 15,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#f2f2f2",
          fontSize: 18,
          padding: 1,
          paddingHorizontal: 10,
          justifyContent: "space-between",
        }}
      >
        <Image source={require("../../../assets/Unfilled/couch.png")}></Image>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Edit_Room_Choose_Icon");
          }}
        >
          <Image source={require("../../../assets/Unfilled/image.png")}></Image>
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
          height: "7%",
          width: "86%",
          borderRadius: 10,
          marginTop: 2,
          marginHorizontal: 25,
          marginBottom: 15,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#f2f2f2",
          fontSize: 18,
          padding: 1,
          paddingHorizontal: 10,
          justifyContent: "space-between",
          marginBottom: 180,
        }}
      >
        <TextInput placeholder="Guest Room"></TextInput>
      </View>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "30%",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View>
          <Pressable
            style={{
              alignItems: "center",
              paddingVertical: 15,
              paddingHorizontal: 32,
              borderRadius: 15,
              backgroundColor: "#1a8ae5",
              marginHorizontal: 25,
            }}
            onPress={() => {
                navigation.navigate("Edit_Rooms");

            }}
          >
            <Text style={imageStyles.pressableText}>Save</Text>
          </Pressable>
          <Pressable
            onPress={() => {
                navigation.navigate("Edit_Rooms");
            }}
          >
            <Text
              style={{
                fontSize: 16,
                lineHeight: 21,
                fontWeight: "bold",
                letterSpacing: 0.25,
                alignSelf: "center",
                marginTop: 10,
              }}
            >
              Cancel
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default Selected_Edit_Room;
