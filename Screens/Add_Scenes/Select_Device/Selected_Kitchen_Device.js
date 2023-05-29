import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { imageStyles } from "../../Authentication/Authentication_util";
import { useNavigation } from "@react-navigation/native";
import { Circle, G, Path, Rect, Svg } from "react-native-svg";

function Selected_Kitchen_Device() {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const array = [
    {
      id: 1,
      name: "Fan 1",
      svg: ({ select }) => <Fan1 tint={select ? "#FFFFFF" : "#707070"} />,
      select: false,
    },
    {
      id: 2,
      name: "Plug 1",
      svg: ({ select }) => <Plug1 tint={select ? "#FFFFFF" : "#707070"} />,
      select: false,
    },
    {
      id: 3,
      name: "Switch 1",
      svg: ({ select }) => <Switch1 tint={select ? "#FFFFFF" : "#707070"} />,
      select: false,
    },
    {
      id: 4,
      name: "Switch 2",
      svg: ({ select }) => <Switch2 tint={select ? "#FFFFFF" : "#707070"} />,
      select: false,
    },
    {
      id: 5,
      name: "Switch 3",
      svg: ({ select }) => <Switch3 tint={select ? "#FFFFFF" : "#707070"} />,
      select: false,
    },
  ];
  const onSelect = (item, index) => {
    setSelectedIndex(index);
  };
  return (
    <View style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => {
            navigation.navigate("Add_Scene");
          }}
        >
          <Image
            style={{ margin: 25 }}
            source={require("../../../assets/Unfilled/arrow-back-fill.png")}
          ></Image>
        </Pressable>
        <View>
          <Text style={{ marginTop: 18, fontSize: 20, fontWeight: "700" }}>
            Select Device
          </Text>
        </View>
      </View>
      <View style={{ justifyContent: "space-between" }}>
        <View style={{ alignItems: "center", marginBottom: 25 }}>
          <FlatList
            data={array}
            numColumns={2}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  onSelect(item, index);
                }}
                key={index}
                style={{
                  marginHorizontal: 20,
                  marginVertical: 20,
                }}
              >
                <View>
                  <View
                    style={{
                      borderRadius: 10,
                      width: 100,
                      height: 100,
                      backgroundColor:
                        selectedIndex == index ? "#1a8ae5" : "#ECECECB3",
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <item.svg select={selectedIndex == index} />
                    </View>
                  </View>
                  <Text style={{ alignSelf: "center" }}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate("Add_Scene");
          }}
          style={{
            alignItems: "center",
            paddingVertical: 15,
            paddingHorizontal: 32,
            borderRadius: 15,
            backgroundColor: "#1a8ae5",
            marginHorizontal: 25,
          }}
        >
          <Text style={imageStyles.pressableText}>Select Device</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Selected_Kitchen_Device;
function Switch3Screen() {
  return (
    <View style={{ height: "40%" }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <View style={{ marginRight: 20 }}>
          <View>
            <Svg
              style={{ alignSelf: "center" }}
              xmlns="http://www.w3.org/2000/svg"
              width="40.04"
              height="40.885"
              viewBox="0 0 14.04 14.885"
            >
              <G transform="translate(-2.894 -1.85)">
                <Path
                  d="M13.184,6.458l-.5.87a5.533,5.533,0,1,1-5.533,0l-.5-.87a6.539,6.539,0,1,0,6.539,0Z"
                  transform="translate(0 -2.326)"
                  fill="#1a8ae5"
                  stroke-width="0.8"
                />
                <Path
                  d="M16.875,2.25h1.006V9.292H16.875Z"
                  transform="translate(-7.464 0)"
                  fill="#1a8ae5"
                  stroke-width="0.8"
                />
              </G>
            </Svg>
          </View>
          <Text style={{ alignSelf: "center" }}>Switch 0.1</Text>
        </View>
        <View>
          <View>
            <Svg
              style={{ alignSelf: "center" }}
              xmlns="http://www.w3.org/2000/svg"
              width="40.04"
              height="40.885"
              viewBox="0 0 14.04 14.885"
            >
              <G transform="translate(-2.894 -1.85)">
                <Path
                  d="M13.184,6.458l-.5.87a5.533,5.533,0,1,1-5.533,0l-.5-.87a6.539,6.539,0,1,0,6.539,0Z"
                  transform="translate(0 -2.326)"
                  fill="#1a8ae5"
                  stroke-width="0.8"
                />
                <Path
                  d="M16.875,2.25h1.006V9.292H16.875Z"
                  transform="translate(-7.464 0)"
                  fill="#1a8ae5"
                  stroke-width="0.8"
                />
              </G>
            </Svg>
          </View>
          <Text style={{ alignSelf: "center" }}>Switch 0.2</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <View style={{ marginRight: 20 }}>
          <View>
            <Svg
              style={{ alignSelf: "center" }}
              xmlns="http://www.w3.org/2000/svg"
              width="40.04"
              height="40.885"
              viewBox="0 0 14.04 14.885"
            >
              <G transform="translate(-2.894 -1.85)">
                <Path
                  d="M13.184,6.458l-.5.87a5.533,5.533,0,1,1-5.533,0l-.5-.87a6.539,6.539,0,1,0,6.539,0Z"
                  transform="translate(0 -2.326)"
                  fill="#1a8ae5"
                  stroke-width="0.8"
                />
                <Path
                  d="M16.875,2.25h1.006V9.292H16.875Z"
                  transform="translate(-7.464 0)"
                  fill="#1a8ae5"
                  stroke-width="0.8"
                />
              </G>
            </Svg>
          </View>
          <Text style={{ alignSelf: "center" }}>Switch 0.3</Text>
        </View>
        <View>
          <View>
            <Svg
              style={{ alignSelf: "center" }}
              xmlns="http://www.w3.org/2000/svg"
              width="40.04"
              height="40.885"
              viewBox="0 0 14.04 14.885"
            >
              <G transform="translate(-2.894 -1.85)">
                <Path
                  d="M13.184,6.458l-.5.87a5.533,5.533,0,1,1-5.533,0l-.5-.87a6.539,6.539,0,1,0,6.539,0Z"
                  transform="translate(0 -2.326)"
                  fill="#1a8ae5"
                  stroke-width="0.8"
                />
                <Path
                  d="M16.875,2.25h1.006V9.292H16.875Z"
                  transform="translate(-7.464 0)"
                  fill="#1a8ae5"
                  stroke-width="0.8"
                />
              </G>
            </Svg>
          </View>
          <Text style={{ alignSelf: "center" }}>Switch 0.4</Text>
        </View>
      </View>
    </View>
  );
}

function Switch3({ tint = "#707070" }) {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Svg
          style={{ margin: 5 }}
          xmlns="http://www.w3.org/2000/svg"
          width="20.04"
          height="20.885"
          viewBox="0 0 14.04 14.885"
        >
          <G transform="translate(-2.894 -1.85)">
            <Path
              d="M13.184,6.458l-.5.87a5.533,5.533,0,1,1-5.533,0l-.5-.87a6.539,6.539,0,1,0,6.539,0Z"
              transform="translate(0 -2.326)"
              fill={tint}
              stroke={tint}
              stroke-width="0.8"
            />
            <Path
              d="M16.875,2.25h1.006V9.292H16.875Z"
              transform="translate(-7.464 0)"
              fill={tint}
              stroke={tint}
              stroke-width="0.8"
            />
          </G>
        </Svg>
        <Svg
          style={{ margin: 5 }}
          xmlns="http://www.w3.org/2000/svg"
          width="20.04"
          height="20.885"
          viewBox="0 0 14.04 14.885"
        >
          <G transform="translate(-2.894 -1.85)">
            <Path
              d="M13.184,6.458l-.5.87a5.533,5.533,0,1,1-5.533,0l-.5-.87a6.539,6.539,0,1,0,6.539,0Z"
              transform="translate(0 -2.326)"
              fill={tint}
              stroke={tint}
              stroke-width="0.8"
            />
            <Path
              d="M16.875,2.25h1.006V9.292H16.875Z"
              transform="translate(-7.464 0)"
              fill={tint}
              stroke={tint}
              stroke-width="0.8"
            />
          </G>
        </Svg>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Svg
          style={{ margin: 5 }}
          xmlns="http://www.w3.org/2000/svg"
          width="20.04"
          height="20.885"
          viewBox="0 0 14.04 14.885"
        >
          <G transform="translate(-2.894 -1.85)">
            <Path
              d="M13.184,6.458l-.5.87a5.533,5.533,0,1,1-5.533,0l-.5-.87a6.539,6.539,0,1,0,6.539,0Z"
              transform="translate(0 -2.326)"
              fill={tint}
              stroke={tint}
              stroke-width="0.8"
            />
            <Path
              d="M16.875,2.25h1.006V9.292H16.875Z"
              transform="translate(-7.464 0)"
              fill={tint}
              stroke={tint}
              stroke-width="0.8"
            />
          </G>
        </Svg>
        <Svg
          style={{ margin: 5 }}
          xmlns="http://www.w3.org/2000/svg"
          width="20.04"
          height="20.885"
          viewBox="0 0 14.04 14.885"
        >
          <G transform="translate(-2.894 -1.85)">
            <Path
              d="M13.184,6.458l-.5.87a5.533,5.533,0,1,1-5.533,0l-.5-.87a6.539,6.539,0,1,0,6.539,0Z"
              transform="translate(0 -2.326)"
              fill={tint}
              stroke={tint}
              stroke-width="0.8"
            />
            <Path
              d="M16.875,2.25h1.006V9.292H16.875Z"
              transform="translate(-7.464 0)"
              fill={tint}
              stroke={tint}
              stroke-width="0.8"
            />
          </G>
        </Svg>
      </View>
    </View>
  );
}
function Switch2({ tint = "#707070" }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <Svg
        style={{ margin: 5 }}
        xmlns="http://www.w3.org/2000/svg"
        width="20.04"
        height="20.885"
        viewBox="0 0 14.04 14.885"
      >
        <G transform="translate(-2.894 -1.85)">
          <Path
            d="M13.184,6.458l-.5.87a5.533,5.533,0,1,1-5.533,0l-.5-.87a6.539,6.539,0,1,0,6.539,0Z"
            transform="translate(0 -2.326)"
            fill={tint}
            stroke={tint}
            stroke-width="0.8"
          />
          <Path
            d="M16.875,2.25h1.006V9.292H16.875Z"
            transform="translate(-7.464 0)"
            fill={tint}
            stroke={tint}
            stroke-width="0.8"
          />
        </G>
      </Svg>
      <Svg
        style={{ margin: 5 }}
        xmlns="http://www.w3.org/2000/svg"
        width="20.04"
        height="20.885"
        viewBox="0 0 14.04 14.885"
      >
        <G transform="translate(-2.894 -1.85)">
          <Path
            d="M13.184,6.458l-.5.87a5.533,5.533,0,1,1-5.533,0l-.5-.87a6.539,6.539,0,1,0,6.539,0Z"
            transform="translate(0 -2.326)"
            fill={tint}
            stroke={tint}
            stroke-width="0.8"
          />
          <Path
            d="M16.875,2.25h1.006V9.292H16.875Z"
            transform="translate(-7.464 0)"
            fill={tint}
            stroke={tint}
            stroke-width="0.8"
          />
        </G>
      </Svg>
    </View>
  );
}

function Switch1({ tint = "#707070" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="25.04"
      height="25.885"
      viewBox="0 0 14.04 14.885"
    >
      <G transform="translate(-2.894 -1.85)">
        <Path
          d="M13.184,6.458l-.5.87a5.533,5.533,0,1,1-5.533,0l-.5-.87a6.539,6.539,0,1,0,6.539,0Z"
          transform="translate(0 -2.326)"
          fill={tint}
          stroke={tint}
          stroke-width="0.8"
        />
        <Path
          d="M16.875,2.25h1.006V9.292H16.875Z"
          transform="translate(-7.464 0)"
          fill={tint}
          stroke={tint}
          stroke-width="0.8"
        />
      </G>
    </Svg>
  );
}

function Plug1({ tint = "#707070" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="25.696"
      height="25.494"
      viewBox="0 0 10.696 18.494"
    >
      <Path
        d="M18.1,6.149h-.65V2.25h-1.3v3.9h-3.9V2.25h-1.3v3.9H10.3A1.3,1.3,0,0,0,9,7.448v3.9A5.2,5.2,0,0,0,13.548,16.5v3.944h1.3V16.5A5.2,5.2,0,0,0,19.4,11.347v-3.9A1.3,1.3,0,0,0,18.1,6.149Zm0,5.2a3.9,3.9,0,1,1-7.8,0v-3.9h7.8Z"
        transform="translate(-8.85 -2.1)"
        fill={tint}
        stroke={tint}
        stroke-width="0.3"
      />
    </Svg>
  );
}

function Fan1({ tint = "#707070" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="25.497"
      height="25.495"
      viewBox="0 0 18.497 18.495"
    >
      <G transform="translate(0.155 0.149)">
        <Path
          d="M16.5,5.645l-.029-.012c-.651-.249-1.328.278-2.184.947A11.436,11.436,0,0,1,11.72,8.217c-.009-.027-.021-.054-.031-.081-.016-.043-.031-.087-.049-.129-.032-.076-.069-.151-.108-.224l-.017-.03c-.036-.066-.075-.13-.117-.192l-.025-.036c-.025-.036-.049-.073-.076-.108,1.5-1.94,1.939-3.9,1.253-5.7A3.251,3.251,0,0,0,9.424,0C8.009-.036,6.22.47,5.64,1.691l-.012.029c-.25.652.279,1.328.947,2.184A11.45,11.45,0,0,1,8.211,6.468c-.031.01-.061.023-.092.035s-.08.028-.118.045c-.077.033-.152.07-.226.109l-.027.016q-.1.055-.195.118l-.036.025c-.037.025-.074.049-.109.076-1.939-1.5-3.9-1.935-5.7-1.25A3.251,3.251,0,0,0,0,8.769c-.044,1.415.465,3.2,1.687,3.783l.029.013c.652.249,1.328-.279,2.184-.947A11.456,11.456,0,0,1,6.461,9.983c.009.027.02.053.03.08.016.043.031.087.049.129.033.077.069.152.109.226l.008.015q.059.107.127.208l.019.027c.027.04.054.08.084.119-1.5,1.938-1.934,3.9-1.249,5.7a3.251,3.251,0,0,0,3.126,1.71l.17,0c1.386,0,3.056-.516,3.613-1.689,0-.01.009-.019.013-.029.249-.652-.279-1.328-.947-2.184a11.443,11.443,0,0,1-1.636-2.567c.029-.01.056-.022.085-.032s.082-.029.122-.046c.077-.033.152-.069.226-.109l.016-.009c.07-.038.139-.08.206-.125l.032-.022c.039-.027.078-.052.115-.081,1.94,1.5,3.9,1.938,5.7,1.253a3.251,3.251,0,0,0,1.71-3.126C18.232,8.013,17.723,6.225,16.5,5.645Zm-6.166,4.973c-.043.036-.089.069-.135.1l-.032.021q-.056.037-.114.069L10,10.838c-.03.016-.061.03-.092.044s-.052.024-.078.035l-.011,0a1.97,1.97,0,0,1-.446.119h0a1.936,1.936,0,0,1-1.8-.692l-.006-.007c-.035-.043-.068-.088-.1-.133l-.021-.033c-.024-.037-.047-.075-.069-.113l-.029-.052c-.016-.03-.03-.061-.044-.092s-.024-.051-.035-.078l-.007-.018a1.972,1.972,0,0,1-.117-.441v0a1.937,1.937,0,0,1,.692-1.8l.008-.007c.042-.035.087-.068.132-.1l.035-.023c.036-.024.074-.046.112-.068l.054-.03c.03-.016.061-.03.091-.044s.052-.024.078-.035l.032-.012a1.974,1.974,0,0,1,.429-.112h0a1.935,1.935,0,0,1,1.791.692l.009.012q.051.062.1.128l.025.038c.023.035.045.071.065.108.011.019.021.038.032.057s.028.058.042.087.026.054.037.082l.008.021a1.98,1.98,0,0,1,.115.437v0a1.935,1.935,0,0,1-.693,1.793ZM7.213,3.406c-.422-.541-.9-1.152-.833-1.386C6.744,1.288,8.033.769,9.4.813a2.594,2.594,0,0,1,2.4,1.2A5.048,5.048,0,0,1,10.71,6.851a2.756,2.756,0,0,0-1.62-.526c-.023,0-.045,0-.068,0A11.706,11.706,0,0,0,7.213,3.406ZM3.4,10.98c-.541.422-1.152.9-1.386.833C1.284,11.449.766,10.158.808,8.794A2.6,2.6,0,0,1,2,6.4,5.045,5.045,0,0,1,6.842,7.48,2.756,2.756,0,0,0,6.316,9.1c0,.025,0,.049,0,.073A11.708,11.708,0,0,0,3.4,10.98Zm7.573,3.811c.422.541.9,1.152.833,1.386-.364.732-1.657,1.246-3.019,1.207a2.6,2.6,0,0,1-2.4-1.2,5.046,5.046,0,0,1,1.084-4.838,2.756,2.756,0,0,0,1.614.523c.026,0,.051,0,.076,0A11.7,11.7,0,0,0,10.975,14.791ZM17.38,9.4a2.6,2.6,0,0,1-1.2,2.4,5.049,5.049,0,0,1-4.843-1.087A2.756,2.756,0,0,0,11.865,9.1c0-.024,0-.047,0-.071a11.694,11.694,0,0,0,2.925-1.81c.541-.422,1.156-.9,1.386-.833C16.9,6.748,17.423,8.04,17.38,9.4Z"
          transform="translate(0 0)"
          fill={tint}
          stroke={tint}
          stroke-width="0.3"
        />
        <Circle
          cx="0.988"
          cy="0.988"
          r="0.988"
          transform="translate(8.102 8.11)"
          fill={tint}
          stroke={tint}
          stroke-width="0.3"
        />
      </G>
    </Svg>
  );
}
