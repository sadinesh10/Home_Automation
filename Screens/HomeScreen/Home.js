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
import { Circle, G, Path, Svg } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

function Home() {
  const navigation = useNavigation();
  const [Device, setDevice] = useState(false);
  const [Rooms, setRooms] = useState(false);
  const [linearDevice, setLinearDevice] = useState(false);
  const [GridDevice, setGridDevice] = useState(true);
  const [GridRooms, setGridRooms] = useState(false);
  const [on, setOn] = useState(false);

  const [linearRooms, setLinearRooms] = useState(false);
  return (
    <View style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
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
            source={require("../../assets/Images/sruthi.png")}
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
            <Svg
              style={{ margin: 15 }}
              xmlns="http://www.w3.org/2000/svg"
              width="31.502"
              height="31.5"
              viewBox="0 0 31.502 31.5"
            >
              <G transform="translate(-2.248 -2.25)">
                <Path
                  d="M19.125,33.75a1.125,1.125,0,0,1-1.006-1.628l2.25-4.5a1.125,1.125,0,1,1,2.011,1.006l-2.25,4.5a1.123,1.123,0,0,1-1,.622Z"
                  fill="#FFFFFF"
                />
                <Path
                  d="M9,33.75a1.125,1.125,0,0,1-1.006-1.628l2.25-4.5a1.125,1.125,0,1,1,2.011,1.006L10,33.128a1.123,1.123,0,0,1-1,.622Z"
                  fill="#FFFFFF"
                />
                <Path
                  d="M33.75,17.438a7.348,7.348,0,0,0-5.85-7.159,10.118,10.118,0,0,0-19.8,0,7.3,7.3,0,0,0-1.684,13.75l-1.8,3.594A1.125,1.125,0,1,0,6.63,28.629L8.569,24.75H16.18l-1.435,2.872a1.125,1.125,0,1,0,2.011,1.006L18.7,24.75h7.61l-1.435,2.872a1.125,1.125,0,1,0,2.011,1.006l2.188-4.376A7.319,7.319,0,0,0,33.75,17.438ZM26.438,22.5H9.563a5.059,5.059,0,0,1-.4-10.1l.918-.072.111-.914a7.868,7.868,0,0,1,15.618,0l.111.914.917.072a5.059,5.059,0,0,1-.4,10.1Z"
                  fill="#FFFFFF"
                />
              </G>
            </Svg>
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
              width: "44%",
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
            <Svg
              style={{ marginTop: 22 }}
              xmlns="http://www.w3.org/2000/svg"
              width="13.5"
              height="13.5"
              viewBox="0 0 13.5 13.5"
            >
              <G transform="translate(-2.25 -2.25)">
                <Path
                  d="M6.75,2.25H3.375A1.125,1.125,0,0,0,2.25,3.375V6.75A1.125,1.125,0,0,0,3.375,7.875H6.75A1.125,1.125,0,0,0,7.875,6.75V3.375A1.125,1.125,0,0,0,6.75,2.25Zm0,4.5H3.375V3.375H6.75Z"
                  fill="#1A8AE5"
                />
                <Path
                  d="M14.625,2.25H11.25a1.125,1.125,0,0,0-1.125,1.125V6.75A1.125,1.125,0,0,0,11.25,7.875h3.375A1.125,1.125,0,0,0,15.75,6.75V3.375A1.125,1.125,0,0,0,14.625,2.25Zm0,4.5H11.25V3.375h3.375Z"
                  fill="#1A8AE5"
                />
                <Path
                  d="M6.75,10.125H3.375A1.125,1.125,0,0,0,2.25,11.25v3.375A1.125,1.125,0,0,0,3.375,15.75H6.75a1.125,1.125,0,0,0,1.125-1.125V11.25A1.125,1.125,0,0,0,6.75,10.125Zm0,4.5H3.375V11.25H6.75Z"
                  fill="#1A8AE5"
                />
                <Path
                  d="M14.625,10.125H11.25a1.125,1.125,0,0,0-1.125,1.125v3.375A1.125,1.125,0,0,0,11.25,15.75h3.375a1.125,1.125,0,0,0,1.125-1.125V11.25A1.125,1.125,0,0,0,14.625,10.125Zm0,4.5H11.25V11.25h3.375Z"
                  fill="#1A8AE5"
                />
              </G>
            </Svg>
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
            <Svg
              style={{ marginTop: 22 }}
              xmlns="http://www.w3.org/2000/svg"
              width="13.5"
              height="11.25"
              viewBox="0 0 13.5 11.25"
            >
              <G transform="translate(-2.25 -3.375)">
                <Path d="M2.25,3.375H12.375V4.5H2.25Z" fill="#1a8ae5" />
                <Path d="M2.25,6.75H12.375V7.875H2.25Z" fill="#1a8ae5" />
                <Path d="M2.25,10.125H12.375V11.25H2.25Z" fill="#1a8ae5" />
                <Path d="M2.25,13.5H12.375v1.125H2.25Z" fill="#1a8ae5" />
                <Path d="M14.625,3.375H15.75V4.5H14.625Z" fill="#1a8ae5" />
                <Path d="M14.625,6.75H15.75V7.875H14.625Z" fill="#1a8ae5" />
                <Path d="M14.625,10.125H15.75V11.25H14.625Z" fill="#1a8ae5" />
                <Path d="M14.625,13.5H15.75v1.125H14.625Z" fill="#1a8ae5" />
              </G>
            </Svg>
          </Pressable>
        )}
      </View>
      {GridDevice ? (
        <ScrollView style={{ height: "54%", marginBottom: 50 }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                backgroundColor: "#ECECECB3",
                width: "45%",
                borderRadius: 10,
                marginLeft: 20,
                marginVertical: 5,
                marginRight: 5,
                marginHorizontal: 5,
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
                        fill="#FFFFFF"
                        stroke="#FFFFFF"
                        stroke-width="0.4"
                      />
                      <Path
                        d="M1372.53,664.35a.319.319,0,1,0-.45.451l.578.578a.319.319,0,0,0,.451-.451Z"
                        transform="translate(-1153.553 -649.519)"
                        fill="#FFFFFF"
                        stroke="#FFFFFF"
                        stroke-width="0.4"
                      />
                      <Path
                        d="M1202.128,744.966a.319.319,0,0,0-.318.319v.817a.319.319,0,0,0,.319.319h0a.319.319,0,0,0,.319-.319v-.817a.319.319,0,0,0-.318-.319Z"
                        transform="translate(-985.109 -729.406)"
                        fill="#FFFFFF"
                        stroke="#FFFFFF"
                        stroke-width="0.4"
                      />
                      <Path
                        d="M1453.839,494.081h-.817a.319.319,0,1,0,0,.637h.817a.319.319,0,1,0,0-.637Z"
                        transform="translate(-1233.447 -481.077)"
                        fill="#FFFFFF"
                        stroke="#FFFFFF"
                        stroke-width="0.4"
                      />
                    </G>
                  </Svg>
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
                  marginTop: 25,
                  marginHorizontal: 10,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: 100,
                    padding: 3,
                    marginRight: 2,
                  }}
                >
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
                        />
                        <G transform="translate(2736.907 19217.35) rotate(90)">
                          <Path
                            d="M16.875,2.25h.641V3.839h-.641Z"
                            transform="translate(-10.274 0)"
                            fill="black"
                          />
                          <Path
                            d="M24.4,7.179l1.123-1.123.453.453L24.851,7.632Z"
                            transform="translate(-15.469 -2.722)"
                            fill="black"
                          />
                          <Path
                            d="M28.17,16.875h1.589v.641H28.17Z"
                            transform="translate(-18.167 -10.301)"
                            fill="black"
                          />
                          <Path
                            d="M24.405,24.853l.453-.453,1.123,1.123-.453.453Z"
                            transform="translate(-15.474 -15.523)"
                            fill="black"
                          />
                          <Path
                            d="M16.875,28.17h.641v1.589h-.641Z"
                            transform="translate(-10.274 -18.22)"
                            fill="black"
                          />
                          <Path
                            d="M6.072,25.53,7.2,24.407l.453.453L6.525,25.983Z"
                            transform="translate(-2.734 -15.528)"
                            fill="black"
                          />
                          <Path
                            d="M2.25,16.875H3.839v.641H2.25Z"
                            transform="translate(0 -10.301)"
                            fill="black"
                          />
                          <Path
                            d="M6.064,6.516l.454-.452L7.641,7.187l-.453.453Z"
                            transform="translate(-2.728 -2.728)"
                            fill="black"
                          />
                          <Path
                            d="M13.172,11.891a1.281,1.281,0,1,1-1.281,1.281,1.281,1.281,0,0,1,1.281-1.281m0-.641a1.922,1.922,0,1,0,1.922,1.922A1.922,1.922,0,0,0,13.172,11.25Z"
                            transform="translate(-6.251 -6.277)"
                            fill="black"
                          />
                        </G>
                      </G>
                    </G>
                  </Svg>
                </View>
                <CustomSlider />
                <View
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: 100,
                    padding: 3,
                    marginLeft: 2,
                  }}
                >
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
                        />
                        <G transform="translate(2948.944 19217.191) rotate(90)">
                          <Path
                            d="M16.875,2.25h.617V3.781h-.617Z"
                            transform="translate(-10.154 0)"
                            fill="black"
                          />
                          <Path
                            d="M24.4,7.138,25.48,6.056l.437.437L24.835,7.575Z"
                            transform="translate(-15.155 -2.762)"
                            fill="black"
                          />
                          <Path
                            d="M28.17,16.875H29.7v.617H28.17Z"
                            transform="translate(-17.892 -10.234)"
                            fill="black"
                          />
                          <Path
                            d="M24.4,24.837l.437-.437,1.082,1.083-.437.436Z"
                            transform="translate(-15.16 -15.316)"
                            fill="black"
                          />
                          <Path
                            d="M16.875,28.17h.617V29.7h-.617Z"
                            transform="translate(-10.154 -18.051)"
                            fill="black"
                          />
                          <Path
                            d="M6.072,25.489l1.082-1.082.437.437L6.509,25.926Z"
                            transform="translate(-2.773 -15.321)"
                            fill="black"
                          />
                          <Path
                            d="M2.25,16.875H3.781v.617H2.25Z"
                            transform="translate(0 -10.234)"
                            fill="black"
                          />
                          <Path
                            d="M6.064,6.5,6.5,6.064,7.584,7.147l-.437.437Z"
                            transform="translate(-2.768 -2.768)"
                            fill="black"
                          />
                          <Path
                            d="M13.1,11.25A1.852,1.852,0,1,0,14.954,13.1,1.852,1.852,0,0,0,13.1,11.25Z"
                            transform="translate(-6.073 -6.152)"
                            fill="black"
                          />
                        </G>
                      </G>
                    </G>
                  </Svg>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#ECECECB3",
                width: "42%",
                borderRadius: 10,
                marginVertical: 5,
                marginRight: 15,
                marginHorizontal: 5,
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
                  <Svg
                    style={{ alignSelf: "center" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.497"
                    height="18.495"
                    viewBox="0 0 18.497 18.495"
                  >
                    <G transform="translate(0.155 0.149)">
                      <Path
                        d="M16.5,5.645l-.029-.012c-.651-.249-1.328.278-2.184.947A11.436,11.436,0,0,1,11.72,8.217c-.009-.027-.021-.054-.031-.081-.016-.043-.031-.087-.049-.129-.032-.076-.069-.151-.108-.224l-.017-.03c-.036-.066-.075-.13-.117-.192l-.025-.036c-.025-.036-.049-.073-.076-.108,1.5-1.94,1.939-3.9,1.253-5.7A3.251,3.251,0,0,0,9.424,0C8.009-.036,6.22.47,5.64,1.691l-.012.029c-.25.652.279,1.328.947,2.184A11.45,11.45,0,0,1,8.211,6.468c-.031.01-.061.023-.092.035s-.08.028-.118.045c-.077.033-.152.07-.226.109l-.027.016q-.1.055-.195.118l-.036.025c-.037.025-.074.049-.109.076-1.939-1.5-3.9-1.935-5.7-1.25A3.251,3.251,0,0,0,0,8.769c-.044,1.415.465,3.2,1.687,3.783l.029.013c.652.249,1.328-.279,2.184-.947A11.456,11.456,0,0,1,6.461,9.983c.009.027.02.053.03.08.016.043.031.087.049.129.033.077.069.152.109.226l.008.015q.059.107.127.208l.019.027c.027.04.054.08.084.119-1.5,1.938-1.934,3.9-1.249,5.7a3.251,3.251,0,0,0,3.126,1.71l.17,0c1.386,0,3.056-.516,3.613-1.689,0-.01.009-.019.013-.029.249-.652-.279-1.328-.947-2.184a11.443,11.443,0,0,1-1.636-2.567c.029-.01.056-.022.085-.032s.082-.029.122-.046c.077-.033.152-.069.226-.109l.016-.009c.07-.038.139-.08.206-.125l.032-.022c.039-.027.078-.052.115-.081,1.94,1.5,3.9,1.938,5.7,1.253a3.251,3.251,0,0,0,1.71-3.126C18.232,8.013,17.723,6.225,16.5,5.645Zm-6.166,4.973c-.043.036-.089.069-.135.1l-.032.021q-.056.037-.114.069L10,10.838c-.03.016-.061.03-.092.044s-.052.024-.078.035l-.011,0a1.97,1.97,0,0,1-.446.119h0a1.936,1.936,0,0,1-1.8-.692l-.006-.007c-.035-.043-.068-.088-.1-.133l-.021-.033c-.024-.037-.047-.075-.069-.113l-.029-.052c-.016-.03-.03-.061-.044-.092s-.024-.051-.035-.078l-.007-.018a1.972,1.972,0,0,1-.117-.441v0a1.937,1.937,0,0,1,.692-1.8l.008-.007c.042-.035.087-.068.132-.1l.035-.023c.036-.024.074-.046.112-.068l.054-.03c.03-.016.061-.03.091-.044s.052-.024.078-.035l.032-.012a1.974,1.974,0,0,1,.429-.112h0a1.935,1.935,0,0,1,1.791.692l.009.012q.051.062.1.128l.025.038c.023.035.045.071.065.108.011.019.021.038.032.057s.028.058.042.087.026.054.037.082l.008.021a1.98,1.98,0,0,1,.115.437v0a1.935,1.935,0,0,1-.693,1.793ZM7.213,3.406c-.422-.541-.9-1.152-.833-1.386C6.744,1.288,8.033.769,9.4.813a2.594,2.594,0,0,1,2.4,1.2A5.048,5.048,0,0,1,10.71,6.851a2.756,2.756,0,0,0-1.62-.526c-.023,0-.045,0-.068,0A11.706,11.706,0,0,0,7.213,3.406ZM3.4,10.98c-.541.422-1.152.9-1.386.833C1.284,11.449.766,10.158.808,8.794A2.6,2.6,0,0,1,2,6.4,5.045,5.045,0,0,1,6.842,7.48,2.756,2.756,0,0,0,6.316,9.1c0,.025,0,.049,0,.073A11.708,11.708,0,0,0,3.4,10.98Zm7.573,3.811c.422.541.9,1.152.833,1.386-.364.732-1.657,1.246-3.019,1.207a2.6,2.6,0,0,1-2.4-1.2,5.046,5.046,0,0,1,1.084-4.838,2.756,2.756,0,0,0,1.614.523c.026,0,.051,0,.076,0A11.7,11.7,0,0,0,10.975,14.791ZM17.38,9.4a2.6,2.6,0,0,1-1.2,2.4,5.049,5.049,0,0,1-4.843-1.087A2.756,2.756,0,0,0,11.865,9.1c0-.024,0-.047,0-.071a11.694,11.694,0,0,0,2.925-1.81c.541-.422,1.156-.9,1.386-.833C16.9,6.748,17.423,8.04,17.38,9.4Z"
                        transform="translate(0 0)"
                        fill="white"
                        stroke="white"
                        stroke-width="0.3"
                      />
                      <Circle
                        cx="0.988"
                        cy="0.988"
                        r="0.988"
                        transform="translate(8.102 8.11)"
                        fill="white"
                        stroke="white"
                        stroke-width="0.3"
                      />
                    </G>
                  </Svg>
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
                  marginTop: 25,
                  marginHorizontal: 5,
                  alignItems: "center",
                  paddingBottom: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: 100,
                    padding: 3,
                    marginRight: 2,
                  }}
                >
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <G transform="translate(-25 -615)">
                      <G transform="translate(25.286 615)">
                        <Circle
                          cx="7"
                          cy="7"
                          r="7"
                          transform="translate(-0.286)"
                        />
                        <Path
                          d="M11.332,8.5H4.9a.485.485,0,0,0,0,.955h6.43a.485.485,0,0,0,0-.955Z"
                          transform="translate(-1.251 -1.5)"
                          fill="rgba(0,0,0,0.7)"
                        />
                      </G>
                    </G>
                  </Svg>
                </View>
                <CustomSlider />
                <View
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: 100,
                    padding: 3,
                    marginLeft: 2,
                  }}
                >
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <G transform="translate(-321 -615)">
                      <G transform="translate(321 615)">
                        <Circle cx="7" cy="7" r="7" />
                        <Path
                          d="M8.713,7.548V4.5H7.776V7.548H4.5v.871H7.776v3.048h.936V8.419h3.276V7.548Z"
                          transform="translate(-1.278 -0.756)"
                          fill="rgba(0,0,0,0.7)"
                        />
                      </G>
                    </G>
                  </Svg>
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
                marginLeft: 20,
                marginVertical: 5,
                marginRight: 5,
                marginHorizontal: 5,
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
                  <Svg
                    style={{ alignSelf: "center" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.667"
                    height="18.869"
                    viewBox="0 0 12.667 18.869"
                  >
                    <G transform="translate(-3.187 -0.374)">
                      <Path
                        d="M11.382,14.772v-.931c0-1.125,1.223-2.188,2.016-2.947A5.612,5.612,0,0,0,15.1,6.707a5.583,5.583,0,1,0-11.167,0,5.748,5.748,0,0,0,1.706,4.187c.788.744,2.016,1.811,2.016,2.947v.931"
                        fill="none"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                      <Path
                        d="M7.875,16.875h2.481"
                        transform="translate(0.405 1.619)"
                        fill="black"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                      <Path
                        d="M7.313,15.188h3.722"
                        transform="translate(0.347 1.445)"
                        fill="black"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                      <Path
                        d="M9,13.962V9"
                        transform="translate(0.52 0.809)"
                        fill="black"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                      <Path
                        d="M10.611,8.438a3.222,3.222,0,0,1-1.473.621,3.222,3.222,0,0,1-1.473-.621"
                        transform="translate(0.383 0.752)"
                        fill="black"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                    </G>
                  </Svg>
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
                <View
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: 100,
                    padding: 3,
                    marginRight: 2,
                  }}
                >
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
                        />
                        <G transform="translate(2736.907 19217.35) rotate(90)">
                          <Path
                            d="M16.875,2.25h.641V3.839h-.641Z"
                            transform="translate(-10.274 0)"
                            fill="black"
                          />
                          <Path
                            d="M24.4,7.179l1.123-1.123.453.453L24.851,7.632Z"
                            transform="translate(-15.469 -2.722)"
                            fill="black"
                          />
                          <Path
                            d="M28.17,16.875h1.589v.641H28.17Z"
                            transform="translate(-18.167 -10.301)"
                            fill="black"
                          />
                          <Path
                            d="M24.405,24.853l.453-.453,1.123,1.123-.453.453Z"
                            transform="translate(-15.474 -15.523)"
                            fill="black"
                          />
                          <Path
                            d="M16.875,28.17h.641v1.589h-.641Z"
                            transform="translate(-10.274 -18.22)"
                            fill="black"
                          />
                          <Path
                            d="M6.072,25.53,7.2,24.407l.453.453L6.525,25.983Z"
                            transform="translate(-2.734 -15.528)"
                            fill="black"
                          />
                          <Path
                            d="M2.25,16.875H3.839v.641H2.25Z"
                            transform="translate(0 -10.301)"
                            fill="black"
                          />
                          <Path
                            d="M6.064,6.516l.454-.452L7.641,7.187l-.453.453Z"
                            transform="translate(-2.728 -2.728)"
                            fill="black"
                          />
                          <Path
                            d="M13.172,11.891a1.281,1.281,0,1,1-1.281,1.281,1.281,1.281,0,0,1,1.281-1.281m0-.641a1.922,1.922,0,1,0,1.922,1.922A1.922,1.922,0,0,0,13.172,11.25Z"
                            transform="translate(-6.251 -6.277)"
                            fill="black"
                          />
                        </G>
                      </G>
                    </G>
                  </Svg>
                </View>
                <OffCustomSlider />
                <View
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: 100,
                    padding: 3,
                    marginLeft: 2,
                  }}
                >
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
                        />
                        <G transform="translate(2948.944 19217.191) rotate(90)">
                          <Path
                            d="M16.875,2.25h.617V3.781h-.617Z"
                            transform="translate(-10.154 0)"
                            fill="black"
                          />
                          <Path
                            d="M24.4,7.138,25.48,6.056l.437.437L24.835,7.575Z"
                            transform="translate(-15.155 -2.762)"
                            fill="black"
                          />
                          <Path
                            d="M28.17,16.875H29.7v.617H28.17Z"
                            transform="translate(-17.892 -10.234)"
                            fill="black"
                          />
                          <Path
                            d="M24.4,24.837l.437-.437,1.082,1.083-.437.436Z"
                            transform="translate(-15.16 -15.316)"
                            fill="black"
                          />
                          <Path
                            d="M16.875,28.17h.617V29.7h-.617Z"
                            transform="translate(-10.154 -18.051)"
                            fill="black"
                          />
                          <Path
                            d="M6.072,25.489l1.082-1.082.437.437L6.509,25.926Z"
                            transform="translate(-2.773 -15.321)"
                            fill="black"
                          />
                          <Path
                            d="M2.25,16.875H3.781v.617H2.25Z"
                            transform="translate(0 -10.234)"
                            fill="black"
                          />
                          <Path
                            d="M6.064,6.5,6.5,6.064,7.584,7.147l-.437.437Z"
                            transform="translate(-2.768 -2.768)"
                            fill="black"
                          />
                          <Path
                            d="M13.1,11.25A1.852,1.852,0,1,0,14.954,13.1,1.852,1.852,0,0,0,13.1,11.25Z"
                            transform="translate(-6.073 -6.152)"
                            fill="black"
                          />
                        </G>
                      </G>
                    </G>
                  </Svg>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#ECECECB3",
                width: "42%",
                borderRadius: 10,
                marginVertical: 5,
                marginRight: 15,
                marginHorizontal: 5,
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
                  <Svg
                    style={{
                      alignSelf: "center",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="10.696"
                    height="18.494"
                    viewBox="0 0 10.696 18.494"
                  >
                    <Path
                      d="M18.1,6.149h-.65V2.25h-1.3v3.9h-3.9V2.25h-1.3v3.9H10.3A1.3,1.3,0,0,0,9,7.448v3.9A5.2,5.2,0,0,0,13.548,16.5v3.944h1.3V16.5A5.2,5.2,0,0,0,19.4,11.347v-3.9A1.3,1.3,0,0,0,18.1,6.149Zm0,5.2a3.9,3.9,0,1,1-7.8,0v-3.9h7.8Z"
                      transform="translate(-8.85 -2.1)"
                      fill="#FFFFFF"
                      stroke="#FFFFFF"
                      stroke-width="0.3"
                    />
                  </Svg>
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
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                backgroundColor: "#ECECECB3",
                width: "45%",
                borderRadius: 10,
                marginVertical: 10,
                marginLeft: 20,
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
                    padding: 14,
                  }}
                >
                  <Svg
                    style={{ alignSelf: "center" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.04"
                    height="14.885"
                    viewBox="0 0 14.04 14.885"
                  >
                    <G transform="translate(-2.894 -1.85)">
                      <Path
                        d="M13.184,6.458l-.5.87a5.533,5.533,0,1,1-5.533,0l-.5-.87a6.539,6.539,0,1,0,6.539,0Z"
                        transform="translate(0 -2.326)"
                        fill="#000000"
                        stroke="#000000"
                        stroke-width="0.8"
                      />
                      <Path
                        d="M16.875,2.25h1.006V9.292H16.875Z"
                        transform="translate(-7.464 0)"
                        fill="#000000"
                        stroke="#000000"
                        stroke-width="0.8"
                      />
                    </G>
                  </Svg>
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
                    Switch 1
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
              <View style={{ padding: 30 }}></View>
            </View>
          </View>
        </ScrollView>
      ) : null}
      {linearDevice ? (
        <ScrollView style={{ height: "50%", marginBottom: 50 }}>
          <View
            style={{
              marginHorizontal: 15,
              marginVertical: 10,
              borderRadius: 10,
              backgroundColor: "#ECECECB3",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  borderRadius: 10,
                  width: "12%",
                  height: "40%",
                  backgroundColor: "#1A8AE5",
                  // justifyContent:"center",
                  // alignSelf:"center"
                  padding: 12,
                  marginTop: 20,
                  marginHorizontal: 5,
                }}
              >
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
                      fill="#FFFFFF"
                      stroke="#FFFFFF"
                      stroke-width="0.4"
                    />
                    <Path
                      d="M1372.53,664.35a.319.319,0,1,0-.45.451l.578.578a.319.319,0,0,0,.451-.451Z"
                      transform="translate(-1153.553 -649.519)"
                      fill="#FFFFFF"
                      stroke="#FFFFFF"
                      stroke-width="0.4"
                    />
                    <Path
                      d="M1202.128,744.966a.319.319,0,0,0-.318.319v.817a.319.319,0,0,0,.319.319h0a.319.319,0,0,0,.319-.319v-.817a.319.319,0,0,0-.318-.319Z"
                      transform="translate(-985.109 -729.406)"
                      fill="#FFFFFF"
                      stroke="#FFFFFF"
                      stroke-width="0.4"
                    />
                    <Path
                      d="M1453.839,494.081h-.817a.319.319,0,1,0,0,.637h.817a.319.319,0,1,0,0-.637Z"
                      transform="translate(-1233.447 -481.077)"
                      fill="#FFFFFF"
                      stroke="#FFFFFF"
                      stroke-width="0.4"
                    />
                  </G>
                </Svg>
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
                    marginTop: 5,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: 100,
                      padding: 3,
                      marginRight: 2,
                    }}
                  >
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
                          />
                          <G transform="translate(2736.907 19217.35) rotate(90)">
                            <Path
                              d="M16.875,2.25h.641V3.839h-.641Z"
                              transform="translate(-10.274 0)"
                              fill="black"
                            />
                            <Path
                              d="M24.4,7.179l1.123-1.123.453.453L24.851,7.632Z"
                              transform="translate(-15.469 -2.722)"
                              fill="black"
                            />
                            <Path
                              d="M28.17,16.875h1.589v.641H28.17Z"
                              transform="translate(-18.167 -10.301)"
                              fill="black"
                            />
                            <Path
                              d="M24.405,24.853l.453-.453,1.123,1.123-.453.453Z"
                              transform="translate(-15.474 -15.523)"
                              fill="black"
                            />
                            <Path
                              d="M16.875,28.17h.641v1.589h-.641Z"
                              transform="translate(-10.274 -18.22)"
                              fill="black"
                            />
                            <Path
                              d="M6.072,25.53,7.2,24.407l.453.453L6.525,25.983Z"
                              transform="translate(-2.734 -15.528)"
                              fill="black"
                            />
                            <Path
                              d="M2.25,16.875H3.839v.641H2.25Z"
                              transform="translate(0 -10.301)"
                              fill="black"
                            />
                            <Path
                              d="M6.064,6.516l.454-.452L7.641,7.187l-.453.453Z"
                              transform="translate(-2.728 -2.728)"
                              fill="black"
                            />
                            <Path
                              d="M13.172,11.891a1.281,1.281,0,1,1-1.281,1.281,1.281,1.281,0,0,1,1.281-1.281m0-.641a1.922,1.922,0,1,0,1.922,1.922A1.922,1.922,0,0,0,13.172,11.25Z"
                              transform="translate(-6.251 -6.277)"
                              fill="black"
                            />
                          </G>
                        </G>
                      </G>
                    </Svg>
                  </View>
                  <ListCustomSlider />
                  <View
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: 100,
                      padding: 3,
                      marginLeft: 2,
                    }}
                  >
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
                          />
                          <G transform="translate(2948.944 19217.191) rotate(90)">
                            <Path
                              d="M16.875,2.25h.617V3.781h-.617Z"
                              transform="translate(-10.154 0)"
                              fill="black"
                            />
                            <Path
                              d="M24.4,7.138,25.48,6.056l.437.437L24.835,7.575Z"
                              transform="translate(-15.155 -2.762)"
                              fill="black"
                            />
                            <Path
                              d="M28.17,16.875H29.7v.617H28.17Z"
                              transform="translate(-17.892 -10.234)"
                              fill="black"
                            />
                            <Path
                              d="M24.4,24.837l.437-.437,1.082,1.083-.437.436Z"
                              transform="translate(-15.16 -15.316)"
                              fill="black"
                            />
                            <Path
                              d="M16.875,28.17h.617V29.7h-.617Z"
                              transform="translate(-10.154 -18.051)"
                              fill="black"
                            />
                            <Path
                              d="M6.072,25.489l1.082-1.082.437.437L6.509,25.926Z"
                              transform="translate(-2.773 -15.321)"
                              fill="black"
                            />
                            <Path
                              d="M2.25,16.875H3.781v.617H2.25Z"
                              transform="translate(0 -10.234)"
                              fill="black"
                            />
                            <Path
                              d="M6.064,6.5,6.5,6.064,7.584,7.147l-.437.437Z"
                              transform="translate(-2.768 -2.768)"
                              fill="black"
                            />
                            <Path
                              d="M13.1,11.25A1.852,1.852,0,1,0,14.954,13.1,1.852,1.852,0,0,0,13.1,11.25Z"
                              transform="translate(-6.073 -6.152)"
                              fill="black"
                            />
                          </G>
                        </G>
                      </G>
                    </Svg>
                  </View>
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
              marginHorizontal: 15,
              marginVertical: 10,
              borderRadius: 10,
              backgroundColor: "#ECECECB3",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  borderRadius: 10,
                  width: "12%",
                  height: "40%",
                  backgroundColor: "#1A8AE5",
                  // justifyContent:"center",
                  // alignSelf:"center"
                  padding: 12,
                  marginTop: 20,
                  marginHorizontal: 5,
                }}
              >
                <Svg
                  style={{ alignSelf: "center" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.497"
                  height="18.495"
                  viewBox="0 0 18.497 18.495"
                >
                  <G transform="translate(0.155 0.149)">
                    <Path
                      d="M16.5,5.645l-.029-.012c-.651-.249-1.328.278-2.184.947A11.436,11.436,0,0,1,11.72,8.217c-.009-.027-.021-.054-.031-.081-.016-.043-.031-.087-.049-.129-.032-.076-.069-.151-.108-.224l-.017-.03c-.036-.066-.075-.13-.117-.192l-.025-.036c-.025-.036-.049-.073-.076-.108,1.5-1.94,1.939-3.9,1.253-5.7A3.251,3.251,0,0,0,9.424,0C8.009-.036,6.22.47,5.64,1.691l-.012.029c-.25.652.279,1.328.947,2.184A11.45,11.45,0,0,1,8.211,6.468c-.031.01-.061.023-.092.035s-.08.028-.118.045c-.077.033-.152.07-.226.109l-.027.016q-.1.055-.195.118l-.036.025c-.037.025-.074.049-.109.076-1.939-1.5-3.9-1.935-5.7-1.25A3.251,3.251,0,0,0,0,8.769c-.044,1.415.465,3.2,1.687,3.783l.029.013c.652.249,1.328-.279,2.184-.947A11.456,11.456,0,0,1,6.461,9.983c.009.027.02.053.03.08.016.043.031.087.049.129.033.077.069.152.109.226l.008.015q.059.107.127.208l.019.027c.027.04.054.08.084.119-1.5,1.938-1.934,3.9-1.249,5.7a3.251,3.251,0,0,0,3.126,1.71l.17,0c1.386,0,3.056-.516,3.613-1.689,0-.01.009-.019.013-.029.249-.652-.279-1.328-.947-2.184a11.443,11.443,0,0,1-1.636-2.567c.029-.01.056-.022.085-.032s.082-.029.122-.046c.077-.033.152-.069.226-.109l.016-.009c.07-.038.139-.08.206-.125l.032-.022c.039-.027.078-.052.115-.081,1.94,1.5,3.9,1.938,5.7,1.253a3.251,3.251,0,0,0,1.71-3.126C18.232,8.013,17.723,6.225,16.5,5.645Zm-6.166,4.973c-.043.036-.089.069-.135.1l-.032.021q-.056.037-.114.069L10,10.838c-.03.016-.061.03-.092.044s-.052.024-.078.035l-.011,0a1.97,1.97,0,0,1-.446.119h0a1.936,1.936,0,0,1-1.8-.692l-.006-.007c-.035-.043-.068-.088-.1-.133l-.021-.033c-.024-.037-.047-.075-.069-.113l-.029-.052c-.016-.03-.03-.061-.044-.092s-.024-.051-.035-.078l-.007-.018a1.972,1.972,0,0,1-.117-.441v0a1.937,1.937,0,0,1,.692-1.8l.008-.007c.042-.035.087-.068.132-.1l.035-.023c.036-.024.074-.046.112-.068l.054-.03c.03-.016.061-.03.091-.044s.052-.024.078-.035l.032-.012a1.974,1.974,0,0,1,.429-.112h0a1.935,1.935,0,0,1,1.791.692l.009.012q.051.062.1.128l.025.038c.023.035.045.071.065.108.011.019.021.038.032.057s.028.058.042.087.026.054.037.082l.008.021a1.98,1.98,0,0,1,.115.437v0a1.935,1.935,0,0,1-.693,1.793ZM7.213,3.406c-.422-.541-.9-1.152-.833-1.386C6.744,1.288,8.033.769,9.4.813a2.594,2.594,0,0,1,2.4,1.2A5.048,5.048,0,0,1,10.71,6.851a2.756,2.756,0,0,0-1.62-.526c-.023,0-.045,0-.068,0A11.706,11.706,0,0,0,7.213,3.406ZM3.4,10.98c-.541.422-1.152.9-1.386.833C1.284,11.449.766,10.158.808,8.794A2.6,2.6,0,0,1,2,6.4,5.045,5.045,0,0,1,6.842,7.48,2.756,2.756,0,0,0,6.316,9.1c0,.025,0,.049,0,.073A11.708,11.708,0,0,0,3.4,10.98Zm7.573,3.811c.422.541.9,1.152.833,1.386-.364.732-1.657,1.246-3.019,1.207a2.6,2.6,0,0,1-2.4-1.2,5.046,5.046,0,0,1,1.084-4.838,2.756,2.756,0,0,0,1.614.523c.026,0,.051,0,.076,0A11.7,11.7,0,0,0,10.975,14.791ZM17.38,9.4a2.6,2.6,0,0,1-1.2,2.4,5.049,5.049,0,0,1-4.843-1.087A2.756,2.756,0,0,0,11.865,9.1c0-.024,0-.047,0-.071a11.694,11.694,0,0,0,2.925-1.81c.541-.422,1.156-.9,1.386-.833C16.9,6.748,17.423,8.04,17.38,9.4Z"
                      transform="translate(0 0)"
                      fill="white"
                      stroke="white"
                      stroke-width="0.3"
                    />
                    <Circle
                      cx="0.988"
                      cy="0.988"
                      r="0.988"
                      transform="translate(8.102 8.11)"
                      fill="white"
                      stroke="white"
                      stroke-width="0.3"
                    />
                  </G>
                </Svg>
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
                    marginTop: 10,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: 100,
                      padding: 3,
                      marginRight: 2,
                    }}
                  >
                    <Svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <G transform="translate(-25 -615)">
                        <G transform="translate(25.286 615)">
                          <Circle
                            cx="7"
                            cy="7"
                            r="7"
                            transform="translate(-0.286)"
                          />
                          <Path
                            d="M11.332,8.5H4.9a.485.485,0,0,0,0,.955h6.43a.485.485,0,0,0,0-.955Z"
                            transform="translate(-1.251 -1.5)"
                            fill="rgba(0,0,0,0.7)"
                          />
                        </G>
                      </G>
                    </Svg>
                  </View>
                  <ListCustomSlider />
                  <View
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: 100,
                      padding: 3,
                      marginLeft: 2,
                    }}
                  >
                    <Svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <G transform="translate(-321 -615)">
                        <G transform="translate(321 615)">
                          <Circle cx="7" cy="7" r="7" />
                          <Path
                            d="M8.713,7.548V4.5H7.776V7.548H4.5v.871H7.776v3.048h.936V8.419h3.276V7.548Z"
                            transform="translate(-1.278 -0.756)"
                            fill="rgba(0,0,0,0.7)"
                          />
                        </G>
                      </G>
                    </Svg>
                  </View>
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
              marginHorizontal: 15,
              marginVertical: 10,
              borderRadius: 10,
              backgroundColor: "#ECECECB3",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  borderRadius: 10,
                  width: "12%",
                  height: "40%",
                  backgroundColor: "#FFFFFF",
                  // justifyContent:"center",
                  // alignSelf:"center"
                  padding: 12,
                  marginTop: 20,
                  marginHorizontal: 5,
                }}
              >
                <Svg
                  style={{ alignSelf: "center" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="12.667"
                  height="18.869"
                  viewBox="0 0 12.667 18.869"
                >
                  <G transform="translate(-3.187 -0.374)">
                    <Path
                      d="M11.382,14.772v-.931c0-1.125,1.223-2.188,2.016-2.947A5.612,5.612,0,0,0,15.1,6.707a5.583,5.583,0,1,0-11.167,0,5.748,5.748,0,0,0,1.706,4.187c.788.744,2.016,1.811,2.016,2.947v.931"
                      fill="none"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <Path
                      d="M7.875,16.875h2.481"
                      transform="translate(0.405 1.619)"
                      fill="black"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <Path
                      d="M7.313,15.188h3.722"
                      transform="translate(0.347 1.445)"
                      fill="black"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <Path
                      d="M9,13.962V9"
                      transform="translate(0.52 0.809)"
                      fill="black"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <Path
                      d="M10.611,8.438a3.222,3.222,0,0,1-1.473.621,3.222,3.222,0,0,1-1.473-.621"
                      transform="translate(0.383 0.752)"
                      fill="black"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                  </G>
                </Svg>
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
                    marginTop: 10,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: 100,
                      padding: 3,
                      marginRight: 2,
                    }}
                  >
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
                          />
                          <G transform="translate(2736.907 19217.35) rotate(90)">
                            <Path
                              d="M16.875,2.25h.641V3.839h-.641Z"
                              transform="translate(-10.274 0)"
                              fill="black"
                            />
                            <Path
                              d="M24.4,7.179l1.123-1.123.453.453L24.851,7.632Z"
                              transform="translate(-15.469 -2.722)"
                              fill="black"
                            />
                            <Path
                              d="M28.17,16.875h1.589v.641H28.17Z"
                              transform="translate(-18.167 -10.301)"
                              fill="black"
                            />
                            <Path
                              d="M24.405,24.853l.453-.453,1.123,1.123-.453.453Z"
                              transform="translate(-15.474 -15.523)"
                              fill="black"
                            />
                            <Path
                              d="M16.875,28.17h.641v1.589h-.641Z"
                              transform="translate(-10.274 -18.22)"
                              fill="black"
                            />
                            <Path
                              d="M6.072,25.53,7.2,24.407l.453.453L6.525,25.983Z"
                              transform="translate(-2.734 -15.528)"
                              fill="black"
                            />
                            <Path
                              d="M2.25,16.875H3.839v.641H2.25Z"
                              transform="translate(0 -10.301)"
                              fill="black"
                            />
                            <Path
                              d="M6.064,6.516l.454-.452L7.641,7.187l-.453.453Z"
                              transform="translate(-2.728 -2.728)"
                              fill="black"
                            />
                            <Path
                              d="M13.172,11.891a1.281,1.281,0,1,1-1.281,1.281,1.281,1.281,0,0,1,1.281-1.281m0-.641a1.922,1.922,0,1,0,1.922,1.922A1.922,1.922,0,0,0,13.172,11.25Z"
                              transform="translate(-6.251 -6.277)"
                              fill="black"
                            />
                          </G>
                        </G>
                      </G>
                    </Svg>
                  </View>
                  <ListOffCustomSlider />
                  <View
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: 100,
                      padding: 3,
                      marginLeft: 2,
                    }}
                  >
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
                          />
                          <G transform="translate(2948.944 19217.191) rotate(90)">
                            <Path
                              d="M16.875,2.25h.617V3.781h-.617Z"
                              transform="translate(-10.154 0)"
                              fill="black"
                            />
                            <Path
                              d="M24.4,7.138,25.48,6.056l.437.437L24.835,7.575Z"
                              transform="translate(-15.155 -2.762)"
                              fill="black"
                            />
                            <Path
                              d="M28.17,16.875H29.7v.617H28.17Z"
                              transform="translate(-17.892 -10.234)"
                              fill="black"
                            />
                            <Path
                              d="M24.4,24.837l.437-.437,1.082,1.083-.437.436Z"
                              transform="translate(-15.16 -15.316)"
                              fill="black"
                            />
                            <Path
                              d="M16.875,28.17h.617V29.7h-.617Z"
                              transform="translate(-10.154 -18.051)"
                              fill="black"
                            />
                            <Path
                              d="M6.072,25.489l1.082-1.082.437.437L6.509,25.926Z"
                              transform="translate(-2.773 -15.321)"
                              fill="black"
                            />
                            <Path
                              d="M2.25,16.875H3.781v.617H2.25Z"
                              transform="translate(0 -10.234)"
                              fill="black"
                            />
                            <Path
                              d="M6.064,6.5,6.5,6.064,7.584,7.147l-.437.437Z"
                              transform="translate(-2.768 -2.768)"
                              fill="black"
                            />
                            <Path
                              d="M13.1,11.25A1.852,1.852,0,1,0,14.954,13.1,1.852,1.852,0,0,0,13.1,11.25Z"
                              transform="translate(-6.073 -6.152)"
                              fill="black"
                            />
                          </G>
                        </G>
                      </G>
                    </Svg>
                  </View>
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
              marginHorizontal: 15,
              marginVertical: 10,
              borderRadius: 10,
              backgroundColor: "#ECECECB3",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  borderRadius: 10,
                  width: "12%",
                  height: "40%",
                  backgroundColor: "#1A8AE5",
                  // justifyContent:"center",
                  // alignSelf:"center"
                  padding: 12,
                  marginTop: 20,
                  marginHorizontal: 5,
                }}
              >
                <Svg
                  style={{
                    alignSelf: "center",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="10.696"
                  height="18.494"
                  viewBox="0 0 10.696 18.494"
                >
                  <Path
                    d="M18.1,6.149h-.65V2.25h-1.3v3.9h-3.9V2.25h-1.3v3.9H10.3A1.3,1.3,0,0,0,9,7.448v3.9A5.2,5.2,0,0,0,13.548,16.5v3.944h1.3V16.5A5.2,5.2,0,0,0,19.4,11.347v-3.9A1.3,1.3,0,0,0,18.1,6.149Zm0,5.2a3.9,3.9,0,1,1-7.8,0v-3.9h7.8Z"
                    transform="translate(-8.85 -2.1)"
                    fill="#FFFFFF"
                    stroke="#FFFFFF"
                    stroke-width="0.3"
                  />
                </Svg>
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
                <View style={{ padding: 18 }}></View>
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
              marginHorizontal: 15,
              marginVertical: 10,
              borderRadius: 10,
              backgroundColor: "#ECECECB3",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  borderRadius: 10,
                  width: "12%",
                  height: "40%",
                  backgroundColor: "#FFFFFF",
                  // justifyContent:"center",
                  // alignSelf:"center"
                  padding: 12,
                  marginTop: 20,
                  marginHorizontal: 5,
                }}
              >
                <Svg
                  style={{ alignSelf: "center" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="14.04"
                  height="14.885"
                  viewBox="0 0 14.04 14.885"
                >
                  <G transform="translate(-2.894 -1.85)">
                    <Path
                      d="M13.184,6.458l-.5.87a5.533,5.533,0,1,1-5.533,0l-.5-.87a6.539,6.539,0,1,0,6.539,0Z"
                      transform="translate(0 -2.326)"
                      fill="#000000"
                      stroke="#000000"
                      stroke-width="0.8"
                    />
                    <Path
                      d="M16.875,2.25h1.006V9.292H16.875Z"
                      transform="translate(-7.464 0)"
                      fill="#000000"
                      stroke="#000000"
                      stroke-width="0.8"
                    />
                  </G>
                </Svg>
              </View>
              <View style={{ margin: 10 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "900",
                    opacity: 100,
                  }}
                >
                  Switch 1
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
                <View style={{ padding: 18 }}></View>
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
        <ScrollView style={{ height: "54%",marginBottom: 50 }}>
          <View style={{ flexDirection: "row" }}>
            <Pressable
              onPress={() => {
                navigation.navigate("Living Room");
              }}
              style={{
                backgroundColor: "#ECECECB3",
                width: "43%",
                height: 170,
                borderRadius: 10,
                marginVertical: 5,
                marginLeft: 20,

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
                      height: "80%",
                      backgroundColor: "#1A8AE5",
                      // justifyContent:"center",
                      // alignSelf:"center"
                      marginHorizontal: 0,
                      paddingVertical: 10,
                      marginTop: 8,
                    }}
                  >
                    <Svg
                      style={{
                        alignSelf: "center",
                        padding: 10,
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="21.769"
                      height="14.211"
                      viewBox="0 0 21.769 14.211"
                    >
                      <Path
                        d="M19.829,92.327a1.929,1.929,0,0,0-.759.155v-1.74a1.86,1.86,0,0,0-1.858-1.858H4.557A1.86,1.86,0,0,0,2.7,90.742v1.74A1.94,1.94,0,0,0,0,94.268V102.5a.59.59,0,0,0,.59.59h2.7a.59.59,0,0,0,.59-.59V100.4H17.889V102.5a.59.59,0,0,0,.59.59h2.7a.59.59,0,0,0,.59-.59V94.268A1.943,1.943,0,0,0,19.829,92.327ZM3.881,94.268V90.742a.677.677,0,0,1,.677-.677H17.211a.678.678,0,0,1,.677.677v5.029H11.475V93.077a.59.59,0,0,0-1.181,0v2.694H3.881Zm-2.7,0a.759.759,0,1,1,1.519,0v1.5H1.181ZM2.7,101.914H1.181V100.4H2.7Zm17.889,0H19.07V100.4h1.519Zm0-2.7H1.181V96.952H20.588v2.263Zm0-3.444H19.07v-1.5a.759.759,0,1,1,1.519,0Z"
                        transform="translate(0 -88.884)"
                        fill="#FFFFFF"
                      />
                      <G transform="translate(10.294 1.584)">
                        <Path
                          d="M242.7,126.132a.59.59,0,0,0-.59.59V127a.59.59,0,1,0,1.181,0v-.276A.59.59,0,0,0,242.7,126.132Z"
                          transform="translate(-242.112 -126.132)"
                          fill="#FFFFFF"
                        />
                      </G>
                      <Path
                        d="M19.829,92.327a1.929,1.929,0,0,0-.759.155v-1.74a1.86,1.86,0,0,0-1.858-1.858H4.557A1.86,1.86,0,0,0,2.7,90.742v1.74A1.94,1.94,0,0,0,0,94.268V102.5a.59.59,0,0,0,.59.59h2.7a.59.59,0,0,0,.59-.59V100.4H17.889V102.5a.59.59,0,0,0,.59.59h2.7a.59.59,0,0,0,.59-.59V94.268A1.943,1.943,0,0,0,19.829,92.327ZM3.881,94.268V90.742a.677.677,0,0,1,.677-.677H17.211a.678.678,0,0,1,.677.677v5.029H11.475V93.077a.59.59,0,0,0-1.181,0v2.694H3.881Zm-2.7,0a.759.759,0,1,1,1.519,0v1.5H1.181ZM2.7,101.914H1.181V100.4H2.7Zm17.889,0H19.07V100.4h1.519Zm0-2.7H1.181V96.952H20.588v2.263Zm0-3.444H19.07v-1.5a.759.759,0,1,1,1.519,0Z"
                        transform="translate(0 -88.884)"
                        fill="#FFFFFF"
                      />
                    </Svg>
                  </View>
                  <View>
                    <UseSwitch />
                  </View>
                </View>

                <View style={{ marginVertical: 45, marginHorizontal: 10 }}>
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
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate("Kitchen");
              }}
              style={{
                backgroundColor: "#ECECECB3",
                width: "43%",
                height: 170,
                borderRadius: 10,
                marginHorizontal: 10,
                marginVertical: 5,

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
                      height: "80%",
                      backgroundColor: "#1A8AE5",
                      // justifyContent:"center",
                      // alignSelf:"center"
                      marginHorizontal: 0,
                      paddingVertical: 10,
                      marginTop: 8,
                    }}
                  >
                    <Svg
                      style={{
                        alignSelf: "center",
                        padding: 10,
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.323"
                      height="14.053"
                      viewBox="0 0 20.323 14.053"
                    >
                      <G transform="translate(11.321 1.683)">
                        <Path
                          d="M283.743,140.568h-.312a.407.407,0,1,0,0,.814h.312a.407.407,0,0,0,0-.814Z"
                          transform="translate(-283.024 -140.568)"
                          fill="#FFFFFF"
                        />
                      </G>
                      <G transform="translate(1.668 1.683)">
                        <Path
                          d="M58.927,140.568H57.869a.557.557,0,0,0,0,1.073h.651v8.543H48.307v-8.543h6.51a.557.557,0,0,0,0-1.073H47.9a.485.485,0,0,0-.407.536v9.615a.485.485,0,0,0,.407.536H58.927a.485.485,0,0,0,.407-.536V141.1A.485.485,0,0,0,58.927,140.568Z"
                          transform="translate(-47.493 -140.568)"
                          fill="#FFFFFF"
                        />
                      </G>
                      <Path
                        d="M19.082,92.67H1.241A1.3,1.3,0,0,0,0,94.015v11.362a1.3,1.3,0,0,0,1.241,1.345h17.84a1.3,1.3,0,0,0,1.241-1.345V94.015A1.3,1.3,0,0,0,19.082,92.67ZM16.231,103v2.724H1.241a.337.337,0,0,1-.322-.349V94.015a.337.337,0,0,1,.322-.349H16.231Zm3.173,2.375a.337.337,0,0,1-.322.349H17.15V103.5H19.4v1.877Zm0-2.874H17.151V93.667h1.931a.337.337,0,0,1,.322.349V102.5Z"
                        transform="translate(0 -92.67)"
                        fill="#FFFFFF"
                      />
                      <G transform="translate(18.105 2.602)">
                        <Path
                          d="M449.276,151.944a.407.407,0,0,0-.407.407v.326a.407.407,0,1,0,.814,0v-.326A.407.407,0,0,0,449.276,151.944Z"
                          transform="translate(-448.869 -151.944)"
                          fill="#FFFFFF"
                        />
                      </G>
                      <G transform="translate(18.105 4.813)">
                        <Path
                          d="M449.276,202.333a.407.407,0,0,0-.407.407v.326a.407.407,0,0,0,.814,0v-.326A.407.407,0,0,0,449.276,202.333Z"
                          transform="translate(-448.869 -202.333)"
                          fill="#FFFFFF"
                        />
                      </G>
                      <G transform="translate(18.105 7.025)">
                        <Path
                          d="M449.276,252.722a.407.407,0,0,0-.407.407v.326a.407.407,0,1,0,.814,0v-.326A.407.407,0,0,0,449.276,252.722Z"
                          transform="translate(-448.869 -252.722)"
                          fill="#FFFFFF"
                        />
                      </G>
                    </Svg>
                  </View>
                  <View>
                    <UseSwitch />
                  </View>
                </View>

                <View style={{ marginVertical: 45, marginHorizontal: 10 }}>
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
                    6 Devices
                  </Text>
                </View>
              </View>
            </Pressable>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                backgroundColor: "#ECECECB3",
                width: "43%",
                height: 170,
                borderRadius: 10,
                marginLeft: 20,
                marginVertical: 5,

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
                      height: "80%",
                      backgroundColor: "#FFFFFF",
                      // justifyContent:"center",
                      // alignSelf:"center"
                      marginHorizontal: 0,
                      paddingVertical: 10,
                      marginTop: 8,
                    }}
                  >
                    <Svg
                      style={{
                        alignSelf: "center",
                        padding: 10,
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.664"
                      height="17.564"
                      viewBox="0 0 20.664 17.564"
                    >
                      <Path
                        d="M6.908,4H17.756a2.842,2.842,0,0,1,2.836,2.668l.005.173v3.465a2.843,2.843,0,0,1,2.059,2.541l.007.193V20.79a.775.775,0,0,1-1.543.105l-.007-.105V18.465H3.55V20.79a.775.775,0,0,1-.67.768l-.105.007a.775.775,0,0,1-.768-.67L2,20.79V13.041a2.843,2.843,0,0,1,2.067-2.734V6.841A2.841,2.841,0,0,1,6.735,4.005Zm12.915,7.749H4.841a1.292,1.292,0,0,0-1.285,1.159l-.007.132v3.875H21.114V13.041a1.292,1.292,0,0,0-1.159-1.285Zm-2.066-6.2H6.908A1.292,1.292,0,0,0,5.623,6.709l-.007.132V10.2h1.55A1.033,1.033,0,0,1,8.2,9.166h2.066a1.033,1.033,0,0,1,1.026.913l.007.12h2.066A1.033,1.033,0,0,1,14.4,9.166h2.066a1.033,1.033,0,0,1,1.026.913l.007.12h1.55V6.841a1.292,1.292,0,0,0-1.159-1.285Z"
                        transform="translate(-2 -4)"
                        fill="#707070"
                      />
                    </Svg>
                  </View>
                  <View>
                    <UseSwitch />
                  </View>
                </View>

                <View style={{ marginVertical: 45, marginHorizontal: 10 }}>
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
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#ECECECB3",
                width: "43%",
                height: 170,
                borderRadius: 10,
                marginHorizontal: 10,
                marginVertical: 5,
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
                      height: "80%",
                      backgroundColor: "#1A8AE5",
                      // justifyContent:"center",
                      // alignSelf:"center"
                      marginHorizontal: 0,
                      paddingVertical: 10,
                      marginTop: 8,
                    }}
                  >
                    <Svg
                      style={{
                        alignSelf: "center",
                        padding: 10,
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="22.099"
                      height="17.013"
                      viewBox="0 0 22.099 17.013"
                    >
                      <G transform="translate(-0.975 -5.475)">
                        <Path
                          d="M22.267,17.617A9.458,9.458,0,0,0,13.548,8.2V5.625H12.095V8.2a9.459,9.459,0,0,0-8.72,9.418v1.5H22.267Zm-1.453.05H4.828v-.05a7.993,7.993,0,0,1,15.986,0Z"
                          transform="translate(-0.797)"
                          fill="#FFFFFF"
                          stroke="#FFFFFF"
                          stroke-width="0.3"
                        />
                        <Path
                          d="M1.125,29.25h21.8V30.7H1.125Z"
                          transform="translate(0 -8.366)"
                          fill="#FFFFFF"
                          stroke="#FFFFFF"
                          stroke-width="0.3"
                        />
                      </G>
                    </Svg>
                  </View>
                  <View>
                    <UseSwitch />
                  </View>
                </View>

                <View style={{ marginVertical: 45, marginHorizontal: 10 }}>
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
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                backgroundColor: "#ECECECB3",
                width: "43%",
                height: 170,
                borderRadius: 10,
                marginLeft: 20,
                marginVertical: 5,

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
                      height: "80%",
                      backgroundColor: "#FFFFFF",
                      // justifyContent:"center",
                      // alignSelf:"center"
                      marginHorizontal: 0,
                      paddingVertical: 10,
                      marginTop: 8,
                    }}
                  >
                    <Svg
                      style={{
                        alignSelf: "center",
                        padding: 10,
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="22.6"
                      height="22.784"
                      viewBox="0 0 22.6 22.784"
                    >
                      <Path
                        d="M21.75,13.125h-18V4.688a2.4,2.4,0,0,1,.708-1.71l.019-.019a2.423,2.423,0,0,1,2.747-.476,3.708,3.708,0,0,0,.552,4.529l.513.513-.945.945L8.4,9.531l.945-.945L14.585,3.35,15.53,2.4,14.469,1.344l-.945.945-.513-.513A3.707,3.707,0,0,0,8.28,1.355,3.919,3.919,0,0,0,3.417,1.9L3.4,1.917A3.893,3.893,0,0,0,2.25,4.688v8.438H.75v1.5h1.5v1.439a1.123,1.123,0,0,0,.058.356l1.4,4.185a1.124,1.124,0,0,0,1.067.769h.6L4.828,23.25H6.39l.548-1.875h9.755l.563,1.875h1.566l-.563-1.875h.972a1.124,1.124,0,0,0,1.066-.769l1.4-4.186a1.124,1.124,0,0,0,.058-.356V14.625h1.5v-1.5ZM8.837,2.837a2.2,2.2,0,0,1,3.114,0l.513.513L9.35,6.464l-.513-.513a2.2,2.2,0,0,1,0-3.114ZM20.25,16l-1.291,3.872H5.041L3.75,16V14.625h16.5Z"
                        transform="translate(-0.7 -0.516)"
                        fill="#707070"
                        stroke="#707070"
                        stroke-width="0.1"
                      />
                    </Svg>
                  </View>
                  <View>
                    <UseSwitch />
                  </View>
                </View>

                <View style={{ marginVertical: 45, marginHorizontal: 10 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "900",
                      opacity: 100,
                    }}
                  >
                    Bath Room
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
        </ScrollView>
      ) : null}
      {linearRooms ? (
        <ScrollView style={{ width: "100%", height: "50%", marginBottom: 50 }}>
          <View
            style={{
              marginHorizontal: 15,
              marginVertical: 14,
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
                <Svg
                  style={{
                    alignSelf: "center",
                    padding: 10,
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.769"
                  height="14.211"
                  viewBox="0 0 21.769 14.211"
                >
                  <Path
                    d="M19.829,92.327a1.929,1.929,0,0,0-.759.155v-1.74a1.86,1.86,0,0,0-1.858-1.858H4.557A1.86,1.86,0,0,0,2.7,90.742v1.74A1.94,1.94,0,0,0,0,94.268V102.5a.59.59,0,0,0,.59.59h2.7a.59.59,0,0,0,.59-.59V100.4H17.889V102.5a.59.59,0,0,0,.59.59h2.7a.59.59,0,0,0,.59-.59V94.268A1.943,1.943,0,0,0,19.829,92.327ZM3.881,94.268V90.742a.677.677,0,0,1,.677-.677H17.211a.678.678,0,0,1,.677.677v5.029H11.475V93.077a.59.59,0,0,0-1.181,0v2.694H3.881Zm-2.7,0a.759.759,0,1,1,1.519,0v1.5H1.181ZM2.7,101.914H1.181V100.4H2.7Zm17.889,0H19.07V100.4h1.519Zm0-2.7H1.181V96.952H20.588v2.263Zm0-3.444H19.07v-1.5a.759.759,0,1,1,1.519,0Z"
                    transform="translate(0 -88.884)"
                    fill="#FFFFFF"
                  />
                  <G transform="translate(10.294 1.584)">
                    <Path
                      d="M242.7,126.132a.59.59,0,0,0-.59.59V127a.59.59,0,1,0,1.181,0v-.276A.59.59,0,0,0,242.7,126.132Z"
                      transform="translate(-242.112 -126.132)"
                      fill="#FFFFFF"
                    />
                  </G>
                  <Path
                    d="M19.829,92.327a1.929,1.929,0,0,0-.759.155v-1.74a1.86,1.86,0,0,0-1.858-1.858H4.557A1.86,1.86,0,0,0,2.7,90.742v1.74A1.94,1.94,0,0,0,0,94.268V102.5a.59.59,0,0,0,.59.59h2.7a.59.59,0,0,0,.59-.59V100.4H17.889V102.5a.59.59,0,0,0,.59.59h2.7a.59.59,0,0,0,.59-.59V94.268A1.943,1.943,0,0,0,19.829,92.327ZM3.881,94.268V90.742a.677.677,0,0,1,.677-.677H17.211a.678.678,0,0,1,.677.677v5.029H11.475V93.077a.59.59,0,0,0-1.181,0v2.694H3.881Zm-2.7,0a.759.759,0,1,1,1.519,0v1.5H1.181ZM2.7,101.914H1.181V100.4H2.7Zm17.889,0H19.07V100.4h1.519Zm0-2.7H1.181V96.952H20.588v2.263Zm0-3.444H19.07v-1.5a.759.759,0,1,1,1.519,0Z"
                    transform="translate(0 -88.884)"
                    fill="#FFFFFF"
                  />
                </Svg>
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
              marginHorizontal: 15,
              marginVertical: 14,
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
                <Svg
                  style={{
                    alignSelf: "center",
                    padding: 10,
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.323"
                  height="14.053"
                  viewBox="0 0 20.323 14.053"
                >
                  <G transform="translate(11.321 1.683)">
                    <Path
                      d="M283.743,140.568h-.312a.407.407,0,1,0,0,.814h.312a.407.407,0,0,0,0-.814Z"
                      transform="translate(-283.024 -140.568)"
                      fill="#FFFFFF"
                    />
                  </G>
                  <G transform="translate(1.668 1.683)">
                    <Path
                      d="M58.927,140.568H57.869a.557.557,0,0,0,0,1.073h.651v8.543H48.307v-8.543h6.51a.557.557,0,0,0,0-1.073H47.9a.485.485,0,0,0-.407.536v9.615a.485.485,0,0,0,.407.536H58.927a.485.485,0,0,0,.407-.536V141.1A.485.485,0,0,0,58.927,140.568Z"
                      transform="translate(-47.493 -140.568)"
                      fill="#FFFFFF"
                    />
                  </G>
                  <Path
                    d="M19.082,92.67H1.241A1.3,1.3,0,0,0,0,94.015v11.362a1.3,1.3,0,0,0,1.241,1.345h17.84a1.3,1.3,0,0,0,1.241-1.345V94.015A1.3,1.3,0,0,0,19.082,92.67ZM16.231,103v2.724H1.241a.337.337,0,0,1-.322-.349V94.015a.337.337,0,0,1,.322-.349H16.231Zm3.173,2.375a.337.337,0,0,1-.322.349H17.15V103.5H19.4v1.877Zm0-2.874H17.151V93.667h1.931a.337.337,0,0,1,.322.349V102.5Z"
                    transform="translate(0 -92.67)"
                    fill="#FFFFFF"
                  />
                  <G transform="translate(18.105 2.602)">
                    <Path
                      d="M449.276,151.944a.407.407,0,0,0-.407.407v.326a.407.407,0,1,0,.814,0v-.326A.407.407,0,0,0,449.276,151.944Z"
                      transform="translate(-448.869 -151.944)"
                      fill="#FFFFFF"
                    />
                  </G>
                  <G transform="translate(18.105 4.813)">
                    <Path
                      d="M449.276,202.333a.407.407,0,0,0-.407.407v.326a.407.407,0,0,0,.814,0v-.326A.407.407,0,0,0,449.276,202.333Z"
                      transform="translate(-448.869 -202.333)"
                      fill="#FFFFFF"
                    />
                  </G>
                  <G transform="translate(18.105 7.025)">
                    <Path
                      d="M449.276,252.722a.407.407,0,0,0-.407.407v.326a.407.407,0,1,0,.814,0v-.326A.407.407,0,0,0,449.276,252.722Z"
                      transform="translate(-448.869 -252.722)"
                      fill="#FFFFFF"
                    />
                  </G>
                </Svg>
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
              marginHorizontal: 15,
              marginVertical: 14,
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
                <Svg
                  style={{
                    alignSelf: "center",
                    padding: 10,
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.664"
                  height="17.564"
                  viewBox="0 0 20.664 17.564"
                >
                  <Path
                    d="M6.908,4H17.756a2.842,2.842,0,0,1,2.836,2.668l.005.173v3.465a2.843,2.843,0,0,1,2.059,2.541l.007.193V20.79a.775.775,0,0,1-1.543.105l-.007-.105V18.465H3.55V20.79a.775.775,0,0,1-.67.768l-.105.007a.775.775,0,0,1-.768-.67L2,20.79V13.041a2.843,2.843,0,0,1,2.067-2.734V6.841A2.841,2.841,0,0,1,6.735,4.005Zm12.915,7.749H4.841a1.292,1.292,0,0,0-1.285,1.159l-.007.132v3.875H21.114V13.041a1.292,1.292,0,0,0-1.159-1.285Zm-2.066-6.2H6.908A1.292,1.292,0,0,0,5.623,6.709l-.007.132V10.2h1.55A1.033,1.033,0,0,1,8.2,9.166h2.066a1.033,1.033,0,0,1,1.026.913l.007.12h2.066A1.033,1.033,0,0,1,14.4,9.166h2.066a1.033,1.033,0,0,1,1.026.913l.007.12h1.55V6.841a1.292,1.292,0,0,0-1.159-1.285Z"
                    transform="translate(-2 -4)"
                    fill="#707070"
                  />
                </Svg>
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
              marginHorizontal: 15,
              marginVertical: 14,
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
                <Svg
                  style={{
                    alignSelf: "center",
                    padding: 10,
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.099"
                  height="17.013"
                  viewBox="0 0 22.099 17.013"
                >
                  <G transform="translate(-0.975 -5.475)">
                    <Path
                      d="M22.267,17.617A9.458,9.458,0,0,0,13.548,8.2V5.625H12.095V8.2a9.459,9.459,0,0,0-8.72,9.418v1.5H22.267Zm-1.453.05H4.828v-.05a7.993,7.993,0,0,1,15.986,0Z"
                      transform="translate(-0.797)"
                      fill="#FFFFFF"
                      stroke="#FFFFFF"
                      stroke-width="0.3"
                    />
                    <Path
                      d="M1.125,29.25h21.8V30.7H1.125Z"
                      transform="translate(0 -8.366)"
                      fill="#FFFFFF"
                      stroke="#FFFFFF"
                      stroke-width="0.3"
                    />
                  </G>
                </Svg>
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
          <View
            style={{
              marginHorizontal: 15,
              marginVertical: 14,
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
                <Svg
                  style={{
                    alignSelf: "center",
                    padding: 10,
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.6"
                  height="22.784"
                  viewBox="0 0 22.6 22.784"
                >
                  <Path
                    d="M21.75,13.125h-18V4.688a2.4,2.4,0,0,1,.708-1.71l.019-.019a2.423,2.423,0,0,1,2.747-.476,3.708,3.708,0,0,0,.552,4.529l.513.513-.945.945L8.4,9.531l.945-.945L14.585,3.35,15.53,2.4,14.469,1.344l-.945.945-.513-.513A3.707,3.707,0,0,0,8.28,1.355,3.919,3.919,0,0,0,3.417,1.9L3.4,1.917A3.893,3.893,0,0,0,2.25,4.688v8.438H.75v1.5h1.5v1.439a1.123,1.123,0,0,0,.058.356l1.4,4.185a1.124,1.124,0,0,0,1.067.769h.6L4.828,23.25H6.39l.548-1.875h9.755l.563,1.875h1.566l-.563-1.875h.972a1.124,1.124,0,0,0,1.066-.769l1.4-4.186a1.124,1.124,0,0,0,.058-.356V14.625h1.5v-1.5ZM8.837,2.837a2.2,2.2,0,0,1,3.114,0l.513.513L9.35,6.464l-.513-.513a2.2,2.2,0,0,1,0-3.114ZM20.25,16l-1.291,3.872H5.041L3.75,16V14.625h16.5Z"
                    transform="translate(-0.7 -0.516)"
                    fill="#707070"
                    stroke="#707070"
                    stroke-width="0.1"
                  />
                </Svg>
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
                    Bath Room
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
        </ScrollView>
      ) : null}
    </View>
  );
}

export default Home;
