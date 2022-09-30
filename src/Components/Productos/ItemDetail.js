import React from 'react'
import { useState } from 'react';
import ItemCount from '../Items/ItemCount';

const ItemDetail = ({ producto }) => {

  const [agregar, setAgregar] = useState(1)
  const agregarAlCarrito = (agregado) => {
    agregado >= 1 ? setAgregar(agregado) : setAgregar(agregar + agregado)
    console.log(agregar)     
  }

  return (
    <div className='card-top'>
      <div>Estas Viendo: <strong>{producto.name}</strong> </div>
      <img src={producto.imageURL} width={200} alt="" />
      <div>
        <p>Precio: ${producto.price}</p>
        <p>Descripcion: {producto.description}</p>
      <ItemCount agregar={agregarAlCarrito} stock={15} initial={1} />
      </div>
    </div>
  )
}

export default ItemDetail;