import React from 'react';

function Navbar (){
    return(
        <div className='Navbar col-2'>
            <h1>DASHBOARD</h1>
            <ul>
                <li className='listado'>LISTADO DE PRODUCTOS</li>
                <li className='listado'>LISTADO DE TIENDAS</li>
                <li className='listado'>LISTADO DE USUARIOS</li>
                <li className='listado'><a href="http://localhost:3000/">REFRESCAR PÁGINA</a></li>
                <li className='listado'><a href="http://localhost:8080/">VOLVER AL HOME</a></li>
            </ul>
        </div>
    )
}


export default Navbar;