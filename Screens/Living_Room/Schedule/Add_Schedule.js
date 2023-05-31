import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Path, Svg } from "react-native-svg";
import {
  CustomSwitchButton,
  HighBrightness,
  LowBrightness,
} from "../Living_Room_Home_Screen";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import CustomSlider from "../CustomSlider";
import Brightness from "../Brightness";
import { imageStyles } from "../../Authentication/Authentication_util";

function Add_Schedule() {
  const navigation = useNavigation();
  const [switchSelected, setSwitchSelected] = useState(false);
  const array1 = ["1", "2", "3", "4"];
  const array2 = ["AM", "PM"];
  const array3 = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <View style={{ backgroundColor: "#FFFFFF" }} tra height="100%">
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Svg
            style={{ margin: 25 }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="14.001"
            viewBox="0 0 16 14.001"
          >
            <Path
              d="M19,11H7.14l3.63-4.36A1,1,0,0,0,9.23,5.36l-5,6a1.19,1.19,0,0,0-.09.15.127.127,0,0,1-.07.13.961.961,0,0,0,0,.72.127.127,0,0,0,.07.13,1.19,1.19,0,0,0,.09.15l5,6a1,1,0,1,0,1.54-1.28L7.14,13H19a1,1,0,0,0,0-2Z"
              transform="translate(-4 -4.999)"
              fill="black"
            />
          </Svg>
        </Pressable>
        <Text style={{ marginTop: 16, fontSize: 22, fontWeight: "700" }}>
          Schedule
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
          marginHorizontal: 20,
        }}
      >
        <Text style={{ marginTop: 5, fontSize: 16, fontWeight: "900" }}>
          Power
        </Text>
        <View
          style={{
            width: "30%",
            height: 40,
            backgroundColor: "#ECECECB3",
            borderRadius: 20,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              width: "50%",
              height: 30,
              backgroundColor: switchSelected ? "#ECECECb3" : "#1a8ae5",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setSwitchSelected(false);
            }}
          >
            <Text style={{ color: switchSelected ? "#000000" : "white" }}>
              On
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "50%",
              height: 30,
              backgroundColor: switchSelected ? "#1a8ae5" : "#ECECECB3",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setSwitchSelected(true);
            }}
          >
            <Text style={{ color: switchSelected ? "white" : "#000000" }}>
              Off
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: 150,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "700" }}>Add Schedule</Text>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <View style={{ alignItems: "center", marginRight: 50 }}>
            <Text>Hrs</Text>
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              nestedScrollEnabled
              showsVerticalScrollIndicator={false}
              style={{
                width: 50,
                height: 60,
                borderRadius: 10,
                backgroundColor: "#ECECECB3",
              }}
            >
              {array1.map((item, index) => {
                return (
                  <View style={{ margin: 5 }} key={index}>
                    <Text
                      style={{
                        alignSelf: "center",
                      }}
                    >
                      {item}
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <View style={{ alignItems: "center", marginRight: 50 }}>
            <Text style={{}}>Min</Text>
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              nestedScrollEnabled
              showsVerticalScrollIndicator={false}
              style={{
                width: 50,
                height: 60,
                borderRadius: 10,
                backgroundColor: "#ECECECB3",
              }}
            >
              {array1.map((item, index) => {
                return (
                  <View style={{ margin: 5 }} key={index}>
                    <Text
                      style={{
                        alignSelf: "center",
                      }}
                    >
                      {item}
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{}}>AM/PM</Text>
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              nestedScrollEnabled
              showsVerticalScrollIndicator={false}
              style={{
                width: 50,
                height: 60,
                borderRadius: 10,
                backgroundColor: "#ECECECB3",
              }}
            >
              {array2.map((item, index) => {
                return (
                  <View style={{ padding: 13 }} key={index}>
                    <Text
                      style={{
                        alignSelf: "center",
                        fontSize: 15,
                      }}
                    >
                      {item}
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "300" }}>Brightness</Text>

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={{ marginTop: 10 }}>
            <LowBrightness />
          </View>

          <Brightness />
          <View style={{ marginTop: 10 }}>
            <HighBrightness />
          </View>
        </View>
      </View>

      <View>
        <Text
          style={{
            marginTop: 10,
            marginHorizontal: 30,
            marginBottom: 10,
            fontSize: 16,
            fontWeight: "300",
          }}
        >
          Repeat
        </Text>
        <View style={{ flexDirection: "row", margin: 15 }}>
          {array3.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 5,
                  height: 50,
                  width: 35,
                  backgroundColor: "#ECECECB3",
                }}
              >
                <Text>{item}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <Pressable
        style={{
          marginTop: 20,
          alignItems: "center",
          paddingVertical: 15,
          paddingHorizontal: 32,
          borderRadius: 15,
          backgroundColor: "#1a8ae5",
          marginHorizontal: 25,
        }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={imageStyles.pressableText}>Save</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.goBack();
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
  );
}

export default Add_Schedule;
