import React, { useState } from "react";
import {
  FlatList,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Pressable, View } from "react-native";
import { G, Path, Svg } from "react-native-svg";
import { imageStyles } from "../../Authentication/Authentication_util";

function Settings({ onBackPress }) {
  const [deviceInformation, setDeviceInformation] = useState(true);
  const [textColor, setTextColor] = useState(true);
  const [wifiSettings, SetWifisettings] = useState(false);
  const [textColor1, setTextColor1] = useState(false);
  const [cloud, setCloud] = useState(false);
  const [textColor2, setTextColor2] = useState(false);
  const [modal, setModal] = useState(false);
  const [room, setRoom] = useState(false);
  const [textColor3, setTextColor3] = useState(false);
  const [changeRoom, setChangeRoom] = useState(false);
  const data = [
    {
      sideHeading: "Netwrok SSID",
      value: "VIKAS",
    },
    {
      sideHeading: "Model Number",
      value: "BL302",
    },
    {
      sideHeading: "Device IP",
      value: "192.168.1.10",
    },
    {
      sideHeading: "Current Status",
      value: "1",
    },
    {
      sideHeading: "Brightness Levek",
      value: "100%",
    },
    {
      sideHeading: "RSSi",
      value: "-74",
    },
    {
      sideHeading: "Cloud Status",
      value: "2,17,0",
    },
  ];

  const [images, setimages] = useState([
    {
      id: 1,
      name: "Living Room",
      select: false,
      svg: (select) => <Living_Room tint={select ? "#FFFFFF" : "#707070"} />,
    },
    {
      id: 2,
      name: "Change Room",
      select: false,
      svg: (select) => <Change_Room tint={select ? "#FFFFFF" : "#707070"} />,
    },
  ]);
  const [rooms, setRooms] = useState([
    {
      id: 1,
      name: "Living Room",
      select: false,
      svg: (select) => <Living_Room tint={select ? "#FFFFFF" : "#707070"} />,
    },
    {
      id: 2,
      name: "Change Room",
      select: false,
      svg: (select) => <Change_Room tint={select ? "#FFFFFF" : "#707070"} />,
    },
    {
      id: 3,
      name: "Living Room",
      select: false,
      svg: (select) => <Living_Room tint={select ? "#FFFFFF" : "#707070"} />,
    },
    {
      id: 4,
      name: "Change Room",
      select: false,
      svg: (select) => <Change_Room tint={select ? "#FFFFFF" : "#707070"} />,
    },
    {
      id: 5,
      name: "Living Room",
      select: false,
      svg: (select) => <Living_Room tint={select ? "#FFFFFF" : "#707070"} />,
    },
    {
      id: 6,
      name: "Change Room",
      select: false,
      svg: (select) => <Change_Room tint={select ? "#FFFFFF" : "#707070"} />,
    },
  ]);
  const [select, setSelect] = useState(images);

  const onSelect = (item) => {
    const newItem = select.map((val) => {
      if (val.id == item.id) {
        return { ...val, select: !val.select };
      } else {
        return val;
      }
    });

    setSelect(newItem);
  };
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => {
            onBackPress();
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
          Settings
        </Text>
      </View>
      <ScrollView style={{ height: 30 }} horizontal>
        <View>
          <TouchableOpacity
            onPress={() => {
              setDeviceInformation(true);
              setTextColor(true);
              SetWifisettings(false);
              setTextColor1(false);
              setCloud(false);
              setTextColor2(false);
              setRoom(false);
              setTextColor3(false);
              setChangeRoom(false);
              setRoom(false);
            }}
          >
            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 18,
                color: textColor ? "#1a8ae5" : "#000000",
              }}
            >
              Dvice Information
            </Text>
            {deviceInformation ? (
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  width: 30,
                  alignSelf: "center",
                  marginTop: 5,
                  borderColor: textColor ? "#1a8ae5" : null,
                }}
              >
                <Text> </Text>
              </View>
            ) : null}
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              setDeviceInformation(false);
              setTextColor(false);
              SetWifisettings(true);
              setTextColor1(true);
              setCloud(false);
              setTextColor2(false);
              setRoom(false);
              setTextColor3(false);
              setChangeRoom(false);
              setRoom(false);
            }}
          >
            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 18,
                color: textColor1 ? "#1a8ae5" : "#000000",
              }}
            >
              WiFi Settings
            </Text>
            {wifiSettings ? (
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  width: 30,
                  alignSelf: "center",
                  marginTop: 5,
                  borderColor: textColor1 ? "#1a8ae5" : null,
                }}
              >
                <Text> </Text>
              </View>
            ) : null}
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              setCloud(true);
              setTextColor2(true);
              setDeviceInformation(false);
              setTextColor(false);
              SetWifisettings(false);
              setTextColor1(false);
              setRoom(false);
              setTextColor3(false);
              setChangeRoom(false);
              setRoom(false);
            }}
          >
            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 18,
                color: textColor2 ? "#1a8ae5" : "#000000",
              }}
            >
              {cloud ? "Cloud" : "Cloud Status"}
            </Text>
            {cloud ? (
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  width: 30,
                  alignSelf: "center",
                  marginTop: 5,
                  borderColor: textColor2 ? "#1a8ae5" : null,
                }}
              >
                <Text> </Text>
              </View>
            ) : null}
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              setDeviceInformation(false);
              setTextColor(false);
              SetWifisettings(false);
              setTextColor1(false);
              setCloud(false);
              setTextColor2(false);
              setRoom(true);
              setTextColor3(true);
            }}
          >
            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 18,
                color: textColor3 ? "#1a8ae5" : "#000000",
              }}
            >
              Room
            </Text>
            {room ? (
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  width: 30,
                  alignSelf: "center",
                  marginTop: 5,
                  borderColor: textColor3 ? "#1a8ae5" : null,
                }}
              >
                <Text> </Text>
              </View>
            ) : null}
          </TouchableOpacity>
        </View>
      </ScrollView>
      {deviceInformation ? (
        <ScrollView height="75%">
          {data.map((item, index) => {
            return (
              <View
                style={{ marginTop: 0, marginHorizontal: 10, marginBottom: 10 }}
                key={index}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "700",
                    marginHorizontal: 10,
                    marginBottom: 10,
                  }}
                >
                  {item.sideHeading}
                </Text>
                <View
                  style={{
                    height: 50,
                    width: "93%",
                    marginHorizontal: 10,
                    borderRadius: 20,
                    backgroundColor: "#ECECECB3",
                  }}
                >
                  <Text
                    style={{
                      padding: 10,
                      paddingHorizontal: 15,
                      fontSize: 20,
                      color: "#707070",
                    }}
                  >
                    {item.value}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      ) : null}
      {wifiSettings ? (
        <View>
          <View style={{ marginTop: 20, marginHorizontal: 10 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                marginHorizontal: 10,
                marginBottom: 10,
              }}
            >
              Network SSID
            </Text>
            <View
              style={{
                height: 50,
                width: "93%",
                marginHorizontal: 10,
                borderRadius: 20,
                backgroundColor: "#ECECECB3",
              }}
            >
              <Text
                style={{
                  padding: 10,
                  paddingHorizontal: 15,
                  fontSize: 20,
                  color: "#707070",
                }}
              >
                VIKAS
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 20, marginHorizontal: 10 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                marginHorizontal: 10,
                marginBottom: 10,
              }}
            >
              Password
            </Text>
            <View
              style={{
                height: 50,
                width: "93%",
                marginHorizontal: 10,
                borderRadius: 20,
                backgroundColor: "#ECECECB3",
              }}
            >
              <Text
                style={{
                  padding: 10,
                  paddingHorizontal: 15,
                  fontSize: 20,
                  color: "#707070",
                }}
              >
                ....
              </Text>
            </View>
          </View>
        </View>
      ) : null}
      {cloud ? (
        <View>
          <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
            <Pressable
              style={{
                width: 90,
                marginTop: 20,
                alignSelf: "flex-end",
                paddingVertical: 10,
                borderRadius: 8,
                backgroundColor: "#1a8ae5",
                marginHorizontal: 20,
              }}
              onPress={() => {}}
            >
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 21,
                  fontWeight: "bold",
                  letterSpacing: 0.25,
                  color: "white",
                  alignSelf: "center",
                  marginHorizontal: 8,
                }}
              >
                Register
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setModal(true);
              }}
              style={{ marginTop: 30, marginRight: 25 }}
            >
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.2"
                height="21.199"
                viewBox="0 0 18.2 21.199"
              >
                <G transform="translate(0.1 0.1)">
                  <Path
                    d="M9,9h1.5v9H9Z"
                    transform="translate(-3 -1.5)"
                    fill="#707070"
                    stroke="#707070"
                    stroke-width="0.2"
                  />
                  <Path
                    d="M13.5,9H15v9H13.5Z"
                    transform="translate(-3 -1.5)"
                    fill="#707070"
                    stroke="#707070"
                    stroke-width="0.2"
                  />
                  <Path
                    d="M3,4.5V6H4.5V21A1.5,1.5,0,0,0,6,22.5H18A1.5,1.5,0,0,0,19.5,21V6H21V4.5ZM6,21V6H18V21Z"
                    transform="translate(-3 -1.5)"
                    fill="#707070"
                    stroke="#707070"
                    stroke-width="0.2"
                  />
                  <Path
                    d="M9,1.5h6V3H9Z"
                    transform="translate(-3 -1.5)"
                    fill="#707070"
                    stroke="#707070"
                    stroke-width="0.2"
                  />
                </G>
              </Svg>
            </Pressable>
          </View>
          <View style={{ marginTop: 20, marginHorizontal: 10 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                marginHorizontal: 10,
                marginBottom: 10,
              }}
            >
              Cloud Status
            </Text>
            <View
              style={{
                height: 50,
                width: "93%",
                marginHorizontal: 10,
                borderRadius: 20,
                backgroundColor: "#ECECECB3",
              }}
            >
              <Text
                style={{
                  padding: 10,
                  paddingHorizontal: 15,
                  fontSize: 20,
                  color: "#707070",
                }}
              >
                2,17,0
              </Text>
            </View>
          </View>
        </View>
      ) : null}
      <Modal visible={modal} transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
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
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "600",
                marginTop: 10,
                padding: 5,
              }}
            >
              Alert
            </Text>

            <View
              style={{
                paddingTop: 0,
                paddingLeft: 5,
                paddingRight: 40,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  justifyContent: "flex-start",
                }}
              >
                Are you sure you want to delete the cloud?
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-end",
                marginTop: 20,
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
                    Delete
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {room ? (
        <View style={{ justifyContent: "space-between" }}>
          <View style={{ alignItems: "center", marginBottom: 25 }}>
            <FlatList
              data={select}
              numColumns={2}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() => {
                    if (item.name == "Change Room") {
                      setChangeRoom(true);
                      setRoom(false);
                    }
                  }}
                >
                  <View
                    key={index}
                    style={{
                      width: 120,
                      height: 130,
                      margin: 20,
                      padding: 10,
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderRadius: 12,
                      backgroundColor: item.select ? "#1a8ae5" : "#ECECECB3",

                      marginHorizontal: 20,
                    }}
                  >
                    <View style={{ marginTop: 20 }}>{item.svg()}</View>

                    <Text
                      style={{
                        marginTop: 10,
                        alignSelf: "center",
                        color: item.select ? "white" : null,
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      ) : null}
      {changeRoom ? (
        <View style={{ justifyContent: "space-between" }}>
          <View style={{ alignItems: "center", marginBottom: 25 }}>
            <FlatList
              style={{ height: 500 }}
              data={rooms}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() => {
                    if (item.name == "Change Room") {
                      setChangeRoom(true);
                    }
                  }}
                >
                  <View
                    key={index}
                    style={{
                      width: 120,
                      height: 130,
                      margin: 20,
                      padding: 10,
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderRadius: 12,
                      backgroundColor: item.select ? "#1a8ae5" : "#ECECECB3",

                      marginHorizontal: 20,
                    }}
                  >
                    <View style={{ marginTop: 20 }}>{item.svg()}</View>

                    <Text
                      style={{
                        marginTop: 10,
                        alignSelf: "center",
                        color: item.select ? "white" : null,
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <Pressable
            onPress={() => {
              navigation.navigate("Add_Scene");
            }}
            style={{
              alignItems: "center",
              paddingVertical: 15,
              paddingHorizontal: 32,
              borderRadius: 15,
              backgroundColor: "#1a8ae5",
              marginHorizontal: 25,
            }}
          >
            <Text style={imageStyles.pressableText}>Select Device</Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
}

export default Settings;
function Change_Room({ tint = "#707070" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="25.75"
      height="25.75"
      viewBox="0 0 15.75 15.75"
    >
      <G transform="translate(-1.125 -1.125)">
        <Path
          d="M9,2.25A6.75,6.75,0,1,1,2.25,9,6.77,6.77,0,0,1,9,2.25M9,1.125A7.875,7.875,0,1,0,16.875,9,7.9,7.9,0,0,0,9,1.125Z"
          fill={tint}
        />
        <Path
          d="M13.5,8.438H9.562V4.5H8.437V8.438H4.5V9.563H8.438V13.5H9.563V9.563H13.5Z"
          fill={tint}
        />
      </G>
    </Svg>
  );
}

function Living_Room({ tint = "#707070" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="70.6"
      height="30.475"
      viewBox="0 0 22.6 18.475"
    >
      <Path
        d="M21,11.345V7.125a2.253,2.253,0,0,0-2.25-2.25H5.25A2.253,2.253,0,0,0,3,7.125v4.22A3,3,0,0,0,.75,14.25V19.5A1.5,1.5,0,0,0,2.25,21H3v2.25H4.5V21h15v2.25H21V21h.75a1.5,1.5,0,0,0,1.5-1.5V14.25a3,3,0,0,0-2.25-2.9ZM5.25,19.5h-3V14.25a1.5,1.5,0,0,1,3,0Zm12,0H6.75V15h10.5Zm.095-6H6.655A3.011,3.011,0,0,0,4.5,11.345V7.125a.751.751,0,0,1,.75-.75h13.5a.751.751,0,0,1,.75.75v4.22A3.011,3.011,0,0,0,17.345,13.5Zm4.405,6h-3V14.25a1.5,1.5,0,0,1,3,0V19.5Z"
        transform="translate(-0.7 -4.825)"
        fill={tint}
        stroke={tint}
        stroke-width="0.1"
      />
    </Svg>
  );
}
