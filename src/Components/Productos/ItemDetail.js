import React from 'react'
import ItemCount from '../Items/ItemCount';
import ItemDetailContainer from '../Items/ItemDetailContainer';
import { listaProductos } from '../../Constants/database';

const ItemDetail = ({}) => {

  return (
    <div className="my-5">
      <div>
        <section>Estas viendo: </section>
        <div>
          <div>
            <div>
              <img/>
            </div>
            <div>
              <span></span>
              <span className="my-3"></span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;