import React from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import {bienvenido} from "../Items/ItemListContainer"
import ItemListContainer from "../Items/ItemListContainer";
import ItemDetailContainer from "../Items/ItemDetailContainer";


function App() {
  return (
    <>
      <NavBar />
      <ItemDetailContainer />
      <ItemListContainer greeting={bienvenido} />
    </>
  );
}
export default App;
