import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Interval_Time from "../Screens/Kitchen/Interval_Time/Interval_Time";
import Interval_Time_adding from "../Screens/Kitchen/Interval_Time/Interval_Time_adding";
const Stack = createNativeStackNavigator();

export default function Interval_Time_Navigation({ onBackPress }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Interval_Time"}
        component={Interval_Time}
        options={{ headerShown: false }}
        initialParams={{
          onBackPress,
        }}
      />
      <Stack.Screen
        name={"Interval_Time_adding"}
        component={Interval_Time_adding}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
