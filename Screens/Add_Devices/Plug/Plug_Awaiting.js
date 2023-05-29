import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../../Navigation/ButtomNavUtil";
import { Circle, G, Path, Svg } from "react-native-svg";
function Plug_Awaiting() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.getParent().setOptions({
      tabBarStyle: {
        display: "none",
      },
    });

    return () => {
      navigation.getParent().setOptions({
        tabBarStyle: {
          ...styles,
        },
      });
    };
  }, []);
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <View
        style={{
          backgroundColor: "#1a8ae5",
          borderRadius: 15,
          paddingTop: 15,
          paddingBottom: 30,
          marginVertical: "80%",
          marginHorizontal: "27%",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Plug_Reset");
          }}
        >
          <Svg
            style={{
              alignSelf: "flex-end",

              paddingBottom: 10,
              marginRight: 13,
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15.001"
            viewBox="0 0 15 15.001"
          >
            <Path
              d="M9.187,1.688a7.5,7.5,0,1,0,7.5,7.5,7.474,7.474,0,0,0-7.5-7.5Zm3.75,10.2-1.05,1.05-2.7-2.7-2.7,2.7-1.05-1.05,2.7-2.7-2.7-2.7,1.05-1.05,2.7,2.7,2.7-2.7,1.05,1.05-2.7,2.7,2.7,2.7Z"
              transform="translate(-1.688 -1.687)"
              fill="#FFFFFF"
              stroke="#707070"
            />
          </Svg>
        </TouchableOpacity>

        <View style={{ alignItems: "center" }}>
          <Svg
            style={{ alignSelf: "center", marginTop: 10, marginBottom: 15 }}
            xmlns="http://www.w3.org/2000/svg"
            width="48.696"
            height="48.494"
            viewBox="0 0 10.696 18.494"
          >
            <Path
              d="M18.1,6.149h-.65V2.25h-1.3v3.9h-3.9V2.25h-1.3v3.9H10.3A1.3,1.3,0,0,0,9,7.448v3.9A5.2,5.2,0,0,0,13.548,16.5v3.944h1.3V16.5A5.2,5.2,0,0,0,19.4,11.347v-3.9A1.3,1.3,0,0,0,18.1,6.149Zm0,5.2a3.9,3.9,0,1,1-7.8,0v-3.9h7.8Z"
              transform="translate(-8.85 -2.1)"
              fill="#FFFFFF"
              stroke-width="0.3"
            />
          </Svg>
          <Pressable
            onPress={() => {
              navigation.navigate("Plug_Success");
            }}
            style={{ alignItems: "center" }}
          >
            <Text
              style={{
                paddingTop: 35,
                fontWeight: "300",
                color: "white",
                alignContent: "center",
                fontSize: 16,
              }}
            >
              please wait while
            </Text>
            <Text
              style={{
                fontWeight: "300",
                color: "white",
                alignContent: "center",
                fontSize: 16,
              }}
            >
              configuring new light. It
            </Text>
            <Text
              style={{
                fontWeight: "300",
                color: "white",
                alignContent: "center",
                fontSize: 16,
              }}
            >
              will take some time
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default Plug_Awaiting;
