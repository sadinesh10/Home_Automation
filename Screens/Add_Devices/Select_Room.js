import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import Heading from "./Heading";
import { useNavigation } from "@react-navigation/native";

function Select_Room() {
  const navigation= useNavigation()
  return (
    <View style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      <Heading />
      <View>
        <Text style={{ marginLeft: 15, fontSize: 16, fontWeight: "700" }}>
          Select Room
        </Text>
        <View
          style={{
            borderRadius: 15,

            marginLeft: 15,
            marginTop: 10,
            backgroundColor: "#ECECECB2",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "#707070",
              padding: 10,
              opacity: 100,
              fontSize: 16,
              flexDirection: "row",
            }}
          >
            Living Room
          </Text>
          <Image
            style={{ margin: 20 }}
            source={require("../../assets/Unfilled/arrow-ios-downward-outline.png")}
          ></Image>
        </View>
        <View>
          <Text
            style={{
              marginLeft: 15,
              marginTop: 20,
              fontSize: 16,
              fontWeight: "700",
            }}
          >
            Select Device
          </Text>
        </View>
        <View>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Pressable onPress={()=>{
              navigation.navigate("Add_Device_Authentication")
            }}>
              <View
                style={{
                  padding: 25,
                  paddingHorizontal: 25,
                  margin: 20,
                  borderRadius: 15,
                  backgroundColor: "#1A8AE5",
                }}
              >
                <Image
                  style={{ alignSelf: "center", tintColor: "white" }}
                  source={require("../../assets/Unfilled/lamp.png")}
                ></Image>
                <Text style={{ marginTop: 17, color: "white" }}>Light</Text>
              </View>
            </Pressable>

            <View
              style={{
                padding: 25,
                paddingHorizontal: 25,
                margin: 20,
                borderRadius: 15,
                backgroundColor: "#ECECECB2",
              }}
            >
              <Image
                style={{ alignSelf: "center" }}
                source={require("../../assets/Unfilled/cooling-symbol-2677.png")}
              ></Image>
              <Text style={{ marginTop: 20 }}>Fam 1</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <View
              style={{
                padding: 25,
                paddingHorizontal: 17,
                margin: 20,
                borderRadius: 15,
                backgroundColor: "#ECECECB2",
              }}
            >
              <Image
                style={{ alignSelf: "center" }}
                source={require("../../assets/Unfilled/power-off.png")}
              ></Image>
              <Text style={{ marginTop: 18 }}>Switch 1</Text>
            </View>
            <View
              style={{
                padding: 25,
                paddingHorizontal: 25,
                margin: 20,
                borderRadius: 15,
                backgroundColor: "#ECECECB2",
              }}
            >
              <Image
                style={{ alignSelf: "center" }}
                source={require("../../assets/Unfilled/bulb-outline.png")}
              ></Image>
              <Text style={{ marginTop: 20 }}>Bulb 1</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <View
              style={{
                padding: 25,
                paddingHorizontal: 25,
                margin: 20,
                borderRadius: 15,
                backgroundColor: "#ECECECB2",
              }}
            >
              <Image
                style={{ alignSelf: "center" }}
                source={require("../../assets/Unfilled/plug.png")}
              ></Image>
              <Text style={{ marginTop: 20 }}>Plug 1</Text>
            </View>
            <View
              style={{
                padding: 25,
                paddingHorizontal: 29,
                margin: 20,
                borderRadius: 15,
                backgroundColor: "#ECECECB2",
              }}
            >
              <Image
                style={{ alignSelf: "center" }}
                source={require("../../assets/Unfilled/lamp.png")}
              ></Image>
              <Text style={{ marginTop: 20 }}>Light</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Select_Room;
