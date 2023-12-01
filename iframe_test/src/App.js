import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

import Plot from "react-plotly.js";

import data from "./data.json"; // Update the path to where you've stored data.json
import layout from "./layout.json";

function App() {
  return (
    <div>
      <Plot data={data} layout={layout} />
    </div>
  );
}

export default App;
