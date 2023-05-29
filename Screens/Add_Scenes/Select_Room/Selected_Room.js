import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Circle, G, Path, Rect, Svg } from "react-native-svg";

import { imageStyles } from "../../Authentication/Authentication_util";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setSelectedRoom } from "../../../redux/mainDataSlice";
import {
  Bath_Room,
  Bed_Room,
  Dining_Room,
  Kitchen,
  Living_Room,
} from "../../Living_Room/Setttings/Settings";

function Selected_Room() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [images, setimages] = useState([
    {
      id: 1,
      svg: ({ select }) => (
        <Living_Room tint={select ? "#FFFFFF" : "#707070"} />
      ),
      name: "Living Room",
      select: false,
    },
    {
      id: 2,
      svg: ({ select }) => <Kitchen tint={select ? "#FFFFFF" : "#707070"} />,
      name: "Kitchen",
      select: false,
    },
    {
      id: 3,
      svg: ({ select }) => (
        <Dining_Room tint={select ? "#FFFFFF" : "#707070"} />
      ),
      name: "Dining Room",
      select: false,
    },
    {
      id: 4,
      svg: ({ select }) => <Bed_Room tint={select ? "#FFFFFF" : "#707070"} />,
      name: "Bed Room",
      select: false,
    },
    {
      id: 5,
      svg: ({ select }) => <Bath_Room tint={select ? "#FFFFFF" : "#707070"} />,
      name: "bath Room",
      select: false,
    },
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = (item, index) => {
    setSelectedIndex(index);
  };
  return (
    <View style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => {
            navigation.navigate("Add_Scene");
          }}
        >
          <Image
            style={{ margin: 25 }}
            source={require("../../../assets/Unfilled/arrow-back-fill.png")}
          ></Image>
        </Pressable>
        <View>
          <Text style={{ marginTop: 18, fontSize: 20, fontWeight: "700" }}>
            Select
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "300" }}>
            Select room to add in the scene
          </Text>
        </View>
      </View>
      <View style={{ justifyContent: "space-between" }}>
        <View style={{ alignItems: "center", marginBottom: 25 }}>
          <FlatList
            data={images}
            numColumns={2}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  onSelect(item, index);
                  dispatch(setSelectedRoom(item.name));
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
                    paddingTop: 30,
                    backgroundColor:
                      selectedIndex == index ? "#1a8ae5" : "#ECECECB3",
                    marginHorizontal: 20,
                  }}
                >
                  <item.svg select={selectedIndex == index} />
                  <Text
                    style={{
                      marginTop: 30,
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
            navigation.navigate("Add_Scene");
          }}
          style={{
            alignItems: "center",
            paddingVertical: 15,
            paddingHorizontal: 32,
            borderRadius: 15,
            backgroundColor: "#1a8ae5",
            marginHorizontal: 25,
            marginTop: 10,
          }}
        >
          <Text style={imageStyles.pressableText}>Select Room</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Selected_Room;
