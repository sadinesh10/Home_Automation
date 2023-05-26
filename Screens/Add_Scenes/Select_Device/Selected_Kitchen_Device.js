import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { imageStyles } from "../../Authentication/Authentication_util";
import { useNavigation } from "@react-navigation/native";

function Selected_Kitchen_Device() {
  const navigation = useNavigation();
  const [images, setimages] = useState([
    {
      id: 1,
      src1: require("../../../assets/Unfilled/lamp.png"),
      name: "Light 1",
      select: false,
    },
    {
      id: 2,

      src1: require("../../../assets/Unfilled/cooling-symbol-2677.png"),
      name: "Fan 1",
      select: false,
    },
    {
      id: 3,

      src1: require("../../../assets/Unfilled/power.png"),
      src2: require("../../../assets/Unfilled/power.png"),

      name: "Dining Room",
      select: false,
    },
    {
      id: 4,

      src1: require("../../../assets/Unfilled/bulb-outline.png"),
      name: "Bed Room",
      select: false,
    },
    {
      id: 5,

      src1: require("../../../assets/Unfilled/power.png"),
      src2: require("../../../assets/Unfilled/power.png"),
      src3: require("../../../assets/Unfilled/power.png"),
      src4: require("../../../assets/Unfilled/power.png"),

      name: "bath Room",
      select: false,
    },
    {
      id: 6,

      src1: require("../../../assets/Unfilled/power.png"),
      name: "bath Room",
      select: false,
    },
    {
      id: 7,

      src1: require("../../../assets/Unfilled/plug.png"),
      name: "bath Room",
      select: false,
    },
  ]);
  const [select, setSelect] = useState(images);
  const onSelect = (item) => {
    const newItem = select.map((val) => {
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
            Select Device
          </Text>
        </View>
      </View>
      <View style={{ justifyContent: "space-between" }}>
        <View style={{ alignItems: "center", marginBottom: 25 }}>
          <FlatList
            style={{ height: "80%" }}
            data={select}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  onSelect(item);
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
                    backgroundColor: item.select ? "#1a8ae5" : "#ECECECB3",

                    marginHorizontal: 20,
                  }}
                  key={index}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      flex: 1,
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={item.src1}
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginHorizontal: 10,
                        marginVertical: 10,
                        resizeMode: "contain",
                        borderWidth: 2,
                        tintColor: item.select ? "white" : null,
                      }}
                    ></Image>
                    <Image
                      source={item.src2}
                      style={{
                        marginHorizontal: 10,
                        marginVertical: 10,
                        tintColor: item.select ? "white" : null,

                        resizeMode: "contain",
                        borderWidth: 2,
                        justifyContent: "center",
                      }}
                    ></Image>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      flex: 1,
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={item.src3}
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginHorizontal: 10,
                        marginVertical: 10,
                        resizeMode: "contain",
                        borderWidth: 2,
                        tintColor: item.select ? "white" : null,
                      }}
                    ></Image>
                    <Image
                      source={item.src4}
                      style={{
                        marginHorizontal: 10,
                        marginVertical: 10,
                        tintColor: item.select ? "white" : null,
                        resizeMode: "contain",
                        borderWidth: 2,
                        justifyContent: "center",
                      }}
                    ></Image>
                  </View>

                  <Text
                    style={{
                      marginTop: 30,
                      color: item.select ? "white" : null,
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
          }}
        >
          <Text style={imageStyles.pressableText}>Select Device</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Selected_Kitchen_Device;
