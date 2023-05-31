import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Select_Room from "../Screens/Add_Devices/Select_Room";
import Add_Device_Authentication from "../Screens/Add_Devices/Add_Device_Authentication";
import Light_Reset from "../Screens/Add_Devices/Light_Reset";
import Light_Awaiting from "../Screens/Add_Devices/Light_Awaiting";
import Add_Light_Success from "../Screens/Add_Devices/Add_Light_Success";
import Device_Authentication from "../Screens/Add_Devices/Fan/Device_Authentication";
import Fan_Reset from "../Screens/Add_Devices/Fan/Fan_Reset";
import Fan_Awaiting from "../Screens/Add_Devices/Fan/Fan_Awaiting";
import Fan_Success from "../Screens/Add_Devices/Fan/Fan_Success";
import Switch_Reset from "../Screens/Add_Devices/Switch/Switch_Reset";
import Switch_Device_Authentication from "../Screens/Add_Devices/Switch/Switch_Device_Authentication";
import Switch_Awaiting from "../Screens/Add_Devices/Switch/Switch_Awaiting";
import Switch_Success from "../Screens/Add_Devices/Switch/Switch_Success";
import Bulb_Device_Authentication from "../Screens/Add_Devices/Bulb/Bulb_Device_Authentication";
import Bulb_Reset from "../Screens/Add_Devices/Bulb/Bulb_Reset";
import Bulb_Awaiting from "../Screens/Add_Devices/Bulb/Bulb_Awaiting";
import Bulb_Success from "../Screens/Add_Devices/Bulb/Bulb_Success";
import Plug_Device_Authentication from "../Screens/Add_Devices/Plug/Plug_Device_Authentication";
import Plug_Reset from "../Screens/Add_Devices/Plug/Plug_Reset";
import Plug_Awaiting from "../Screens/Add_Devices/Plug/Plug_Awaiting";
import Plug_Success from "../Screens/Add_Devices/Plug/Plug_Success";
import Light_1_Device_Authentication from "../Screens/Add_Devices/Light_1.js/Light_1_Device_Authentication";
import Light_1_Reset from "../Screens/Add_Devices/Light_1.js/Light_1_Reset";
import Light_1_Awaiting from "../Screens/Add_Devices/Light_1.js/Light_1_Awaiting";
import Light_1_Success from "../Screens/Add_Devices/Light_1.js/Light_1_Success";
import Add_Room from "../Screens/Add_Room/Add_Room";
import Choice_Icon from "../Screens/Add_Room/Choice_Icon";
import Add_Room_Success from "../Screens/Add_Room/Add_Room_Success";
import Add_Scene from "../Screens/Add_Scenes/Add_Scene";
import Choose_Icon from "../Screens/Add_Scenes/Choose_Icon";
import Selected_Room from "../Screens/Add_Scenes/Select_Room/Selected_Room";
import Selected_Device from "../Screens/Add_Scenes/Select_Device/Selected_Device";
import Selected_Action from "../Screens/Add_Scenes/Add Action/Selected_Action";
import Selected_Kitchen_Device from "../Screens/Add_Scenes/Select_Device/Selected_Kitchen_Device";
import AddMorenavigation from "./AddMorenavigation";
import Morning_Scene from "../Screens/HomeScreen/AddScene/Morning_Scene";
import Edit_Profile from "../Screens/HomeScreen/Profile/Edit_Profile";
import Edit_Devices from "../Screens/HomeScreen/Profile/Edit_Devices";
import Edit_Rooms from "../Screens/HomeScreen/Profile/Edit_Rooms";
import Selected_Edit_Room from "../Screens/HomeScreen/Profile/Selected_Edit_Room";
import Edit_Room_Choose_Icon from "../Screens/HomeScreen/Profile/Edit_Room_Choose_Icon";
import Success_Action from "../Screens/Add_Scenes/Success_Action";
import Home from "../Screens/HomeScreen/Home";
const Stack = createNativeStackNavigator();
export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"HomeScreen"}
        component={Home}
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
      <Stack.Screen
        name={"Fan_Device_Authentication"}
        component={Device_Authentication}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Fan_Reset"}
        component={Fan_Reset}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Fan_Awaiting"}
        component={Fan_Awaiting}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Fan_Success"}
        component={Fan_Success}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Switch_Device_Authentication"}
        component={Switch_Device_Authentication}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Switch_Reset"}
        component={Switch_Reset}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Switch_Awaiting"}
        component={Switch_Awaiting}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Switch_Success"}
        component={Switch_Success}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Bulb_Device_Authentication"}
        component={Bulb_Device_Authentication}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Bulb_Reset"}
        component={Bulb_Reset}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Bulb_Awaiting"}
        component={Bulb_Awaiting}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Bulb_Success"}
        component={Bulb_Success}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Plug_Device_Authentication"}
        component={Plug_Device_Authentication}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Plug_Reset"}
        component={Plug_Reset}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Plug_Awaiting"}
        component={Plug_Awaiting}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"CustomNavigation"}
        component={AddMorenavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Plug_Success"}
        component={Plug_Success}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Light_1_Device_Authentication"}
        component={Light_1_Device_Authentication}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Light_1_Reset"}
        component={Light_1_Reset}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Light_1_Awaiting"}
        component={Light_1_Awaiting}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Light_1_Success"}
        component={Light_1_Success}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Add_Room"}
        component={Add_Room}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Choice_Icon"}
        component={Choice_Icon}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Add_Room_Success"}
        component={Add_Room_Success}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Add_Scene"}
        component={Add_Scene}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Choose_Icon"}
        component={Choose_Icon}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Selected_Room"}
        component={Selected_Room}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Selected_Device"}
        component={Selected_Device}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Selected_Action"}
        component={Selected_Action}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Selected_Kitchen_Device"}
        component={Selected_Kitchen_Device}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Morning_Scene"}
        component={Morning_Scene}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Edit_Profile"}
        component={Edit_Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Edit_Devices"}
        component={Edit_Devices}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Edit_Rooms"}
        component={Edit_Rooms}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Selected_Edit_Room"}
        component={Selected_Edit_Room}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Edit_Room_Choose_Icon"}
        component={Edit_Room_Choose_Icon}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Success_Action"}
        component={Success_Action}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
}

