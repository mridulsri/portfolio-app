import React, { useState, useEffect } from 'react';

function LiveClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array = run once on mount

  return <p>⏰ Current Time: {time}</p>;
}

export default LiveClock;
