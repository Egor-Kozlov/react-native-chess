import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Menu from "./src/components/Menu";
import PassPlay from "./src/components/PlayScreen";
import Settings from "./src/components/Settings";
import COMPONENTS_LIST from "./src/components/COMPONENTS_LIST";
import MenuBackground from "./src/components/Settings/components/MenuBackground";
import PiecesStyle from "./src/components/Settings/components/PiecesStyle";
import BoardColors from "./src/components/Settings/components/BoardColors";

const Stack = createNativeStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={COMPONENTS_LIST.Menu}
          component={Menu}
          options={{
            title: "Menu",
            headerTintColor: "black",
            headerShown: false,
          }}
        />
        <Stack.Screen name={COMPONENTS_LIST.PassPlay} component={PassPlay} options={{ title: "Pass Play", headerTintColor: "black" }} />
        <Stack.Screen name={COMPONENTS_LIST.PassAFriend} component={PassPlay} options={{ title: "Play A Friend", headerTintColor: "black" }} />
        <Stack.Screen name={COMPONENTS_LIST.Settings} component={Settings} options={{ title: "Settings", headerTintColor: "black" }} />
        <Stack.Screen
          name={COMPONENTS_LIST.MenuBackground}
          component={MenuBackground}
          options={{ title: "Menu background", headerTintColor: "black" }}
        />
        <Stack.Screen name={COMPONENTS_LIST.PiecesStyle} component={PiecesStyle} options={{ title: "Pieces style", headerTintColor: "black" }} />
        <Stack.Screen name={COMPONENTS_LIST.BoardColors} component={BoardColors} options={{ title: "Board Colors", headerTintColor: "black" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
