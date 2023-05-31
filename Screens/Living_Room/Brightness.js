import React, { Component } from "react";
import {
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";
import Slider from "@react-native-community/slider";
class Brightness extends Component {
    state = {
      slideValue: 0,
    };
  
    render() {
      const sliderStyle = {
        sliderDummy: {
          backgroundColor: "#ECECECB3",
          width: 270,
          height: 35,
          borderRadius: 100,
          position: "absolute",
        },
        sliderReal: {
          backgroundColor: "#1A8AE5",
          width: (this.state.slideValue / 50) * 270,
          height: 35,
          borderRadius: 100,
        },
      };
      return (
        <View style={{ borderRadius: 50, overflow: "hidden" }}>
          <View style={{ flexDirection: "row", position: "absolute" }}>
            <View style={sliderStyle.sliderDummy}></View>
            <View style={sliderStyle.sliderReal}></View>
          </View>
  
          <Slider
            style={{ width: 270, height: 35, borderRadius: 100 }}
            minimumValue={0}
            maximumValue={50}
            value={this.state.slideValue}
            onValueChange={(value) => this.setState({ slideValue: value })}
            maximumTrackTintColor="transparent"
            minimumTrackTintColor="transparent"
          />
        </View>
      );
    }
  }
  

export default Brightness