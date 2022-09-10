import React from 'react'
import './App.css';
import NavBar from './Components/NavBar'
import ItemCount from './Components/ItemCount'


function App() {
  return ( 
    <>
      <NavBar />
      <ItemListContainer greeting={bienvenido} />
    </>
  );
}
const usuario = "Matias Ponce"

const bienvenido = "Bienvenido " + usuario + " a nuestro E-commerce, por aqui debajo encontrarás nuestras mejores ofertas"

const ItemListContainer = () => {
  return (
    <>
      <h3 className='center'>{bienvenido}</h3>
      <p className='center'>Catalogo</p>
      <ItemCount />
    </>
  )
}


export default App;
