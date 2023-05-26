import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Modal, TextInput, TouchableOpacity } from "react-native";
import { Pressable, Text, View } from "react-native";
import { imageStyles } from "../Authentication/Authentication_util";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedRoom } from "../../redux/mainDataSlice";
import Selected_Room from "./Select_Room/Selected_Room";
import Add_Room from "../Add_Room/Add_Room";

function Add_Scene() {
  const navigation = useNavigation();
  const [place, setPlace] = useState("Select");
  const [modal, setmodal] = useState(false);
  const { selectedRoom } = useSelector((state) => state.mainReducer);

  return (
    <View style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            style={{ margin: 25 }}
            source={require("../../assets/Unfilled/arrow-back-fill.png")}
          ></Image>
        </Pressable>
        <Text style={{ marginTop: 18, fontSize: 20, fontWeight: "700" }}>
          Add Scene
        </Text>
      </View>
      <View>
        <View>
          <Text
            style={{
              marginHorizontal: 30,
              marginBottom: 10,
              fontSize: 16,
            }}
          >
            Room Icon
          </Text>
        </View>

        <View
          style={{
            padding: 15,
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
          <Image
            style={{ margin: 15 }}
            source={require("../../assets/Unfilled/couch.png")}
          ></Image>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Choose_Icon");
            }}
          >
            <Image source={require("../../assets/Unfilled/image.png")}></Image>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ marginLeft: 30, fontSize: 16, marginBottom: 5 }}>
            Scene Name
          </Text>

          <View
            style={{
              borderRadius: 10,
              marginLeft: 25,
              marginRight: 25,
              marginTop: 10,
              backgroundColor: "#ECECECB2",
              marginBottom: 25,
            }}
          >
            <TextInput
              style={{
                color: "#707070",
                padding: 12,
                opacity: 100,
                fontSize: 16,
                flexDirection: "row",
              }}
              placeholder="Scene Name"
            ></TextInput>
          </View>
        </View>
        <View style={{ borderWidth: 0.2, borderColor: "gray" }}></View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Selected_Room");
            }}
          >
            <View
              style={{
                marginHorizontal: 15,
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
                        source={require("../../assets/Unfilled/room.png")}
                      ></Image>
                    </View>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "300",
                        margin: 13,
                        marginRight: 100,
                        color: "#707070",
                      }}
                    >
                      {selectedRoom ? selectedRoom : "Select Room"}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (selectedRoom == "Living Room") {
                navigation.navigate("Selected_Device");
              } else if (selectedRoom == "Kitchen") {
                navigation.navigate("Selected_Kitchen_Device");
              }
            }}
          >
            <View
              style={{
                marginHorizontal: 15,
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
                        source={require("../../assets/Unfilled/devices.png")}
                      ></Image>
                    </View>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "300",
                        margin: 13,
                        marginRight: 100,
                        color: "#707070",
                      }}
                    >
                      Select Device
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Selected_Action");
            }}
          >
            <View
              style={{
                marginHorizontal: 15,
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
                        source={require("../../assets/Unfilled/Gesture_x2C__hand_x2C__single_x2C__tap_x2C__click.png")}
                      ></Image>
                    </View>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "300",
                        margin: 13,
                        marginRight: 100,
                        color: "#707070",
                      }}
                    >
                      Select Action
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Pressable
            style={{
              alignItems: "center",
              paddingVertical: 15,
              paddingHorizontal: 32,
              borderRadius: 15,
              backgroundColor: "#1a8ae5",
              marginHorizontal: 25,
              marginTop: 50,
            }}
            onPress={() => {
              navigation.navigate("Success_Action")
            }}
          >
            <Text style={imageStyles.pressableText}>Add Room</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default Add_Scene;
