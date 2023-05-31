import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { imageStyles } from "../../Authentication/Authentication_util";
import { useNavigation } from "@react-navigation/native";
import { G, Path, Svg } from "react-native-svg";

function Edit_Rooms() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [modal, setModal] = useState(false);

  const [images, setimages] = useState([
    {
      id: 1,
      svg: () => {
        return (
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="40.769"
            height="40.211"
            viewBox="0 0 21.769 14.211"
          >
            <Path
              d="M19.829,92.327a1.929,1.929,0,0,0-.759.155v-1.74a1.86,1.86,0,0,0-1.858-1.858H4.557A1.86,1.86,0,0,0,2.7,90.742v1.74A1.94,1.94,0,0,0,0,94.268V102.5a.59.59,0,0,0,.59.59h2.7a.59.59,0,0,0,.59-.59V100.4H17.889V102.5a.59.59,0,0,0,.59.59h2.7a.59.59,0,0,0,.59-.59V94.268A1.943,1.943,0,0,0,19.829,92.327ZM3.881,94.268V90.742a.677.677,0,0,1,.677-.677H17.211a.678.678,0,0,1,.677.677v5.029H11.475V93.077a.59.59,0,0,0-1.181,0v2.694H3.881Zm-2.7,0a.759.759,0,1,1,1.519,0v1.5H1.181ZM2.7,101.914H1.181V100.4H2.7Zm17.889,0H19.07V100.4h1.519Zm0-2.7H1.181V96.952H20.588v2.263Zm0-3.444H19.07v-1.5a.759.759,0,1,1,1.519,0Z"
              transform="translate(0 -88.884)"
              fill="#707070"
            />
            <G transform="translate(10.294 1.584)">
              <Path
                d="M242.7,126.132a.59.59,0,0,0-.59.59V127a.59.59,0,1,0,1.181,0v-.276A.59.59,0,0,0,242.7,126.132Z"
                transform="translate(-242.112 -126.132)"
                fill="#707070"
              />
            </G>
            <Path
              d="M19.829,92.327a1.929,1.929,0,0,0-.759.155v-1.74a1.86,1.86,0,0,0-1.858-1.858H4.557A1.86,1.86,0,0,0,2.7,90.742v1.74A1.94,1.94,0,0,0,0,94.268V102.5a.59.59,0,0,0,.59.59h2.7a.59.59,0,0,0,.59-.59V100.4H17.889V102.5a.59.59,0,0,0,.59.59h2.7a.59.59,0,0,0,.59-.59V94.268A1.943,1.943,0,0,0,19.829,92.327ZM3.881,94.268V90.742a.677.677,0,0,1,.677-.677H17.211a.678.678,0,0,1,.677.677v5.029H11.475V93.077a.59.59,0,0,0-1.181,0v2.694H3.881Zm-2.7,0a.759.759,0,1,1,1.519,0v1.5H1.181ZM2.7,101.914H1.181V100.4H2.7Zm17.889,0H19.07V100.4h1.519Zm0-2.7H1.181V96.952H20.588v2.263Zm0-3.444H19.07v-1.5a.759.759,0,1,1,1.519,0Z"
              transform="translate(0 -88.884)"
              fill="#707070"
            />
          </Svg>
        );
      },
      name: "Living Room",
      select: false,
    },
    {
      id: 2,
      svg: () => {
        return (
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="40.323"
            height="40.053"
            viewBox="0 0 20.323 14.053"
          >
            <G transform="translate(11.321 1.683)">
              <Path
                d="M283.743,140.568h-.312a.407.407,0,1,0,0,.814h.312a.407.407,0,0,0,0-.814Z"
                transform="translate(-283.024 -140.568)"
                fill="#707070"
              />
            </G>
            <G transform="translate(1.668 1.683)">
              <Path
                d="M58.927,140.568H57.869a.557.557,0,0,0,0,1.073h.651v8.543H48.307v-8.543h6.51a.557.557,0,0,0,0-1.073H47.9a.485.485,0,0,0-.407.536v9.615a.485.485,0,0,0,.407.536H58.927a.485.485,0,0,0,.407-.536V141.1A.485.485,0,0,0,58.927,140.568Z"
                transform="translate(-47.493 -140.568)"
                fill="#707070"
              />
            </G>
            <Path
              d="M19.082,92.67H1.241A1.3,1.3,0,0,0,0,94.015v11.362a1.3,1.3,0,0,0,1.241,1.345h17.84a1.3,1.3,0,0,0,1.241-1.345V94.015A1.3,1.3,0,0,0,19.082,92.67ZM16.231,103v2.724H1.241a.337.337,0,0,1-.322-.349V94.015a.337.337,0,0,1,.322-.349H16.231Zm3.173,2.375a.337.337,0,0,1-.322.349H17.15V103.5H19.4v1.877Zm0-2.874H17.151V93.667h1.931a.337.337,0,0,1,.322.349V102.5Z"
              transform="translate(0 -92.67)"
              fill="#707070"
            />
            <G transform="translate(18.105 2.602)">
              <Path
                d="M449.276,151.944a.407.407,0,0,0-.407.407v.326a.407.407,0,1,0,.814,0v-.326A.407.407,0,0,0,449.276,151.944Z"
                transform="translate(-448.869 -151.944)"
                fill="#707070"
              />
            </G>
            <G transform="translate(18.105 4.813)">
              <Path
                d="M449.276,202.333a.407.407,0,0,0-.407.407v.326a.407.407,0,0,0,.814,0v-.326A.407.407,0,0,0,449.276,202.333Z"
                transform="translate(-448.869 -202.333)"
                fill="#707070"
              />
            </G>
            <G transform="translate(18.105 7.025)">
              <Path
                d="M449.276,252.722a.407.407,0,0,0-.407.407v.326a.407.407,0,1,0,.814,0v-.326A.407.407,0,0,0,449.276,252.722Z"
                transform="translate(-448.869 -252.722)"
                fill="#707070"
              />
            </G>
          </Svg>
        );
      },
      name: "Kitchen",
      select: false,
    },
    {
      id: 3,
      svg: () => {
        return (
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="40.099"
            height="40.013"
            viewBox="0 0 22.099 17.013"
          >
            <G transform="translate(-0.975 -5.475)">
              <Path
                d="M22.267,17.617A9.458,9.458,0,0,0,13.548,8.2V5.625H12.095V8.2a9.459,9.459,0,0,0-8.72,9.418v1.5H22.267Zm-1.453.05H4.828v-.05a7.993,7.993,0,0,1,15.986,0Z"
                transform="translate(-0.797)"
                fill="#707070"
                stroke-width="0.3"
              />
              <Path
                d="M1.125,29.25h21.8V30.7H1.125Z"
                transform="translate(0 -8.366)"
                fill="#707070"
                stroke-width="0.3"
              />
            </G>
          </Svg>
        );
      },
      name: "Dining Room",
      select: false,
    },
    {
      id: 4,
      svg: () => {
        return (
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="40.664"
            height="40.564"
            viewBox="0 0 20.664 17.564"
          >
            <Path
              d="M6.908,4H17.756a2.842,2.842,0,0,1,2.836,2.668l.005.173v3.465a2.843,2.843,0,0,1,2.059,2.541l.007.193V20.79a.775.775,0,0,1-1.543.105l-.007-.105V18.465H3.55V20.79a.775.775,0,0,1-.67.768l-.105.007a.775.775,0,0,1-.768-.67L2,20.79V13.041a2.843,2.843,0,0,1,2.067-2.734V6.841A2.841,2.841,0,0,1,6.735,4.005Zm12.915,7.749H4.841a1.292,1.292,0,0,0-1.285,1.159l-.007.132v3.875H21.114V13.041a1.292,1.292,0,0,0-1.159-1.285Zm-2.066-6.2H6.908A1.292,1.292,0,0,0,5.623,6.709l-.007.132V10.2h1.55A1.033,1.033,0,0,1,8.2,9.166h2.066a1.033,1.033,0,0,1,1.026.913l.007.12h2.066A1.033,1.033,0,0,1,14.4,9.166h2.066a1.033,1.033,0,0,1,1.026.913l.007.12h1.55V6.841a1.292,1.292,0,0,0-1.159-1.285Z"
              transform="translate(-2 -4)"
              fill="#707070"
            />
          </Svg>
        );
      },
      name: "Bed Room",
      select: false,
    },
    {
      id: 5,
      svg: () => {
        return (
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="40.6"
            height="40.784"
            viewBox="0 0 22.6 22.784"
          >
            <Path
              d="M21.75,13.125h-18V4.688a2.4,2.4,0,0,1,.708-1.71l.019-.019a2.423,2.423,0,0,1,2.747-.476,3.708,3.708,0,0,0,.552,4.529l.513.513-.945.945L8.4,9.531l.945-.945L14.585,3.35,15.53,2.4,14.469,1.344l-.945.945-.513-.513A3.707,3.707,0,0,0,8.28,1.355,3.919,3.919,0,0,0,3.417,1.9L3.4,1.917A3.893,3.893,0,0,0,2.25,4.688v8.438H.75v1.5h1.5v1.439a1.123,1.123,0,0,0,.058.356l1.4,4.185a1.124,1.124,0,0,0,1.067.769h.6L4.828,23.25H6.39l.548-1.875h9.755l.563,1.875h1.566l-.563-1.875h.972a1.124,1.124,0,0,0,1.066-.769l1.4-4.186a1.124,1.124,0,0,0,.058-.356V14.625h1.5v-1.5ZM8.837,2.837a2.2,2.2,0,0,1,3.114,0l.513.513L9.35,6.464l-.513-.513a2.2,2.2,0,0,1,0-3.114ZM20.25,16l-1.291,3.872H5.041L3.75,16V14.625h16.5Z"
              transform="translate(-0.7 -0.516)"
              fill="#707070"
              stroke-width="0.1"
            />
          </Svg>
        );
      },
      name: "bath Room",
      select: false,
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
    const selectedLen = newItem.filter((item) => item.select).length;
    setSelect(newItem);
    setSelected(true);
    if (selectedLen == 0) {
      setSelected(false);
    }
    setSelectAll(selectedLen == newItem.length);
  };
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          {selected ? (
            <Pressable
              onPress={() => {
                select.map((item) => {
                  item.select = false;
                });
                setSelected(false);
                setSelect([...select]);
                setSelectAll(false);
              }}
            >
              <Image
                style={{ margin: 23 }}
                source={require("../../../assets/Unfilled/cancel.png")}
              ></Image>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                navigation.navigate("Profile");
              }}
            >
              <Image
                style={{ margin: 27 }}
                source={require("../../../assets/Unfilled/arrow-back-fill.png")}
              ></Image>
            </Pressable>
          )}
          {selected ? (
            <Text style={{ marginTop: 18, fontSize: 22, fontWeight: "700" }}>
              {select.filter((item) => item.select).length} Selected
            </Text>
          ) : (
            <Text style={{ marginTop: 18, fontSize: 22, fontWeight: "700" }}>
              Rooms
            </Text>
          )}
        </View>
        {selected ? (
          <Pressable
            onPress={() => {
              setSelectAll(!selectAll);
              select.map((item) => {
                item.select = !selectAll;
              });
              setSelect([...select]);
            }}
          >
            <Image
              style={{
                margin: 28,
                alignSelf: "flex-end",
                width: 15,
                height: 15,
                resizeMode: "contain",
              }}
              source={
                selectAll
                  ? require("../../../assets/Unfilled/check-circle-fill.png")
                  : require("../../../assets/Unfilled/check-circle.png")
              }
            ></Image>
          </Pressable>
        ) : null}
      </View>
      <View style={{ justifyContent: "space-between" }}>
        <View style={{ alignItems: "center", marginBottom: 25 }}>
          <FlatList
            data={select}
            numColumns={2}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  onSelect(item);
                }}
              >
                <View
                  style={{
                    width: 120,
                    height: 130,
                    margin: 20,
                    padding: 10,
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: 12,
                    backgroundColor: "#ECECECB3",

                    marginHorizontal: 20,
                  }}
                >
                  {item.select && selected ? (
                    <Pressable onPress={() => {}}>
                      <Image
                        style={{
                          marginLeft: 80,
                          width: 15,
                          height: 15,
                          resizeMode: "contain",
                        }}
                        source={require("../../../assets/Unfilled/check-circle-fill.png")}
                      ></Image>
                    </Pressable>
                  ) : null}
                  {item.select == false && selected ? (
                    <Pressable onPress={() => {}}>
                      <Image
                        style={{
                          marginLeft: 80,
                          width: 15,
                          height: 15,
                          resizeMode: "contain",
                        }}
                        source={require("../../../assets/Unfilled/check-circle.png")}
                      ></Image>
                    </Pressable>
                  ) : null}
                  <View style={{ alignSelf: "center", marginBottom: 10 }}>
                    {item.svg()}
                  </View>
                  <Text
                    style={{
                      marginTop: 30,
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        {selected ? (
          <View
            style={{
              backgroundColor: "#ECECECB3",
              alignItems: "center",
              paddingVertical: 15,
              paddingHorizontal: 32,
              marginTop: 25,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Selected_Edit_Room");
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ marginHorizontal: 15 }}
                  source={require("../../../assets/Unfilled/bx-edit-alt.png")}
                ></Image>
                <Text>Edit</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setModal(true);
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ marginHorizontal: 15 }}
                  source={require("../../../assets/Unfilled/delete.png")}
                ></Image>
                <Text>Delete</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : null}
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
              Reset
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
                Are you sure you want to delete the Living Rooml?
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
}

export default Edit_Rooms;
