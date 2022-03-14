import { useState, useEffect } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
// import useGetSetAsyncStorage from "./src/hooks/useGetSetAsyncStorage";
import Navigate from "./src/router/Router";
import settingsContext from "./src/context/settingsContext";
import colorThemeList from "./src/modules/Settings/components/BoardColors/colorThemeList";
import backgroundsList from "./src/modules/Settings/components/MenuBackground/backgroundsList";
import piecesList from "./src/modules/Settings/components/PiecesStyle/piecesList";

const BOARD_THEME_STORAGE_KEY = "boardTheme";
const MENU_BACKGROUND_STORAGE_KEY = "menuBackground";
const SET_PIECES_STORAGE_KEY = "setPieces";

export default function App() {
  // const { valueFromStorage, readItemFromStorage, writeItemToStorage } =
  // useGetSetAsyncStorage(STORAGE_KEY);

  const [pickedTheme, setPickedTheme] = useState("Bases");
  const [whiteColor, setWhiteColor] = useState("#F0D9B5");
  const [blackColor, setBlackColor] = useState("#B58863");
  const [borderColor, setBorderColor] = useState(null);
  const [mainBackgroundSRC, setMainBackgroundSRC] = useState(backgroundsList[0].backgroundSRC);
  const [pieces, setPieces] = useState(piecesList[0].id);
  const [pickedTimer, setPickedTimer] = useState(false);

  const { getItem, setItem } = useAsyncStorage(BOARD_THEME_STORAGE_KEY);

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
    if (theme) {
      setWhiteColor(theme.whiteCell);
      setBlackColor(theme.blackCell);
      setBorderColor(theme.borderCell);
    }
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
    <settingsContext.Provider
      value={{
        pickedTheme,
        setPickedTheme,
        whiteColor,
        blackColor,
        borderColor,
        mainBackgroundSRC,
        setMainBackgroundSRC,
        pieces,
        setPieces,
        pickedTimer,
        setPickedTimer,
      }}
    >
      <Navigate />
    </settingsContext.Provider>
  );
}
