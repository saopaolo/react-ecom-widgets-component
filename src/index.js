import React from "react";
import ReactDOM from "react-dom";
import Badges from "./badges";
import Second from "./modal";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>React-Popup</h1>
      <Badges />
      <br />
      <hr />
      <h1>React-Modal</h1>
      <Second />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
