import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Circle, G, Path, Svg } from "react-native-svg";
import { styles } from "../../../Navigation/ButtomNavUtil";

function Switch_Success() {
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
            navigation.navigate("HomeScreen");
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
            width="40.04"
            height="40.885"
            viewBox="0 0 14.04 14.885"
          >
            <G transform="translate(-2.894 -1.85)">
              <Path
                d="M13.184,6.458l-.5.87a5.533,5.533,0,1,1-5.533,0l-.5-.87a6.539,6.539,0,1,0,6.539,0Z"
                transform="translate(0 -2.326)"
                fill="#FFFFFF"
                stroke-width="0.8"
              />
              <Path
                d="M16.875,2.25h1.006V9.292H16.875Z"
                transform="translate(-7.464 0)"
                fill="#FFFFFF"
                stroke-width="0.8"
              />
            </G>
          </Svg>
          <Text
            style={{
              paddingTop: 50,
              fontWeight: "600",
              color: "white",
              alignContent: "center",
              fontSize: 16,
            }}
          >
            Light added
          </Text>
          <Text
            style={{
              fontWeight: "600",
              color: "white",
              alignContent: "center",
              fontSize: 16,
            }}
          >
            successfully
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Switch_Success;
