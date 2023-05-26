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

class RGB_Slider extends Component {
    state = {
      slideValue: 0,
    };
  
    render() {
      const sliderStyle = {
        sliderDummy: {
          width: 250,
          height: 27,
          borderRadius: 100,
          position: "absolute",
        },
        sliderReal: {
          backgroundColor: "#1A8AE5",
          width: (this.state.slideValue / 50) * 250,
          height: 27,
          borderRadius: 100,
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
            colors={["#3900da", "#00faff","#0bff00","#faff00","#ff3900"]}
            style={{ width: 250, height: 30 }}
          >
            <Slider
              style={{ width: 250, height: 30, borderRadius: 100 }}
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
  

export default RGB_Slider