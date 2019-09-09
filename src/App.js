import React from "react";
import "./App.css";
import GridCard from "./components/GridCard";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faCoffee,
  faCoins,
  faCheckSquare,
  faAddressCard,
  faBalanceScaleLeft
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCoins,
  faCoffee,
  faCheckSquare,
  faAddressCard,
  faBalanceScaleLeft
);

function App() {
  return (
    <div className="App">
      <GridCard />
    </div>
  );
}

export default App;
