import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { G, Path, Svg } from "react-native-svg";
import { styles } from "../../Navigation/ButtomNavUtil";

function Add_Light_Success() {
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
            width="40.549"
            height="40.594"
            viewBox="0 0 14.549 18.594"
          >
            <G transform="translate(-206.361 -7.853)">
              <Path
                d="M217.741,24.011H215.6a2.587,2.587,0,0,0-2.481-2.118l-4.511-4.511a1.132,1.132,0,0,0,.017-1.327l3.783-3.783a3.957,3.957,0,0,0,1.125,3.274.319.319,0,0,0,.451,0l1.289-1.289h0a1.952,1.952,0,1,0,2.761-2.761h0l1.079-1.079a.319.319,0,0,0,0-.451,3.919,3.919,0,0,0-2.789-1.155,3.98,3.98,0,0,0-1.473.284l-.74-.74a1.038,1.038,0,0,0-1.468,0l-.721.721a1.039,1.039,0,0,0,0,1.468l.656.656-4.454,4.454a1.135,1.135,0,1,0-.029,2.114l4.2,4.2a2.548,2.548,0,0,0-1.931,2.037h-2.14a.319.319,0,0,0-.319.319v1.6a.319.319,0,0,0,.319.319h9.513a.319.319,0,0,0,.319-.319v-1.6A.318.318,0,0,0,217.741,24.011Zm-.157-12.063a1.315,1.315,0,0,1-1.86,1.86h0l1.86-1.86Zm-5.211-1.853a.4.4,0,0,1,0-.567l.72-.721a.4.4,0,0,1,.567,0l.884.884.009.009a.319.319,0,0,0,.361.063,3.331,3.331,0,0,1,1.409-.314,3.282,3.282,0,0,1,2.1.754l-4.656,4.656a3.318,3.318,0,0,1-.44-3.512.319.319,0,0,0-.063-.361l-.009-.009ZM207.2,16.706a.5.5,0,1,1,.5.5A.5.5,0,0,1,207.2,16.706Zm5.786,5.82a1.973,1.973,0,0,1,1.969,1.484h-3.937A1.973,1.973,0,0,1,212.984,22.526Zm4.438,3.083h-8.876v-.961h8.876v.961Z"
                transform="translate(0)"
                fill="#FFFFFF"
                stroke-width="0.4"
              />
              <Path
                d="M1372.53,664.35a.319.319,0,1,0-.45.451l.578.578a.319.319,0,0,0,.451-.451Z"
                transform="translate(-1153.553 -649.519)"
                fill="#FFFFFF"
                stroke="#FFFFFF"
                stroke-width="0.4"
              />
              <Path
                d="M1202.128,744.966a.319.319,0,0,0-.318.319v.817a.319.319,0,0,0,.319.319h0a.319.319,0,0,0,.319-.319v-.817a.319.319,0,0,0-.318-.319Z"
                transform="translate(-985.109 -729.406)"
                fill="#FFFFFF"
                stroke="#FFFFFF"
                stroke-width="0.4"
              />
              <Path
                d="M1453.839,494.081h-.817a.319.319,0,1,0,0,.637h.817a.319.319,0,1,0,0-.637Z"
                transform="translate(-1233.447 -481.077)"
                fill="#FFFFFF"
                stroke="#FFFFFF"
                stroke-width="0.4"
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

export default Add_Light_Success;
