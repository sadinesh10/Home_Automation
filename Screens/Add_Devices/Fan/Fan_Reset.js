import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Heading, { BackPressArrow } from "../Heading";
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Circle, G, Path, Svg } from "react-native-svg";
import { WifiIcon } from "../Add_Device_Authentication";
import { Switch } from "../Select_Room";

function Fan_Reset() {
  const navigation = useNavigation();
  
  return (
    <View style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      <View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Fan_Device_Authentication");
            }}
          >
            <BackPressArrow />
          </TouchableOpacity>

          <Text style={{ marginTop: 18, fontSize: 20, fontWeight: "700" }}>
            Add Device
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            color: "#707070",
            marginLeft: 15,
            opacity: 100,
          }}
        >
          Reset the device
        </Text>
      </View>
      <View
        style={{
          width: "85%",
          height: "20%",
          borderRadius: 15,
          margin: 25,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ECECECE0",
        }}
      >
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="50.497"
          height="50.495"
          viewBox="0 0 18.497 18.495"
        >
          <G transform="translate(0.155 0.149)">
            <Path
              d="M16.5,5.645l-.029-.012c-.651-.249-1.328.278-2.184.947A11.436,11.436,0,0,1,11.72,8.217c-.009-.027-.021-.054-.031-.081-.016-.043-.031-.087-.049-.129-.032-.076-.069-.151-.108-.224l-.017-.03c-.036-.066-.075-.13-.117-.192l-.025-.036c-.025-.036-.049-.073-.076-.108,1.5-1.94,1.939-3.9,1.253-5.7A3.251,3.251,0,0,0,9.424,0C8.009-.036,6.22.47,5.64,1.691l-.012.029c-.25.652.279,1.328.947,2.184A11.45,11.45,0,0,1,8.211,6.468c-.031.01-.061.023-.092.035s-.08.028-.118.045c-.077.033-.152.07-.226.109l-.027.016q-.1.055-.195.118l-.036.025c-.037.025-.074.049-.109.076-1.939-1.5-3.9-1.935-5.7-1.25A3.251,3.251,0,0,0,0,8.769c-.044,1.415.465,3.2,1.687,3.783l.029.013c.652.249,1.328-.279,2.184-.947A11.456,11.456,0,0,1,6.461,9.983c.009.027.02.053.03.08.016.043.031.087.049.129.033.077.069.152.109.226l.008.015q.059.107.127.208l.019.027c.027.04.054.08.084.119-1.5,1.938-1.934,3.9-1.249,5.7a3.251,3.251,0,0,0,3.126,1.71l.17,0c1.386,0,3.056-.516,3.613-1.689,0-.01.009-.019.013-.029.249-.652-.279-1.328-.947-2.184a11.443,11.443,0,0,1-1.636-2.567c.029-.01.056-.022.085-.032s.082-.029.122-.046c.077-.033.152-.069.226-.109l.016-.009c.07-.038.139-.08.206-.125l.032-.022c.039-.027.078-.052.115-.081,1.94,1.5,3.9,1.938,5.7,1.253a3.251,3.251,0,0,0,1.71-3.126C18.232,8.013,17.723,6.225,16.5,5.645Zm-6.166,4.973c-.043.036-.089.069-.135.1l-.032.021q-.056.037-.114.069L10,10.838c-.03.016-.061.03-.092.044s-.052.024-.078.035l-.011,0a1.97,1.97,0,0,1-.446.119h0a1.936,1.936,0,0,1-1.8-.692l-.006-.007c-.035-.043-.068-.088-.1-.133l-.021-.033c-.024-.037-.047-.075-.069-.113l-.029-.052c-.016-.03-.03-.061-.044-.092s-.024-.051-.035-.078l-.007-.018a1.972,1.972,0,0,1-.117-.441v0a1.937,1.937,0,0,1,.692-1.8l.008-.007c.042-.035.087-.068.132-.1l.035-.023c.036-.024.074-.046.112-.068l.054-.03c.03-.016.061-.03.091-.044s.052-.024.078-.035l.032-.012a1.974,1.974,0,0,1,.429-.112h0a1.935,1.935,0,0,1,1.791.692l.009.012q.051.062.1.128l.025.038c.023.035.045.071.065.108.011.019.021.038.032.057s.028.058.042.087.026.054.037.082l.008.021a1.98,1.98,0,0,1,.115.437v0a1.935,1.935,0,0,1-.693,1.793ZM7.213,3.406c-.422-.541-.9-1.152-.833-1.386C6.744,1.288,8.033.769,9.4.813a2.594,2.594,0,0,1,2.4,1.2A5.048,5.048,0,0,1,10.71,6.851a2.756,2.756,0,0,0-1.62-.526c-.023,0-.045,0-.068,0A11.706,11.706,0,0,0,7.213,3.406ZM3.4,10.98c-.541.422-1.152.9-1.386.833C1.284,11.449.766,10.158.808,8.794A2.6,2.6,0,0,1,2,6.4,5.045,5.045,0,0,1,6.842,7.48,2.756,2.756,0,0,0,6.316,9.1c0,.025,0,.049,0,.073A11.708,11.708,0,0,0,3.4,10.98Zm7.573,3.811c.422.541.9,1.152.833,1.386-.364.732-1.657,1.246-3.019,1.207a2.6,2.6,0,0,1-2.4-1.2,5.046,5.046,0,0,1,1.084-4.838,2.756,2.756,0,0,0,1.614.523c.026,0,.051,0,.076,0A11.7,11.7,0,0,0,10.975,14.791ZM17.38,9.4a2.6,2.6,0,0,1-1.2,2.4,5.049,5.049,0,0,1-4.843-1.087A2.756,2.756,0,0,0,11.865,9.1c0-.024,0-.047,0-.071a11.694,11.694,0,0,0,2.925-1.81c.541-.422,1.156-.9,1.386-.833C16.9,6.748,17.423,8.04,17.38,9.4Z"
              transform="translate(0 0)"
              fill="#1a8ae5"
              stroke-width="0.3"
              
            />
            <Circle
              cx="0.988"
              cy="0.988"
              r="0.988"
              transform="translate(8.102 8.11)"
              fill="#1a8ae5"
              stroke-width="0.3"
            />
          </G>
        </Svg>
        <Text
          style={{
            fontSize: 16,
            marginTop: 15,
            opacity: 100,
          }}
        >
          Fan
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            color: "#707070",
            marginLeft: 15,
            opacity: 100,
            width: "90%",
          }}
        >
          If the RGB Light is already flashing then skip the reset step.
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#707070",
            marginLeft: 15,
            opacity: 100,
            width: "90%",
          }}
        >
          Press Power button for 5 Sec till WIFI LED start blinking slowly.
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 50,
          marginHorizontal: 10,
          marginRight: 30,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 16,
              color: "#707070",
              marginLeft: 15,
              opacity: 100,
              marginRight: 15,
            }}
          >
            Power Button
          </Text>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.04"
            height="20.885"
            viewBox="0 0 14.04 14.885"
          >
            <G transform="translate(-2.894 -1.85)">
              <Path
                d="M13.184,6.458l-.5.87a5.533,5.533,0,1,1-5.533,0l-.5-.87a6.539,6.539,0,1,0,6.539,0Z"
                transform="translate(0 -2.326)"
                fill="#707070"
                stroke-width="0.8"
              />
              <Path
                d="M16.875,2.25h1.006V9.292H16.875Z"
                transform="translate(-7.464 0)"
                fill="#707070"
                stroke-width="0.8"
              />
            </G>
          </Svg>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 16,
              color: "#707070",
              marginLeft: 15,
              opacity: 100,
              marginRight: 15,
            }}
          >
            LED WIFI
          </Text>
          <WifiIcon />
        </View>
      </View>
      <View style={{ marginTop: 90 }}>
        <Pressable
          onPress={() => {
            navigation.navigate("Fan_Awaiting");
          }}
          style={{
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 32,
            borderRadius: 15,
            backgroundColor: "#1a8ae5",
            marginHorizontal: 25,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              lineHeight: 21,
              fontWeight: "700",
              letterSpacing: 0.25,
              color: "white",
            }}
          >
            Confirm the light is
          </Text>
          <Text
            style={{
              fontSize: 18,
              lineHeight: 23,
              fontWeight: "700",
              letterSpacing: 0.25,
              color: "white",
            }}
          >
            flashing
          </Text>
        </Pressable>
        <View>
          <Text
            style={{
              fontSize: 16,
              color: "#707070",
              opacity: 100,
              alignSelf: "center",
              marginTop: 10,
            }}
          >
            If Light is not flashing repeat this step.
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Fan_Reset;
