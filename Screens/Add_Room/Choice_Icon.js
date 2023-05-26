import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text } from "react-native";
import { Image, Pressable, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { imageStyles } from "../Authentication/Authentication_util";

function Choice_Icon() {
  const navigation = useNavigation();
  const [images, setimages] = useState([
    require("../../assets/Unfilled/couch.png"),
    require("../../assets/Unfilled/book.png"),
    require("../../assets/Unfilled/bed.png"),
    require("../../assets/Unfilled/bathroom.png"),
    require("../../assets/Unfilled/bathroom.png"),
    require("../../assets/Unfilled/couch.png"),
    require("../../assets/Unfilled/book.png"),
    require("../../assets/Unfilled/bed.png"),
    require("../../assets/Unfilled/couch.png"),
    require("../../assets/Unfilled/book.png"),
    require("../../assets/Unfilled/bathroom.png"),
  ]);
  const [select, setSelect] = useState(false);
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
            data={images}
            numColumns={4}
            renderItem={({ item, index }) => (
              <View
                style={{
                  alignItems: "center",
                  marginVertical: 15,
                  borderRadius: 12,
                  backgroundColor: "#ECECECEC",

                  marginHorizontal: 20,
                }}
              >
                <Image
                  source={item}
                  key={index}
                  style={{
                    borderWidth: 2,
                    resizeMode: "contain",
                    margin: 15,
                  }}
                ></Image>
              </View>
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
            marginBottom: 70
          }}
        >
          <Text style={imageStyles.pressableText}>Choose Icon</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Choice_Icon;
