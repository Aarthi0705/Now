import React, { useState } from "react";
function App() {
  const time = new Date().toLocaleTimeString();
  console.log(time);
  const [tie, setTime] = useState(time);
  function updateTime() {
    const time = new Date().toLocaleTimeString();
    setTime(time);
  }
  setInterval(updateTime, 1);
  return (
    <div className="container">
      <h2>{tie}</h2>
      <button onClick={updateTime}>time</button>
    </div>
  );
}

export default App;
