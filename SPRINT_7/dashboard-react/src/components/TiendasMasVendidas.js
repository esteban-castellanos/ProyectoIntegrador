import React, {Component} from 'react';

class TiendasMasVendidas extends Component {
    render () {
        return(
            <div className='ultimos'>
                <h2>TIENDAS QUE MÁS FACTURAN</h2>
                <table className='col-12'>
                    <thead>
                        <tr>
                            <th className='primeracol' scope="col">Tiendas</th>
                            <th scope="col">Facturación</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>NAtureba</td>
                            <td>$40.000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


export default TiendasMasVendidas;