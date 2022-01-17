import "./DigitalClock.scss";
import { useState, useEffect } from "react";

const DigitalClock = ({ clock }) => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="clock">
      <p>{clockState}</p>
    </div>
  );
};

export default DigitalClock;
