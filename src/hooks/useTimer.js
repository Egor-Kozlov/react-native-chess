import React, { useState, useEffect } from "react";

export default function (min = 0, sec = 0) {
  const [minutes, setMinutes] = useState(min);
  const [seconds, setSeconds] = useState(sec);
  const [isTimeOut, setIsTimeOut] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (!pause) {
      let interval;
      interval = setTimeout(function tick() {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            setIsTimeOut(true);
            clearInterval(interval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
        interval = setTimeout(tick, 1000);
      }, 1000);
      return () => {
        clearTimeout(interval);
      };
    }
    return;
  }, [pause, seconds]);

  return [minutes, seconds < 10 && seconds >= 0 ? `0${seconds}` : seconds, isTimeOut, setPause];
}
