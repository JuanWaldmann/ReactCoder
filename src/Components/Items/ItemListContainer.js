import React from "react";
import ItemList from "../Productos/ItemList";

export const usuario = "Matias";
export const bienvenido =
  "Bienvenido " +
  usuario +
  " a nuestro E-commerce, por aqui debajo encontrarás nuestras mejores ofertas";

const ItemListContainer = () => {
  return (
    <>
      <h3 className="center">{bienvenido}</h3>

      <ItemList />
    </>
  );
};

export default ItemListContainer;
