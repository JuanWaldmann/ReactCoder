import React from 'react'

const ItemDetail = ({ producto }) => {

  return (
    <div className='card-top'>
      <div>Estas Viendo: <strong>{producto.name}</strong> </div>
      <img src={producto.imageURL} width={200} alt="" />
      <div>
        <p>Precio: ${producto.price}</p>
        <p>Descripcion: {producto.description}</p>
      </div>
        
    </div>
  )
}

export default ItemDetail;