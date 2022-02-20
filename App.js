import { useState } from "react";
import Navigate from "./Navigate";
import BoardThemeContext from "./src/context";

export default function App() {
  const [pickedTheme, setPickedTheme] = useState("Bases");

  return (
    <BoardThemeContext.Provider value={{ pickedTheme, setPickedTheme }}>
      <Navigate />
    </BoardThemeContext.Provider>
  );
}
