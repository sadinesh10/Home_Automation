import React from 'react'
import { Text } from 'react-native'
import Select_Room from './Select_Room'
import Add_Device_Authentication from './Add_Device_Authentication'
import Light_Reset from './Light_Reset'
import Light_Awaiting from './Light_Awaiting'
import Fan_Reset from './Fan_Reset'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

function Add_Device() {
  return (
    //<Select_Room/>
    // <Add_Device_Authentication/>
    //<Light_Reset/>
    // <Light_Awaiting/>
    // <Add_Light_Scucess/>
    <Stack.Navigator>
      <Stack.Screen
        name={"Select_Device"}
        component={Select_Room}
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
    </Stack.Navigator>
  )
}

export default Add_Device