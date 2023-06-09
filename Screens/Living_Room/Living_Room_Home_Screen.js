import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Circle, G, Path, Rect, Svg } from "react-native-svg";
import Schedules_List from "./Schedule/Schedules_List";
import Device_Information from "./Setttings/Settings";
import Settings from "./Setttings/Settings";
import Patterns from "./Patterns/Patterns";
import CustomSlider from "./CustomSlider";
import Color_Temp from "./Color_Temp";
import RGB_Custom_Slider from "./RGB_Custom_Slider";
import Brightness from "./Brightness";
import Schedule_Navigation from "../../Navigation/Schedule_Navigation";


function Living_Room_Home_Screen() {
  const navigation = useNavigation();
  const [modal, setModal] = useState(false);
  const [schedule, setSchedule] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
    const [switchSelected, setSwitchSelected] = useState(false);

  const [settings, setSettings] = useState(false);
  const [patterns, setPatterns] = useState(false);
  const [addSchedule, setAddSchedule] = useState(false);

  const [light1, setlight1] = useState(false);
  const array2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const array = [
    {
      id: 1,
      name: "Light 1",
      svg: ({ select }) => <Light1 tint={select ? "#FFFFFF" : "#707070"} />,
      select: false,
    },
    {
      id: 2,
      name: "Light 2",
      svg: ({ select }) => <Light2 tint={select ? "#FFFFFF" : "#707070"} />,
      select: false,
    },
    {
      id: 3,
      name: "Light 3",
      svg: ({ select }) => <Light3 tint={select ? "#FFFFFF" : "#707070"} />,
      select: false,
    },
    {
      id: 4,
      name: "Bulb 1",
      svg: ({ select }) => <Bulb1 tint={select ? "#FFFFFF" : "#707070"} />,
      select: false,
    },
    {
      id: 5,
      name: "Bulb 2",
      svg: ({ select }) => <Bulb2 tint={select ? "#FFFFFF" : "#707070"} />,
      select: false,
    },
    {
      id: 6,
      name: "Bulb 3",
      svg: ({ select }) => <Bulb3 tint={select ? "#FFFFFF" : "#707070"} />,
      select: false,
    },
  ];
  const menusBaseArray = [
    {
      id: 1,
      name: "Leave Off",
      select: false,
      svg: () => {
        return (
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="21.538"
            height="25.128"
            viewBox="0 0 21.538 25.128"
          >
            <Path
              d="M14.359.395V2.807H7.179V.395h7.179ZM9.591,15.987V8.808h2.356v7.179H9.591Zm9.591-7.909a10.326,10.326,0,0,1,2.356,6.675A10.385,10.385,0,0,1,18.4,22.381a10.385,10.385,0,0,1-7.628,3.141,10.385,10.385,0,0,1-7.628-3.141A10.352,10.352,0,0,1,0,14.782,10.446,10.446,0,0,1,3.141,7.154a10.338,10.338,0,0,1,7.628-3.169A10.4,10.4,0,0,1,17.5,6.4l1.682-1.738A11.912,11.912,0,0,1,20.865,6.34ZM10.769,23.166A8.011,8.011,0,0,0,16.686,20.7a8.151,8.151,0,0,0,2.44-5.945,8.059,8.059,0,0,0-2.44-5.917A8.054,8.054,0,0,0,10.769,6.4a8.061,8.061,0,0,0-5.917,2.44,8.056,8.056,0,0,0-2.44,5.917A8.148,8.148,0,0,0,4.852,20.7,8.018,8.018,0,0,0,10.769,23.166Z"
              transform="translate(0 -0.395)"
              fill="#707070"
            />
          </Svg>
        );
      },
    },
    {
      id: 2,
      name: "Pattern",
      select: false,
      svg: () => {
        return (
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={25.2}
            height={25.2}
            viewBox="0 0 25.2 25.2"
          >
            <G transform="translate(-4283 -17672)">
              <G
                transform="translate(4283 17672)"
                fill="none"
                stroke="#707070"
                strokeWidth={2}
              >
                <Rect width={11.2} height={14} rx={1.5} stroke="none" />
                <Rect
                  x={1}
                  y={1}
                  width={9.2}
                  height={12}
                  rx={0.5}
                  fill="none"
                />
              </G>
              <G
                transform="translate(4297 17672)"
                fill="none"
                stroke="#707070"
                strokeWidth={2}
              >
                <Rect width={11.2} height={10} rx={1.5} stroke="none" />
                <Rect x={1} y={1} width={9.2} height={8} rx={0.5} fill="none" />
              </G>
              <G
                transform="translate(4283 17688)"
                fill="none"
                stroke="#707070"
                strokeWidth={2}
              >
                <Rect width={11.2} height={9.2} rx={1.5} stroke="none" />
                <Rect
                  x={1}
                  y={1}
                  width={9.2}
                  height={7.2}
                  rx={0.5}
                  fill="none"
                />
              </G>
              <G
                transform="translate(4297 17684)"
                fill="none"
                stroke="#707070"
                strokeWidth={2}
              >
                <Rect width={11.2} height={13.2} rx={1.5} stroke="none" />
                <Rect
                  x={1}
                  y={1}
                  width={9.2}
                  height={11.2}
                  rx={0.5}
                  fill="none"
                />
              </G>
            </G>
          </Svg>
        );
      },
    },
    {
      id: 3,
      name: "Schedule",
      select: false,
      svg: () => {
        return (
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="29.562"
            height="25.128"
            viewBox="0 0 29.562 25.128"
          >
            <Path
              d="M29.952,12.34l2.311-2.311-2.09-2.09-2.526,2.524a10.383,10.383,0,1,0,2.3,1.877ZM22.347,26.721a7.39,7.39,0,1,1,7.39-7.39A7.4,7.4,0,0,1,22.347,26.721Z"
              transform="translate(-3.132 -4.55)"
              fill="#707070"
            />
            <Path
              d="M20.737,14.847h2.956v5.912H20.737ZM19.259,4.5h5.912V7.456H19.259ZM4.478,11.89H10.39v2.956H4.478Zm0,11.825H10.39v2.956H4.478ZM3,17.8H8.9v2.956H3Z"
              transform="translate(-3 -4.5)"
              fill="#707070"
            />
          </Svg>
        );
      },
    },
    {
      id: 4,
      name: "Settings",
      select: false,
      svg: () => {
        return (
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24.465}
            height={25.127}
            viewBox="0 0 24.465 25.127"
          >
            <Path
              d="M24.842,15.542V14.165l1.728-1.512a1.8,1.8,0,0,0,.342-2.3l-2.124-3.6a1.814,1.814,0,0,0-2.133-.81l-2.187.738a10.214,10.214,0,0,0-1.179-.675l-.459-2.268a1.8,1.8,0,0,0-1.8-1.449H12.818a1.8,1.8,0,0,0-1.8,1.449l-.459,2.268a10.331,10.331,0,0,0-1.188.675L7.229,5.912a1.8,1.8,0,0,0-.575-.054,1.8,1.8,0,0,0-1.557.9l-2.124,3.6a1.8,1.8,0,0,0,.369,2.259l1.7,1.557v1.377l-1.7,1.512a1.8,1.8,0,0,0-.369,2.3l2.124,3.6a1.814,1.814,0,0,0,2.133.81l2.187-.738A10.214,10.214,0,0,0,10.6,23.7l.459,2.268a1.8,1.8,0,0,0,1.8,1.449H17.1a1.8,1.8,0,0,0,1.8-1.449l.459-2.268a10.332,10.332,0,0,0,1.188-.675l2.178.738a1.814,1.814,0,0,0,2.133-.81l2.052-3.6a1.8,1.8,0,0,0-.369-2.259Zm-1.611,6.516-3.087-1.044A7.973,7.973,0,0,1,17.7,22.427l-.638,3.231H12.818l-.639-3.2a8.423,8.423,0,0,1-2.43-1.413l-3.1,1.008-2.124-3.6L6.978,16.3a8.01,8.01,0,0,1,0-2.817L4.53,11.258l2.124-3.6L9.741,8.7A7.973,7.973,0,0,1,12.18,7.29l.638-3.231h4.248l.639,3.2a8.424,8.424,0,0,1,2.43,1.413l3.1-1.008,2.124,3.6-2.448,2.16a8.01,8.01,0,0,1,0,2.817l2.448,2.223Z"
              transform="translate(-2.715 -2.295)"
              fill="#707070"
            />
            <Path
              d="M16.65,22.049a5.346,5.346,0,1,1,3.834-1.566A5.4,5.4,0,0,1,16.65,22.049Zm0-9a3.519,3.519,0,1,0,2.57,1.03A3.519,3.519,0,0,0,16.65,13.05Z"
              transform="translate(-4.422 -4.086)"
              fill="#707070"
            />
          </Svg>
        );
      },
    },
  ];
  const [menus, setMenus] = useState(menusBaseArray);

  const onSelect = (item, index) => {
    setSelectedIndex(index);
  };
  useEffect(() => {
    const menusToUpdate = [...menusBaseArray];

    if (
      selectedIndex == 0 ||
      selectedIndex == 1 ||
      selectedIndex == 3 ||
      selectedIndex == 4
    ) {
      setMenus(menusToUpdate.filter((value, index) => index != 1));
    } else {
      setMenus(menusToUpdate);
    }
  }, [selectedIndex]);
  return (
    <View style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      {!schedule && !settings && !patterns && (
        <View>
          <ImageBackground
            style={{ width: "100%", height: 200 }}
            source={require("../../assets/Images/LR_Image.png")}
          >
            <View style={{ justifyContent: "space-between" }}>
              <Pressable
                onPress={() => {
                  navigation.navigate("TabHome");
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
              <Text
                style={{
                  margin: 25,
                  marginTop: 60,
                  fontSize: 25,
                  fontWeight: "900",
                  color: "black",
                }}
              >
                Living Room
              </Text>
            </View>
          </ImageBackground>
          <ScrollView horizontal>
            <View
              style={{
                marginTop: 30,
                marginHorizontal: 5,
                flexDirection: "row",
                height: 70,
              }}
              horizontal={true}
            >
              {array.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => {
                      onSelect(item, index);
                    }}
                    style={{
                      marginHorizontal: 20,
                    }}
                  >
                    <View>
                      <View
                        style={{
                          borderRadius: 10,
                          width: 50,
                          height: 50,
                          backgroundColor:
                            selectedIndex == index ? "#1a8ae5" : "#ECECECB3",
                        }}
                      >
                        <View
                          style={{
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <item.svg select={selectedIndex == index} />
                        </View>
                      </View>
                      <Text style={{ alignSelf: "center" }}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
          {array[selectedIndex].id == 1 || array[selectedIndex].id == 4 ? (
            <View style={{ height: "54%" }}>
              <View>
                <Text
                  style={{
                    alignSelf: "center",
                    fontWeight: "900",
                    fontSize: 18,
                  }}
                >
                  Brightness
                </Text>
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <CustomSlider />

                  {CustomSwitchButton(switchSelected, setSwitchSelected)}
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginHorizontal: 42,
                  }}
                >
                  {LowBrightness()}
                  {HighBrightness()}
                </View>
              </View>
            </View>
          ) : null}
          {array[selectedIndex].id == 2 || array[selectedIndex].id == 5 ? (
            <View style={{ height: "54%" }}>
              <View>
                <Text
                  style={{
                    alignSelf: "center",
                    fontWeight: "900",
                    fontSize: 18,
                  }}
                >
                  Brightness
                </Text>
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <CustomSlider />

                  {CustomSwitchButton(switchSelected, setSwitchSelected)}
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginHorizontal: 42,
                  }}
                >
                  {LowBrightness()}
                  {HighBrightness()}
                </View>
                <View style={{ margin: 20 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "300",
                      marginBottom: 10,
                    }}
                  >
                    Color Temprature
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginHorizontal: 5,
                    }}
                  >
                    <View style={{ marginTop: 10, marginRight: 5 }}>
                      {LowBrightness()}
                    </View>
                    <Color_Temp />
                    <View style={{ marginTop: 10, marginLeft: 5 }}>
                      {HighBrightness()}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ) : null}
          {array[selectedIndex].id == 3 || array[selectedIndex].id == 6 ? (
            <ScrollView style={{ height: "50%",  }}>
              <View>
                <Text
                  style={{
                    alignSelf: "center",
                    fontWeight: "900",
                    fontSize: 18,
                  }}
                >
                  Brightness
                </Text>
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <RGB_Custom_Slider />

                  {CustomSwitchButton(switchSelected, setSwitchSelected)}
                </View>

                <View style={{ marginHorizontal: 20 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "300",
                      marginBottom: 10,
                    }}
                  >
                    Brightness
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginHorizontal: 5,
                    }}
                  >
                    <View style={{ marginTop: 10, marginRight: 5 }}>
                      {LowBrightness()}
                    </View>
                    <Brightness/>
                    <View style={{ marginTop: 10, marginLeft: 5 }}>
                      {HighBrightness()}
                    </View>
                  </View>
                </View>
                <View style={{ margin: 20 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "300",
                      marginBottom: 10,
                    }}
                  >
                    Color Temprature
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginHorizontal: 5,
                      marginBottom: 20
                    }}
                  >
                    <View style={{ marginTop: 10, marginRight: 5 }}>
                      {LowBrightness()}
                    </View>
                    <Color_Temp />
                    <View style={{ marginTop: 10, marginLeft: 5 }}>
                      {HighBrightness()}
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          ) : null}
        </View>
      )}

      {schedule && <Schedule_Navigation onBackPress={() => setSchedule()} />}
      {settings && <Settings onBackPress={() => setSettings()} />}
      {patterns && <Patterns onBackPress={() => setPatterns()} />}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          position: "absolute",
          bottom: 0,
          start: 0,
          end: 0,
          width: "100%",
        }}
      >
        {menus.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                if (item.name == "Leave Off") {
                  setModal(true);
                  setSchedule(false);
                  setSettings(false);
                  setPatterns(false);
                }
                if (item.name == "Pattern") {
                  setPatterns(true);
                  setSettings(false);
                  setSchedule(false);
                  setModal(false);
                }
                if (item.name == "Schedule") {
                  setSchedule(true);
                  setSettings(false);
                  setModal(false);
                  setPatterns(false);
                }
                if (item.name == "Settings") {
                  setSettings(true);
                  setSchedule(false);
                  setModal(false);
                  setPatterns(false);
                }
              }}
              key={index}
            >
              <View style={{ alignSelf: "center", marginBottom: 10 }}>
                {item.svg()}
              </View>
              <Text> {item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Modal visible={modal} transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            borderRadius: 20,
            marginHorizontal: 40,
          }}
        >
          <View
            style={{
              elevation: 10,
              backgroundColor: "white",
              padding: 15,
              borderRadius: 13,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "600",
              }}
            >
              Leave Off Time(in Min.)
            </Text>

            <ScrollView
              style={{
                marginVertical: 20,
                marginHorizontal: 10,
                height: "40%",
              }}
              showsVerticalScrollIndicator={false}
            >
              {array2.map((item, index) => {
                return (
                  <View
                    style={{
                      margin: 10,
                      padding: 13,
                      height: 50,
                      backgroundColor: "#ECECECB3",
                      flex: 1,
                      width: "90%",
                      alignItems: "center",
                      borderRadius: 10,
                    }}
                    key={index}
                  >
                    <Text style={{ fontSize: 18 }}>{item}</Text>
                  </View>
                );
              })}
            </ScrollView>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-end",
              }}
            >
              <TouchableOpacity
                style={{ marginTop: 5 }}
                onPress={() => {
                  setModal(false);
                }}
              >
                <Text
                  style={{
                    marginHorizontal: 8,
                    marginTop: 4,
                  }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    borderRadius: 20,
                    marginHorizontal: 10,
                    borderRadius: 8,
                    backgroundColor: "#1A8AE5",
                  }}
                >
                  <Text
                    style={{
                      paddingTop: 8,
                      paddingLeft: 25,
                      paddingRight: 25,
                      paddingBottom: 8,
                      color: "white",
                    }}
                    onPress={() => {
                      setModal(false);
                    }}
                  >
                    Set
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Living_Room_Home_Screen;
export function CustomSwitchButton(switchSelected, setSwitchSelected) {
  return (
    <View
      style={{
        width: "30%",
        height: 40,
        backgroundColor: "#ECECECB3",
        borderRadius: 20,
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        top: 95,
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
        <Text style={{ color: switchSelected ? "#000000" : "white" }}>On</Text>
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
        <Text style={{ color: switchSelected ? "white" : "#000000" }}>Off</Text>
      </TouchableOpacity>
    </View>
  );
}

export function HighBrightness() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
    >
      <G transform="translate(-321 -592)">
        <G transform="translate(-2614 -18625)">
          <Circle
            cx="7"
            cy="7"
            r="7"
            transform="translate(2935 19217)"
            fill="rgba(236,236,236,0.7)"
          />
          <G transform="translate(2948.944 19217.191) rotate(90)">
            <Path
              d="M16.875,2.25h.617V3.781h-.617Z"
              transform="translate(-10.154 0)"
              fill="#000000"
            />
            <Path
              d="M24.4,7.138,25.48,6.056l.437.437L24.835,7.575Z"
              transform="translate(-15.155 -2.762)"
              fill="#000000"
            />
            <Path
              d="M28.17,16.875H29.7v.617H28.17Z"
              transform="translate(-17.892 -10.234)"
              fill="#000000"
            />
            <Path
              d="M24.4,24.837l.437-.437,1.082,1.083-.437.436Z"
              transform="translate(-15.16 -15.316)"
              fill="#000000"
            />
            <Path
              d="M16.875,28.17h.617V29.7h-.617Z"
              transform="translate(-10.154 -18.051)"
              fill="#000000"
            />
            <Path
              d="M6.072,25.489l1.082-1.082.437.437L6.509,25.926Z"
              transform="translate(-2.773 -15.321)"
              fill="#000000"
            />
            <Path
              d="M2.25,16.875H3.781v.617H2.25Z"
              transform="translate(0 -10.234)"
              fill="#000000"
            />
            <Path
              d="M6.064,6.5,6.5,6.064,7.584,7.147l-.437.437Z"
              transform="translate(-2.768 -2.768)"
              fill="#000000"
            />
            <Path
              d="M13.1,11.25A1.852,1.852,0,1,0,14.954,13.1,1.852,1.852,0,0,0,13.1,11.25Z"
              transform="translate(-6.073 -6.152)"
              fill="#000000"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export function LowBrightness() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
    >
      <G transform="translate(-25 -592)">
        <G transform="translate(-2698 -18625)">
          <Circle
            cx="7"
            cy="7"
            r="7"
            transform="translate(2723 19217)"
            fill="rgba(236,236,236,0.7)"
          />
          <G transform="translate(2736.907 19217.35) rotate(90)">
            <Path
              d="M16.875,2.25h.641V3.839h-.641Z"
              transform="translate(-10.274 0)"
              fill="#000000"
            />
            <Path
              d="M24.4,7.179l1.123-1.123.453.453L24.851,7.632Z"
              transform="translate(-15.469 -2.722)"
              fill="#000000"
            />
            <Path
              d="M28.17,16.875h1.589v.641H28.17Z"
              transform="translate(-18.167 -10.301)"
              fill="#000000"
            />
            <Path
              d="M24.405,24.853l.453-.453,1.123,1.123-.453.453Z"
              transform="translate(-15.474 -15.523)"
              fill="#000000"
            />
            <Path
              d="M16.875,28.17h.641v1.589h-.641Z"
              transform="translate(-10.274 -18.22)"
              fill="#000000"
            />
            <Path
              d="M6.072,25.53,7.2,24.407l.453.453L6.525,25.983Z"
              transform="translate(-2.734 -15.528)"
              fill="#000000"
            />
            <Path
              d="M2.25,16.875H3.839v.641H2.25Z"
              transform="translate(0 -10.301)"
              fill="#000000"
            />
            <Path
              d="M6.064,6.516l.454-.452L7.641,7.187l-.453.453Z"
              transform="translate(-2.728 -2.728)"
              fill="#000000"
            />
            <Path
              d="M13.172,11.891a1.281,1.281,0,1,1-1.281,1.281,1.281,1.281,0,0,1,1.281-1.281m0-.641a1.922,1.922,0,1,0,1.922,1.922A1.922,1.922,0,0,0,13.172,11.25Z"
              transform="translate(-6.251 -6.277)"
              fill="#000000"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}

function Bulb3({ tint = "#707070" }) {
  return (
    <Svg
      style={{ alignSelf: "center" }}
      xmlns="http://www.w3.org/2000/svg"
      width="30.667"
      height="18.869"
      viewBox="0 0 12.667 18.869"
    >
      <G transform="translate(-3.187 -0.374)">
        <Path
          d="M11.382,14.772v-.931c0-1.125,1.223-2.188,2.016-2.947A5.612,5.612,0,0,0,15.1,6.707a5.583,5.583,0,1,0-11.167,0,5.748,5.748,0,0,0,1.706,4.187c.788.744,2.016,1.811,2.016,2.947v.931"
          fill="none"
          stroke={tint}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <Path
          d="M7.875,16.875h2.481"
          transform="translate(0.405 1.619)"
          fill="none"
          stroke={tint}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <Path
          d="M7.313,15.188h3.722"
          transform="translate(0.347 1.445)"
          fill="none"
          stroke={tint}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <Path
          d="M9,13.962V9"
          transform="translate(0.52 0.809)"
          fill="none"
          stroke={tint}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <Path
          d="M10.611,8.438a3.222,3.222,0,0,1-1.473.621,3.222,3.222,0,0,1-1.473-.621"
          transform="translate(0.383 0.752)"
          fill="none"
          stroke={tint}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
      </G>
    </Svg>
  );
}
function Bulb2({ tint = "#707070" }) {
  return (
    <Svg
      style={{ alignSelf: "center" }}
      xmlns="http://www.w3.org/2000/svg"
      width="30.667"
      height="18.869"
      viewBox="0 0 12.667 18.869"
    >
      <G transform="translate(-3.187 -0.374)">
        <Path
          d="M11.382,14.772v-.931c0-1.125,1.223-2.188,2.016-2.947A5.612,5.612,0,0,0,15.1,6.707a5.583,5.583,0,1,0-11.167,0,5.748,5.748,0,0,0,1.706,4.187c.788.744,2.016,1.811,2.016,2.947v.931"
          fill="none"
          stroke={tint}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <Path
          d="M7.875,16.875h2.481"
          transform="translate(0.405 1.619)"
          fill="none"
          stroke={tint}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <Path
          d="M7.313,15.188h3.722"
          transform="translate(0.347 1.445)"
          fill="none"
          stroke={tint}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <Path
          d="M9,13.962V9"
          transform="translate(0.52 0.809)"
          fill="none"
          stroke={tint}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <Path
          d="M10.611,8.438a3.222,3.222,0,0,1-1.473.621,3.222,3.222,0,0,1-1.473-.621"
          transform="translate(0.383 0.752)"
          fill="none"
          stroke={tint}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
      </G>
    </Svg>
  );
}
function Bulb1({ tint = "#707070" }) {
  return (
    <Svg
      style={{ alignSelf: "center" }}
      xmlns="http://www.w3.org/2000/svg"
      width="30.667"
      height="18.869"
      viewBox="0 0 12.667 18.869"
    >
      <G transform="translate(-3.187 -0.374)">
        <Path
          d="M11.382,14.772v-.931c0-1.125,1.223-2.188,2.016-2.947A5.612,5.612,0,0,0,15.1,6.707a5.583,5.583,0,1,0-11.167,0,5.748,5.748,0,0,0,1.706,4.187c.788.744,2.016,1.811,2.016,2.947v.931"
          fill="none"
          stroke={tint}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <Path
          d="M7.875,16.875h2.481"
          transform="translate(0.405 1.619)"
          fill="none"
          stroke={tint}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <Path
          d="M7.313,15.188h3.722"
          transform="translate(0.347 1.445)"
          fill="none"
          stroke={tint}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <Path
          d="M9,13.962V9"
          transform="translate(0.52 0.809)"
          fill="none"
          stroke={tint}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <Path
          d="M10.611,8.438a3.222,3.222,0,0,1-1.473.621,3.222,3.222,0,0,1-1.473-.621"
          transform="translate(0.383 0.752)"
          fill="none"
          stroke={tint}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
      </G>
    </Svg>
  );
}

function Light2({ tint = "#707070" }) {
  return (
    <Svg
      style={{ alignSelf: "center" }}
      xmlns="http://www.w3.org/2000/svg"
      width="14.549"
      height="18.594"
      viewBox="0 0 14.549 18.594"
    >
      <G transform="translate(-206.361 -7.853)">
        <Path
          d="M217.741,24.011H215.6a2.587,2.587,0,0,0-2.481-2.118l-4.511-4.511a1.132,1.132,0,0,0,.017-1.327l3.783-3.783a3.957,3.957,0,0,0,1.125,3.274.319.319,0,0,0,.451,0l1.289-1.289h0a1.952,1.952,0,1,0,2.761-2.761h0l1.079-1.079a.319.319,0,0,0,0-.451,3.919,3.919,0,0,0-2.789-1.155,3.98,3.98,0,0,0-1.473.284l-.74-.74a1.038,1.038,0,0,0-1.468,0l-.721.721a1.039,1.039,0,0,0,0,1.468l.656.656-4.454,4.454a1.135,1.135,0,1,0-.029,2.114l4.2,4.2a2.548,2.548,0,0,0-1.931,2.037h-2.14a.319.319,0,0,0-.319.319v1.6a.319.319,0,0,0,.319.319h9.513a.319.319,0,0,0,.319-.319v-1.6A.318.318,0,0,0,217.741,24.011Zm-.157-12.063a1.315,1.315,0,0,1-1.86,1.86h0l1.86-1.86Zm-5.211-1.853a.4.4,0,0,1,0-.567l.72-.721a.4.4,0,0,1,.567,0l.884.884.009.009a.319.319,0,0,0,.361.063,3.331,3.331,0,0,1,1.409-.314,3.282,3.282,0,0,1,2.1.754l-4.656,4.656a3.318,3.318,0,0,1-.44-3.512.319.319,0,0,0-.063-.361l-.009-.009ZM207.2,16.706a.5.5,0,1,1,.5.5A.5.5,0,0,1,207.2,16.706Zm5.786,5.82a1.973,1.973,0,0,1,1.969,1.484h-3.937A1.973,1.973,0,0,1,212.984,22.526Zm4.438,3.083h-8.876v-.961h8.876v.961Z"
          transform="translate(0)"
          fill={tint}
          stroke={tint}
          stroke-width="0.4"
        />
        <Path
          d="M1372.53,664.35a.319.319,0,1,0-.45.451l.578.578a.319.319,0,0,0,.451-.451Z"
          transform="translate(-1153.553 -649.519)"
          fill={tint}
          stroke={tint}
          stroke-width="0.4"
        />
        <Path
          d="M1202.128,744.966a.319.319,0,0,0-.318.319v.817a.319.319,0,0,0,.319.319h0a.319.319,0,0,0,.319-.319v-.817a.319.319,0,0,0-.318-.319Z"
          transform="translate(-985.109 -729.406)"
          fill={tint}
          stroke={tint}
          stroke-width="0.4"
        />
        <Path
          d="M1453.839,494.081h-.817a.319.319,0,1,0,0,.637h.817a.319.319,0,1,0,0-.637Z"
          transform="translate(-1233.447 -481.077)"
          fill={tint}
          stroke={tint}
          stroke-width="0.4"
        />
      </G>
    </Svg>
  );
}

function Light1({ tint = "#707070" }) {
  return (
    <Svg
      style={{ alignSelf: "center" }}
      xmlns="http://www.w3.org/2000/svg"
      width="14.549"
      height="18.594"
      viewBox="0 0 14.549 18.594"
    >
      <G transform="translate(-206.361 -7.853)">
        <Path
          d="M217.741,24.011H215.6a2.587,2.587,0,0,0-2.481-2.118l-4.511-4.511a1.132,1.132,0,0,0,.017-1.327l3.783-3.783a3.957,3.957,0,0,0,1.125,3.274.319.319,0,0,0,.451,0l1.289-1.289h0a1.952,1.952,0,1,0,2.761-2.761h0l1.079-1.079a.319.319,0,0,0,0-.451,3.919,3.919,0,0,0-2.789-1.155,3.98,3.98,0,0,0-1.473.284l-.74-.74a1.038,1.038,0,0,0-1.468,0l-.721.721a1.039,1.039,0,0,0,0,1.468l.656.656-4.454,4.454a1.135,1.135,0,1,0-.029,2.114l4.2,4.2a2.548,2.548,0,0,0-1.931,2.037h-2.14a.319.319,0,0,0-.319.319v1.6a.319.319,0,0,0,.319.319h9.513a.319.319,0,0,0,.319-.319v-1.6A.318.318,0,0,0,217.741,24.011Zm-.157-12.063a1.315,1.315,0,0,1-1.86,1.86h0l1.86-1.86Zm-5.211-1.853a.4.4,0,0,1,0-.567l.72-.721a.4.4,0,0,1,.567,0l.884.884.009.009a.319.319,0,0,0,.361.063,3.331,3.331,0,0,1,1.409-.314,3.282,3.282,0,0,1,2.1.754l-4.656,4.656a3.318,3.318,0,0,1-.44-3.512.319.319,0,0,0-.063-.361l-.009-.009ZM207.2,16.706a.5.5,0,1,1,.5.5A.5.5,0,0,1,207.2,16.706Zm5.786,5.82a1.973,1.973,0,0,1,1.969,1.484h-3.937A1.973,1.973,0,0,1,212.984,22.526Zm4.438,3.083h-8.876v-.961h8.876v.961Z"
          transform="translate(0)"
          fill={tint}
          stroke={tint}
          stroke-width="0.4"
        />
        <Path
          d="M1372.53,664.35a.319.319,0,1,0-.45.451l.578.578a.319.319,0,0,0,.451-.451Z"
          transform="translate(-1153.553 -649.519)"
          fill={tint}
          stroke={tint}
          stroke-width="0.4"
        />
        <Path
          d="M1202.128,744.966a.319.319,0,0,0-.318.319v.817a.319.319,0,0,0,.319.319h0a.319.319,0,0,0,.319-.319v-.817a.319.319,0,0,0-.318-.319Z"
          transform="translate(-985.109 -729.406)"
          fill={tint}
          stroke={tint}
          stroke-width="0.4"
        />
        <Path
          d="M1453.839,494.081h-.817a.319.319,0,1,0,0,.637h.817a.319.319,0,1,0,0-.637Z"
          transform="translate(-1233.447 -481.077)"
          fill={tint}
          stroke={tint}
          stroke-width="0.4"
        />
      </G>
    </Svg>
  );
}

function Light3({ tint = "#707070" }) {
  return (
    <Svg
      style={{ alignSelf: "center" }}
      xmlns="http://www.w3.org/2000/svg"
      width="14.549"
      height="18.594"
      viewBox="0 0 14.549 18.594"
    >
      <G transform="translate(-206.361 -7.853)">
        <Path
          d="M217.741,24.011H215.6a2.587,2.587,0,0,0-2.481-2.118l-4.511-4.511a1.132,1.132,0,0,0,.017-1.327l3.783-3.783a3.957,3.957,0,0,0,1.125,3.274.319.319,0,0,0,.451,0l1.289-1.289h0a1.952,1.952,0,1,0,2.761-2.761h0l1.079-1.079a.319.319,0,0,0,0-.451,3.919,3.919,0,0,0-2.789-1.155,3.98,3.98,0,0,0-1.473.284l-.74-.74a1.038,1.038,0,0,0-1.468,0l-.721.721a1.039,1.039,0,0,0,0,1.468l.656.656-4.454,4.454a1.135,1.135,0,1,0-.029,2.114l4.2,4.2a2.548,2.548,0,0,0-1.931,2.037h-2.14a.319.319,0,0,0-.319.319v1.6a.319.319,0,0,0,.319.319h9.513a.319.319,0,0,0,.319-.319v-1.6A.318.318,0,0,0,217.741,24.011Zm-.157-12.063a1.315,1.315,0,0,1-1.86,1.86h0l1.86-1.86Zm-5.211-1.853a.4.4,0,0,1,0-.567l.72-.721a.4.4,0,0,1,.567,0l.884.884.009.009a.319.319,0,0,0,.361.063,3.331,3.331,0,0,1,1.409-.314,3.282,3.282,0,0,1,2.1.754l-4.656,4.656a3.318,3.318,0,0,1-.44-3.512.319.319,0,0,0-.063-.361l-.009-.009ZM207.2,16.706a.5.5,0,1,1,.5.5A.5.5,0,0,1,207.2,16.706Zm5.786,5.82a1.973,1.973,0,0,1,1.969,1.484h-3.937A1.973,1.973,0,0,1,212.984,22.526Zm4.438,3.083h-8.876v-.961h8.876v.961Z"
          transform="translate(0)"
          fill={tint}
          stroke={tint}
          stroke-width="0.4"
        />
        <Path
          d="M1372.53,664.35a.319.319,0,1,0-.45.451l.578.578a.319.319,0,0,0,.451-.451Z"
          transform="translate(-1153.553 -649.519)"
          fill={tint}
          stroke={tint}
          stroke-width="0.4"
        />
        <Path
          d="M1202.128,744.966a.319.319,0,0,0-.318.319v.817a.319.319,0,0,0,.319.319h0a.319.319,0,0,0,.319-.319v-.817a.319.319,0,0,0-.318-.319Z"
          transform="translate(-985.109 -729.406)"
          fill={tint}
          stroke={tint}
          stroke-width="0.4"
        />
        <Path
          d="M1453.839,494.081h-.817a.319.319,0,1,0,0,.637h.817a.319.319,0,1,0,0-.637Z"
          transform="translate(-1233.447 -481.077)"
          fill={tint}
          stroke={tint}
          stroke-width="0.4"
        />
      </G>
    </Svg>
  );
}
