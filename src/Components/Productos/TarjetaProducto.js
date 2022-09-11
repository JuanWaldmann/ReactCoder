import React from "react";

const TarjetaProducto = (props) => {
    const producto = props.producto
    return (
    <article className="producto-container">
      <div className="producto-top">
        <img src={producto.imageURL}></img>
      </div>
      <div className="producto-bot">
        <h2>{producto.name}</h2>
        <span>{producto.price} USD</span>
        <p>{producto.subtitulo}</p>
      </div>
    </article>
  );
};

export default TarjetaProducto;
