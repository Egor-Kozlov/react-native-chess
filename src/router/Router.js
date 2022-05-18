import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Menu from "../pages/Menu/Menu";
import PassPlay from "../pages/PlayScreen";
import Settings from "../modules/Settings/Settings";
import COMPONENTS_LIST from "./componentList";
import MenuBackground from "../modules/Settings/components/MenuBackground/MenuBackground";
import PiecesStyle from "../modules/Settings/components/PiecesStyle/PiecesStyle";
import BoardColors from "../modules/Settings/components/BoardColors/BoardColors";

const Stack = createNativeStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTintColor: "black" }}>
        <Stack.Screen
          name={COMPONENTS_LIST.Menu}
          component={Menu}
          options={{
            title: "Menu",
            headerShown: false,
          }}
        />
        <Stack.Screen name={COMPONENTS_LIST.PassPlay} component={PassPlay} options={{ title: "Pass Play" }} />
        <Stack.Screen name={COMPONENTS_LIST.PassAFriend} component={PassPlay} options={{ title: "Play A Friend" }} />
        <Stack.Screen name={COMPONENTS_LIST.Settings} component={Settings} options={{ title: "Settings" }} />
        <Stack.Screen name={COMPONENTS_LIST.MenuBackground} component={MenuBackground} options={{ title: "Menu background" }} />
        <Stack.Screen name={COMPONENTS_LIST.PiecesStyle} component={PiecesStyle} options={{ title: "Pieces style" }} />
        <Stack.Screen name={COMPONENTS_LIST.BoardColors} component={BoardColors} options={{ title: "Board Colors" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
