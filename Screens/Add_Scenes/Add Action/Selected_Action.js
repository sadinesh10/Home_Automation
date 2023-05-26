import { useNavigation } from "@react-navigation/native";
import React, { useState, Component } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from "react-native";
import Slider from "@react-native-community/slider";
import CustomSlider from "./CustomSlider";
import { SCREEN_HEIGHT } from "@gorhom/bottom-sheet";
import Color_Temp from "./Color_Temp";
import RGB_Slider from "./RGB_Slider";
import { useDispatch, useSelector } from "react-redux";
import { imageStyles } from "../../Authentication/Authentication_util";

function Selected_Action() {
  const { selectedRoom } = useSelector((state) => state.mainReducer);

  const dispatch = useDispatch();
  state = {
    slideValue: 0,
  };

  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn((isOn) => !isOn);
  };
  const navigation = useNavigation();
  const [Selected, setSelected] = useState("Select");
  const [light1, setLight1] = useState(false);
  const [Light2, setLight2] = useState(false);
  const [Light3, setLight3] = useState(false);
  const [bulb1, setBulb1] = useState(false);
  const [bulb2, setBulb2] = useState(false);
  const [bulb3, setBulb3] = useState(false);
  const [fan1, setFan1] = useState(false);
  const [switch1, setSwitch1] = useState(false);
  const [Switch2, setSwitch2] = useState(false);
  const [Switch3, setSwitch3] = useState(false);
  const [plug1, setPlug1] = useState(false);
  const array = ["Light1", "Light2", "Light3", "Bulb1", "Bulb2", "Bulb3"];
  const KitchArray = ["Fan1", "Switch1", "Switch2", "Switch3", "Plug1"];
  const [list, setList] = useState(false);
  const array1 = ["1", "2", "3", "4"];
  const array2 = ["AM", "PM"];
  const array3 = ["S", "M", "T", "W", "T", "F", "S"];
  return (
    <View
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "100%",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => {
            navigation.navigate("Add_Scene");
          }}
        >
          <Image
            style={{ margin: 25 }}
            source={require("../../../assets/Unfilled/arrow-back-fill.png")}
          ></Image>
        </Pressable>
        <View>
          <Text style={{ marginTop: 18, fontSize: 20, fontWeight: "700" }}>
            Add Action
          </Text>
        </View>
      </View>
      <ScrollView
        style={{
          width: "100%",
          height: "60%",
        }}
      >
        <View>
          <View>
            <Text
              style={{
                marginHorizontal: 30,
                marginBottom: 10,
                fontSize: 16,
              }}
            >
              Scene Name
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Add_Scene");
              }}
            >
              <View
                style={{
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
                <Text style={{ padding: 15 }}>Makeup</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                marginHorizontal: 30,
                marginBottom: 10,
                fontSize: 16,
              }}
            >
              Selected Room
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Add_Scene");
              }}
            >
              <View
                style={{
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
                <Text style={{ padding: 15 }}>{selectedRoom}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                marginHorizontal: 30,
                marginBottom: 10,
                fontSize: 16,
              }}
            >
              Selected Device
            </Text>
            <TouchableOpacity
              onPress={() => {
                setList(true);
              }}
            >
              <View
                style={{
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
                <Text style={{ padding: 15 }}>{Selected}</Text>
                <Image
                  style={{ margin: 10 }}
                  source={require("../../../assets/Unfilled/arrow-ios-downward-outline.png")}
                ></Image>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                marginHorizontal: 30,
                marginBottom: 10,
                fontSize: 16,
              }}
            >
              Add Action
            </Text>
            <View style={{ marginRight: 30, marginTop: 4 }}>
              <TouchableOpacity
                style={[
                  styles.outter,
                  isOn
                    ? { justifyContent: "flex-end", backgroundColor: "#1A8AE5" }
                    : { justifyContent: "flex-start", backgroundColor: "gray" },
                ]}
                activeOpacity={1}
                onPress={() => {
                  toggleSwitch();
                }}
              >
                <View style={styles.inner}></View>
              </TouchableOpacity>
            </View>
          </View>
          {light1 ? (
            <View>
              <Text
                style={{
                  marginHorizontal: 30,
                  marginBottom: 10,
                  fontSize: 16,
                  fontWeight: "300",
                }}
              >
                Set Brightness to
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginHorizontal: 30,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_765.png")}
                ></Image>
                <CustomSlider />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_767.png")}
                ></Image>
              </View>
            </View>
          ) : null}
          {Light2 ? (
            <View>
              <Text
                style={{
                  marginHorizontal: 30,
                  marginBottom: 10,
                  fontSize: 16,
                  fontWeight: "300",
                }}
              >
                Set Brightness to
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginHorizontal: 30,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_765.png")}
                ></Image>
                <CustomSlider />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_767.png")}
                ></Image>
              </View>
              <Text
                style={{
                  marginHorizontal: 30,
                  marginBottom: 10,
                  fontSize: 16,
                  fontWeight: "300",
                }}
              >
                Set Color Temp
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginHorizontal: 30,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_765.png")}
                ></Image>
                <Color_Temp />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_767.png")}
                ></Image>
              </View>
            </View>
          ) : null}
          {Light3 ? (
            <View>
              <Text
                style={{
                  marginHorizontal: 30,
                  marginBottom: 10,
                  fontSize: 16,
                  fontWeight: "300",
                }}
              >
                Set Brightness to
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginHorizontal: 30,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_765.png")}
                ></Image>
                <CustomSlider />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_767.png")}
                ></Image>
              </View>
              <Text
                style={{
                  marginHorizontal: 30,
                  marginBottom: 10,
                  fontSize: 16,
                  fontWeight: "300",
                }}
              >
                Set Color Temp
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginHorizontal: 30,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_765.png")}
                ></Image>
                <Color_Temp />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_767.png")}
                ></Image>
              </View>
              <Text
                style={{
                  marginHorizontal: 30,
                  marginBottom: 10,
                  fontSize: 16,
                  fontWeight: "300",
                }}
              >
                RGB Color
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginHorizontal: 30,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_765.png")}
                ></Image>
                <RGB_Slider />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_767.png")}
                ></Image>
              </View>
            </View>
          ) : null}
          {bulb1 ? (
            <View>
              <Text
                style={{
                  marginHorizontal: 30,
                  marginBottom: 10,
                  fontSize: 16,
                  fontWeight: "300",
                }}
              >
                Set Brightness to
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginHorizontal: 30,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_765.png")}
                ></Image>
                <CustomSlider />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_767.png")}
                ></Image>
              </View>
            </View>
          ) : null}
          {bulb2 ? (
            <View>
              <Text
                style={{
                  marginHorizontal: 30,
                  marginBottom: 10,
                  fontSize: 16,
                  fontWeight: "300",
                }}
              >
                Set Brightness to
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginHorizontal: 30,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_765.png")}
                ></Image>
                <CustomSlider />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_767.png")}
                ></Image>
              </View>
              <Text
                style={{
                  marginHorizontal: 30,
                  marginBottom: 10,
                  fontSize: 16,
                  fontWeight: "300",
                }}
              >
                Set Color Temp
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginHorizontal: 30,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_765.png")}
                ></Image>
                <Color_Temp />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_767.png")}
                ></Image>
              </View>
            </View>
          ) : null}
          {bulb3 ? (
            <View>
              <Text
                style={{
                  marginHorizontal: 30,
                  marginBottom: 10,
                  fontSize: 16,
                  fontWeight: "300",
                }}
              >
                Set Brightness to
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginHorizontal: 30,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_765.png")}
                ></Image>
                <CustomSlider />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_767.png")}
                ></Image>
              </View>
              <Text
                style={{
                  marginHorizontal: 30,
                  marginBottom: 10,
                  fontSize: 16,
                  fontWeight: "300",
                }}
              >
                Set Color Temp
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginHorizontal: 30,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_765.png")}
                ></Image>
                <Color_Temp />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_767.png")}
                ></Image>
              </View>
              <Text
                style={{
                  marginHorizontal: 30,
                  marginBottom: 10,
                  fontSize: 16,
                  fontWeight: "300",
                }}
              >
                RGB Color
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginHorizontal: 30,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_765.png")}
                ></Image>
                <RGB_Slider />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_767.png")}
                ></Image>
              </View>
            </View>
          ) : null}
          {fan1 ? (
            <View>
              <Text
                style={{
                  marginHorizontal: 30,
                  marginBottom: 10,
                  fontSize: 16,
                  fontWeight: "300",
                }}
              >
                Set Speed to
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginHorizontal: 30,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_771.png")}
                ></Image>
                <CustomSlider />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/Group_769.png")}
                ></Image>
              </View>
            </View>
          ) : null}
          {switch1 ? (
            <View>
              <Text
                style={{
                  marginHorizontal: 30,
                  marginBottom: 10,
                  fontSize: 16,
                  fontWeight: "300",
                }}
              >
                Add Action
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginHorizontal: 30,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/Unfilled/power.png")}
                ></Image>
              </View>
            </View>
          ) : null}
          {Switch2 ? (
            <View>
              <Text
                style={{
                  marginHorizontal: 30,
                  marginBottom: 10,
                  fontSize: 16,
                  fontWeight: "300",
                }}
              >
                Add Action
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginHorizontal: 30,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={{ width: 25, height: 25, marginRight: 10 }}
                    source={require("../../../assets/Unfilled/power.png")}
                  ></Image>
                  <Image
                    style={{ width: 25, height: 25 }}
                    source={require("../../../assets/Unfilled/power.png")}
                  ></Image>
                </View>
              </View>
            </View>
          ) : null}
          {Switch3 ? (
            <View>
              <Text
                style={{
                  marginHorizontal: 30,
                  marginBottom: 10,
                  fontSize: 16,
                  fontWeight: "300",
                }}
              >
                Add Action
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginHorizontal: 30,
                }}
              >
                <View>
                  <View style={{ flexDirection: "row", marginVertical: 5 }}>
                    <Image
                      style={{ width: 25, height: 25, marginRight: 10 }}
                      source={require("../../../assets/Unfilled/power.png")}
                    ></Image>
                    <Image
                      style={{ width: 25, height: 25 }}
                      source={require("../../../assets/Unfilled/power.png")}
                    ></Image>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      style={{ width: 25, height: 25, marginRight: 10 }}
                      source={require("../../../assets/Unfilled/power.png")}
                    ></Image>
                    <Image
                      style={{ width: 25, height: 25 }}
                      source={require("../../../assets/Unfilled/power.png")}
                    ></Image>
                  </View>
                </View>
              </View>
            </View>
          ) : null}
          {plug1 ? (
            <View>
              <Text
                style={{
                  marginHorizontal: 30,
                  marginBottom: 10,
                  fontSize: 16,
                  fontWeight: "300",
                }}
              >
                Add Action
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginHorizontal: 30,
                }}
              >
                <Image
                  style={{ width: 20, height: 30 }}
                  source={require("../../../assets/Unfilled/plug.png")}
                ></Image>
              </View>
            </View>
          ) : null}
          <View>
            <Text
              style={{
                marginTop: 5,
                marginHorizontal: 30,
                marginBottom: 10,
                fontSize: 16,
                fontWeight: "300",
              }}
            >
              Schedule Time
            </Text>
            <View style={{ flexDirection: "row", marginLeft: 20 }}>
              <View style={{ alignItems: "center", marginRight: 50 }}>
                <Text style={{}}>Hrs</Text>
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
                      <View style={{ margin: 5 }}>
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
                      <View style={{ margin: 5 }}>
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
                      <View style={{ padding: 13 }}>
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
            <View style={{ flex: 1, flexDirection: "row", margin: 15 }}>
              {array3.map((item, index) => {
                return (
                  <View
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
          
        </View>
        {list && selectedRoom == "Living Room" ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
            nestedScrollEnabled
            style={{
              borderWidth: 1,
              backgroundColor: "white",
              marginHorizontal: 25,
              paddingTop: 10,
              height: "40%",
              position: "absolute",
              zIndex: 100,
              end: 5,
              right: 5,
              left: 5,
              elevation: 10,
              top: 285,
            }}
          >
            {array.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelected(item);
                    setList(false);
                    if (item == "Light1") {
                      setLight1(true);
                      setLight2(false);
                      setLight3(false);
                      setBulb1(false);
                      setBulb2(false);
                      setBulb3(false);
                    } else if (item == "Light2") {
                      setLight1(false);
                      setLight2(true);
                      setLight3(false);
                      setBulb1(false);
                      setBulb2(false);
                      setBulb3(false);
                    } else if (item == "Light3") {
                      setLight1(false);
                      setLight2(false);
                      setLight3(true);
                      setBulb1(false);
                      setBulb2(false);
                      setBulb3(false);
                    } else if (item == "Bulb1") {
                      setLight1(false);
                      setLight2(false);
                      setLight3(false);
                      setBulb1(true);
                      setBulb2(false);
                      setBulb3(false);
                    } else if (item == "Bulb2") {
                      setLight1(false);
                      setLight2(false);
                      setLight3(false);
                      setBulb1(false);
                      setBulb2(true);
                      setBulb3(false);
                    } else if (item == "Bulb3") {
                      setLight1(false);
                      setLight2(false);
                      setLight3(false);
                      setBulb1(false);
                      setBulb2(false);
                      setBulb3(true);
                    }
                  }}
                >
                  <View
                    style={{
                      borderRadius: 10,
                      marginHorizontal: 15,
                      marginBottom: 15,
                      backgroundColor: "#f2f2f2",
                      fontSize: 18,
                      padding: 1,
                      paddingHorizontal: 10,
                    }}
                  >
                    <Text key={index} style={{ padding: 15 }}>
                      {item}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        ) : null}
        {list && selectedRoom == "Kitchen" ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
            nestedScrollEnabled
            style={{
              borderWidth: 1,
              backgroundColor: "white",
              marginHorizontal: 25,
              paddingTop: 10,
              height: "40%",
              position: "absolute",
              zIndex: 100,
              end: 5,
              right: 5,
              left: 5,
              elevation: 10,
              top: 285,
            }}
          >
            {KitchArray.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelected(item);
                    setList(false);
                    if (item == "Fan1") {
                      setFan1(true);
                      setSwitch1(false);
                      setSwitch2(false);
                      setSwitch3(false);
                      setPlug1(false);
                    } else if (item == "Switch1") {
                      setFan1(false);
                      setSwitch1(true);
                      setSwitch2(false);
                      setSwitch3(false);
                      setPlug1(false);
                    } else if (item == "Switch2") {
                      setFan1(false);
                      setSwitch1(false);
                      setSwitch2(true);
                      setSwitch3(false);
                      setPlug1(false);
                    } else if (item == "Switch3") {
                      setFan1(false);
                      setSwitch1(false);
                      setSwitch2(false);
                      setSwitch3(true);
                      setPlug1(false);
                    } else if (item == "Plug1") {
                      setFan1(false);
                      setSwitch1(false);
                      setSwitch2(false);
                      setSwitch3(false);
                      setPlug1(true);
                    }
                  }}
                >
                  <View
                    style={{
                      borderRadius: 10,
                      marginHorizontal: 15,
                      marginBottom: 15,
                      backgroundColor: "#f2f2f2",
                      fontSize: 18,
                      padding: 1,
                      paddingHorizontal: 10,
                    }}
                  >
                    <Text key={index} style={{ padding: 15 }}>
                      {item}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        ) : null}
      </ScrollView>
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
                navigation.navigate("Success_Action")
              }}
            >
              <Text style={imageStyles.pressableText}>Add Action</Text>
            </Pressable>
            <Pressable onPress={()=>{
              navigation.navigate("Add_Scene")
            }}>
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

export default Selected_Action;
const styles = StyleSheet.create({
  outter: {
    width: 30,
    height: 15,
    backgroundColor: "gray",
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 2,
  },
  inner: {
    width: 10,
    height: 10,
    borderRadius: 15,
    elevation: 8,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
});
