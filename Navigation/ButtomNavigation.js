import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScenesScreen from "../Screens/HomeScreen/ScenesScreen";
import Home from "../Screens/HomeScreen/Home";
import AddMore from "../Screens/HomeScreen/AddMore";
import NotificationScreem from "../Screens/HomeScreen/NotificationScreen";
import ProfileScreen from "../Screens/HomeScreen/ProfileScreen";
import { Path, Svg } from "react-native-svg";
import { Image } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import AddMorenavigation from "./AddMorenavigation";
import { useIsFocused } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function ButtomNav() {
  const isFocused = useIsFocused(false);

  return (
    <Tab.Navigator
      screenOptions={() => {
        return {
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: 50,
            backgroundColor:"#ECECEC"
          },
        };
      }}
      sceneContainerStyle={{
        backgroundColor: "white",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Image
                style={{
                  width: 25,
                  height: 25,
                  marginLeft: 10,
                  marginTop: 20,
                  marginBottom: 20,
                  marginRight: 10,
                }}
                
                source={require("../assets/Unfilled/home.png")}
              ></Image>
                
            ) : (
              <Image
                style={{
                  width: 25,
                  height: 25,
                  marginLeft: 10,
                  marginTop: 20,
                  marginBottom: 20,
                  marginRight: 10,
                }}
                source={require("../assets/filled/home.png")}
              ></Image>
            ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Scene Screen"
        component={ScenesScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Image
                style={{
                  width: 25,
                  height: 25,
                  marginLeft: 10,
                  marginTop: 20,
                  marginBottom: 20,
                  marginRight: 10,
                }}
                
                source={require("../assets/Unfilled/sunrise-svgrepo-com.png")}
              ></Image>
                
            ) : (
              <Image
                style={{
                  width: 25,
                  height: 25,
                  marginLeft: 10,
                  marginTop: 20,
                  marginBottom: 20,
                  marginRight: 10,
                  tintColor:"#1A8AE5"
                }}
                source={require("../assets/filled/sunrise-sunset-day-sea-sun-svgrepo-com.png")}
              ></Image>
            ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Add More"
        component={AddMore}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => {
            return <AddMorenavigation />;
          },
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Notifications"
        component={NotificationScreem}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Image
                style={{
                  width: 25,
                  height: 25,
                  marginLeft: 10,
                  marginTop: 20,
                  marginBottom: 20,
                  marginRight: 10,
                }}
                
                source={require("../assets/Unfilled/notification.png")}
              ></Image>
                
            ) : (
              <Image
                style={{
                  width: 25,
                  height: 25,
                  marginLeft: 10,
                  marginTop: 20,
                  marginBottom: 20,
                  marginRight: 10,
                  tintColor:"#1A8AE5"

                }}
                source={require("../assets/filled/notification-filled.png")}
              ></Image>
            ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Image
                style={{
                  width: 20,
                  height: 25,
                  marginLeft: 10,
                  marginRight: 10,
                }}
                
                source={require("../assets/Unfilled/user.png")}
              ></Image>
                
            ) : (
              <Image
                style={{
                  width: 20,
                  height: 25,
                  marginLeft: 10,
                  marginTop: 20,
                  marginBottom: 20,
                  marginRight: 10,
                  tintColor:"#1A8AE5"

                }}
                source={require("../assets/filled/user-filled.png")}
              ></Image>
            ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
