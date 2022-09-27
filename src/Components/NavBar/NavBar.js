import React from 'react';
import CartWidget from '../Cart/CartWidget'
import Nav from './Nav'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>

        <Link to="/">
            <img src="https://dummyimage.com/150x150/000/fff" alt="logo" />
        </Link>
        <Link to="/">
            <h1 className='center'>Bienvenidos a Cobayashi Hardware</h1>
        </Link>
            <Nav />
            <Link to='/cart'>
                <CartWidget />
            </Link>
        </header>
    )
}


export default NavBar;