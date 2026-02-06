import { useEffect, useState } from "react";
import "./App.css";
import "./Componets/Clock.css";

function App() {
  const [crunnettime, setcrunnettime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setcrunnettime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeconveter = (houre) => {
    return houre === 0 ? 12 : houre > 12 ? houre - 12 : houre;
  };

  const addzero = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const addmore = (day) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return day.toLocaleDateString(undefined, options);
  };
  return (
    <>
      <div className="container">
        <h1>Clock</h1>
        <p className="time">
          {addzero(timeconveter(crunnettime.getHours()))}:
          {addzero(crunnettime.getMinutes())}:
          {addzero(crunnettime.getSeconds())}
        </p>

        <p className="days">{addmore(crunnettime)}</p>
      </div>
    </>
  );
}

export default App;
