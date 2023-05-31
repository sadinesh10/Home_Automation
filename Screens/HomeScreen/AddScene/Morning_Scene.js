import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityBase,
} from "react-native";
import { Pressable, Text, View } from "react-native";
import CustomSlider from "../../Add_Scenes/Add Action/CustomSlider";
import { imageStyles } from "../../Authentication/Authentication_util";

function Morning_Scene() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn((isOn) => !isOn);
  };
  const array1 = ["1", "2", "3", "4"];
  const array2 = ["AM", "PM"];
  const array3 = ["S", "M", "T", "W", "T", "F", "S"];
  const [modal, setModal] = useState(false);
  const [options, setOptions] = useState(false);
  const [editOptions, setEditoptions] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Pressable
            onPress={() => {
              navigation.navigate("Scene Screen");
            }}
          >
            <Image
              style={{ margin: 27 }}
              source={require("../../../assets/Unfilled/arrow-back-fill.png")}
            ></Image>
          </Pressable>
          <Text style={{ marginTop: 18, fontSize: 22, fontWeight: "700" }}>
            Morning Scene
          </Text>
        </View>

        <Pressable
          onPress={() => {
            setOptions(true);
          }}
        >
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
                    Are you sure you want to delete the Morning scene?
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

          <Image
            style={{
              margin: 25,
              alignSelf: "flex-end",
              tintColor: "black",
              width: 20,
              height: 20,
              resizeMode: "contain",
            }}
            source={require("../../../assets/Unfilled/three-dots-vertical.png")}
          ></Image>
        </Pressable>
      </View>
      {options ? (
        <View
          style={{
            borderWidth: 1,
            backgroundColor: "white",
            marginRight: 10,
            marginTop: 30,
            borderRadius: 10,
            borderColor: "gray",
            position: "absolute",
            elevation: 9,
            right: 4,
            zIndex: 100,
            marginTop: 50,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setOptions(false);
              setEditoptions(true);
            }}
          >
            <View
              style={{
                marginHorizontal: 10,
              }}
            >
              <View
                style={{
                  borderRadius: 13,
                }}
              >
                <View>
                  <View
                    style={{
                      backgroundColor: "#ECECECEC",
                      marginHorizontal: 10,
                      marginTop: 10,
                      marginBottom: 5,
                      flexDirection: "row",
                      borderRadius: 10,
                    }}
                  >
                    <View style={{ width: "20%", height: "20%" }}>
                      <Image
                        style={{ margin: 15 }}
                        source={require("../../../assets/Unfilled/bx-edit-alt.png")}
                      ></Image>
                    </View>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "300",
                        margin: 13,
                        marginRight: 20,
                        color: "#707070",
                      }}
                    >
                      Edit Scene
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setOptions(false);
              setModal(true);
            }}
          >
            <View
              style={{
                marginHorizontal: 10,
                marginBottom: 8,
              }}
            >
              <View
                style={{
                  borderRadius: 13,
                }}
              >
                <View>
                  <View
                    style={{
                      backgroundColor: "#ECECECEC",
                      marginHorizontal: 10,
                      marginTop: 10,
                      marginBottom: 5,
                      flexDirection: "row",
                      borderRadius: 10,
                    }}
                  >
                    <View style={{ width: "20%", height: "20%" }}>
                      <Image
                        style={{ margin: 15 }}
                        source={require("../../../assets/Unfilled/delete.png")}
                      ></Image>
                    </View>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "300",
                        margin: 13,
                        marginRight: 20,
                        color: "#707070",
                      }}
                    >
                      Delect Scene
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ) : null}

      <ScrollView
        style={{
          width: "100%",
          height: "60%",
          marginBottom: 30
        }}
      >
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
            <Text style={{ padding: 15 }}>Living Room</Text>
          </View>
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
          <View style={{ flexDirection: "row" }}>
            <View>
              <View
                style={{
                  borderRadius: 10,
                  width: 47,
                  height: 47,
                  backgroundColor: "#1A8AE5",
                  // justifyContent:"center",
                  // alignSelf:"center"
                  padding: 10,
                  marginLeft: 25,
                  marginHorizontal: 5,
                }}
              >
                <Image
                  style={{
                    width: 20,
                    height: 23,
                    resizeMode: "contain",
                    alignSelf: "center",
                    tintColor: "white",
                    justifyContent: "center",
                  }}
                  source={require("../../../assets/Unfilled/lamp.png")}
                ></Image>
              </View>
              <Text
                style={{
                  marginLeft: 30,
                  alignSelf: "center",
                  marginHorizontal: 5,
                }}
              >
                Light 1
              </Text>
            </View>
            <View>
              <View
                style={{
                  borderRadius: 10,
                  width: 47,
                  height: 47,
                  backgroundColor: "#ECECECB3",
                  // justifyContent:"center",
                  // alignSelf:"center"
                  padding: 10,
                  marginLeft: 25,
                  marginHorizontal: 5,
                }}
              >
                <Image
                  style={{
                    width: 20,
                    height: 23,
                    resizeMode: "contain",
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                  source={require("../../../assets/Unfilled/cooling-symbol-2677.png")}
                ></Image>
              </View>
              <Text
                style={{
                  marginLeft: 30,
                  alignSelf: "center",
                  marginHorizontal: 5,
                }}
              >
                Fan 1
              </Text>
            </View>
          </View>
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
              marginTop: 10,
            }}
          >
            Add Action
          </Text>
          <View style={{ marginRight: 30, marginTop: 14 }}>
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
                    <View style={{ margin: 5 }} key={index}>
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
                    <View style={{ margin: 5 }} key={index}> 
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
                    <View style={{ padding: 13 }} key={index}>
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
                  key={index}
                >
                  <Text>{item}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
      {editOptions ? (
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "15%",
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
                setEditoptions(false);
              }}
            >
              <Text style={imageStyles.pressableText}>Save</Text>
            </Pressable>
            <Pressable onPress={()=>{
                setEditoptions(false)
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
      ) : null}
    </View>
  );
}

export default Morning_Scene;
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
