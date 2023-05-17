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
          <Entypo name="plus" size={25} color="white"></Entypo>
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
          <Pressable onPress={()=>{
            navigation.navigate("Select_Device")
          }}>
            <View
              style={{
                backgroundColor: "white",
                flexDirection: "row",
                borderRadius: 10,
                margin: 20,
                
              }}
            >
              <Image
                style={{
                  margin: 13,
                  tintColor: "black",
                  width: 30,
                  height: 30,
                  resizeMode: "contain",
                }}
                source={require("../assets/Unfilled/devices.png")}
              ></Image>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                  margin: 13,
                  justifyContent: "center",
                  marginRight: 85
                }}
              >
                Add Device
              </Text>
            </View>
          </Pressable>
          

          <View
            style={{
              backgroundColor: "white",
              width: "70%",
              height: "20%",
              flexDirection: "row",
              borderRadius: 10,
            }}
          >
            <Image
              style={{
                margin: 13,
                tintColor: "black",
                width: 30,
                height: 30,
                resizeMode: "contain",
              }}
              source={require("../assets/Unfilled/room.png")}
            ></Image>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                margin: 13,
                justifyContent: "center",
              }}
            >
              Add Room
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "white",
              width: "70%",
              height: "20%",
              flexDirection: "row",
              borderRadius: 10,
              margin: 20,
            }}
          >
            <Image
              style={{
                margin: 13,
                tintColor: "black",
                width: 30,
                height: 30,
                resizeMode: "contain",
              }}
              source={require("../assets/Unfilled/sunrise-svgrepo-com.png")}
            ></Image>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                margin: 13,
                justifyContent: "center",
              }}
            >
              Add Scene
            </Text>
          </View>
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
    backgroundColor: "#1A8AE5",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 57,
  },
});
