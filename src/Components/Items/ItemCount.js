import React, {useState} from 'react'

const ItemCount = (props) => {
    
    let [acumulador, setAcumulador] = useState(props.initial)
    let [cart, setCart] = useState(0)

    const actionClickAdd = () => {
        if (acumulador < props.stock ){
        setAcumulador(acumulador + 1);
        } else {
            alert('No tenemos suficiente stock, Vuelva prontos.')
        }
    }
    const onAdd = () =>{
        cart == 1 ? setCart(acumulador) : setCart(cart + acumulador)
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
                <h4>Items en el carrito {cart}</h4>
                <button onClick={actionClickAdd}>Sumar</button>
                <button onClick={actionClickSub}>Restar</button>
            </div>
                <button onClick={onAdd}>Agregar Al Carrito</button>
        </div>
        </>
    )
}


export default ItemCount;