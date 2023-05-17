import React, { useState } from "react";
import {
  Appearance,
  Image,
  Pressable,
  ScrollView,
  Switch,
  SwitchBase,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  ButtomSheetModal,
  ButtomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import Slider from "@react-native-community/slider";
import CustomSlider from "./CustomSlider";
import UseSwitch from "./Switch";
import { color } from "react-native-reanimated";
import OffCustomSlider from "./OffCustomSlider";
import ListCustomSlider from "./ListCiustomSlider";
import ListOffCustomSlider from "./ListOffCustomSlider";

function Home() {
  const [Device, setDevice] = useState(false);
  const [Rooms, setRooms] = useState(false);
  const [linearDevice, setLinearDevice] = useState(false);
  const [GridDevice, setGridDevice] = useState(true);
  const [GridRooms, setGridRooms] = useState(false);
  const [on, setOn] = useState(false);

  const [linearRooms, setLinearRooms] = useState(false);
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ margin: 15 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "900",
              color: "black",
              opacity: 100,
            }}
          >
            Hi, Shruti
          </Text>
          <Text style={{ fontSize: 14, color: "#606060", opacity: 100 }}>
            Welcome to your smarthome
          </Text>
        </View>

        <View style={{ margin: 15 }}>
          <Image
            style={{ width: 35, height: 35, borderRadius: 100 }}
            source={require("../../assets/Images/profile_image.png")}
          ></Image>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#1A8AE5",
          borderRadius: 20,
          margin: 5,
          marginHorizontal: 20,
          paddingTop: 10,
          paddingLeft: 15,
          paddingRight: 15,
          paddingBottom: 10,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text
              style={{
                fontSize: 30,
                color: "white",
                opacity: 100,
                fontWeight: 700,
              }}
            >
              25C
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "white",
                opacity: 100,
                fontWeight: 700,
              }}
            >
              Rain
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "white",
                opacity: 100,
                fontWeight: 700,
              }}
            >
              Sun 18 NOV, 5:30PM
            </Text>
          </View>
          <View>
            <Image
              style={{ tintColor: "white", margin: 20 }}
              source={require("../../assets//Unfilled/rain-heavy.png")}
            ></Image>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "white",
              opacity: 100,
              fontWeight: 700,
            }}
          >
            Indoor
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "white",
              opacity: 100,
              fontWeight: 700,
            }}
          >
            Humidity
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "white",
              opacity: 100,
              fontWeight: 700,
            }}
          >
            Air Quality
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 12,
              color: "white",
              opacity: 100,
              fontWeight: 700,
              width: "38%",
            }}
          >
            25C
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "white",
              opacity: 100,
              fontWeight: 700,
              alignSelf: "center",
              width: "43%",
            }}
          >
            40%
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "white",
              opacity: 100,
              fontWeight: 700,
            }}
          >
            Poor
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        {GridDevice || linearDevice ? (
          <Pressable
            onPress={() => {
              if (GridDevice == true) {
                return null;
              } else if (linearDevice == true) {
                return null;
              }
              setGridDevice(true);
              setGridRooms(false);
              setLinearRooms(false);
            }}
            style={{
              width: "35%",
              backgroundColor: "#1A8AE5",
              borderRadius: 15,
              margin: 10,
              marginRight: 5,
              marginHorizontal: 20,
              paddingTop: 8,
              paddingLeft: 20,
              paddingRight: 20,
              paddingBottom: 8,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "white",
                opacity: 100,
                fontWeight: 900,
                alignSelf: "center",
              }}
            >
              Device
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              setGridDevice(true);
              setGridRooms(false);
              setLinearRooms(false);
            }}
            style={{
              width: "35%",
              backgroundColor: "#ECECECB3",
              borderRadius: 15,
              margin: 10,
              marginRight: 5,
              marginHorizontal: 20,
              paddingTop: 8,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 8,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "black",
                opacity: 100,
                fontWeight: 900,
                alignSelf: "center",
              }}
            >
              Device
            </Text>
          </Pressable>
        )}
        {GridRooms || linearRooms ? (
          <Pressable
            onPress={() => {
              if (GridRooms == true) {
                return null;
              } else if (linearRooms == true) {
                return null;
              }
              setGridRooms(true);
              setGridDevice(false);
              setLinearDevice(false);
            }}
            style={{
              width: "35%",
              backgroundColor: "#1A8AE5",
              borderRadius: 15,
              margin: 10,
              marginHorizontal: 20,
              paddingTop: 8,
              paddingLeft: 30,
              paddingRight: 30,
              paddingBottom: 8,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "white",
                opacity: 100,
                fontWeight: 900,
                alignSelf: "center",
              }}
            >
              Room
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              setGridRooms(true);
              setGridDevice(false);
              setLinearDevice(false);
            }}
            style={{
              width: "35%",
              backgroundColor: "#ECECECB3",
              borderRadius: 15,
              margin: 10,
              marginHorizontal: 20,
              paddingTop: 8,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 8,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "black",
                opacity: 100,
                fontWeight: 900,
                alignSelf: "center",
              }}
            >
              Room
            </Text>
          </Pressable>
        )}

        {GridDevice || GridRooms ? (
          <Pressable
            onPress={() => {
              if (GridDevice == true) {
                setLinearDevice(true);
                setGridDevice(false);
                setGridRooms(false);
                setLinearRooms(false);
              } else if (GridRooms == true) {
                setLinearDevice(false);
                setGridDevice(false);
                setGridRooms(false);
                setLinearRooms(true);
              }
            }}
          >
            <Image
              style={{ marginTop: 22, tintColor: "#1A8AE5" }}
              source={require("../../assets/Unfilled/grid.png")}
            ></Image>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              if (linearDevice == true) {
                setLinearDevice(false);
                setGridDevice(true);
                setGridRooms(false);
                setLinearRooms(false);
              } else if (linearRooms == true) {
                setLinearDevice(false);
                setGridDevice(false);
                setGridRooms(true);
                setLinearRooms(false);
              }
            }}
          >
            <Image
              style={{ marginTop: 22 }}
              source={require("../../assets/Unfilled/table-of-contents.png")}
            ></Image>
          </Pressable>
        )}
      </View>
      {GridDevice ? (
        <View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                backgroundColor: "#ECECECB3",
                width: "45%",
                borderRadius: 10,
                margin: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <View
                  style={{
                    borderRadius: 10,
                    width: "35%",
                    height: "50%",
                    backgroundColor: "#1A8AE5",
                    // justifyContent:"center",
                    // alignSelf:"center"
                    padding: 12,
                  }}
                >
                  <Image
                    style={{
                      tintColor: "white",
                      width: 20,
                      height: 20,
                    }}
                    source={require("../../assets/Unfilled/lamp.png")}
                  ></Image>
                </View>

                <View>
                  <UseSwitch />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "900",
                      opacity: 100,
                      alignSelf: "flex-end",
                    }}
                  >
                    Light 1
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#707070",
                      fontWeight: "900",
                      opacity: 100,
                      alignSelf: "flex-end",
                    }}
                  >
                    Living Room
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 20,
                  marginHorizontal: 10,
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Unfilled/Group_765.png")}
                ></Image>
                <CustomSlider />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Unfilled/Group_767.png")}
                ></Image>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#ECECECB3",
                width: "42%",
                borderRadius: 10,
                margin: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <View
                  style={{
                    borderRadius: 10,
                    width: "35%",
                    height: "50%",
                    backgroundColor: "#1A8AE5",
                    // justifyContent:"center",
                    // alignSelf:"center"
                    padding: 12,
                  }}
                >
                  <Image
                    style={{
                      tintColor: "white",
                      width: 20,
                      height: 20,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    source={require("../../assets/Unfilled/cooling-symbol-2677.png")}
                  ></Image>
                </View>

                <View>
                  <UseSwitch />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "900",
                      opacity: 100,
                      alignSelf: "flex-end",
                    }}
                  >
                    fan 1
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#707070",
                      fontWeight: "900",
                      opacity: 100,
                      alignSelf: "flex-end",
                    }}
                  >
                    Kitchen
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 20,
                  marginHorizontal: 10,
                  alignItems: "center",
                  paddingBottom: 10,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Unfilled/Group_771.png")}
                ></Image>
                <CustomSlider />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Unfilled/Group_769.png")}
                ></Image>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                backgroundColor: "#ECECECB3",
                width: "45%",
                borderRadius: 10,
                margin: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <View
                  style={{
                    borderRadius: 10,
                    width: "35%",
                    height: "50%",
                    backgroundColor: "white",
                    // justifyContent:"center",
                    // alignSelf:"center"
                    padding: 12,
                  }}
                >
                  <Image
                    style={{
                      tintColor: "black",
                      alignSelf: "center",
                    }}
                    source={require("../../assets/Unfilled/bulb-outline.png")}
                  ></Image>
                </View>
                <View>
                  <UseSwitch />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "900",
                      opacity: 100,
                      alignSelf: "flex-end",
                    }}
                  >
                    Bulb 1
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#707070",
                      fontWeight: "900",
                      opacity: 100,
                      alignSelf: "flex-end",
                    }}
                  >
                    Living Room
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 20,
                  marginHorizontal: 10,
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Unfilled/Group_765.png")}
                ></Image>
                <OffCustomSlider />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Unfilled/Group_767.png")}
                ></Image>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#ECECECB3",
                width: "42%",
                borderRadius: 10,
                margin: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <View
                  style={{
                    borderRadius: 10,
                    width: "35%",
                    height: "50%",
                    backgroundColor: "#1A8AE5",
                    // justifyContent:"center",
                    // alignSelf:"center"
                    padding: 14,
                    paddingRight: 15,
                  }}
                >
                  <Image
                    style={{
                      tintColor: "white",
                      width: 13,
                      height: 18,
                      alignSelf: "center",
                    }}
                    source={require("../../assets/Unfilled/plug.png")}
                  ></Image>
                </View>
                <View>
                  <UseSwitch />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "900",
                      opacity: 100,
                      alignSelf: "flex-end",
                    }}
                  >
                    Plug 1
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#707070",
                      fontWeight: "900",
                      opacity: 100,
                      alignSelf: "flex-end",
                    }}
                  >
                    Kitchen
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      ) : null}
      {linearDevice ? (
        <ScrollView style={{ width: "100%", height: "55%" }}>
          <View
            style={{
              margin: 15,
              borderRadius: 10,
              backgroundColor: "#ECECECB3",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 20,
                  marginHorizontal: 6,
                  borderRadius: 10,
                  width: "10%",
                  height: "33%",
                  backgroundColor: "#1A8AE5",
                  // justifyContent:"center",
                  // alignSelf:"center"
                  padding: 12,
                }}
              >
                <Image
                  style={{
                    tintColor: "white",
                    width: 20,
                    height: 20,
                  }}
                  source={require("../../assets/Unfilled/lamp.png")}
                ></Image>
              </View>
              <View style={{ margin: 10 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "900",
                    opacity: 100,
                  }}
                >
                  Light 1
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#707070",
                    fontWeight: "900",
                    opacity: 100,
                  }}
                >
                  Living Room
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../../assets/Unfilled/Group_765.png")}
                  ></Image>
                  <ListCustomSlider />
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../../assets/Unfilled/Group_767.png")}
                  ></Image>
                </View>
              </View>

              <View
                style={{
                  flex: 1,
                  alignItems: "flex-end",
                  marginTop: 3,
                  marginRight: 10,
                }}
              >
                <UseSwitch />
              </View>
            </View>
          </View>
          <View
            style={{
              margin: 15,
              borderRadius: 10,
              backgroundColor: "#ECECECB3",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 20,
                  marginHorizontal: 6,
                  borderRadius: 10,
                  width: "10%",
                  height: "33%",
                  backgroundColor: "#1A8AE5",
                  // justifyContent:"center",
                  // alignSelf:"center"
                  padding: 10,
                }}
              >
                <Image
                  style={{
                    tintColor: "white",
                    width: 13,
                    height: 13,
                  }}
                  source={require("../../assets/Unfilled/cooling-symbol-2677.png")}
                ></Image>
              </View>
              <View style={{ margin: 10 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "900",
                    opacity: 100,
                  }}
                >
                  Fan 1
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#707070",
                    fontWeight: "900",
                    opacity: 100,
                  }}
                >
                  Kitchen
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../../assets/Unfilled/Group_771.png")}
                  ></Image>
                  <ListCustomSlider />
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../../assets/Unfilled/Group_769.png")}
                  ></Image>
                </View>
              </View>

              <View
                style={{
                  flex: 1,
                  alignItems: "flex-end",
                  marginTop: 3,
                  marginRight: 10,
                }}
              >
                <UseSwitch />
              </View>
            </View>
          </View>
          <View
            style={{
              margin: 15,
              borderRadius: 10,
              backgroundColor: "#ECECECB3",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 20,
                  marginHorizontal: 6,
                  borderRadius: 10,
                  width: "10%",
                  height: "33%",
                  backgroundColor: "white",
                  // justifyContent:"center",
                  // alignSelf:"center"
                  padding: 10,
                }}
              >
                <Image
                  style={{
                    tintColor: "black",
                    width: 15,
                    height: 15,
                    resizeMode: "contain",
                  }}
                  source={require("../../assets/Unfilled/bulb-outline.png")}
                ></Image>
              </View>
              <View style={{ margin: 10 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "900",
                    opacity: 100,
                  }}
                >
                  Bulb 1
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#707070",
                    fontWeight: "900",
                    opacity: 100,
                  }}
                >
                  Living Room
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../../assets/Unfilled/Group_765.png")}
                  ></Image>
                  <ListOffCustomSlider />
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../../assets/Unfilled/Group_767.png")}
                  ></Image>
                </View>
              </View>

              <View
                style={{
                  flex: 1,
                  alignItems: "flex-end",
                  marginTop: 3,
                  marginRight: 10,
                }}
              >
                <UseSwitch />
              </View>
            </View>
          </View>
          <View
            style={{
              margin: 15,
              borderRadius: 10,
              backgroundColor: "#ECECECB3",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 20,
                  marginHorizontal: 6,
                  borderRadius: 10,
                  width: "10%",
                  height: "33%",
                  backgroundColor: "#1A8AE5",
                  // justifyContent:"center",
                  // alignSelf:"center"
                  padding: 8,
                }}
              >
                <Image
                  style={{
                    tintColor: "white",
                    width: 15,
                    height: 15,
                    resizeMode: "contain",
                  }}
                  source={require("../../assets/Unfilled/plug.png")}
                ></Image>
              </View>
              <View style={{ margin: 10 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "900",
                    opacity: 100,
                  }}
                >
                  Plug 1
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#707070",
                    fontWeight: "900",
                    opacity: 100,
                  }}
                >
                  Kitchen
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../../assets/Unfilled/Group_765.png")}
                  ></Image>
                  <ListCustomSlider />
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../../assets/Unfilled/Group_767.png")}
                  ></Image>
                </View>
              </View>

              <View
                style={{
                  flex: 1,
                  alignItems: "flex-end",
                  marginTop: 3,
                  marginRight: 10,
                }}
              >
                <UseSwitch />
              </View>
            </View>
          </View>
        </ScrollView>
      ) : null}
      {GridRooms ? (
        <View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                backgroundColor: "#ECECECB3",
                width: "45%",
                borderRadius: 10,
                margin: 10,
              }}
            >
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10,
                  }}
                >
                  <View
                    style={{
                      borderRadius: 10,
                      width: "30%",
                      height: "70%",
                      backgroundColor: "#1A8AE5",
                      // justifyContent:"center",
                      // alignSelf:"center"
                      padding: 10,
                      margin: 8,
                    }}
                  >
                    <Image
                      style={{
                        tintColor: "white",
                        width: 20,
                        height: 20,
                        resizeMode: "contain",
                        alignSelf: "center",
                      }}
                      source={require("../../assets/Unfilled/livingroom-rest-svgrepo-com.png")}
                    ></Image>
                  </View>
                  <View>
                    <UseSwitch />
                  </View>
                </View>

                <View style={{ marginVertical: 25, marginHorizontal: 10 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "900",
                      opacity: 100,
                    }}
                  >
                    Living Room
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#707070",
                      fontWeight: "900",
                      opacity: 100,
                    }}
                  >
                    6 Devices
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#ECECECB3",
                width: "45%",
                borderRadius: 10,
                margin: 10,
              }}
            >
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10,
                  }}
                >
                  <View
                    style={{
                      borderRadius: 10,
                      width: "30%",
                      height: "70%",
                      backgroundColor: "#1A8AE5",
                      // justifyContent:"center",
                      // alignSelf:"center"
                      padding: 10,
                      margin: 8,
                    }}
                  >
                    <Image
                      style={{
                        tintColor: "white",
                        width: 20,
                        height: 20,
                        resizeMode: "contain",
                        alignSelf: "center",
                      }}
                      source={require("../../assets/Unfilled/kitchen-pack-cooker-svgrepo-com.png")}
                    ></Image>
                  </View>
                  <View>
                    <UseSwitch />
                  </View>
                </View>

                <View style={{ marginVertical: 25, marginHorizontal: 10 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "900",
                      opacity: 100,
                    }}
                  >
                    Kitchen
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#707070",
                      fontWeight: "900",
                      opacity: 100,
                    }}
                  >
                    5 Devices
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                backgroundColor: "#ECECECB3",
                width: "45%",
                borderRadius: 10,
                margin: 10,
              }}
            >
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10,
                  }}
                >
                  <View
                    style={{
                      borderRadius: 10,
                      width: "30%",
                      height: "70%",
                      backgroundColor: "white",
                      // justifyContent:"center",
                      // alignSelf:"center"
                      padding: 10,
                      margin: 8,
                    }}
                  >
                    <Image
                      style={{
                        tintColor: "black",
                        width: 20,
                        height: 20,
                        resizeMode: "contain",
                        alignSelf: "center",
                      }}
                      source={require("../../assets/Unfilled/Product-Icons.png")}
                    ></Image>
                  </View>
                  <View>
                    <UseSwitch />
                  </View>
                </View>

                <View style={{ marginVertical: 25, marginHorizontal: 10 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "900",
                      opacity: 100,
                    }}
                  >
                    bed Room
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#707070",
                      fontWeight: "900",
                      opacity: 100,
                    }}
                  >
                    2 Devices
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#ECECECB3",
                width: "45%",
                borderRadius: 10,
                margin: 10,
              }}
            >
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10,
                  }}
                >
                  <View
                    style={{
                      borderRadius: 10,
                      width: "30%",
                      height: "70%",
                      backgroundColor: "#1A8AE5",
                      // justifyContent:"center",
                      // alignSelf:"center"
                      padding: 10,
                      margin: 8,
                    }}
                  >
                    <Image
                      style={{
                        tintColor: "white",
                        width: 20,
                        height: 20,
                        resizeMode: "contain",
                        alignSelf: "center",
                      }}
                      source={require("../../assets/Unfilled/dinner.png")}
                    ></Image>
                  </View>
                  <View>
                    <UseSwitch />
                  </View>
                </View>

                <View style={{ marginVertical: 25, marginHorizontal: 10 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "900",
                      opacity: 100,
                    }}
                  >
                    Dining Room
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#707070",
                      fontWeight: "900",
                      opacity: 100,
                    }}
                  >
                    2 Devices
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      ) : null}
      {linearRooms ? (
        <ScrollView style={{ width: "100%", height: "50%" }}>
          <View
            style={{
              margin: 15,
              borderRadius: 10,
              backgroundColor: "#ECECECB3",
              
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  borderRadius: 10,
                  width: "13%",
                  height: "47%",
                  backgroundColor: "#1A8AE5",
                  // justifyContent:"center",
                  // alignSelf:"center"
                  padding: 10,
                  marginTop: 20,
                  marginHorizontal: 5,
                }}
              >
                <Image
                  style={{
                    tintColor: "white",
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                    alignSelf: "center",
                  }}
                  source={require("../../assets/Unfilled/livingroom-rest-svgrepo-com.png")}
                  ></Image>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-between",
                  marginBottom: 25,
                }}
              >
                <View style={{ margin: 5 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "900",
                      opacity: 100,
                    }}
                  >
                    Living Room 
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#707070",
                      fontWeight: "900",
                      opacity: 100,
                    }}
                  >
                    6 Devices
                  </Text>
                </View>

                <View>
                  <UseSwitch />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              margin: 15,
              borderRadius: 10,
              backgroundColor: "#ECECECB3",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  borderRadius: 10,
                  width: "13%",
                  height: "47%",
                  backgroundColor: "#1A8AE5",
                  // justifyContent:"center",
                  // alignSelf:"center"
                  padding: 10,
                  marginTop: 20,
                  marginHorizontal: 5,
                }}
              >
                <Image
                  style={{
                    tintColor: "white",
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                    alignSelf: "center",
                  }}
                  source={require("../../assets/Unfilled/kitchen-pack-cooker-svgrepo-com.png")}
                  ></Image>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-between",
                  marginBottom: 25,
                }}
              >
                <View style={{ margin: 5 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "900",
                      opacity: 100,
                    }}
                  >
                    Kitchen
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#707070",
                      fontWeight: "900",
                      opacity: 100,
                    }}
                  >
                    5 Devices
                  </Text>
                </View>

                <View>
                  <UseSwitch />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              margin: 15,
              borderRadius: 10,
              backgroundColor: "#ECECECB3",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  borderRadius: 10,
                  width: "13%",
                  height: "47%",
                  backgroundColor: "white",
                  // justifyContent:"center",
                  // alignSelf:"center"
                  padding: 10,
                  marginTop: 20,
                  marginHorizontal: 5,
                }}
              >
                <Image
                  style={{
                    tintColor: "black",
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                    alignSelf: "center",
                  }}
                  source={require("../../assets/Unfilled/Product-Icons.png")}
                  ></Image>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-between",
                  marginBottom: 25,
                }}
              >
                <View style={{ margin: 5 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "900",
                      opacity: 100,
                    }}
                  >
                    Bed Room 
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#707070",
                      fontWeight: "900",
                      opacity: 100,
                    }}
                  >
                    2 Devices
                  </Text>
                </View>

                <View>
                  <UseSwitch />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              margin: 15,
              borderRadius: 10,
              backgroundColor: "#ECECECB3",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  borderRadius: 10,
                  width: "13%",
                  height: "47%",
                  backgroundColor: "#1A8AE5",
                  // justifyContent:"center",
                  // alignSelf:"center"
                  padding: 10,
                  marginTop: 20,
                  marginHorizontal: 5,
                }}
              >
                <Image
                  style={{
                    tintColor: "white",
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                    alignSelf: "center",
                  }}
                  source={require("../../assets/Unfilled/dinner.png")}
                ></Image>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-between",
                  marginBottom: 25,
                }}
              >
                <View style={{ margin: 5 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "900",
                      opacity: 100,
                    }}
                  >
                    Dining Room 
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#707070",
                      fontWeight: "900",
                      opacity: 100,
                    }}
                  >
                    5 Devices
                  </Text>
                </View>

                <View>
                  <UseSwitch />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      ) : null}
    </View>
  );
}

export default Home;
