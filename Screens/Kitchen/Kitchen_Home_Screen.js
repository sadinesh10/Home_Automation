import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
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
function Kitchen_Home_Screen() {
  const navigation = useNavigation();
  const [modal, setModal] = useState(false);
  const [schedule, setSchedule] = useState(false);
  const [settings, setSettings] = useState(false);
  const array2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const array = [
    {
      id: 1,
      name: "Light 1",
      svg: ({ select }) => <Fan1 tint={select ? "#FFFFFF" : "#707070"} />,
    },
    {
      id: 2,
      name: "Light 2",
      svg: ({ select }) => <Plug1 tint={select ? "#FFFFFF" : "#707070"} />,
    },
    {
      id: 3,
      name: "Light 3",
      svg: ({ select }) => <Switch1 tint={select ? "#FFFFFF" : "#707070"} />,
    },
    {
      id: 4,
      name: "Bulb 1",
      svg: ({ select }) => <Switch2 tint={select ? "#FFFFFF" : "#707070"} />,
    },
    {
      id: 5,
      name: "Bulb 2",
      svg: ({ select }) => <Switch3 tint={select ? "#FFFFFF" : "#707070"} />,
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState(false);
  const array1 = [
    {
      id: 1,
      name: "Leave Off",
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
  const [select, setSelect] = useState(array);
  const onSelect = (item, index) => {
    setSelectedIndex(index);
  };
  return (
    <View style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      {!schedule && !settings && (
        <View>
          <ImageBackground
            style={{ width: "100%", height: 200 }}
            source={require("../../assets/Images/Kitche.png")}
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
                Kitchen
              </Text>
            </View>
          </ImageBackground>
          <ScrollView horizontal>
            <View
              style={{
                marginTop: 30,
                marginHorizontal: 20,
                flexDirection: "row",
                height: 60,
              }}
              horizontal={true}
            >
              {select.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      onSelect(item, index);
                    }}
                    style={{
                      marginRight: 40,
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
                          padding: 15,
                        }}
                        key={item.id}
                      >
                        <item.svg select={selectedIndex == index} />
                      </View>
                      <Text style={{ margin: 5, alignItems: "center" }}>
                        {item.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
          <View style={{ height: "54%" }}></View>
        </View>
      )}

      {schedule && <Schedules_List onBackPress={() => setSchedule()} />}
      {settings && <Settings onBackPress={() => setSettings()} />}

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
        {array1.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                if (item.name == "Leave Off") {
                  setModal(true);
                  setSchedule(false);
                  setSettings(false);
                }
                if (item.name == "Schedule") {
                  setSchedule(true);
                  setSettings(false);
                  setModal(false);
                }
                if (item.name == "Settings") {
                  setSettings(true);
                  setSchedule(false);
                  setModal(false);
                }
              }}
              key={index}
            >
              <View style={{ alignSelf: "center", marginBottom: 10 }}>
                {item.svg(index == selectedIndex)}
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

export default Kitchen_Home_Screen;

function Switch3({ tint = "#707070" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="16.04"
      height="16.885"
      viewBox="0 0 14.04 14.885"
    >
      <G transform="translate(-2.894 -1.85)">
        <Path
          d="M13.184,6.458l-.5.87a5.533,5.533,0,1,1-5.533,0l-.5-.87a6.539,6.539,0,1,0,6.539,0Z"
          transform="translate(0 -2.326)"
          fill="#707070"
          stroke="#707070"
          stroke-width="0.8"
        />
        <Path
          d="M16.875,2.25h1.006V9.292H16.875Z"
          transform="translate(-7.464 0)"
          fill="#707070"
          stroke="#707070"
          stroke-width="0.8"
        />
      </G>
    </Svg>
  );
}
function Switch2({ tint = "#707070" }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="16.04"
        height="16.885"
        viewBox="0 0 14.04 14.885"
      >
        <G transform="translate(-2.894 -1.85)">
          <Path
            d="M13.184,6.458l-.5.87a5.533,5.533,0,1,1-5.533,0l-.5-.87a6.539,6.539,0,1,0,6.539,0Z"
            transform="translate(0 -2.326)"
            fill="#707070"
            stroke="#707070"
            stroke-width="0.8"
          />
          <Path
            d="M16.875,2.25h1.006V9.292H16.875Z"
            transform="translate(-7.464 0)"
            fill="#707070"
            stroke="#707070"
            stroke-width="0.8"
          />
        </G>
      </Svg>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="16.04"
        height="16.885"
        viewBox="0 0 14.04 14.885"
      >
        <G transform="translate(-2.894 -1.85)">
          <Path
            d="M13.184,6.458l-.5.87a5.533,5.533,0,1,1-5.533,0l-.5-.87a6.539,6.539,0,1,0,6.539,0Z"
            transform="translate(0 -2.326)"
            fill="#707070"
            stroke="#707070"
            stroke-width="0.8"
          />
          <Path
            d="M16.875,2.25h1.006V9.292H16.875Z"
            transform="translate(-7.464 0)"
            fill="#707070"
            stroke="#707070"
            stroke-width="0.8"
          />
        </G>
      </Svg>
    </View>
  );
}

function Switch1({ tint = "#707070" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="16.04"
      height="16.885"
      viewBox="0 0 14.04 14.885"
    >
      <G transform="translate(-2.894 -1.85)">
        <Path
          d="M13.184,6.458l-.5.87a5.533,5.533,0,1,1-5.533,0l-.5-.87a6.539,6.539,0,1,0,6.539,0Z"
          transform="translate(0 -2.326)"
          fill="#707070"
          stroke="#707070"
          stroke-width="0.8"
        />
        <Path
          d="M16.875,2.25h1.006V9.292H16.875Z"
          transform="translate(-7.464 0)"
          fill="#707070"
          stroke="#707070"
          stroke-width="0.8"
        />
      </G>
    </Svg>
  );
}

function Plug1({ tint = "#707070" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.696"
      height="18.494"
      viewBox="0 0 10.696 18.494"
    >
      <Path
        d="M18.1,6.149h-.65V2.25h-1.3v3.9h-3.9V2.25h-1.3v3.9H10.3A1.3,1.3,0,0,0,9,7.448v3.9A5.2,5.2,0,0,0,13.548,16.5v3.944h1.3V16.5A5.2,5.2,0,0,0,19.4,11.347v-3.9A1.3,1.3,0,0,0,18.1,6.149Zm0,5.2a3.9,3.9,0,1,1-7.8,0v-3.9h7.8Z"
        transform="translate(-8.85 -2.1)"
        fill="#707070"
        stroke="#707070"
        stroke-width="0.3"
      />
    </Svg>
  );
}

function Fan1({ tint = "#707070" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.497"
      height="18.495"
      viewBox="0 0 18.497 18.495"
    >
      <G transform="translate(0.155 0.149)">
        <Path
          d="M16.5,5.645l-.029-.012c-.651-.249-1.328.278-2.184.947A11.436,11.436,0,0,1,11.72,8.217c-.009-.027-.021-.054-.031-.081-.016-.043-.031-.087-.049-.129-.032-.076-.069-.151-.108-.224l-.017-.03c-.036-.066-.075-.13-.117-.192l-.025-.036c-.025-.036-.049-.073-.076-.108,1.5-1.94,1.939-3.9,1.253-5.7A3.251,3.251,0,0,0,9.424,0C8.009-.036,6.22.47,5.64,1.691l-.012.029c-.25.652.279,1.328.947,2.184A11.45,11.45,0,0,1,8.211,6.468c-.031.01-.061.023-.092.035s-.08.028-.118.045c-.077.033-.152.07-.226.109l-.027.016q-.1.055-.195.118l-.036.025c-.037.025-.074.049-.109.076-1.939-1.5-3.9-1.935-5.7-1.25A3.251,3.251,0,0,0,0,8.769c-.044,1.415.465,3.2,1.687,3.783l.029.013c.652.249,1.328-.279,2.184-.947A11.456,11.456,0,0,1,6.461,9.983c.009.027.02.053.03.08.016.043.031.087.049.129.033.077.069.152.109.226l.008.015q.059.107.127.208l.019.027c.027.04.054.08.084.119-1.5,1.938-1.934,3.9-1.249,5.7a3.251,3.251,0,0,0,3.126,1.71l.17,0c1.386,0,3.056-.516,3.613-1.689,0-.01.009-.019.013-.029.249-.652-.279-1.328-.947-2.184a11.443,11.443,0,0,1-1.636-2.567c.029-.01.056-.022.085-.032s.082-.029.122-.046c.077-.033.152-.069.226-.109l.016-.009c.07-.038.139-.08.206-.125l.032-.022c.039-.027.078-.052.115-.081,1.94,1.5,3.9,1.938,5.7,1.253a3.251,3.251,0,0,0,1.71-3.126C18.232,8.013,17.723,6.225,16.5,5.645Zm-6.166,4.973c-.043.036-.089.069-.135.1l-.032.021q-.056.037-.114.069L10,10.838c-.03.016-.061.03-.092.044s-.052.024-.078.035l-.011,0a1.97,1.97,0,0,1-.446.119h0a1.936,1.936,0,0,1-1.8-.692l-.006-.007c-.035-.043-.068-.088-.1-.133l-.021-.033c-.024-.037-.047-.075-.069-.113l-.029-.052c-.016-.03-.03-.061-.044-.092s-.024-.051-.035-.078l-.007-.018a1.972,1.972,0,0,1-.117-.441v0a1.937,1.937,0,0,1,.692-1.8l.008-.007c.042-.035.087-.068.132-.1l.035-.023c.036-.024.074-.046.112-.068l.054-.03c.03-.016.061-.03.091-.044s.052-.024.078-.035l.032-.012a1.974,1.974,0,0,1,.429-.112h0a1.935,1.935,0,0,1,1.791.692l.009.012q.051.062.1.128l.025.038c.023.035.045.071.065.108.011.019.021.038.032.057s.028.058.042.087.026.054.037.082l.008.021a1.98,1.98,0,0,1,.115.437v0a1.935,1.935,0,0,1-.693,1.793ZM7.213,3.406c-.422-.541-.9-1.152-.833-1.386C6.744,1.288,8.033.769,9.4.813a2.594,2.594,0,0,1,2.4,1.2A5.048,5.048,0,0,1,10.71,6.851a2.756,2.756,0,0,0-1.62-.526c-.023,0-.045,0-.068,0A11.706,11.706,0,0,0,7.213,3.406ZM3.4,10.98c-.541.422-1.152.9-1.386.833C1.284,11.449.766,10.158.808,8.794A2.6,2.6,0,0,1,2,6.4,5.045,5.045,0,0,1,6.842,7.48,2.756,2.756,0,0,0,6.316,9.1c0,.025,0,.049,0,.073A11.708,11.708,0,0,0,3.4,10.98Zm7.573,3.811c.422.541.9,1.152.833,1.386-.364.732-1.657,1.246-3.019,1.207a2.6,2.6,0,0,1-2.4-1.2,5.046,5.046,0,0,1,1.084-4.838,2.756,2.756,0,0,0,1.614.523c.026,0,.051,0,.076,0A11.7,11.7,0,0,0,10.975,14.791ZM17.38,9.4a2.6,2.6,0,0,1-1.2,2.4,5.049,5.049,0,0,1-4.843-1.087A2.756,2.756,0,0,0,11.865,9.1c0-.024,0-.047,0-.071a11.694,11.694,0,0,0,2.925-1.81c.541-.422,1.156-.9,1.386-.833C16.9,6.748,17.423,8.04,17.38,9.4Z"
          transform="translate(0 0)"
          fill={tint}
          stroke={tint}
          stroke-width="0.3"
        />
        <Circle
          cx="0.988"
          cy="0.988"
          r="0.988"
          transform="translate(8.102 8.11)"
          fill={tint}
          stroke={tint}
          stroke-width="0.3"
        />
      </G>
    </Svg>
  );
}
