import React from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import {bienvenido} from "../Items/ItemListContainer"
import ItemListContainer from "../Items/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={bienvenido} />
    </>
  );
}
export default App;
