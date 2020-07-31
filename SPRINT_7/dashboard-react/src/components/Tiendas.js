import React, {Component} from 'react';

class Tiendas extends Component {
    render () {
        return(
            <div className='medio'>
                <h2>Información de tiendas</h2>
                <table className='col-12'>
                    <thead>
                        <tr >
                            <th className='primeracol' scope="col">Tiendas</th>
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
}


export default Tiendas;