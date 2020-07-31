import React, {Component} from 'react';

class ProductosMasVendidos extends Component {
    render () {
        return(
            <div className='ultimos'>
                <h2>PRODUCTOS MÁS VENDIDOS</h2>
                <table className='col-12'>
                    <thead>
                        <tr>
                            <th className='primeracol' scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Leche de coco</td>
                            <td>40</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


export default ProductosMasVendidos;