import React from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import {bienvenido} from "../Items/ItemListContainer"
import ItemListContainer from "../Items/ItemListContainer";
import ItemDetailContainer from "../Items/ItemDetailContainer";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from "../Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={bienvenido} />}/>
          <Route path='/categoria/:categoryId' element={<ItemListContainer greeting={bienvenido} 
          />} />
          <Route path='/producto/:productId' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />}/>
          
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

