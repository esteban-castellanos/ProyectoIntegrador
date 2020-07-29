import React from 'react';

function Categorias (){
    return(

<div className='col-3 ultimos'>
    <h2>PRODUCTOS POR CATEGORIA</h2>
    <table class='col-12'>
       <thead>
          <tr >
             <th class='primeracol' scope="col">Categorías</th>
             <th scope="col">Cantidad de Productos</th>

          </tr>
       </thead>
       <tbody>
            <tr>
                <td>Sin Tacc</td>
                <td>40</td>
            </tr>
        </tbody>
</table>
</div>
    )
}


export default Categorias;