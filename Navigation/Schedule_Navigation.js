import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Add_Schedule from "../Screens/Living_Room/Schedule/Add_Schedule";
import Schedules_List from "../Screens/Living_Room/Schedule/Schedules_List";
const Stack = createNativeStackNavigator();

export default function Schedule_Navigation({ onBackPress }) {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name={"Schedules_List"}
        component={Schedules_List}
        options={{ headerShown: false }}
        initialParams={{
            onBackPress,
          }}
      />
      <Stack.Screen
        name={"Add_Schedule"}
        component={Add_Schedule}
        options={{ headerShown: false }}
        
      />
      
    </Stack.Navigator>
  );
}
