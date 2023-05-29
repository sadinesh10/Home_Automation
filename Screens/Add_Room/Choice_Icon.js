import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Image, Pressable, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { imageStyles } from "../Authentication/Authentication_util";

function Choice_Icon() {
  const navigation = useNavigation();
  const [images, setimages] = useState([
    {
      id: 1,
      src: require("../../assets/Unfilled/couch.png"),
      select: false,
    },
    {
      id: 2,
      src: require("../../assets/Unfilled/book.png"),
      select: false,
    },
    {
      id: 3,
      src: require("../../assets/Unfilled/bed.png"),
      select: false,
    },
    {
      id: 4,
      src: require("../../assets/Unfilled/bathroom.png"),
      select: false,
    },
    {
      id: 5,
      src: require("../../assets/Unfilled/bathroom.png"),
      select: false,
    },
    {
      id: 6,
      src: require("../../assets/Unfilled/couch.png"),
      select: false,
    },
    {
      id: 7,
      src: require("../../assets/Unfilled/book.png"),
      select: false,
    },
    {
      id: 8,
      src: require("../../assets/Unfilled/bed.png"),
      select: false,
    },
    {
      id: 9,
      src: require("../../assets/Unfilled/couch.png"),
      select: false,
    },
    {
      id: 10,
      src: require("../../assets/Unfilled/book.png"),
      select: false,
    },
    {
      id: 11,
      src: require("../../assets/Unfilled/bathroom.png"),
      select: false,
    },
  ]);
  const [select, setSelect] = useState(images);
  const onSelect = (item) => {
    const newItem = select.map((val) => {
      if (val.select == true) {
        return { ...val, select: false };
      }
      if (val.id == item.id) {
        return { ...val, select: !val.select };
      } else {
        return val;
      }
    });

    setSelect(newItem);
  };
  return (
    <View style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => {
            navigation.navigate("Add_Room");
          }}
        >
          <Image
            style={{ margin: 25 }}
            source={require("../../assets/Unfilled/arrow-back-fill.png")}
          ></Image>
        </Pressable>
        <Text style={{ marginTop: 18, fontSize: 20, fontWeight: "700" }}>
          Choose Icon
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View>
          <FlatList
            data={select}
            numColumns={4}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  onSelect(item);
                }}
              >
                <View
                  style={{
                    width:50,
                    height: 50,
                    alignItems: "center",
                    marginVertical: 15,
                    borderRadius: 12,
                    backgroundColor: item.select ? "#1a8ae5" : "#ECECECB3",

                    marginHorizontal: 20,
                  }}
                >
                  <Image
                    source={item.src}
                    key={index}
                    style={{
                      borderWidth: 2,
                      resizeMode: "contain",
                      margin: 15,
                      tintColor: item.select ? "white" : null,
                    }}
                  ></Image>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate("Add_Room");
          }}
          style={{
            alignItems: "center",
            paddingVertical: 15,
            paddingHorizontal: 32,
            borderRadius: 15,
            backgroundColor: "#1a8ae5",
            marginHorizontal: 25,
            marginBottom: 70,
          }}
        >
          <Text style={imageStyles.pressableText}>Choose Icon</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Choice_Icon;
