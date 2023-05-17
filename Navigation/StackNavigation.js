import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import GetStarted from "../Screens/Get-Started";
import LoginScreen from "../Screens/Authentication/LoginScreen";
import ForgotPassword from "../Screens/Authentication/ForgotPassword";
import ForgotOtp from "../Screens/Authentication/ForgotOtp";
import ResetPassword from "../Screens/Authentication/ResetPassword";
import LoginWithPhone from "../Screens/Authentication/LoginWithPhone";
import OtpScreen from "../Screens/Authentication/OtpScreen";
import Select_Room from "../Screens/Add_Devices/Select_Room";
import ButtomNav from "./ButtomNavigation";
import Add_Device_Authentication from "../Screens/Add_Devices/Add_Device_Authentication";
import Light_Reset from "../Screens/Add_Devices/Light_Reset";
import Light_Awaiting from "../Screens/Add_Devices/Light_Awaiting";
import Add_Light_Success from "../Screens/Add_Devices/Add_Light_Success";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"GetStarted"}
        component={GetStarted}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"LoginScreen"}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"ForgotScreem"}
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"ForgotOtpScreen"}
        component={ForgotOtp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"ResetPassword"}
        component={ResetPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"LoginWithPhone"}
        component={LoginWithPhone}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"OtpScreen"}
        component={OtpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Home"}
        component={ButtomNav}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name={"Select_Device"}
        component={Select_Room}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Add_Device_Authentication"}
        component={Add_Device_Authentication}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Light_Reset"}
        component={Light_Reset}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Light_Awaiting"}
        component={Light_Awaiting}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Add_Light_Success"}
        component={Add_Light_Success}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}
