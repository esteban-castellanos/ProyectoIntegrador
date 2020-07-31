import React, {Component} from 'react';

class Totales extends Component {

    constructor(props){
        super(props);
        this.state = {
            totalProductos: ""
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
            .then( response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.log(error))
    }

    totalProductos = (data) => {
        console.log(data);
        this.setState(
        {
            totalProductos: data.meta.item_count
        }
        )
    }

    componentDidMount(){
        console.log("Me estoy componiendo");
        this.apiCall("http://localhost:3030/api/products", this.totalProductos)
    }

    render () {
        console.log("Me estoy renderizando");
        let contenido;
        if(this.state.totalProductos == "") {
            contenido = <p>Cargando datos..</p>
        } else {
            contenido = <p>{this.state.totalProductos}</p>
        }

        return(
            <article className="col-12 row articulo">
                <div className='totales'>
                    <h2>TOTAL DE PRODUCTOS</h2>
                    {contenido}
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