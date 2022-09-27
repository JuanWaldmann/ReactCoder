import React, { useState, useEffect } from "react";
import { listaProductos } from "../../Constants/database";
import { Loading } from "../Loading";
import "./productos.css";
import Item from "./Item";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"

const ItemList = () => {
  const {categoryId} = useParams()
  
  
  const [productos, setProductos] = useState([]);
  
    /* FETCH */
  useEffect(() => {
    setTimeout(() => {
      setProductos(listaProductos);
    }, 2000);
  }, [categoryId]);

  /* RENDER */
  if (productos.length == 0) {
    return <Loading />;
  }
  return (
    <main>
      <div className="page-title">Productos</div>

      
      <div className="lista-productos">
        { 
        productos.map((producto) => {
          return (
            <Link to='/producto/productId'><Item producto={producto} key={producto.id} /></Link>
          )
        }, []
        )}
      </div>
      
    </main>
  );
}

export default ItemList;
