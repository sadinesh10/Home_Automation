import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GetStarted from "./Screens/Get-Started";
import LoginScreen from "./Screens/Authentication/LoginScreen";
import LoginWithPhone from "./Screens/Authentication/LoginWithPhone";
import OtpScreen from "./Screens/Authentication/OtpScreen";
import ResetPassword from "./Screens/Authentication/ResetPassword";
import ForgotPassword from "./Screens/Authentication/ForgotPassword";
import ForgotOtp from "./Screens/Authentication/ForgotOtp";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./Navigation/StackNavigation";
import Home from "./Screens/HomeScreen/Home";
import CustomSlider from "./Screens/HomeScreen/CustomSlider";
import ButtomNav from "./Navigation/ButtomNavigation";
import Switch from "./Screens/HomeScreen/Switch";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Add_Device from "./Screens/Add_Devices/Add_Device";

export default function App() {
  return (
    <GestureHandlerRootView  style={{ flex: 1, }}>
      <BottomSheetModalProvider>
        <NavigationContainer>
          {/* <Add_Device/> */}
          {/* <Switch/> */}
          {/* <ButtomNav /> */}
          {/* <CustomSlider/> */}
          {/* <Home/> */}
          <StackNavigation/>
          <StatusBar translucent={false} style="auto" backgroundColor="white" />
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
