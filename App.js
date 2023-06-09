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
import StackNavigation from "./Navigation/LoginNavigation";
import Home from "./Screens/HomeScreen/Home";
import ButtomNav from "./Navigation/ButtomNavigation";
import Switch from "./Screens/HomeScreen/Switch";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Switch_Reset from "./Screens/Add_Devices/Switch/Switch_Reset";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import Selected_Kitchen_Device from "./Screens/Add_Scenes/Select_Device/Selected_Kitchen_Device";
import Living_Room_Home_Screen from "./Screens/Living_Room/Living_Room_Home_Screen";
import Schedules_List from "./Screens/Living_Room/Schedule/Schedules_List";
import Kitchen_Home_Screen from "./Screens/Kitchen/Kitchen_Home_Screen";
import LoginNavigation from "./Navigation/LoginNavigation";
import CustomSlider from "./Screens/Living_Room/CustomSlider";
import RGB_Custom_Slider from "./Screens/Living_Room/RGB_Custom_Slider";
import Brightness from "./Screens/Living_Room/Brightness";


export default function App() {
  return (
    <Provider store={Store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <NavigationContainer>
            {/* <Add_Device/> */}
            {/* <Switch/> */}
            {/* <ButtomNav /> */}
            {/* <CustomSlider/> */}
            {/* <Home/> */}
            {/* <Switch_Reset/> */}
            {/* <Selected_Kitchen_Device/> */}
            {/* <Living_Room_Home_Screen/> */}
            {/* <Schedules_List/> */}
            {/* <Kitchen_Home_Screen/> */}
            <LoginNavigation/>
            {/* <CustomSlider/> */}
            {/* <RGB_Custom_Slider/> */}
            <StatusBar
              translucent={false}
              style="auto"
              backgroundColor="white"
            />
          </NavigationContainer>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </Provider>
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
