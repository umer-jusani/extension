import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);


  const handleApplyClick = () => {
    // Send the message to the content script to start the apply process
    window.postMessage({ type: "START_APPLY" }, "*");
  };

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Jobbee</h1>
      <button className="btn" onClick={handleApplyClick}>Start Applying Job</button>
    </>
  );
}

export default App;
