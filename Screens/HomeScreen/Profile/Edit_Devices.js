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
import { Bulb, Fan, Light, Plug, Switch } from "../../Add_Devices/Select_Room";

function Edit_Devices() {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onSelect = (item, index) => {
    setSelectedIndex(index);
  };
  const [images, setimages] = useState([
    {
      id: 1,
      svg: ({ select }) => <Light tint={select ? "#FFFFFF" : "#707070"} />,
      name: "Light 1",
      location: "Living Room",
      select: false,
    },
    {
      id: 2,
      svg: ({ select }) => <Fan tint={select ? "#FFFFFF" : "#707070"} />,
      name: "Fan",
      location: "Bed Room",

      select: false,
    },
    {
      id: 3,
      svg: ({ select }) => <Switch tint={select ? "#FFFFFF" : "#707070"} />,
      name: "Switch",
      location: "Kitchen",

      select: false,
    },
    {
      id: 4,
      svg: ({ select }) => <Bulb tint={select ? "#FFFFFF" : "#707070"} />,
      name: "Fan2",
      location: "Kitchen",

      select: false,
    },
    {
      id: 5,
      svg: ({ select }) => <Plug tint={select ? "#FFFFFF" : "#707070"} />,
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
            <TouchableOpacity
              onPress={() => {
                onSelect(item, index);
              }}
              style={{
                width: 140,
                height: 140,
                margin: 20,
                padding: 10,
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: 12,
                backgroundColor:
                  selectedIndex == index ? "#1a8ae5" : "#ECECECB3",

                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: selectedIndex == index ? "#FFFFFF" : "#707070",
                }}
              >
                {item.name}
              </Text>
              <item.svg select={selectedIndex == index} />

              <Text
                style={{
                  color: selectedIndex == index ? "#FFFFFF" : "#707070",
                }}
              >
                {item.location}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

export default Edit_Devices;
