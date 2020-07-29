import React from 'react';

function UltimosProductos (){
    return(
<div className='col-5 medio'>
<h2>Últimos productos agregados</h2>
<table class='col-12'>
       <thead>
          <tr >
             <th class='primeracol' scope="col">Últimos productos agregados</th>
             <th scope="col">Precio</th>
             <th scope="col">Tienda</th>
          </tr>
       </thead>
       <tbody>
            <tr>
                <td>Chocolate</td>
                <td>$200</td>
                <td>Cardamomo</td>
            </tr>
        </tbody>
</table>

</div>
    )
}


export default UltimosProductos;