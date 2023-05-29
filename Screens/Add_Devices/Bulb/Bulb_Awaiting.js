import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../../Navigation/ButtomNavUtil";
import { Circle, G, Path, Svg } from "react-native-svg";

function Bulb_Awaiting() {
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
            navigation.navigate("Bulb_Reset");
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
            width="40.667"
            height="40.869"
            viewBox="0 0 12.667 18.869"
          >
            <G transform="translate(-3.187 -0.374)">
              <Path
                d="M11.382,14.772v-.931c0-1.125,1.223-2.188,2.016-2.947A5.612,5.612,0,0,0,15.1,6.707a5.583,5.583,0,1,0-11.167,0,5.748,5.748,0,0,0,1.706,4.187c.788.744,2.016,1.811,2.016,2.947v.931"
                fill="none"
                stroke="#FFFFFF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <Path
                d="M7.875,16.875h2.481"
                transform="translate(0.405 1.619)"
                fill="none"
                stroke="#FFFFFF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <Path
                d="M7.313,15.188h3.722"
                transform="translate(0.347 1.445)"
                fill="none"
                stroke="#FFFFFF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <Path
                d="M9,13.962V9"
                transform="translate(0.52 0.809)"
                fill="none"
                stroke="#FFFFFF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <Path
                d="M10.611,8.438a3.222,3.222,0,0,1-1.473.621,3.222,3.222,0,0,1-1.473-.621"
                transform="translate(0.383 0.752)"
                fill="none"
                stroke="#FFFFFF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
            </G>
          </Svg>
          <Pressable
            onPress={() => {
              navigation.navigate("Bulb_Success");
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

export default Bulb_Awaiting;
