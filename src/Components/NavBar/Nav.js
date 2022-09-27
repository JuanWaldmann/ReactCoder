import React from 'react'
import { listaProductos } from '../../Constants/database';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
        <nav>
            {listaProductos.map((navItem) => {
                return <NavLink key={navItem.id} to={navItem.ruta}>{navItem.categoria}</NavLink>
            })}
        </nav>
  )
}

export default Nav;