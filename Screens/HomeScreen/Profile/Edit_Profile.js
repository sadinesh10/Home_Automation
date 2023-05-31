import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TextInput, TouchableOpacity } from "react-native";
import { Pressable, Text, View } from "react-native";
import { imageStyles } from "../../Authentication/Authentication_util";
import { ScrollView } from "react-native";

function Edit_Profile() {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Image
            style={{ margin: 27 }}
            source={require("../../../assets/Unfilled/arrow-back-fill.png")}
          ></Image>
        </Pressable>
        <Text style={{ marginTop: 18, fontSize: 22, fontWeight: "700" }}>
          Edit Profile
        </Text>
      </View>

      <View
        style={{
          height: "15%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: 70,
            height: 70,
            borderRadius: 100,
            marginLeft: 20,
          }}
          source={require("../../../assets/Images/sruthi.png")}
        ></Image>
        <TouchableOpacity
          style={{
            marginHorizontal: 5,
            backgroundColor: "#1a8ae5",
            alignSelf: "center",
            paddingVertical: 8,
            borderRadius: 100,
            paddingHorizontal: 8,
            position: "absolute",
            top: 60,
            right: 120,
          }}
          onPress={() => {}}
        >
          <Image
            style={{
              tintColor: "white",
              width: 15,
              height: 14,
              resizeMode: "contain",
            }}
            source={require("../../../assets/Unfilled/camera-outline.png")}
          ></Image>
        </TouchableOpacity>
      </View>
      <View>
        <View style={{ marginTop: 5 }}>
          <Text
            style={{ marginHorizontal: 30, fontWeight: "700", fontSize: 16 }}
          >
            Name
          </Text>
          <View style={imageStyles.wrapperInput}>
            <TextInput
              style={imageStyles.input}
              placeholder="Enter your name"
            ></TextInput>
          </View>
        </View>
        <View style={{ marginTop: 5 }}>
          <Text
            style={{ marginHorizontal: 30, fontWeight: "700", fontSize: 16 }}
          >
            Email Address
          </Text>
          <View style={imageStyles.wrapperInput}>
            <TextInput
              style={imageStyles.input}
              placeholder="Enter your email"
            ></TextInput>
          </View>
        </View>
        <View style={{ marginTop: 5 }}>
          <Text
            style={{ marginHorizontal: 30, fontWeight: "700", fontSize: 16 }}
          >
            Phone Number
          </Text>
          <View style={imageStyles.wrapperInput}>
            <TextInput
              style={imageStyles.input}
              keyboardType="number-pad"
              maxLength={10}
              placeholder="Enter your Phone Number"
            ></TextInput>
          </View>
        </View>
        <View style={{ marginTop: 5 }}>
          <Text
            style={{ marginHorizontal: 30, fontWeight: "700", fontSize: 16 }}
          >
            City
          </Text>
          <View style={imageStyles.wrapperInput}>
            <TextInput
              style={imageStyles.input}
              placeholder="Enter your city"
            ></TextInput>
          </View>
        </View>
        <Pressable
          style={{
            marginTop: 40,
            alignItems: "center",
            paddingVertical: 15,
            paddingHorizontal: 32,
            borderRadius: 15,
            backgroundColor: "#1a8ae5",
            marginHorizontal: 25,
          }}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Text style={imageStyles.pressableText}>Save</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("Profile");
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
    </ScrollView>
  );
}

export default Edit_Profile;
