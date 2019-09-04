import React from "react";
import MyCard from "./components/MyCard";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCheckSquare,
  faAddressCard
} from "@fortawesome/free-solid-svg-icons";

library.add(faCoffee, faCheckSquare, faAddressCard);

function App() {
  return (
    <div className="App">
      <MyCard />
    </div>
  );
}

export default App;
