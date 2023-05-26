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
import { useDispatch } from "react-redux";
import { setSelectedRoom } from "../../../redux/mainDataSlice";

function Selected_Room() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [images, setimages] = useState([
    {
      id: 1,
      src: require("../../../assets/Unfilled/livingroom-rest-svgrepo-com.png"),
      name: "Living Room",
      select: false,
    },
    {
      id: 2,
      src: require("../../../assets/Unfilled/kitchen-pack-cooker-svgrepo-com.png"),
      name: "Kitchen",
      select: false,
    },
    {
      id: 3,
      src: require("../../../assets/Unfilled/dinner.png"),
      name: "Dining Room",
      select: false,
    },
    {
      id: 4,
      src: require("../../../assets/Unfilled/Product-Icons.png"),
      name: "Bed Room",
      select: false,
    },
    {
      id: 5,
      src: require("../../../assets/Unfilled/bathroom.png"),
      name: "bath Room",
      select: false,
    },
  ]);
  const [select, setSelect] = useState(images);
  const onSelect = (item) => {
    const newItem = select.map((val) => {
      if(val.select==true){
        return {...val,select:false}
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
            data={select}
            numColumns={2}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  onSelect(item);
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
                    backgroundColor: item.select ? "#1a8ae5" : "#ECECECB3",

                    marginHorizontal: 20,
                  }}
                >
                  <Image
                    source={item.src}
                    key={index}
                    style={{
                      width: 40,
                      height: 30,
                      margin: 15,
                      borderWidth: 2,
                      resizeMode: "contain",
                      tintColor: item.select ? "white" : null,
                    }}
                  ></Image>
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
            marginTop: 25,
          }}
        >
          <Text style={imageStyles.pressableText}>Select Room</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Selected_Room;
