import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { imageStyles } from "../../Authentication/Authentication_util";
import { useNavigation } from "@react-navigation/native";

function Edit_Rooms() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [modal, setModal] = useState(false);

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
      if (val.id == item.id) {
        return { ...val, select: !val.select };
      } else {
        return val;
      }
    });
    const selectedLen = newItem.filter((item) => item.select).length;
    setSelect(newItem);
    setSelected(true);
    if(selectedLen==0){
      setSelected(false)
    }
    setSelectAll(selectedLen == newItem.length);
  };
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          
          {selected ? (
            <Pressable
              onPress={() => {
                select.map((item) => {
                  item.select =false;
                });
                setSelected(false);
                setSelect([...select])
                setSelectAll(false);
              }}
            >
              <Image
                style={{ margin: 23 }}
                source={require("../../../assets/Unfilled/cancel.png")}
              ></Image>
            </Pressable>
          ) : (
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
          )}
          {selected ? (
            <Text style={{ marginTop: 18, fontSize: 22, fontWeight: "700" }}>
              {select.filter((item) => item.select).length} Selected
            </Text>
          ) : (
            <Text style={{ marginTop: 18, fontSize: 22, fontWeight: "700" }}>
              Rooms
            </Text>
          )}
        </View>
        {selected ? (
          <Pressable
            onPress={() => {
              setSelectAll(!selectAll)
              select.map((item) => {
                item.select =!selectAll;
              });
              setSelect([...select]);
            }}
          >
            <Image
              style={{
                margin: 28,
                alignSelf: "flex-end",
                width: 15,
                height: 15,
                resizeMode: "contain",
              }}
              source={
                selectAll
                  ? require("../../../assets/Unfilled/check-circle-fill.png")
                  : require("../../../assets/Unfilled/check-circle.png")
              }
            ></Image>
          </Pressable>
        ) : null}
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
                    backgroundColor: "#ECECECB3",

                    marginHorizontal: 20,
                  }}
                >
                  {item.select && selected ? (
                    <Pressable onPress={() => {}}>
                      <Image
                        style={{
                          marginLeft: 80,
                          width: 15,
                          height: 15,
                          resizeMode: "contain",
                        }}
                        source={require("../../../assets/Unfilled/check-circle-fill.png")}
                      ></Image>
                    </Pressable>
                  ) : null}
                  {item.select == false && selected ? (
                    <Pressable onPress={() => {}}>
                      <Image
                        style={{
                          marginLeft: 80,
                          width: 15,
                          height: 15,
                          resizeMode: "contain",
                        }}
                        source={require("../../../assets/Unfilled/check-circle.png")}
                      ></Image>
                    </Pressable>
                  ) : null}

                  <Image
                    source={item.src}
                    key={index}
                    style={{
                      marginTop: 20,
                      width: 40,
                      height: 30,
                      borderWidth: 2,
                      resizeMode: "contain",
                    }}
                  ></Image>
                  <Text
                    style={{
                      marginTop: 30,
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        {selected ? (
          <View
            style={{
              backgroundColor: "#ECECECB3",
              alignItems: "center",
              paddingVertical: 15,
              paddingHorizontal: 32,
              marginTop: 25,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Selected_Edit_Room");
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ marginHorizontal: 15 }}
                  source={require("../../../assets/Unfilled/bx-edit-alt.png")}
                ></Image>
                <Text>Edit</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setModal(true);
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ marginHorizontal: 15 }}
                  source={require("../../../assets/Unfilled/delete.png")}
                ></Image>
                <Text>Delete</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
      <Modal visible={modal} transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <View
            style={{
              elevation: 10,
              backgroundColor: "white",
              padidingTop: 5,
              paddingHorizontal: 20,
              paddingBottom: 10,
              borderRadius: 13,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "600",
                marginTop: 10,
                padding: 5,
              }}
            >
              Reset
            </Text>

            <View
              style={{
                paddingTop: 0,
                paddingLeft: 5,
                paddingRight: 40,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  justifyContent: "flex-start",
                }}
              >
                Are you sure you want to delete the Living Rooml?
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-end",
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                style={{ marginTop: 5 }}
                onPress={() => {
                  setModal(false);
                }}
              >
                <Text
                  style={{
                    marginHorizontal: 8,
                    marginTop: 4,
                  }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    borderRadius: 20,
                    marginHorizontal: 10,
                    borderRadius: 8,
                    backgroundColor: "#1A8AE5",
                  }}
                >
                  <Text
                    style={{
                      paddingTop: 8,
                      paddingLeft: 25,
                      paddingRight: 25,
                      paddingBottom: 8,
                      color: "white",
                    }}
                    onPress={() => {
                      setModal(false);
                    }}
                  >
                    Delete
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Edit_Rooms;
