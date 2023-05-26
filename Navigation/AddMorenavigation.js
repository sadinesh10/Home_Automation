import React, { useCallback, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { G, Path, Svg } from "react-native-svg";

function AddMorenavigation() {
  const navigation = useNavigation();
  const buttomSheetModalRef = useRef(null);
  const snapPoints = ["40%"];

  const onCLick = () => {
    buttomSheetModalRef.current?.present();
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          onCLick();
        }}
      >
        <View style={styles.container}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="35.884"
            viewBox="0 0 36 35.884"
          >
            <Path
              d="M27,20.244H20.25V26.97h-4.5V20.244H9V15.762h6.75V9.03h4.5v6.732H27ZM31.5.058H4.5A4.509,4.509,0,0,0,0,4.547V31.459a4.508,4.508,0,0,0,4.5,4.482h27A4.508,4.508,0,0,0,36,31.459V4.547A4.511,4.511,0,0,0,31.5.058Z"
              transform="translate(0 -0.058)"
              fill="#1a8ae5"
            />
          </Svg>
        </View>
      </TouchableOpacity>
      <BottomSheetModal
        ref={buttomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{ borderRadius: 30, backgroundColor: "#ECECEE" }}
        enableDismissOnClose={true}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Pressable
            onPress={() => {
              navigation.navigate("Select_Device");
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                flexDirection: "row",
                borderRadius: 10,
                margin: 20,
              }}
            >
              <Svg
                style={{
                  marginVertical: 20,
                  marginHorizontal: 20,
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="25.648"
                height="20.05"
                viewBox="0 0 25.648 20.05"
              >
                <Path
                  d="M25.394,13.966H22.84V8.024A1.276,1.276,0,0,0,21.562,6.75H2.4A1.276,1.276,0,0,0,1.125,8.024V21.075A1.276,1.276,0,0,0,2.4,22.349H18.157v3.077A1.276,1.276,0,0,0,19.434,26.7H25.4a1.276,1.276,0,0,0,1.278-1.274V15.239A1.276,1.276,0,0,0,25.4,13.965ZM18.156,15.24v5.412H2.828V8.448H21.137v5.518h-1.7A1.276,1.276,0,0,0,18.156,15.24ZM24.968,25H19.859V15.664h5.109Z"
                  transform="translate(-1.075 -6.7)"
                  fill="#707070"
                  stroke="#707070"
                  stroke-width="0.1"
                />
              </Svg>

              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                  marginTop: 15,
                  marginBottom: 12,
                  justifyContent: "center",
                  marginRight: 85,
                }}
              >
                Add Device
              </Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Add_Room");
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                flexDirection: "row",
                borderRadius: 10,
                margin: 10,
              }}
            >
              <Svg
                style={{
                  marginVertical: 18,
                  marginHorizontal: 20,
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="22.7"
                height="22.609"
                viewBox="0 0 22.7 22.609"
              >
                <G transform="translate(-0.65 -0.491)">
                  <Path
                    d="M20.625,19.875V4.125H16.5V.61L4.125,2.743V19.875H.75v1.5H4.823L16.5,22.986V5.625h2.625v15.75H23.25v-1.5ZM15,21.264,5.625,19.971V4.007L15,2.391Z"
                    fill="#707070"
                    stroke="#707070"
                    stroke-width="0.2"
                  />
                  <Path
                    d="M12,10.875h1.5v3H12Z"
                    fill="#707070"
                    stroke="#707070"
                    stroke-width="0.2"
                  />
                </G>
              </Svg>

              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                  marginTop: 15,
                  marginBottom: 12,
                  justifyContent: "center",
                  marginRight: 95,
                }}
              >
                Add Room
              </Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Add_Scene");
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                flexDirection: "row",
                borderRadius: 10,
                margin: 20,
              }}
            >
              <Svg
                style={{
                  marginVertical: 18,
                  marginHorizontal: 20,
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="24.444"
                height="20"
                viewBox="0 0 24.444 20"
              >
                <Path
                  d="M25.444,17.444a1.111,1.111,0,0,1-1.111,1.111H2.111a1.111,1.111,0,1,1,0-2.222H24.333A1.111,1.111,0,0,1,25.444,17.444ZM19.889,23a1.111,1.111,0,1,0,0-2.222H6.556a1.111,1.111,0,1,0,0,2.222ZM7.667,13a1.111,1.111,0,0,0,2.222,0,3.333,3.333,0,1,1,6.667,0,1.111,1.111,0,0,0,2.222,0A5.556,5.556,0,1,0,7.667,13Zm4.444-7.778a1.111,1.111,0,1,0,2.222,0V4.111a1.111,1.111,0,1,0-2.222,0ZM19.889,13A1.111,1.111,0,0,0,21,14.111h1.111a1.111,1.111,0,1,0,0-2.222H21A1.111,1.111,0,0,0,19.889,13ZM4.333,11.889a1.111,1.111,0,1,0,0,2.222H5.444a1.111,1.111,0,1,0,0-2.222Zm1.818-5.96a1.111,1.111,0,0,0,0,1.571l.786.786A1.111,1.111,0,1,0,8.508,6.714l-.786-.785A1.111,1.111,0,0,0,6.151,5.929Zm12.571,0-.786.786a1.111,1.111,0,1,0,1.571,1.571l.785-.786a1.111,1.111,0,1,0-1.571-1.571Z"
                  transform="translate(-1 -3)"
                  fill="#707070"
                />
              </Svg>

              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                  marginTop: 15,
                  marginBottom: 12,
                  justifyContent: "center",
                  marginRight: 85,
                }}
              >
                Add Action
              </Text>
            </View>
          </Pressable>
        </View>
      </BottomSheetModal>
    </View>
  );
}

export default AddMorenavigation;

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 57,
  },
});
