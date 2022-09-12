import React from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import ItemCount from "../Items/ItemCount";
import ItemList from "../Productos/ItemList";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={bienvenido} />
    </>
  );
}
const usuario = "Matias Ponce";

const bienvenido =
  "Bienvenido " +
  usuario +
  " a nuestro E-commerce, por aqui debajo encontrarás nuestras mejores ofertas";

const ItemListContainer = () => {
  return (
    <>
      <h3 className="center">{bienvenido}</h3>
      <div className="center">
        <ItemList />
      </div>
      <ItemCount />
    </>
  );
};

export default App;
