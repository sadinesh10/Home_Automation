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
import PagerView from "react-native-pager-view";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Settings({ onBackPress }) {
  const navigation = useNavigation();


  const [modal, setModal] = useState(false);
  const [room, setRoom] = useState(false);
  const [changeRoom, setChangeRoom] = useState(false);
  const [index, setIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const data = [
    {
      sideHeading: "Network SSID",
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
      sideHeading: "Brightness Level",
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
      svg: ({ select }) => (
        <Living_Room tint={select ? "#FFFFFF" : "#707070"} />
      ),
    },
    {
      id: 2,
      name: "Change Room",
      select: false,
      svg: ({ select }) => (
        <Change_Room tint={select ? "#FFFFFF" : "#707070"} />
      ),
    },
  ]);
  const onSelect = (item, index) => {
    setSelectedIndex(index);
  };
  const [rooms, setRooms] = useState([
    {
      id: 1,
      name: "Living Room",
      select: false,
      svg: ({ select }) => (
        <Living_Room tint={select ? "#FFFFFF" : "#707070"} />
      ),
    },
    {
      id: 2,
      name: "Kotchen",
      select: false,
      svg: ({ select }) => <Kitchen tint={select ? "#FFFFFF" : "#707070"} />,
    },
    {
      id: 3,
      name: "Living Room",
      select: false,
      svg: ({ select }) => (
        <Dining_Room tint={select ? "#FFFFFF" : "#707070"} />
      ),
    },
    {
      id: 4,
      name: "Change Room",
      select: false,
      svg: ({ select }) => <Bed_Room tint={select ? "#FFFFFF" : "#707070"} />,
    },
    {
      id: 5,
      name: "Living Room",
      select: false,
      svg: ({ select }) => <Bath_Room tint={select ? "#FFFFFF" : "#707070"} />,
    },
    {
      id: 6,
      name: "Change Room",
      select: false,
      svg: ({ select }) => <Study_Room tint={select ? "#FFFFFF" : "#707070"} />,
    },
  ]);
  const FirstRoute = () => (
    <ScrollView style={{}}>
      {data.map((item, index) => {
        return (
          <View
            style={{ marginTop: 10, marginHorizontal: 10, marginBottom: 10 }}
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
  );

  const SecondRoute = () => (
    <View>
      <View style={{ marginTop: 10, marginHorizontal: 10 }}>
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
  );
  const ThirdRoute = () => (
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
    </View>
  );

  const FourthRoute = () => (
    <View style={{ justifyContent: "space-between" }}>
      {changeRoom ? (
        <View style={{ justifyContent: "space-between" }}>
          <View style={{ alignItems: "center", marginBottom: 25 }}>
            <FlatList
              data={rooms}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              style={{ height: 460 }}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() => {
                    onSelect(item, index);
                  }}
                >
                  <View
                    key={index}
                    style={{
                      width: 120,
                      height: 130,
                      margin: 20,
                      padding: 10,
                      paddingTop: 30,
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderRadius: 12,
                      backgroundColor:
                        selectedIndex == index ? "#1a8ae5" : "#ECECECB3",

                      marginHorizontal: 20,
                    }}
                  >
                    <item.svg select={selectedIndex == index} />

                    <Text
                      style={{
                        marginTop: 10,
                        alignSelf: "center",
                        color: selectedIndex == index ? "#FFFFFF" : "#707070",
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
              navigation.navigate("Change_Success");
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
      ) : (
        <View style={{ alignItems: "center", marginBottom: 25 }}>
          <FlatList
            data={images}
            numColumns={2}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  onSelect(item, index);

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
                    paddingTop: 30,
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: 12,
                    backgroundColor:
                      selectedIndex == index ? "#1a8ae5" : "#ECECECB3",

                    marginHorizontal: 20,
                  }}
                >
                  <item.svg select={selectedIndex == index} />

                  <Text
                    style={{
                      marginTop: 10,
                      alignSelf: "center",
                      color: selectedIndex == index ? "#FFFFFF" : "#707070",
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
  {
    changeRoom ? (
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
    ) : null;
  }
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
  });
  return (
    <View style={{ flex: 0.9 }}>
      {changeRoom ? (
        <View style={{ flexDirection: "row" }}>
          <Pressable
            onPress={() => {
              setChangeRoom(false)
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
            Select Room
          </Text>
        </View>
      ) : (
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
      )}

      <TabView
        navigationState={{
          index,
          routes: [
            { key: "first", title: "Device Information" },
            { key: "second", title: "WiFi Settings" },
            { key: "third", title: "Cloud" },
            { key: "fourth", title: "Room" },
          ],
        }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get("window").width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: "#1a8ae5" }}
            style={{ backgroundColor: "#ffffff" }}
            labelStyle={{ color: "#000000" }}
            scrollEnabled
          />
        )}
      />
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

export function Living_Room({ tint = "#707070" }) {
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
        stroke-width="0.1"
      />
    </Svg>
  );
}

export function Kitchen({ tint = "#707070" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30.323"
      height="30.053"
      viewBox="0 0 20.323 14.053"
    >
      <G transform="translate(11.321 1.683)">
        <Path
          d="M283.743,140.568h-.312a.407.407,0,1,0,0,.814h.312a.407.407,0,0,0,0-.814Z"
          transform="translate(-283.024 -140.568)"
          fill={tint}
        />
      </G>
      <G transform="translate(1.668 1.683)">
        <Path
          d="M58.927,140.568H57.869a.557.557,0,0,0,0,1.073h.651v8.543H48.307v-8.543h6.51a.557.557,0,0,0,0-1.073H47.9a.485.485,0,0,0-.407.536v9.615a.485.485,0,0,0,.407.536H58.927a.485.485,0,0,0,.407-.536V141.1A.485.485,0,0,0,58.927,140.568Z"
          transform="translate(-47.493 -140.568)"
          fill={tint}
        />
      </G>
      <Path
        d="M19.082,92.67H1.241A1.3,1.3,0,0,0,0,94.015v11.362a1.3,1.3,0,0,0,1.241,1.345h17.84a1.3,1.3,0,0,0,1.241-1.345V94.015A1.3,1.3,0,0,0,19.082,92.67ZM16.231,103v2.724H1.241a.337.337,0,0,1-.322-.349V94.015a.337.337,0,0,1,.322-.349H16.231Zm3.173,2.375a.337.337,0,0,1-.322.349H17.15V103.5H19.4v1.877Zm0-2.874H17.151V93.667h1.931a.337.337,0,0,1,.322.349V102.5Z"
        transform="translate(0 -92.67)"
        fill={tint}
      />
      <G transform="translate(18.105 2.602)">
        <Path
          d="M449.276,151.944a.407.407,0,0,0-.407.407v.326a.407.407,0,1,0,.814,0v-.326A.407.407,0,0,0,449.276,151.944Z"
          transform="translate(-448.869 -151.944)"
          fill={tint}
        />
      </G>
      <G transform="translate(18.105 4.813)">
        <Path
          d="M449.276,202.333a.407.407,0,0,0-.407.407v.326a.407.407,0,0,0,.814,0v-.326A.407.407,0,0,0,449.276,202.333Z"
          transform="translate(-448.869 -202.333)"
          fill={tint}
        />
      </G>
      <G transform="translate(18.105 7.025)">
        <Path
          d="M449.276,252.722a.407.407,0,0,0-.407.407v.326a.407.407,0,1,0,.814,0v-.326A.407.407,0,0,0,449.276,252.722Z"
          transform="translate(-448.869 -252.722)"
          fill={tint}
        />
      </G>
    </Svg>
  );
}

export function Dining_Room({ tint = "#707070" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30.099"
      height="30.013"
      viewBox="0 0 22.099 17.013"
    >
      <G transform="translate(-0.975 -5.475)">
        <Path
          d="M22.267,17.617A9.458,9.458,0,0,0,13.548,8.2V5.625H12.095V8.2a9.459,9.459,0,0,0-8.72,9.418v1.5H22.267Zm-1.453.05H4.828v-.05a7.993,7.993,0,0,1,15.986,0Z"
          transform="translate(-0.797)"
          fill={tint}
          stroke-width="0.3"
        />
        <Path
          d="M1.125,29.25h21.8V30.7H1.125Z"
          transform="translate(0 -8.366)"
          fill={tint}
          stroke-width="0.3"
        />
      </G>
    </Svg>
  );
}

export function Bed_Room({ tint = "#707070" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30.664"
      height="30.564"
      viewBox="0 0 20.664 17.564"
    >
      <Path
        d="M6.908,4H17.756a2.842,2.842,0,0,1,2.836,2.668l.005.173v3.465a2.843,2.843,0,0,1,2.059,2.541l.007.193V20.79a.775.775,0,0,1-1.543.105l-.007-.105V18.465H3.55V20.79a.775.775,0,0,1-.67.768l-.105.007a.775.775,0,0,1-.768-.67L2,20.79V13.041a2.843,2.843,0,0,1,2.067-2.734V6.841A2.841,2.841,0,0,1,6.735,4.005Zm12.915,7.749H4.841a1.292,1.292,0,0,0-1.285,1.159l-.007.132v3.875H21.114V13.041a1.292,1.292,0,0,0-1.159-1.285Zm-2.066-6.2H6.908A1.292,1.292,0,0,0,5.623,6.709l-.007.132V10.2h1.55A1.033,1.033,0,0,1,8.2,9.166h2.066a1.033,1.033,0,0,1,1.026.913l.007.12h2.066A1.033,1.033,0,0,1,14.4,9.166h2.066a1.033,1.033,0,0,1,1.026.913l.007.12h1.55V6.841a1.292,1.292,0,0,0-1.159-1.285Z"
        transform="translate(-2 -4)"
        fill={tint}
      />
    </Svg>
  );
}
export function Bath_Room({ tint = "#707070" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30.6"
      height="30.784"
      viewBox="0 0 22.6 22.784"
    >
      <Path
        d="M21.75,13.125h-18V4.688a2.4,2.4,0,0,1,.708-1.71l.019-.019a2.423,2.423,0,0,1,2.747-.476,3.708,3.708,0,0,0,.552,4.529l.513.513-.945.945L8.4,9.531l.945-.945L14.585,3.35,15.53,2.4,14.469,1.344l-.945.945-.513-.513A3.707,3.707,0,0,0,8.28,1.355,3.919,3.919,0,0,0,3.417,1.9L3.4,1.917A3.893,3.893,0,0,0,2.25,4.688v8.438H.75v1.5h1.5v1.439a1.123,1.123,0,0,0,.058.356l1.4,4.185a1.124,1.124,0,0,0,1.067.769h.6L4.828,23.25H6.39l.548-1.875h9.755l.563,1.875h1.566l-.563-1.875h.972a1.124,1.124,0,0,0,1.066-.769l1.4-4.186a1.124,1.124,0,0,0,.058-.356V14.625h1.5v-1.5ZM8.837,2.837a2.2,2.2,0,0,1,3.114,0l.513.513L9.35,6.464l-.513-.513a2.2,2.2,0,0,1,0-3.114ZM20.25,16l-1.291,3.872H5.041L3.75,16V14.625h16.5Z"
        transform="translate(-0.7 -0.516)"
        fill={tint}
        stroke-width="0.1"
      />
    </Svg>
  );
}
function Study_Room({ tint = "#707070" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30.1"
      height="30.875"
      viewBox="0 0 21.1 17.875"
    >
      <G transform="translate(-1.45 -2.95)">
        <Path
          d="M21.75,3H13.5l-.525.225L12,4.185l-.975-.96L10.5,3H2.25l-.75.75v15l.75.75h7.935l1.29,1.275h1.05l1.29-1.275H21.75l.75-.75v-15ZM11.25,18.48l-.27-.255L10.5,18H3V4.5h7.185l1.11,1.11L11.25,18.48ZM21,18H13.5l-.525.225-.21.195V5.55l1.05-1.05H21ZM9,7.5H4.5V9H9Zm0,6H4.5V15H9Zm-4.5-3H9V12H4.5Zm15-3H15V9h4.5Zm-4.5,3h4.5V12H15Zm0,3h4.5V15H15Z"
          fill={tint}
          stroke-width="0.1"
          fill-rule="evenodd"
        />
      </G>
    </Svg>
  );
}
