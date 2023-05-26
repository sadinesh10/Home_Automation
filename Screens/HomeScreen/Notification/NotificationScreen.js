import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";


function NotificationScreem() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn((isOn) => !isOn);
  };
  const navigation = useNavigation();
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Pressable
            onPress={() => {
              navigation.navigate("TabHome");
            }}
          >
            <Image
              style={{ margin: 27 }}
              source={require("../../../assets/Unfilled/arrow-back-fill.png")}
            ></Image>
          </Pressable>
          <Text style={{ marginTop: 18, fontSize: 22, fontWeight: "700" }}>
            Notifications
          </Text>
        </View>
      </View>
      <View
        style={{
          padding: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 15,
          borderRadius: 15,
          backgroundColor: "#1A8AE5",
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Notifications On</Text>
        <TouchableOpacity
          style={[
            styles.outter,
            isOn
              ? { justifyContent: "flex-end", backgroundColor: "white" }
              : { justifyContent: "flex-start", backgroundColor: "white" },
          ]}
          activeOpacity={1}
          onPress={() => {
            toggleSwitch();
          }}
        >
          <View style={styles.inner}></View>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ width: "100%", height: "100%" }}>
        <Text style={{ marginHorizontal: 15, marginTop: 10 }}>
          Today, 10:00am
        </Text>
        <View
          style={{
            marginHorizontal: 15,
            marginTop: 10,
            marginBottom: 15,
            borderRadius: 10,
            backgroundColor: "#ECECECB3",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                borderRadius: 10,
                width: "12%",
                height: "47%",
                backgroundColor: "#1A8AE5",
                // justifyContent:"center",
                // alignSelf:"center"
                padding: 10,
                marginTop: 20,
                marginHorizontal: 5,
              }}
            >
              <Image
                style={{
                  tintColor: "white",
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
                source={require("../../../assets/Unfilled/cooling-symbol-2677.png")}
              ></Image>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                margin: 10,
                justifyContent: "space-between",
                marginBottom: 25,
              }}
            >
              <View style={{ margin: 5 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "900",
                    opacity: 100,
                  }}
                >
                  Fan Over heating
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#707070",
                    fontWeight: "700",
                    opacity: 100,
                  }}
                >
                  Running for last 50 mins
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 15,
            marginTop: 10,
            marginBottom: 15,
            borderRadius: 10,
            backgroundColor: "#ECECECB3",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                borderRadius: 10,
                width: "12%",
                height: "47%",
                backgroundColor: "#1A8AE5",
                // justifyContent:"center",
                // alignSelf:"center"
                padding: 10,
                marginTop: 20,
                marginHorizontal: 5,
              }}
            >
              <Image
                style={{
                  tintColor: "white",
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
                source={require("../../../assets/Unfilled/bulb-outline.png")}
              ></Image>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                margin: 10,
                justifyContent: "space-between",
                marginBottom: 25,
              }}
            >
              <View style={{ margin: 5 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "900",
                    opacity: 100,
                  }}
                >
                  Bulb Over heating
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#707070",
                    fontWeight: "700",
                    opacity: 100,
                  }}
                >
                  Running for last 50 mins
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={{ marginHorizontal: 15, marginTop: 10 }}>
          3 March, 10:00am
        </Text>
        <View
          style={{
            marginHorizontal: 15,
            marginTop: 10,
            marginBottom: 15,
            borderRadius: 10,
            backgroundColor: "#ECECECB3",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                borderRadius: 10,
                width: "12%",
                height: "47%",
                backgroundColor: "#1A8AE5",
                // justifyContent:"center",
                // alignSelf:"center"
                padding: 10,
                marginTop: 20,
                marginHorizontal: 5,
              }}
            >
              <Image
                style={{
                  tintColor: "white",
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
                source={require("../../../assets/Unfilled/cooling-symbol-2677.png")}
              ></Image>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                margin: 10,
                justifyContent: "space-between",
                marginBottom: 25,
              }}
            >
              <View style={{ margin: 5 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "900",
                    opacity: 100,
                  }}
                >
                  Fan Over heating
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#707070",
                    fontWeight: "700",
                    opacity: 100,
                  }}
                >
                  Running for last 50 mins
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 15,
            marginTop: 10,
            marginBottom: 15,
            borderRadius: 10,
            backgroundColor: "#ECECECB3",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                borderRadius: 10,
                width: "12%",
                height: "47%",
                backgroundColor: "#1A8AE5",
                // justifyContent:"center",
                // alignSelf:"center"
                padding: 10,
                marginTop: 20,
                marginHorizontal: 5,
              }}
            >
              <Image
                style={{
                  tintColor: "white",
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
                source={require("../../../assets/Unfilled/bulb-outline.png")}
              ></Image>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                margin: 10,
                justifyContent: "space-between",
                marginBottom: 25,
              }}
            >
              <View style={{ margin: 5 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "900",
                    opacity: 100,
                  }}
                >
                  Bulb Over heating
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#707070",
                    fontWeight: "700",
                    opacity: 100,
                  }}
                >
                  Running for last 50 mins
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 15,
            marginTop: 10,
            marginBottom: 15,
            borderRadius: 10,
            backgroundColor: "#ECECECB3",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                borderRadius: 10,
                width: "12%",
                height: "47%",
                backgroundColor: "#1A8AE5",
                // justifyContent:"center",
                // alignSelf:"center"
                padding: 10,
                marginTop: 20,
                marginHorizontal: 5,
              }}
            >
              <Image
                style={{
                  tintColor: "white",
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
                source={require("../../../assets/Unfilled/bulb-outline.png")}
              ></Image>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                margin: 10,
                justifyContent: "space-between",
                marginBottom: 25,
              }}
            >
              <View style={{ margin: 5 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "900",
                    opacity: 100,
                  }}
                >
                  Bulb Over heating
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#707070",
                    fontWeight: "700",
                    opacity: 100,
                  }}
                >
                  Running for last 50 mins
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default NotificationScreem;

const styles = StyleSheet.create({
  outter: {
    width: 30,
    height: 15,
    backgroundColor: "gray",
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 2,
    marginTop: 3,
  },
  inner: {
    width: 10,
    height: 10,
    borderRadius: 15,
    elevation: 8,
    backgroundColor: "#1A8AE5",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
});
