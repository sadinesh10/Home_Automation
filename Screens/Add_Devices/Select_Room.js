import React, { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Heading from "./Heading";
import { useNavigation } from "@react-navigation/native";
import { Circle, G, Path, Svg } from "react-native-svg";

function Select_Room() {
  const navigation = useNavigation();
  const [modal, setmodal] = useState(false);
  const [place, setPlace] = useState("Living Room");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onSelect = (item, index) => {
    setSelectedIndex(index);
  };

  const array = ["Living Room", "Bed Room", "Study Room", "Dinig Room"];
  const array1 = [
    {
      id: 1,
      name: "Light",
      svg: ({ select }) => <Light tint={select ? "#FFFFFF" : "#707070"} />,
      select: false,
    },
    {
      id: 2,
      name: "Fan",
      svg: ({ select }) => <Fan tint={select ? "#FFFFFF" : "#707070"} />,
      select: false,
    },
    {
      id: 3,
      name: "Switch",
      svg: ({ select }) => <Switch tint={select ? "#FFFFFF" : "#707070"} />,
      select: false,
    },
    {
      id: 4,
      name: "Bulb",
      svg: ({ select }) => <Bulb tint={select ? "#FFFFFF" : "#707070"} />,
      select: false,
    },
    {
      id: 5,
      name: "Plug",
      svg: ({ select }) => <Plug tint={select ? "#FFFFFF" : "#707070"} />,
      select: false,
    },
    {
      id: 6,
      name: "Light",
      svg: ({ select }) => <Light1 tint={select ? "#FFFFFF" : "#707070"} />,
      select: false,
    },
  ];
  return (
    <View style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      <Heading />
      <View>
        <Text style={{ marginLeft: 15, fontSize: 16, fontWeight: "700" }}>
          Select Room
        </Text>
        <TouchableOpacity
          onPress={() => {
            setmodal(true);
          }}
        >
          <View
            style={{
              borderRadius: 15,
              marginLeft: 15,
              marginRight: 15,
              marginTop: 10,
              backgroundColor: "#ECECECB2",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "#707070",
                padding: 10,
                opacity: 100,
                fontSize: 16,
                flexDirection: "row",
              }}
            >
              {place}
            </Text>
            <Svg
              style={{ margin: 20 }}
              xmlns="http://www.w3.org/2000/svg"
              width="8.524"
              height="4.257"
              viewBox="0 0 8.524 4.257"
            >
              <Path
                d="M8,11a.608.608,0,0,1-.389-.14L3.969,7.825a.609.609,0,0,1,.778-.936L8,9.613l3.258-2.626a.623.623,0,1,1,.771.978L8.387,10.9A.608.608,0,0,1,8,11Z"
                transform="translate(-3.749 -6.749)"
                fill="#707070"
              />
            </Svg>
          </View>
        </TouchableOpacity>
        <Modal visible={modal}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              margin: 30,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                elevation: 10,
                backgroundColor: "white",
                padidingTop: 5,
                paddingHorizontal: 20,
                paddingBottom: 10,
                borderRadius: 13,
                borderWidth: 1,
              }}
            >
              {array.map((item, index) => {
                return (
                  <Pressable
                    onPress={() => {
                      setPlace(item);
                      setmodal(false);
                    }}
                  >
                    <View key={index}>
                      <View
                        style={{
                          backgroundColor: "#ECECECEC",
                          borderRadius: 10,
                          marginHorizontal: 10,
                          marginTop: 10,
                          marginBottom: 5,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: "700",
                            margin: 13,
                            marginRight: 100,
                            color: "#707070",
                          }}
                        >
                          {item}
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </Modal>

        <View>
          <Text
            style={{
              marginLeft: 15,
              marginTop: 20,
              fontSize: 16,
              fontWeight: "700",
            }}
          >
            Select Device
          </Text>
        </View>
        <View style={{ alignItems: "center", marginBottom: 25 }}>
          <FlatList
            data={array1}
            numColumns={2}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  onSelect(item, index);
                  if (item.id == 1) {
                    navigation.navigate("Add_Device_Authentication");
                  } else if (item.id == 2) {
                    navigation.navigate("Fan_Device_Authentication");
                  } else if (item.id == 3) {
                    navigation.navigate("Switch_Device_Authentication");
                  } else if (item.id == 4) {
                    navigation.navigate("Bulb_Device_Authentication");
                  } else if (item.id == 5) {
                    navigation.navigate("Plug_Device_Authentication");
                  } else if (item.id == 6) {
                    navigation.navigate("Light_1_Device_Authentication");
                  }
                }}
              >
                <View
                  style={{
                    width: 100,
                    height: 120,
                    margin: 20,
                    padding: 30,
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: 12,
                    backgroundColor:
                      selectedIndex == index ? "#1a8ae5" : "#ECECECB3",
                    marginHorizontal: 20,
                  }}
                >
                  <item.svg select={selectedIndex == index} />

                  <Text
                    style={{
                      marginTop: 30,
                      color: selectedIndex == index ? "#ECECECB3" : "#707070",
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
}

export default Select_Room;

function Light1({ tint = "#707070" }) {
  return (
    <Svg
      style={{ alignSelf: "center" }}
      xmlns="http://www.w3.org/2000/svg"
      width="30.549"
      height="30.594"
      viewBox="0 0 14.549 18.594"
    >
      <G transform="translate(-206.361 -7.853)">
        <Path
          d="M217.741,24.011H215.6a2.587,2.587,0,0,0-2.481-2.118l-4.511-4.511a1.132,1.132,0,0,0,.017-1.327l3.783-3.783a3.957,3.957,0,0,0,1.125,3.274.319.319,0,0,0,.451,0l1.289-1.289h0a1.952,1.952,0,1,0,2.761-2.761h0l1.079-1.079a.319.319,0,0,0,0-.451,3.919,3.919,0,0,0-2.789-1.155,3.98,3.98,0,0,0-1.473.284l-.74-.74a1.038,1.038,0,0,0-1.468,0l-.721.721a1.039,1.039,0,0,0,0,1.468l.656.656-4.454,4.454a1.135,1.135,0,1,0-.029,2.114l4.2,4.2a2.548,2.548,0,0,0-1.931,2.037h-2.14a.319.319,0,0,0-.319.319v1.6a.319.319,0,0,0,.319.319h9.513a.319.319,0,0,0,.319-.319v-1.6A.318.318,0,0,0,217.741,24.011Zm-.157-12.063a1.315,1.315,0,0,1-1.86,1.86h0l1.86-1.86Zm-5.211-1.853a.4.4,0,0,1,0-.567l.72-.721a.4.4,0,0,1,.567,0l.884.884.009.009a.319.319,0,0,0,.361.063,3.331,3.331,0,0,1,1.409-.314,3.282,3.282,0,0,1,2.1.754l-4.656,4.656a3.318,3.318,0,0,1-.44-3.512.319.319,0,0,0-.063-.361l-.009-.009ZM207.2,16.706a.5.5,0,1,1,.5.5A.5.5,0,0,1,207.2,16.706Zm5.786,5.82a1.973,1.973,0,0,1,1.969,1.484h-3.937A1.973,1.973,0,0,1,212.984,22.526Zm4.438,3.083h-8.876v-.961h8.876v.961Z"
          transform="translate(0)"
          fill={tint}
          stroke-width="0.4"
        />
        <Path
          d="M1372.53,664.35a.319.319,0,1,0-.45.451l.578.578a.319.319,0,0,0,.451-.451Z"
          transform="translate(-1153.553 -649.519)"
          fill={tint}
          stroke={tint}
          stroke-width="0.4"
        />
        <Path
          d="M1202.128,744.966a.319.319,0,0,0-.318.319v.817a.319.319,0,0,0,.319.319h0a.319.319,0,0,0,.319-.319v-.817a.319.319,0,0,0-.318-.319Z"
          transform="translate(-985.109 -729.406)"
          fill={tint}
          stroke={tint}
          stroke-width="0.4"
        />
        <Path
          d="M1453.839,494.081h-.817a.319.319,0,1,0,0,.637h.817a.319.319,0,1,0,0-.637Z"
          transform="translate(-1233.447 -481.077)"
          fill={tint}
          stroke={tint}
          stroke-width="0.4"
        />
      </G>
    </Svg>
  );
}
function Plug({ tint = "#707070" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="28.696"
      height="28.494"
      viewBox="0 0 10.696 18.494"
    >
      <Path
        d="M18.1,6.149h-.65V2.25h-1.3v3.9h-3.9V2.25h-1.3v3.9H10.3A1.3,1.3,0,0,0,9,7.448v3.9A5.2,5.2,0,0,0,13.548,16.5v3.944h1.3V16.5A5.2,5.2,0,0,0,19.4,11.347v-3.9A1.3,1.3,0,0,0,18.1,6.149Zm0,5.2a3.9,3.9,0,1,1-7.8,0v-3.9h7.8Z"
        transform="translate(-8.85 -2.1)"
        fill={tint}
        stroke-width="0.3"
      />
    </Svg>
  );
}
function Bulb({ tint = "#707070" }) {
  return (
    <Svg
      style={{ alignSelf: "center" }}
      xmlns="http://www.w3.org/2000/svg"
      width="30.667"
      height="30.869"
      viewBox="0 0 12.667 18.869"
    >
      <G transform="translate(-3.187 -0.374)">
        <Path
          d="M11.382,14.772v-.931c0-1.125,1.223-2.188,2.016-2.947A5.612,5.612,0,0,0,15.1,6.707a5.583,5.583,0,1,0-11.167,0,5.748,5.748,0,0,0,1.706,4.187c.788.744,2.016,1.811,2.016,2.947v.931"
          fill="none"
          stroke={tint}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <Path
          d="M7.875,16.875h2.481"
          transform="translate(0.405 1.619)"
          fill="none"
          stroke={tint}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <Path
          d="M7.313,15.188h3.722"
          transform="translate(0.347 1.445)"
          fill="none"
          stroke={tint}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <Path
          d="M9,13.962V9"
          transform="translate(0.52 0.809)"
          fill="none"
          stroke={tint}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <Path
          d="M10.611,8.438a3.222,3.222,0,0,1-1.473.621,3.222,3.222,0,0,1-1.473-.621"
          transform="translate(0.383 0.752)"
          fill="none"
          stroke={tint}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
      </G>
    </Svg>
  );
}

function Fan({ tint = "#707070" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30.497"
      height="30.495"
      viewBox="0 0 18.497 18.495"
    >
      <G transform="translate(0.155 0.149)">
        <Path
          d="M16.5,5.645l-.029-.012c-.651-.249-1.328.278-2.184.947A11.436,11.436,0,0,1,11.72,8.217c-.009-.027-.021-.054-.031-.081-.016-.043-.031-.087-.049-.129-.032-.076-.069-.151-.108-.224l-.017-.03c-.036-.066-.075-.13-.117-.192l-.025-.036c-.025-.036-.049-.073-.076-.108,1.5-1.94,1.939-3.9,1.253-5.7A3.251,3.251,0,0,0,9.424,0C8.009-.036,6.22.47,5.64,1.691l-.012.029c-.25.652.279,1.328.947,2.184A11.45,11.45,0,0,1,8.211,6.468c-.031.01-.061.023-.092.035s-.08.028-.118.045c-.077.033-.152.07-.226.109l-.027.016q-.1.055-.195.118l-.036.025c-.037.025-.074.049-.109.076-1.939-1.5-3.9-1.935-5.7-1.25A3.251,3.251,0,0,0,0,8.769c-.044,1.415.465,3.2,1.687,3.783l.029.013c.652.249,1.328-.279,2.184-.947A11.456,11.456,0,0,1,6.461,9.983c.009.027.02.053.03.08.016.043.031.087.049.129.033.077.069.152.109.226l.008.015q.059.107.127.208l.019.027c.027.04.054.08.084.119-1.5,1.938-1.934,3.9-1.249,5.7a3.251,3.251,0,0,0,3.126,1.71l.17,0c1.386,0,3.056-.516,3.613-1.689,0-.01.009-.019.013-.029.249-.652-.279-1.328-.947-2.184a11.443,11.443,0,0,1-1.636-2.567c.029-.01.056-.022.085-.032s.082-.029.122-.046c.077-.033.152-.069.226-.109l.016-.009c.07-.038.139-.08.206-.125l.032-.022c.039-.027.078-.052.115-.081,1.94,1.5,3.9,1.938,5.7,1.253a3.251,3.251,0,0,0,1.71-3.126C18.232,8.013,17.723,6.225,16.5,5.645Zm-6.166,4.973c-.043.036-.089.069-.135.1l-.032.021q-.056.037-.114.069L10,10.838c-.03.016-.061.03-.092.044s-.052.024-.078.035l-.011,0a1.97,1.97,0,0,1-.446.119h0a1.936,1.936,0,0,1-1.8-.692l-.006-.007c-.035-.043-.068-.088-.1-.133l-.021-.033c-.024-.037-.047-.075-.069-.113l-.029-.052c-.016-.03-.03-.061-.044-.092s-.024-.051-.035-.078l-.007-.018a1.972,1.972,0,0,1-.117-.441v0a1.937,1.937,0,0,1,.692-1.8l.008-.007c.042-.035.087-.068.132-.1l.035-.023c.036-.024.074-.046.112-.068l.054-.03c.03-.016.061-.03.091-.044s.052-.024.078-.035l.032-.012a1.974,1.974,0,0,1,.429-.112h0a1.935,1.935,0,0,1,1.791.692l.009.012q.051.062.1.128l.025.038c.023.035.045.071.065.108.011.019.021.038.032.057s.028.058.042.087.026.054.037.082l.008.021a1.98,1.98,0,0,1,.115.437v0a1.935,1.935,0,0,1-.693,1.793ZM7.213,3.406c-.422-.541-.9-1.152-.833-1.386C6.744,1.288,8.033.769,9.4.813a2.594,2.594,0,0,1,2.4,1.2A5.048,5.048,0,0,1,10.71,6.851a2.756,2.756,0,0,0-1.62-.526c-.023,0-.045,0-.068,0A11.706,11.706,0,0,0,7.213,3.406ZM3.4,10.98c-.541.422-1.152.9-1.386.833C1.284,11.449.766,10.158.808,8.794A2.6,2.6,0,0,1,2,6.4,5.045,5.045,0,0,1,6.842,7.48,2.756,2.756,0,0,0,6.316,9.1c0,.025,0,.049,0,.073A11.708,11.708,0,0,0,3.4,10.98Zm7.573,3.811c.422.541.9,1.152.833,1.386-.364.732-1.657,1.246-3.019,1.207a2.6,2.6,0,0,1-2.4-1.2,5.046,5.046,0,0,1,1.084-4.838,2.756,2.756,0,0,0,1.614.523c.026,0,.051,0,.076,0A11.7,11.7,0,0,0,10.975,14.791ZM17.38,9.4a2.6,2.6,0,0,1-1.2,2.4,5.049,5.049,0,0,1-4.843-1.087A2.756,2.756,0,0,0,11.865,9.1c0-.024,0-.047,0-.071a11.694,11.694,0,0,0,2.925-1.81c.541-.422,1.156-.9,1.386-.833C16.9,6.748,17.423,8.04,17.38,9.4Z"
          transform="translate(0 0)"
          fill={tint}
          stroke-width="0.3"
        />
        <Circle
          cx="0.988"
          cy="0.988"
          r="0.988"
          transform="translate(8.102 8.11)"
          fill={tint}
          stroke-width="0.3"
        />
      </G>
    </Svg>
  );
}

function Light({ tint = "#707070" }) {
  return (
    <Svg
      style={{ alignSelf: "center" }}
      xmlns="http://www.w3.org/2000/svg"
      width="30.549"
      height="30.594"
      viewBox="0 0 14.549 18.594"
    >
      <G transform="translate(-206.361 -7.853)">
        <Path
          d="M217.741,24.011H215.6a2.587,2.587,0,0,0-2.481-2.118l-4.511-4.511a1.132,1.132,0,0,0,.017-1.327l3.783-3.783a3.957,3.957,0,0,0,1.125,3.274.319.319,0,0,0,.451,0l1.289-1.289h0a1.952,1.952,0,1,0,2.761-2.761h0l1.079-1.079a.319.319,0,0,0,0-.451,3.919,3.919,0,0,0-2.789-1.155,3.98,3.98,0,0,0-1.473.284l-.74-.74a1.038,1.038,0,0,0-1.468,0l-.721.721a1.039,1.039,0,0,0,0,1.468l.656.656-4.454,4.454a1.135,1.135,0,1,0-.029,2.114l4.2,4.2a2.548,2.548,0,0,0-1.931,2.037h-2.14a.319.319,0,0,0-.319.319v1.6a.319.319,0,0,0,.319.319h9.513a.319.319,0,0,0,.319-.319v-1.6A.318.318,0,0,0,217.741,24.011Zm-.157-12.063a1.315,1.315,0,0,1-1.86,1.86h0l1.86-1.86Zm-5.211-1.853a.4.4,0,0,1,0-.567l.72-.721a.4.4,0,0,1,.567,0l.884.884.009.009a.319.319,0,0,0,.361.063,3.331,3.331,0,0,1,1.409-.314,3.282,3.282,0,0,1,2.1.754l-4.656,4.656a3.318,3.318,0,0,1-.44-3.512.319.319,0,0,0-.063-.361l-.009-.009ZM207.2,16.706a.5.5,0,1,1,.5.5A.5.5,0,0,1,207.2,16.706Zm5.786,5.82a1.973,1.973,0,0,1,1.969,1.484h-3.937A1.973,1.973,0,0,1,212.984,22.526Zm4.438,3.083h-8.876v-.961h8.876v.961Z"
          transform="translate(0)"
          fill={tint}
          stroke-width="0.4"
        />
        <Path
          d="M1372.53,664.35a.319.319,0,1,0-.45.451l.578.578a.319.319,0,0,0,.451-.451Z"
          transform="translate(-1153.553 -649.519)"
          fill={tint}
          stroke={tint}
          stroke-width="0.4"
        />
        <Path
          d="M1202.128,744.966a.319.319,0,0,0-.318.319v.817a.319.319,0,0,0,.319.319h0a.319.319,0,0,0,.319-.319v-.817a.319.319,0,0,0-.318-.319Z"
          transform="translate(-985.109 -729.406)"
          fill={tint}
          stroke={tint}
          stroke-width="0.4"
        />
        <Path
          d="M1453.839,494.081h-.817a.319.319,0,1,0,0,.637h.817a.319.319,0,1,0,0-.637Z"
          transform="translate(-1233.447 -481.077)"
          fill={tint}
          stroke={tint}
          stroke-width="0.4"
        />
      </G>
    </Svg>
  );
}

export function Switch({ tint = "#707070" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30.04"
      height="30.885"
      viewBox="0 0 14.04 14.885"
    >
      <G transform="translate(-2.894 -1.85)">
        <Path
          d="M13.184,6.458l-.5.87a5.533,5.533,0,1,1-5.533,0l-.5-.87a6.539,6.539,0,1,0,6.539,0Z"
          transform="translate(0 -2.326)"
          fill={tint}
          stroke-width="0.8"
        />
        <Path
          d="M16.875,2.25h1.006V9.292H16.875Z"
          transform="translate(-7.464 0)"
          fill={tint}
          stroke-width="0.8"
        />
      </G>
    </Svg>
  );
}
