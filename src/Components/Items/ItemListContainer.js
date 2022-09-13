import React from "react";
import ItemCount from "../Items/ItemCount";
import ItemList from "../Productos/ItemList";

export const usuario = "Matias Ponce"; 
export const bienvenido =
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

export default ItemListContainer;
