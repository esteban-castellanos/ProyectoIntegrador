import React, {Component} from 'react';

class Tiendas extends Component {
    constructor(props){
        super(props);
        this.state = {
            tiendas:[]
           
        }
    }
    apiCall(url, consecuencia) {
        fetch(url)
            .then( response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.log(error))
    }

    tiendas = (data) => {
        this.setState({
            tiendas: data.data.tiendas
        })

     }
    

    componentDidMount(){
        console.log("Me estoy componiendo");
        this.apiCall("http://localhost:3030/api/stores/", this.tiendas)

    }
    
    render () {
        return(
            <div className='medio'>
                <h2>Información de tiendas</h2>
                <table className='col-12'>
                    <thead>
                        <tr >
                            <th className='primeracol' scope="col">Tiendas</th>
                            <th scope="col">Cantidad de Productos</th>
                        </tr>
                    </thead>
                    <tbody>

                    {this.state.tiendas.map((tienda, i) => {
                                return(
                            <tr key={tienda+i}>
                                <td key={tienda+i}>{tienda.name}</td>
                                <td key={tienda+i}>{tienda.productos.length}</td>
                            </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default Tiendas;