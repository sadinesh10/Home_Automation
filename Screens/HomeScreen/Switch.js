import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

function UseSwitch() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn((isOn) => !isOn);
  };
  return (
    <View style={{ alignSelf: "flex-end", marginTop: 15, marginBottom: 15 }}>
      <TouchableOpacity
        style={[
          styles.outter,
          isOn
            ? { justifyContent: "flex-end", backgroundColor: "#1A8AE5" }
            : { justifyContent: "flex-start", backgroundColor: "gray" },
        ]}
        activeOpacity={1}
        onPress={() => {
          toggleSwitch();
        }}
      >
        <View style={styles.inner}></View>
      </TouchableOpacity>
    </View>
  );
}

export default UseSwitch;
const styles = StyleSheet.create({
  outter: {
    width: 40,
    height: 20,
    backgroundColor: "gray",
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 2,
  },
  inner: {
    width: 15,
    height: 15,
    borderRadius: 15,
    elevation: 8,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
});
