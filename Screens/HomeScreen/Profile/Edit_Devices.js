import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function Edit_Devices() {
  const navigation = useNavigation();
  const [images, setimages] = useState([
    {
      id: 1,
      src: require("../../../assets/Unfilled/lamp.png"),
      name: "Light 1",
      location: "Living Room",
      select: false,
    },
    {
      id: 2,
      src: require("../../../assets/Unfilled/cooling-symbol-2677.png"),
      name: "light 2",
      location: "Bed Room",

      select: false,
    },
    {
      id: 3,
      src: require("../../../assets/Unfilled/power-off.png"),
      name: "fan1",
      location: "Kitchen",

      select: false,
    },
    {
      id: 4,
      src: require("../../../assets/Unfilled/bulb-outline.png"),
      name: "Fan2",
      location: "Kitchen",

      select: false,
    },
    {
      id: 5,
      src: require("../../../assets/Unfilled/plug.png"),
      name: "Light3",
      location: "Kitchen",

      select: false,
    },
  ]);

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", flex: 1 }}>
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
          <Text style={{ marginTop: 18, fontSize: 22, fontWeight: "700" }}>
            Devices
          </Text>
        </View>

        <Pressable
          onPress={() => {
            navigation.navigate("Select_Device");
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
      <View style={{ alignItems: "center", marginBottom: 25 }}>
        <FlatList
          data={images}
          numColumns={2}
          renderItem={({ item, index }) => (
            <View
              style={{
                width: 140,
                height: 120,
                margin: 20,
                padding: 10,
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: 12,
                backgroundColor: item.select ? "#1a8ae5" : "#ECECECB3",

                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: item.select ? "white" : null,
                }}
              >
                {item.name}
              </Text>
              <Image
                source={item.src}
                key={index}
                style={{
                  borderWidth: 2,
                  resizeMode: "contain",
                  tintColor: item.select ? "white" : "black",
                }}
              ></Image>
              <Text
                style={{
                  color: item.select ? "white" : "black",
                }}
              >
                {item.location}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default Edit_Devices;
