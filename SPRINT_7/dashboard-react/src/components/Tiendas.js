import React from 'react';

function Tiendas (){
    return(
<div className='col-5 medio'>
<h2>Información de tiendas</h2>
<table class='col-12'>
       <thead>
          <tr >
             <th class='primeracol' scope="col">Tiendas</th>
             <th scope="col">Cantidad de Productos</th>
             <th scope="col">$ Promedio</th>
          </tr>
       </thead>
       <tbody>
            <tr>
                <td>Cardamomo</td>
                <td>40</td>
                <td>$20.500</td>
            </tr>
        </tbody>
</table>
</div>
    )
}


export default Tiendas;