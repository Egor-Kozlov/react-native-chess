//<-string like '1', '3|2'
export default function (pickedTimer) {
  const arr = pickedTimer.split(",");
  const minutes = +arr[0];
  const seconds = arr[1] ? +arr[1] : false;
  const result = {
    minutes: minutes,
    seconds: seconds,
  };
  return result;
}
