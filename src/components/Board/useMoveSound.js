import React, { useEffect, useState } from "react";
import { Audio } from "expo-av";

export default function useMoveSound() {
  const [sound, setSound] = useState();

  async function playMoveSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(require("../../../assets/sounds/chess-move.mp3"));
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return [playMoveSound];
}
