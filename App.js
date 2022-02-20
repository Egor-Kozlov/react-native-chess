import { useState, useEffect } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import Navigate from "./Navigate";
import BoardThemeContext from "./src/context";

const STORAGE_KEY = "boardTheme";

export default function App() {
  const [pickedTheme, setPickedTheme] = useState("Bases");

  const { getItem, setItem } = useAsyncStorage(STORAGE_KEY);

  const readItemFromStorage = async () => {
    const jsonValue = await getItem();
    jsonValue != null ? setPickedTheme(JSON.parse(jsonValue)) : null;
  };

  const writeItemToStorage = async (newValue) => {
    const jsonValue = JSON.stringify(newValue);
    await setItem(jsonValue);
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  useEffect(() => {
    writeItemToStorage(pickedTheme);
  }, [pickedTheme]);

  return (
    <BoardThemeContext.Provider value={{ pickedTheme, setPickedTheme }}>
      <Navigate />
    </BoardThemeContext.Provider>
  );
}
