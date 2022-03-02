import React, { useState, useEffect } from "react";

export default function (min = 0, sec = 0) {
  const [minutes, setMinutes] = useState(min);
  const [seconds, setSeconds] = useState(sec);
  const [isTimeOut, setIsTimeOut] = useState(false);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          setIsTimeOut(true);
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return [minutes, seconds < 10 && seconds >= 0 ? `0${seconds}` : seconds, isTimeOut];
}
