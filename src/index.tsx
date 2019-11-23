import * as React from "react";
import { render } from "react-dom";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <span>Ts here</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
