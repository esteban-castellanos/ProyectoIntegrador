import React from 'react';

function Navbar (){
    return(
        <div className='Navbar col-2'>
            <h2>DASHBOARD</h2>
            <ul>
                <li className='listado'>LISTADO DE PRODUCTOS</li>
                <li className='listado'>LISTADO DE TIENDAS</li>
                <li className='listado'>LISTADO DE USUARIOS</li>
            </ul>
        </div>
    )
}


export default Navbar;