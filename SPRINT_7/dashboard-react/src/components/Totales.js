import React, {Component} from 'react';

class Totales extends Component {
    render () {
        return(
            <article className="col-12 row articulo">
                <div className='totales'>
                    <h2>TOTAL DE PRODUCTOS</h2>
                    <p>3000</p>
                </div>
                <div className='totales'>
                    <h2>TOTAL DE TIENDAS</h2>
                    <p>40</p>
                </div>
                <div className='totales'>
                    <h2>TOTAL DE USUARIOS</h2>
                    <p>200</p>
                </div>
                <div className='totales'>
                    <h2>TOTAL DE VENTAS($)</h2>
                    <p>$500.000</p>
                </div>
            </article>
        )
    }
}


export default Totales;