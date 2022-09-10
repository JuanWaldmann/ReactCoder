import React, {useState} from 'react'

let stock = 10

const ItemCount = () => {
    const [acumulador, setAcumulador] = useState(1)


    const actionClickAdd = () => {
        if (acumulador < stock ){
        setAcumulador(acumulador + 1);
        } else {
            alert('No tenemos suficiente stock, Vuelva prontos.')
        }
    }
    const actionClickSub = () => {
        
        if (acumulador > 1 ){
            setAcumulador(acumulador - 1) 
        }else{
            alert('no puedes agregar 0 al carrito')
        }
    }
    return (
        <>  
        <div className='stock-container-flex'>
            <div className='item-count-container'>
                <h4 className='center'>Cantidad</h4>
                <h3 className='center'>{acumulador}</h3>
                <button onClick={actionClickAdd}>Sumar</button>
                <button onClick={actionClickSub}>Restar</button>
            </div>
                <button>Agregar Al Carrito</button>
        </div>
        </>
    )
}


export default ItemCount;