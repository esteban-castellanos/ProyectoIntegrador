import React, {Component} from 'react';

class Categorias extends Component {

        constructor(props){
            super(props);
            this.state = {
                sinlactosa:[],
                sintacc: [],
                organicos: []
            }
        }
        apiCall(url, consecuencia) {
            fetch(url)
                .then( response => response.json())
                .then(data => consecuencia(data))
                .catch(error => console.log(error))
        }

        categorias = (data) => {
            let productos = data.data.productos;
            let organico = []

                productos.map(prod => {
                    prod.categorias.map(cat => {
                        if (cat.name == "filtroOrg"){
                            organico.push(prod)
                        }

                    })
                })
            let sinlactosa = []

                productos.map(prod => {
                    prod.categorias.map(cat => {
                        if (cat.name == "filtroSinLactosa"){
                            sinlactosa.push(prod)
                        }

                    })
                })
            let sinTacc = []

                productos.map(prod => {
                    prod.categorias.map(cat => {
                        if (cat.name == "filtroSinTacc"){
                            sinTacc.push(prod)
                        }

                    })
                    console.log(organico)
                })
            this.setState({
                organicos: organico,
                sinlactosa: sinlactosa,
                sintacc: sinTacc
            })
            }

        componentDidMount(){
            console.log("Me estoy componiendo");
            this.apiCall("http://localhost:3030/api/products/", this.categorias)

        }

        render () {

        return(
            <div className='ultimos'>
                <h2>PRODUCTOS POR CATEGORIA</h2>
                <table className='col-12'>
                    <thead>
                        <tr>
                            <th className='primeracol' scope="col">Categorías</th>
                            <th scope="col">Cantidad de Productos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sin Tacc</td>
                            {this.state.sintacc.length}
                        </tr>
                        <tr>
                            <td>Sin Lactosa</td>
                            {this.state.sinlactosa.length}
                        </tr>
                        <tr>
                            <td>Orgánicos</td>
                            {this.state.organicos.length}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Categorias;