import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScenesScreen from "../Screens/HomeScreen/AddScene/ScenesScreen";
import Home from "../Screens/HomeScreen/Home";
import AddMore from "../Screens/HomeScreen/AddMore";
import NotificationScreem from "../Screens/HomeScreen/Notification/NotificationScreen";
import ProfileScreen from "../Screens/HomeScreen/Profile/ProfileScreen";
import { G, Path, Svg } from "react-native-svg";
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
            backgroundColor: "#ECECEC",
          },
        };
      }}
      sceneContainerStyle={{
        backgroundColor: "white",
      }}
    >
      <Tab.Screen
        name="TabHome"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Svg
                style={{}}
                xmlns="http://www.w3.org/2000/svg"
                width="22.956"
                height="19.86"
                viewBox="0 0 22.956 19.86"
              >
                <Path
                  d="M12.85,2.405a.751.751,0,0,0-.931,0L1.125,10.826l.931,1.186,1.322-1.037v9.3a1.5,1.5,0,0,0,1.5,1.5H19.9a1.5,1.5,0,0,0,1.5-1.5V10.984l1.322,1.029.931-1.179Zm1.044,17.87h-3V14.266h3Zm1.5,0V14.266a1.5,1.5,0,0,0-1.5-1.5h-3a1.5,1.5,0,0,0-1.5,1.5v6.009H4.881V9.8l7.511-5.851L19.9,9.812V20.275Z"
                  transform="translate(-0.914 -2.067)"
                  fill="#707070"
                  stroke="#707070"
                  stroke-width="0.3"
                />
              </Svg>
            ) : (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="25.329"
                height="21.533"
                viewBox="0 0 25.329 21.533"
              >
                <Path
                  d="M10.144,21.533H3.8V11.389H0L12.635,0,25.329,11.389h-3.8V21.533H15.186V13.94H10.144Z"
                  fill="#1a8ae5"
                />
              </Svg>
            ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Scene Screen"
        component={ScenesScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="24.444"
                height="20"
                viewBox="0 0 24.444 20"
              >
                <Path
                  d="M25.444,17.444a1.111,1.111,0,0,1-1.111,1.111H2.111a1.111,1.111,0,1,1,0-2.222H24.333A1.111,1.111,0,0,1,25.444,17.444ZM19.889,23a1.111,1.111,0,1,0,0-2.222H6.556a1.111,1.111,0,1,0,0,2.222ZM7.667,13a1.111,1.111,0,0,0,2.222,0,3.333,3.333,0,1,1,6.667,0,1.111,1.111,0,0,0,2.222,0A5.556,5.556,0,1,0,7.667,13Zm4.444-7.778a1.111,1.111,0,1,0,2.222,0V4.111a1.111,1.111,0,1,0-2.222,0ZM19.889,13A1.111,1.111,0,0,0,21,14.111h1.111a1.111,1.111,0,1,0,0-2.222H21A1.111,1.111,0,0,0,19.889,13ZM4.333,11.889a1.111,1.111,0,1,0,0,2.222H5.444a1.111,1.111,0,1,0,0-2.222Zm1.818-5.96a1.111,1.111,0,0,0,0,1.571l.786.786A1.111,1.111,0,1,0,8.508,6.714l-.786-.785A1.111,1.111,0,0,0,6.151,5.929Zm12.571,0-.786.786a1.111,1.111,0,1,0,1.571,1.571l.785-.786a1.111,1.111,0,1,0-1.571-1.571Z"
                  transform="translate(-1 -3)"
                  fill="#707070"
                />
              </Svg>
            ) : (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.19"
                height="21.533"
                viewBox="0 0 23.19 21.533"
              >
                <Path
                  d="M15.828,6.141a.782.782,0,0,0,.828-.828V2.828a.828.828,0,0,0-1.656,0V5.313A.782.782,0,0,0,15.828,6.141Z"
                  transform="translate(-4.233 -2)"
                  fill="#1A8AE5"
                />
                <Path
                  d="M7.788,8.947a.8.8,0,0,0,1.159,0,.8.8,0,0,0,0-1.159L7.208,6.048A.82.82,0,0,0,6.048,7.208Z"
                  transform="translate(-2.653 -2.653)"
                  fill="#1A8AE5"
                />
                <Path
                  d="M2.828,16.656H5.313a.828.828,0,0,0,0-1.656H2.828a.828.828,0,0,0,0,1.656Z"
                  transform="translate(-2 -4.233)"
                  fill="#1A8AE5"
                />
                <Path
                  d="M25,15.828a.782.782,0,0,0,.828.828h2.485a.828.828,0,0,0,0-1.656H25.828A.782.782,0,0,0,25,15.828Z"
                  transform="translate(-5.951 -4.233)"
                  fill="#1A8AE5"
                />
                <Path
                  d="M22.928,9.2a.752.752,0,0,0,.58-.248l1.739-1.739a.82.82,0,0,0-1.159-1.159L22.348,7.788a.8.8,0,0,0,0,1.159A.752.752,0,0,0,22.928,9.2Z"
                  transform="translate(-5.453 -2.653)"
                  fill="#1A8AE5"
                />
                <Path
                  d="M8.663,17.441a.724.724,0,0,0,.745.5H19.843a.8.8,0,0,0,.745-.5,6.626,6.626,0,1,0-11.926,0Z"
                  transform="translate(-3.031 -3.031)"
                  fill="#1A8AE5"
                />
                <Path
                  d="M24.361,22H2.828a.828.828,0,1,0,0,1.656H24.361a.828.828,0,1,0,0-1.656Z"
                  transform="translate(-2 -5.436)"
                  fill="#1A8AE5"
                />
                <Path
                  d="M21.381,26H7.183C6.473,26,6,26.331,6,26.828s.473.828,1.183.828h14.2c.71,0,1.183-.331,1.183-.828S22.091,26,21.381,26Z"
                  transform="translate(-2.687 -6.123)"
                  fill="#1A8AE5"
                />
              </Svg>
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
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.816"
                height="19.834"
                viewBox="0 0 17.816 19.834"
              >
                <Path
                  d="M20.685,14.125l-1.819-1.819v-3.1A6.783,6.783,0,0,0,12.8,2.472V1.125H11.457V2.472A6.837,6.837,0,0,0,5.395,9.208v3.1L3.576,14.125a.613.613,0,0,0-.2.471v2.021a.633.633,0,0,0,.674.674H8.763a3.368,3.368,0,1,0,6.736,0h4.715a.633.633,0,0,0,.674-.674V14.6A.613.613,0,0,0,20.685,14.125ZM12.13,19.311A2.021,2.021,0,0,1,10.11,17.29h4.041A2.021,2.021,0,0,1,12.13,19.311Zm7.409-3.368H4.721V14.866L6.54,13.047a.613.613,0,0,0,.2-.471V9.208a5.388,5.388,0,0,1,10.777,0v3.368a.613.613,0,0,0,.2.471l1.819,1.819Z"
                  transform="translate(-3.222 -0.975)"
                  fill="#707070"
                  stroke="#707070"
                  stroke-width="0.3"
                />
              </Svg>
            ) : (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.515"
                height="19.533"
                viewBox="0 0 17.515 19.533"
              >
                <Path
                  d="M20.685,14.125l-1.819-1.819v-3.1A6.783,6.783,0,0,0,12.8,2.472V1.125H11.457V2.472A6.837,6.837,0,0,0,5.395,9.208v3.1L3.576,14.125a.613.613,0,0,0-.2.471v2.021a.633.633,0,0,0,.674.674H8.763a3.368,3.368,0,0,0,6.736,0h4.715a.633.633,0,0,0,.674-.674V14.6A.613.613,0,0,0,20.685,14.125ZM12.13,19.311A2.021,2.021,0,0,1,10.11,17.29h4.041A2.021,2.021,0,0,1,12.13,19.311Z"
                  transform="translate(-3.373 -1.125)"
                  fill="#1A8AE5"
                />
              </Svg>
            ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="14.252"
                height="19.834"
                viewBox="0 0 14.252 19.834"
              >
                <G transform="translate(0.15 0.15)">
                  <Path
                    d="M15.008,3.645A3.488,3.488,0,1,1,11.52,7.133a3.488,3.488,0,0,1,3.488-3.488m0-1.4a4.883,4.883,0,1,0,4.883,4.883A4.883,4.883,0,0,0,15.008,2.25Z"
                    transform="translate(-8.032 -2.25)"
                    fill="#707070"
                    stroke="#707070"
                    stroke-width="0.3"
                  />
                  <Path
                    d="M20.7,28.622h-1.4V25.133a3.488,3.488,0,0,0-3.488-3.488H11.633a3.488,3.488,0,0,0-3.488,3.488v3.488H6.75V25.133a4.883,4.883,0,0,1,4.883-4.883h4.186A4.883,4.883,0,0,1,20.7,25.133Z"
                    transform="translate(-6.75 -9.088)"
                    fill="#707070"
                    stroke="#707070"
                    stroke-width="0.3"
                  />
                </G>
              </Svg>
            ) : (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="15.381"
                height="21.533"
                viewBox="0 0 15.381 21.533"
              >
                <Path
                  d="M6.75,29.479H22.131V25.633a5.389,5.389,0,0,0-5.383-5.383H12.133A5.389,5.389,0,0,0,6.75,25.633Z"
                  transform="translate(-6.75 -7.945)"
                  fill="#1A8AE5"
                />
                <Path
                  d="M10.125,7.633A5.383,5.383,0,1,0,15.508,2.25a5.383,5.383,0,0,0-5.383,5.383Z"
                  transform="translate(-7.818 -2.25)"
                  fill="#1A8AE5"
                />
              </Svg>
            ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
