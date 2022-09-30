import React, { useState, useEffect } from "react";

const ItemCount = ({ stock, initial, agregar }) => {
  let [acumulador, setAcumulador] = useState(initial);

  const actionClickAdd = () => {
    if (acumulador < stock) {
      setAcumulador(acumulador + 1);
    } else {
      alert("No tenemos suficiente stock, Vuelva prontos.");
    }
  };

  const actionClickSub = () => {
    if (acumulador > 1) {
      setAcumulador(acumulador - 1);
    } else {
      alert("no puedes agregar 0 al carrito");
    }
  };

  return (
    <>
      <div className="stock-container-flex">
        <div className="item-count-container">
          <h4 className="center">Cantidad</h4>
          <h3 className="center">{acumulador}</h3>
          
          <button onClick={actionClickAdd}>Sumar</button>
          <button onClick={actionClickSub}>Restar</button>
        </div>
        <button onClick={() => agregar(acumulador)}>Agregar Al Carrito</button>
      </div>
    </>
  );
};

export default ItemCount;
