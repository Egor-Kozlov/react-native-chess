import React, { useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export default function useGetSetAsyncStorage(STORAGE_KEY) {
  const { getItem, setItem } = useAsyncStorage(STORAGE_KEY);
  const [valueFromStorage, setValueFromStorage] = useState();

  const readItemFromStorage = async () => {
    const jsonValue = await getItem();
    jsonValue != null ? setValueFromStorage(JSON.parse(jsonValue)) : null;
    return valueFromStorage;
  };

  const writeItemToStorage = async (newValue) => {
    const jsonValue = JSON.stringify(newValue);
    await setItem(jsonValue);
  };

  return { readItemFromStorage, writeItemToStorage };
}
