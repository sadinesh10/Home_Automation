import React, { useState } from "react";
import { Modal, ScrollView, TouchableOpacity } from "react-native";
import { Pressable, Text, View } from "react-native";
import { G, Path, Svg } from "react-native-svg";
import UseSwitch from "../../HomeScreen/Switch";
import { useNavigation } from "@react-navigation/native";

function Schedules_List({ route }) {
  const { onBackPress } = route.params;

  const navigation= useNavigation()
  const [selected, setSelected] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [modal, setModal] = useState(false);


  const array = [
    {
      id: 1,
      svg: () => {
        return (
          <Svg
            style={{ marginRight: 15 }}
            xmlns="http://www.w3.org/2000/svg"
            width="20.249"
            height="20.249"
            viewBox="0 0 24.249 24.249"
          >
            <G transform="translate(-2.25 -2.25)">
              <Path
                d="M16.875,2.25h1.732v4.3H16.875Z"
                transform="translate(-3.367 0)"
                fill="#707070"
              />
              <Path
                d="M24.4,9.093l3.037-3.037L28.66,7.282l-3.037,3.037Z"
                transform="translate(-5.098 -0.876)"
                fill="#707070"
              />
              <Path
                d="M28.17,16.875h4.3v1.732h-4.3Z"
                transform="translate(-5.967 -3.367)"
                fill="#707070"
              />
              <Path
                d="M24.4,25.625,25.63,24.4l3.037,3.038-1.225,1.224Z"
                transform="translate(-5.1 -5.099)"
                fill="#707070"
              />
              <Path
                d="M16.875,28.17h1.732v4.3H16.875Z"
                transform="translate(-3.367 -5.967)"
                fill="#707070"
              />
              <Path
                d="M6.072,27.444l3.037-3.037,1.225,1.225L7.3,28.669Z"
                transform="translate(-0.88 -5.1)"
                fill="#707070"
              />
              <Path
                d="M2.25,16.875h4.3v1.732H2.25Z"
                transform="translate(0 -3.367)"
                fill="#707070"
              />
              <Path
                d="M6.064,7.287,7.29,6.064,10.327,9.1,9.1,10.326Z"
                transform="translate(-0.878 -0.878)"
                fill="#707070"
              />
              <Path
                d="M16.446,12.982a3.464,3.464,0,1,1-3.464,3.464,3.464,3.464,0,0,1,3.464-3.464m0-1.732a5.2,5.2,0,1,0,5.2,5.2A5.2,5.2,0,0,0,16.446,11.25Z"
                transform="translate(-2.072 -2.072)"
                fill="#707070"
              />
            </G>
          </Svg>
        );
      },
      percentage: "80%",
      time: "7:30AM",
      period: "Everyday",
      select: false,
    },
    {
      id: 2,
      svg: () => {
        return (
          <Svg
            style={{ marginRight: 15 }}
            xmlns="http://www.w3.org/2000/svg"
            width="20.249"
            height="20.249"
            viewBox="0 0 24.249 24.249"
          >
            <G transform="translate(-2.25 -2.25)">
              <Path
                d="M16.875,2.25h1.732v4.3H16.875Z"
                transform="translate(-3.367 0)"
                fill="#707070"
              />
              <Path
                d="M24.4,9.093l3.037-3.037L28.66,7.282l-3.037,3.037Z"
                transform="translate(-5.098 -0.876)"
                fill="#707070"
              />
              <Path
                d="M28.17,16.875h4.3v1.732h-4.3Z"
                transform="translate(-5.967 -3.367)"
                fill="#707070"
              />
              <Path
                d="M24.4,25.625,25.63,24.4l3.037,3.038-1.225,1.224Z"
                transform="translate(-5.1 -5.099)"
                fill="#707070"
              />
              <Path
                d="M16.875,28.17h1.732v4.3H16.875Z"
                transform="translate(-3.367 -5.967)"
                fill="#707070"
              />
              <Path
                d="M6.072,27.444l3.037-3.037,1.225,1.225L7.3,28.669Z"
                transform="translate(-0.88 -5.1)"
                fill="#707070"
              />
              <Path
                d="M2.25,16.875h4.3v1.732H2.25Z"
                transform="translate(0 -3.367)"
                fill="#707070"
              />
              <Path
                d="M6.064,7.287,7.29,6.064,10.327,9.1,9.1,10.326Z"
                transform="translate(-0.878 -0.878)"
                fill="#707070"
              />
              <Path
                d="M16.446,12.982a3.464,3.464,0,1,1-3.464,3.464,3.464,3.464,0,0,1,3.464-3.464m0-1.732a5.2,5.2,0,1,0,5.2,5.2A5.2,5.2,0,0,0,16.446,11.25Z"
                transform="translate(-2.072 -2.072)"
                fill="#707070"
              />
            </G>
          </Svg>
        );
      },
      percentage: "80%",
      time: "7:50PM",
      period: "Everyday",
      select: false,
    },
    {
      id: 3,
      svg: () => {
        return (
          <Svg
            style={{ marginRight: 15 }}
            xmlns="http://www.w3.org/2000/svg"
            width="20.249"
            height="20.249"
            viewBox="0 0 24.249 24.249"
          >
            <G transform="translate(-2.25 -2.25)">
              <Path
                d="M16.875,2.25h1.732v4.3H16.875Z"
                transform="translate(-3.367 0)"
                fill="#707070"
              />
              <Path
                d="M24.4,9.093l3.037-3.037L28.66,7.282l-3.037,3.037Z"
                transform="translate(-5.098 -0.876)"
                fill="#707070"
              />
              <Path
                d="M28.17,16.875h4.3v1.732h-4.3Z"
                transform="translate(-5.967 -3.367)"
                fill="#707070"
              />
              <Path
                d="M24.4,25.625,25.63,24.4l3.037,3.038-1.225,1.224Z"
                transform="translate(-5.1 -5.099)"
                fill="#707070"
              />
              <Path
                d="M16.875,28.17h1.732v4.3H16.875Z"
                transform="translate(-3.367 -5.967)"
                fill="#707070"
              />
              <Path
                d="M6.072,27.444l3.037-3.037,1.225,1.225L7.3,28.669Z"
                transform="translate(-0.88 -5.1)"
                fill="#707070"
              />
              <Path
                d="M2.25,16.875h4.3v1.732H2.25Z"
                transform="translate(0 -3.367)"
                fill="#707070"
              />
              <Path
                d="M6.064,7.287,7.29,6.064,10.327,9.1,9.1,10.326Z"
                transform="translate(-0.878 -0.878)"
                fill="#707070"
              />
              <Path
                d="M16.446,12.982a3.464,3.464,0,1,1-3.464,3.464,3.464,3.464,0,0,1,3.464-3.464m0-1.732a5.2,5.2,0,1,0,5.2,5.2A5.2,5.2,0,0,0,16.446,11.25Z"
                transform="translate(-2.072 -2.072)"
                fill="#707070"
              />
            </G>
          </Svg>
        );
      },
      percentage: "20%",
      time: "2:30PM",
      period: "Saturday, Sunday",
      select: false,
    },
    {
      id: 4,
      svg: () => {
        return (
          <Svg
            style={{ marginRight: 15 }}
            xmlns="http://www.w3.org/2000/svg"
            width="20.249"
            height="20.249"
            viewBox="0 0 24.249 24.249"
          >
            <G transform="translate(-2.25 -2.25)">
              <Path
                d="M16.875,2.25h1.732v4.3H16.875Z"
                transform="translate(-3.367 0)"
                fill="#707070"
              />
              <Path
                d="M24.4,9.093l3.037-3.037L28.66,7.282l-3.037,3.037Z"
                transform="translate(-5.098 -0.876)"
                fill="#707070"
              />
              <Path
                d="M28.17,16.875h4.3v1.732h-4.3Z"
                transform="translate(-5.967 -3.367)"
                fill="#707070"
              />
              <Path
                d="M24.4,25.625,25.63,24.4l3.037,3.038-1.225,1.224Z"
                transform="translate(-5.1 -5.099)"
                fill="#707070"
              />
              <Path
                d="M16.875,28.17h1.732v4.3H16.875Z"
                transform="translate(-3.367 -5.967)"
                fill="#707070"
              />
              <Path
                d="M6.072,27.444l3.037-3.037,1.225,1.225L7.3,28.669Z"
                transform="translate(-0.88 -5.1)"
                fill="#707070"
              />
              <Path
                d="M2.25,16.875h4.3v1.732H2.25Z"
                transform="translate(0 -3.367)"
                fill="#707070"
              />
              <Path
                d="M6.064,7.287,7.29,6.064,10.327,9.1,9.1,10.326Z"
                transform="translate(-0.878 -0.878)"
                fill="#707070"
              />
              <Path
                d="M16.446,12.982a3.464,3.464,0,1,1-3.464,3.464,3.464,3.464,0,0,1,3.464-3.464m0-1.732a5.2,5.2,0,1,0,5.2,5.2A5.2,5.2,0,0,0,16.446,11.25Z"
                transform="translate(-2.072 -2.072)"
                fill="#707070"
              />
            </G>
          </Svg>
        );
      },
      percentage: "100%",
      time: "4:25PM",
      period: "Monday, Friday, Saturday, Sunday",
      select: false,
    },
  ];
  const [select, setSelect] = useState(array);
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
    <View style={{ backgroundColor: "#FFFFFF" }} height="100%">
      <View style={{ flexDirection: "row" }}>
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
            <Svg
              style={{ margin: 23 }}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="19.999"
              viewBox="0 0 20 19.999"
            >
              <Path
                d="M13.08,10.024,20,16.944l-3.08,3.08L10,13.1l-6.92,6.92L0,16.944l6.92-6.92L0,3.1,3.08.024,10,6.944,16.92.024,20,3.1Z"
                transform="translate(0 -0.024)"
                fill="black"
              />
            </Svg>
          </Pressable>
        ) : (
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
        )}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {selected ? (
            <Text style={{ marginTop: 16, fontSize: 22, fontWeight: "700" }}>
              {select.filter((item) => item.select).length} Selected
            </Text>
          ) : (
            <Text style={{ marginTop: 16, fontSize: 22, fontWeight: "700" }}>
              Schedule
            </Text>
          )}

          <View style={{ margin: 25 }}>
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
                {selectAll ? (
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <Path
                      d="M16,8A8,8,0,1,1,8,0a8,8,0,0,1,8,8ZM12.03,4.97a.75.75,0,0,0-1.08.022L7.477,9.417,5.384,7.323a.75.75,0,0,0-1.06,1.06L6.97,11.03a.75.75,0,0,0,1.079-.02l3.992-4.99a.75.75,0,0,0-.01-1.05Z"
                      fill="#1a8ae5"
                      fill-rule="evenodd"
                    />
                  </Svg>
                ) : (
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <Path
                      d="M8,15A7,7,0,1,0,1,8,7,7,0,0,0,8,15Zm0,1A8,8,0,1,0,0,8,8,8,0,0,0,8,16Z"
                      fill-rule="evenodd"
                      stroke="#707070"
                    />
                  </Svg>
                )}
              </Pressable>
            ) : (
              <Pressable 
                onPress={()=>{
                  navigation.navigate("Add_Schedule")
                }}
              >
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15.75"
                  height="15.75"
                  viewBox="0 0 15.75 15.75"
                >
                  <G transform="translate(-1.125 -1.125)">
                    <Path
                      d="M9,2.25A6.75,6.75,0,1,1,2.25,9,6.77,6.77,0,0,1,9,2.25M9,1.125A7.875,7.875,0,1,0,16.875,9,7.9,7.9,0,0,0,9,1.125Z"
                      fill="#1a8ae5"
                    />
                    <Path
                      d="M13.5,8.438H9.562V4.5H8.437V8.438H4.5V9.563H8.438V13.5H9.563V9.563H13.5Z"
                      fill="#1a8ae5"
                    />
                  </G>
                </Svg>
              </Pressable>
            )}
          </View>
        </View>
      </View>
      <ScrollView style={{ width: "100%", height: "60%" }}>
        {select.map((item, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                onPress={() => {
                  onSelect(item);
                }}
              >
                <View
                  style={{
                    marginHorizontal: 15,
                    marginVertical: 8,
                    borderRadius: 10,
                    backgroundColor: "#ECECECB3",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        margin: 10,
                        justifyContent: "space-between",
                        marginBottom: 12,
                      }}
                    >
                      <View>
                        <View style={{ flexDirection: "row" }}>
                          {item.svg()}
                          <Text>{item.percentage}</Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              fontSize: 20,
                              fontWeight: "900",
                              opacity: 100,
                            }}
                          >
                            {item.time}
                          </Text>
                          <Text
                            style={{
                              fontSize: 12,
                              color: "#707070",
                              fontWeight: "500",
                              opacity: 100,
                              marginTop: 5,
                            }}
                          >
                            {item.period}
                          </Text>
                        </View>
                      </View>

                      <View style={{ marginTop: 10, marginRight: 10 }}>
                        {selected ? (
                          <View style={{ marginTop: 15, marginRight: 10 }}>
                            <Pressable
                              onPress={() => {
                                setSelectAll(!selectAll);
                                select.map((item) => {
                                  item.select = !selectAll;
                                });
                                setSelect([...select]);
                              }}
                            >
                              {item.select == true && selected ? (
                                <Pressable>
                                  <Svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                  >
                                    <Path
                                      d="M16,8A8,8,0,1,1,8,0a8,8,0,0,1,8,8ZM12.03,4.97a.75.75,0,0,0-1.08.022L7.477,9.417,5.384,7.323a.75.75,0,0,0-1.06,1.06L6.97,11.03a.75.75,0,0,0,1.079-.02l3.992-4.99a.75.75,0,0,0-.01-1.05Z"
                                      fill="#1a8ae5"
                                      fill-rule="evenodd"
                                    />
                                  </Svg>
                                </Pressable>
                              ) : (
                                <Pressable>
                                  <Svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                  >
                                    <Path
                                      d="M8,15A7,7,0,1,0,1,8,7,7,0,0,0,8,15Zm0,1A8,8,0,1,0,0,8,8,8,0,0,0,8,16Z"
                                      fill-rule="evenodd"
                                      stroke="#707070"
                                    />
                                  </Svg>
                                </Pressable>
                              )}
                            </Pressable>
                          </View>
                        ) : (
                          <UseSwitch />
                        )}
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {selected ? (
        <View
          style={{
            backgroundColor: "#ECECECB3",
            alignItems: "center",
            paddingVertical: 15,
            paddingHorizontal: 32,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setModal(true);
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Svg
                style={{ marginHorizontal: 15 }}
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
              <Text>Delete</Text>
            </View>
          </TouchableOpacity>
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
                Are you sure you want to delete the selected Schedule?
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

export default Schedules_List;
