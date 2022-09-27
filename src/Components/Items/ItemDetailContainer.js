import { useEffect, useState } from "react";
import ItemDetail from "../Productos/ItemDetail";
import { listaProductos } from "../../Constants/database";






const ItemDetailContainer = () => {
    const [producto, setProductos] = useState([]);
    useEffect(() => {
      setTimeout(() => {
        setProductos(listaProductos[0]);
      }, 3000);
    }, []);
    
  return (
    <>
        <div className="lista-productos">
            <ItemDetail producto={producto} key={producto.id} />;
        </div>
    </>
  );
};

export default ItemDetailContainer;
