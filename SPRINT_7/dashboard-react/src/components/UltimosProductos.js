import React, {Component} from 'react';

class UltimosProductos extends Component {
    render () {
        return(
            <div className='medio'>
                <h2>Últimos productos agregados</h2>
                <table className='col-12'>
                    <thead>
                        <tr >
                            <th className='primeracol' scope="col">Últimos productos agregados</th>
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
}


export default UltimosProductos;