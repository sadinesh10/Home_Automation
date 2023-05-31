import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { G, Path, Svg } from "react-native-svg";

import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { imageStyles } from "../../Authentication/Authentication_util";

function Interval_Time_adding() {
  const [switchSelected, setSwitchSelected] = useState(false);
  const navigation = useNavigation();
  const array3 = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <View style={{ backgroundColor: "#FFFFFF" }} height="100%">
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
          Interval Time
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
          height: 300,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "700" }}>Add Schedule</Text>
        <View style={{flexDirection:"row", justifyContent:"space-evenly"}}>
          <View style={{marginRight: 15}}>
            <Text style={{ fontSize: 18, fontWeight: "400", marginTop: 10 }}>
              Start
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 5,
                  width: 90,
                  height: 100,
                  borderRadius: 10,
                  backgroundColor: "#ECECECB3",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "400" }}>12:05</Text>
              </View>
              <Svg
                style={{
                  backgroundColor: "#",
                  borderRadius: 100,
                  marginTop: 30,
                  marginLeft: 10,
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40.607"
                viewBox="0 0 14 14.607"
                fill="#000000"
              >
                <G transform="translate(-4.455 -4.455)">
                  <Path
                    d="M12.309,20.118a6.684,6.684,0,1,1,6.684-6.684A6.684,6.684,0,0,1,12.309,20.118Zm0-12.153a5.469,5.469,0,1,0,5.469,5.469A5.469,5.469,0,0,0,12.309,7.965Z"
                    transform="translate(-0.538 -1.055)"
                  />
                  <Path
                    d="M19.057,18.451,16.875,16.27V12.375H18.09v3.39l1.823,1.829Z"
                    transform="translate(-5.712 -3.642)"
                    fill="#707070"
                    stroke="#707070"
                  />
                </G>
              </Svg>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "400", marginTop: 10 }}>
              Stop
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 5,
                  width: 90,
                  height: 100,
                  borderRadius: 10,
                  backgroundColor: "#ECECECB3",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "400" }}>12:05</Text>
              </View>
              <Svg
                style={{
                  backgroundColor: "#",
                  borderRadius: 100,
                  marginTop: 30,
                  marginLeft: 10,
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40.607"
                viewBox="0 0 14 14.607"
                fill="#000000"
              >
                <G transform="translate(-4.455 -4.455)">
                  <Path
                    d="M12.309,20.118a6.684,6.684,0,1,1,6.684-6.684A6.684,6.684,0,0,1,12.309,20.118Zm0-12.153a5.469,5.469,0,1,0,5.469,5.469A5.469,5.469,0,0,0,12.309,7.965Z"
                    transform="translate(-0.538 -1.055)"
                  />
                  <Path
                    d="M19.057,18.451,16.875,16.27V12.375H18.09v3.39l1.823,1.829Z"
                    transform="translate(-5.712 -3.642)"
                    fill="#707070"
                    stroke="#707070"
                  />
                </G>
              </Svg>
            </View>
          </View>
        </View>
        <View style={{flexDirection:"row", justifyContent:"space-evenly"}}>
          <View style={{marginRight: 15}}>
            <Text style={{ fontSize: 18, fontWeight: "400", marginTop: 10 }}>
              Start Period
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 5,
                  width: 90,
                  height: 100,
                  borderRadius: 10,
                  backgroundColor: "#ECECECB3",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "400" }}>12:05</Text>
              </View>
              <Svg
                style={{
                  backgroundColor: "#",
                  borderRadius: 100,
                  marginTop: 30,
                  marginLeft: 10,
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40.607"
                viewBox="0 0 14 14.607"
                fill="#000000"
              >
                <G transform="translate(-4.455 -4.455)">
                  <Path
                    d="M12.309,20.118a6.684,6.684,0,1,1,6.684-6.684A6.684,6.684,0,0,1,12.309,20.118Zm0-12.153a5.469,5.469,0,1,0,5.469,5.469A5.469,5.469,0,0,0,12.309,7.965Z"
                    transform="translate(-0.538 -1.055)"
                  />
                  <Path
                    d="M19.057,18.451,16.875,16.27V12.375H18.09v3.39l1.823,1.829Z"
                    transform="translate(-5.712 -3.642)"
                    fill="#707070"
                    stroke="#707070"
                  />
                </G>
              </Svg>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "400", marginTop: 10 }}>
              Stop Period
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 5,
                  width: 90,
                  height: 100,
                  borderRadius: 10,
                  backgroundColor: "#ECECECB3",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "400" }}>12:05</Text>
              </View>
              <Svg
                style={{
                  backgroundColor: "#",
                  borderRadius: 100,
                  marginTop: 30,
                  marginLeft: 10,
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40.607"
                viewBox="0 0 14 14.607"
                fill="#000000"
              >
                <G transform="translate(-4.455 -4.455)">
                  <Path
                    d="M12.309,20.118a6.684,6.684,0,1,1,6.684-6.684A6.684,6.684,0,0,1,12.309,20.118Zm0-12.153a5.469,5.469,0,1,0,5.469,5.469A5.469,5.469,0,0,0,12.309,7.965Z"
                    transform="translate(-0.538 -1.055)"
                  />
                  <Path
                    d="M19.057,18.451,16.875,16.27V12.375H18.09v3.39l1.823,1.829Z"
                    transform="translate(-5.712 -3.642)"
                    fill="#707070"
                    stroke="#707070"
                  />
                </G>
              </Svg>
            </View>
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

export default Interval_Time_adding;
