import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";

function ScenesScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Pressable
            onPress={() => {
              navigation.navigate("TabHome");
            }}
          >
            <Image
              style={{ margin: 27 }}
              source={require("../../../assets/Unfilled/arrow-back-fill.png")}
            ></Image>
          </Pressable>
          <Text style={{ marginTop: 18, fontSize: 22, fontWeight: "700" }}>
            Scenes
          </Text>
        </View>

        <Pressable
          onPress={() => {
            navigation.navigate("Add_Scene");
          }}
        >
          <Image
            style={{
              margin: 25,
              alignSelf: "flex-end",
              tintColor: "#1A8AE5",
              width: 20,
              height: 20,
              resizeMode: "contain",
            }}
            source={require("../../../assets/Unfilled/add-alt.png")}
          ></Image>
        </Pressable>
      </View>
      <ScrollView style={{ width: "100%", height: "100%" }}>
        <TouchableOpacity 
          onPress={()=>{
            navigation.navigate("Morning_Scene")
          }}
        >
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
                  width: "12%",
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
                  source={require("../../../assets/Unfilled/alarm-clock-svgrepo-com.png")}
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
                    Morning
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
        </TouchableOpacity>
        <TouchableOpacity>
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
                  width: "12%",
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
                  source={require("../../../assets/Unfilled/owm-night-800.png")}
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
                    Night
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
        </TouchableOpacity>
        <TouchableOpacity>
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
                  width: "12%",
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
                  source={require("../../../assets/Unfilled/bx-movie.png")}
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
                    Movie
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
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default ScenesScreen;
