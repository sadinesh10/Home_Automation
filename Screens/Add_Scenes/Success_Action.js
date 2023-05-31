import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { G, Path, Svg } from "react-native-svg";
import { styles } from "../../Navigation/ButtomNavUtil";

function Success_Action() {
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
          marginHorizontal: "24%",
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

        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="50.249"
            height="50.249"
            viewBox="0 0 24.249 24.249"
          >
            <G transform="translate(-2.25 -2.25)">
              <Path
                d="M16.875,2.25h1.732v4.3H16.875Z"
                transform="translate(-3.367 0)"
                fill="#FFFFFF"
              />
              <Path
                d="M24.4,9.093l3.037-3.037L28.66,7.282l-3.037,3.037Z"
                transform="translate(-5.098 -0.876)"
                fill="#FFFFFF"
              />
              <Path
                d="M28.17,16.875h4.3v1.732h-4.3Z"
                transform="translate(-5.967 -3.367)"
                fill="#FFFFFF"
              />
              <Path
                d="M24.4,25.625,25.63,24.4l3.037,3.038-1.225,1.224Z"
                transform="translate(-5.1 -5.099)"
                fill="#FFFFFF"
              />
              <Path
                d="M16.875,28.17h1.732v4.3H16.875Z"
                transform="translate(-3.367 -5.967)"
                fill="#FFFFFF"
              />
              <Path
                d="M6.072,27.444l3.037-3.037,1.225,1.225L7.3,28.669Z"
                transform="translate(-0.88 -5.1)"
                fill="#FFFFFF"
              />
              <Path
                d="M2.25,16.875h4.3v1.732H2.25Z"
                transform="translate(0 -3.367)"
                fill="#FFFFFF"
              />
              <Path
                d="M6.064,7.287,7.29,6.064,10.327,9.1,9.1,10.326Z"
                transform="translate(-0.878 -0.878)"
                fill="#FFFFFF"
              />
              <Path
                d="M16.446,12.982a3.464,3.464,0,1,1-3.464,3.464,3.464,3.464,0,0,1,3.464-3.464m0-1.732a5.2,5.2,0,1,0,5.2,5.2A5.2,5.2,0,0,0,16.446,11.25Z"
                transform="translate(-2.072 -2.072)"
                fill="#FFFFFF"
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
            Wakeup Scene Added
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

export default Success_Action;
