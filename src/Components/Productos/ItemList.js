import React, { useState, useEffect } from "react";
import { listaProductos } from "../../Constants/database";
import { Loading } from "../Loading";
import "./productos.css";
import Item from "./Item";

const ItemList = () => {
  const [productos, setProductos] = useState([]);

  /* FETCH */
  useEffect(() => {
    setTimeout(() => {
      setProductos(listaProductos);
    }, 3000);
  }, [productos]);

  /* RENDER */
  if (productos.length == 0) {
    return <Loading />;
  }
  return (
    <main>
      <div className="page-title">Productos</div>

      <div className="lista-productos">
        {productos.map((producto) => {
          return (
            <Item producto={producto} key={producto.id} />
          );
        })}
      </div>
    </main>
  );
};

export default ItemList;
