import React, { Component } from "react";
import {
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";
import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";
class Color_Temp extends Component {
  state = {
    slideValue: 0,
  };

  render() {
    const sliderStyle = {
      sliderDummy: {
        width: 270,
        height: 47,
        borderRadius: 10,
        position: "absolute",
      },
      sliderReal: {
        width: (this.state.slideValue / 50) * 270,
        height: 47,
        borderRadius: 10,
      },
    };
    return (
      <View style={{ borderRadius: 50, overflow: "hidden" }}>
        <View style={{ flexDirection: "row", position: "absolute" }}>
          <View style={sliderStyle.sliderDummy}></View>
          <View style={sliderStyle.sliderReal}></View>
        </View>
        <LinearGradient
          start={{ x: 0.0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          colors={["#efff66", "#BDE1FF"]}
          style={{
            width: 270,
            height: 35,
            borderRadius: 100,
          }}
        >
          <Slider
            style={{ width: 270, height: 35, borderRadius: 50 }}
            minimumValue={0}
            maximumValue={50}
            value={this.state.slideValue}
            onValueChange={(value) => this.setState({ slideValue: value })}
            maximumTrackTintColor="transparent"
            minimumTrackTintColor="transparent"
          />
        </LinearGradient>
      </View>
    );
  }
}

export default Color_Temp;
