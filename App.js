import { useState, useEffect } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import Navigate from "./Navigate";
import BoardThemeContext from "./src/BoardThemeContext";
import colorThemeList from "./src/components/Settings/components/BoardColors/colorThemeList";

const STORAGE_KEY = "boardTheme";

export default function App() {
  const [pickedTheme, setPickedTheme] = useState("Bases");
  const [whiteColor, setWhiteColor] = useState("#F0D9B5");
  const [blackColor, setBlackColor] = useState("#B58863");
  const [borderColor, setBorderColor] = useState(null);

  const { getItem, setItem } = useAsyncStorage(STORAGE_KEY);

  const readItemFromStorage = async () => {
    const jsonValue = await getItem();
    jsonValue != null ? setPickedTheme(JSON.parse(jsonValue)) : null;
  };

  const writeItemToStorage = async (newValue) => {
    const jsonValue = JSON.stringify(newValue);
    await setItem(jsonValue);
  };

  const setCellColors = (themeName, colorThemeList) => {
    const themeList = [...colorThemeList];
    const theme = themeList.find((item) => item.title === themeName);
    setWhiteColor(theme.whiteCell);
    setBlackColor(theme.blackCell);
    setBorderColor(theme.borderCell);
    console.log("whiteColor: ", whiteColor);
    console.log("blackColor: ", blackColor);
  };

  useEffect(() => {
    readItemFromStorage();
    setCellColors(pickedTheme, colorThemeList);
  }, []);

  useEffect(() => {
    writeItemToStorage(pickedTheme);
    setCellColors(pickedTheme, colorThemeList);
  }, [pickedTheme]);

  return (
    <BoardThemeContext.Provider value={{ pickedTheme, setPickedTheme, whiteColor, blackColor, borderColor }}>
      <Navigate />
    </BoardThemeContext.Provider>
  );
}
