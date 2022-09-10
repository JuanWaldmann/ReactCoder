import React from 'react';
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <>
        <img src="https://dummyimage.com/150x150/000/fff" alt="logo" />
            <h1 className='center'>Bienvenidos a Cobayashi Hardware</h1>
            <nav>
                <ul className='list'>
                    <li className='list'><a href="#">Placas de video</a></li>
                    <li className='list'><a href="#">Motherboards</a></li>
                    <li className='list'><a href="#">CPU</a></li>
                    <li className='list'><a href="#">Almacenamiento</a></li>
                    <li className='list'><a href="#">Refrigeracion</a></li>
                    <li className='list'><a href="#">Gabinetes</a></li>
                </ul>
            </nav>

            <CartWidget />
        
        </>
    )
}


export default NavBar;