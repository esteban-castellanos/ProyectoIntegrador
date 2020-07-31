import React from 'react';

function Navbar (){
    return(
        <div className='Navbar col-2'>
            <h1>DASHBOARD</h1>
    
            <ul>
                <li className='listado'>LISTADO DE PRODUCTOS</li>
                <li className='listado'>LISTADO DE TIENDAS</li>
                <li className='listado'>LISTADO DE USUARIOS</li>
            </ul>
        </div>
    )
}


export default Navbar;