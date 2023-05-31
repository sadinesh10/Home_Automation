import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import GetStarted from "../Screens/Get-Started";
import LoginScreen from "../Screens/Authentication/LoginScreen";
import ForgotPassword from "../Screens/Authentication/ForgotPassword";
import ForgotOtp from "../Screens/Authentication/ForgotOtp";
import ResetPassword from "../Screens/Authentication/ResetPassword";
import LoginWithPhone from "../Screens/Authentication/LoginWithPhone";
import OtpScreen from "../Screens/Authentication/OtpScreen";
import ButtomNav from "./ButtomNavigation";
import Living_Room_Home_Screen from "../Screens/Living_Room/Living_Room_Home_Screen";
import Kitchen_Home_Screen from "../Screens/Kitchen/Kitchen_Home_Screen";
import Change_Success from "../Screens/Living_Room/Setttings/Change_Success";
import Add_Schedule from "../Screens/Living_Room/Schedule/Add_Schedule";
import Schedules_List from "../Screens/Living_Room/Schedule/Schedules_List";
import Interval_Time_adding from "../Screens/Kitchen/Interval_Time/Interval_Time_adding";

const Stack = createNativeStackNavigator();

export default function LoginNavigation() {
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
        name={"Living Room"}
        component={Living_Room_Home_Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Kitchen"}
        component={Kitchen_Home_Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Change_Success"}
        component={Change_Success}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name={"Interval_Time_adding"}
        component={Interval_Time_adding}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
