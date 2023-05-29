import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Button,
  Pressable,
} from "react-native";

function GetStarted() {
  const navigation= useNavigation()
  return (
    <View style={{width:"100%", height:"100%"}}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../assets/Images/get_started.png")}
      >
        <View style={styles.container}>
          <Text style={styles.text}>Spikingnet IOT</Text>
          <Text style={styles.text}>Platform</Text>
          <View style={styles.subtextView}>
            <Text style={styles.subtext}>Manage your home from</Text>
            <Text style={styles.subtext}>anytime, anywhere</Text>
          </View>
          <Pressable
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 12,
              paddingHorizontal: 32,
              borderRadius: 5,
              borderColor: "#AAAA9F",
              backgroundColor: "white",
              marginTop: 70,
              borderWidth: 1,
            }}
            onPress={()=>{
              navigation.navigate("LoginScreen")
            }}
          >
            <Text
              style={{
                fontSize: 16,
                lineHeight: 21,
                fontWeight: "900",
                letterSpacing: 0,
                color: "#0C005A",
              }}
            >
              Get Started
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    // height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 400,
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "900",
  },
  subtextView: {
    alignItems: "center",
    marginTop: 10,
  },
  subtext: {
    fontWeight: "200",
    color: "#FFFAFA",
    fontSize: 16,
  },
});
