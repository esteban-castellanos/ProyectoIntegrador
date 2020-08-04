import React, {Component} from 'react';

class UltimosProductos extends Component {

    constructor(props){
        super(props);
        this.state = {
            ultimosProductos: []
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
            .then( response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.log(error))
    }

    componentDidMount(){
        fetch("http://localhost:3030/api/products")
            .then( response => response.json())
            .then(data =>{
                let arrayProductos = data.data.productos
                let arrayUltimosProductos = arrayProductos.slice(-5)
                this.setState(
                    {
                        ultimosProductos: arrayUltimosProductos
                    })
            })
            .catch(error => console.log(error))
    }


    render () {

        return(
            <div className='medio'>
                <h2>Últimos productos agregados</h2>
                <table className='col-12'>
                    <thead>
                        <tr >
                            <th className='primeracol' scope="col">Producto</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Tienda</th>
                        </tr>
                    </thead>
                        <tbody>
                            {this.state.ultimosProductos.map((prod, i) => {
                                return(
                            <tr key={prod+i}>
                                <td key={prod+i}>{prod.name}</td>
                                <td key={prod+i}>{prod.price}</td>
                                <td key={prod+i}>{prod.tienda.name}</td>
                            </tr>
                                )
                            })}

                        </tbody>
                </table>
            </div>
        )
    }
}


export default UltimosProductos;