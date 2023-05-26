import React, { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Heading from "./Heading";
import { useNavigation } from "@react-navigation/native";

function Select_Room() {
  const navigation = useNavigation();
  const [modal, setmodal] = useState(false);
  const [place, setPlace] = useState("Living Room");
  const array = ["Living Room", "Bed Room", "Study Room", "Dinig Room"];
  return (
    <View style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      <Heading />
      <View>
        <Text style={{ marginLeft: 15, fontSize: 16, fontWeight: "700" }}>
          Select Room
        </Text>
        <TouchableOpacity
          onPress={() => {
            setmodal(true);
          }}
        >
          <View
            style={{
              borderRadius: 15,
              marginLeft: 15,
              marginRight: 15,
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
              {place}
            </Text>
            <Image
              style={{ margin: 20 }}
              source={require("../../assets/Unfilled/arrow-ios-downward-outline.png")}
            ></Image>
          </View>
        </TouchableOpacity>
        <Modal visible={modal}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              margin: 30,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                elevation: 10,
                backgroundColor: "white",
                padidingTop: 5,
                paddingHorizontal: 20,
                paddingBottom: 10,
                borderRadius: 13,
                borderWidth: 1,
              }}
            >
              {array.map((item, index) => {
                return (
                  <Pressable
                    onPress={() => {
                      setPlace(item);
                      setmodal(false);
                    }}
                  >
                    <View key={index}>
                      <View
                        style={{
                          backgroundColor: "#ECECECEC",
                          borderRadius: 10,
                          marginHorizontal: 10,
                          marginTop: 10,
                          marginBottom: 5,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: "700",
                            margin: 13,
                            marginRight: 100,
                            color: "#707070",
                          }}
                        >
                          {item}
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </Modal>

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
            <Pressable
              onPress={() => {
                navigation.navigate("Add_Device_Authentication");
              }}
            >
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
            <Pressable
              onPress={() => {
                navigation.navigate("Fan_Device_Authentication");
              }}
            >
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
            </Pressable>
          </View>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Pressable
              onPress={() => {
                navigation.navigate("Switch_Device_Authentication");
              }}
            >
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
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate("Bulb_Device_Authentication");
              }}
            >
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
            </Pressable>
          </View>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Pressable
              onPress={() => {
                navigation.navigate("Plug_Device_Authentication");
              }}
            >
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
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate("Light_1_Device_Authentication");
              }}
            >
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
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Select_Room;
