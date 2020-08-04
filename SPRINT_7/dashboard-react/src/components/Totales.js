import React, {Component} from 'react';

class Totales extends Component {

    constructor(props){
        super(props);
        this.state = {
            totalProductos: "",
            totalTiendas: "",
            totalUsuarios: ""
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
            .then( response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.log(error))
    }

    totalProductos = (data) => {
        this.setState(
        {
            totalProductos: data.meta.item_count,
        })
    }

    totalTiendas = (data) => {
        this.setState(
        {
            totalTiendas: data.meta.item_count
        })
    }

    totalUsuarios = (data) => {
        this.setState(
        {
            totalUsuarios: data.meta.item_count
        })
    }

    componentDidMount(){
        this.apiCall("http://localhost:3030/api/products", this.totalProductos)
        this.apiCall("http://localhost:3030/api/stores", this.totalTiendas)
        this.apiCall("http://localhost:3030/api/users", this.totalUsuarios)
    }

    render () {
        let contenido;
        if(this.state.totalProductos === "") {
            contenido = <p>Cargando datos..</p>
        } else {
            contenido = <p>{this.state.totalProductos}</p>
        }
        let contenidoTiendas;
        if(this.state.totalTiendas === "") {
            contenidoTiendas = <p>Cargando datos..</p>
        } else {
            contenidoTiendas = <p>{this.state.totalTiendas}</p>
        }
        let contenidoUsuarios;
        if(this.state.totalUsuarios === "") {
            contenidoUsuarios = <p>Cargando datos..</p>
        } else {
            contenidoUsuarios = <p>{this.state.totalUsuarios}</p>
        }

        return(
            <article className="col-12 row articulo">
                <div className='totales'>
                    <h2>TOTAL DE PRODUCTOS</h2>
                    {contenido}
                </div>
                <div className='totales'>
                    <h2>TOTAL DE TIENDAS</h2>
                    {contenidoTiendas}
                </div>
                <div className='totales'>
                    <h2>TOTAL DE USUARIOS</h2>
                    {contenidoUsuarios}
                </div>
                <div className='totales'>
                    <h2>TOTAL DE VENTAS($)</h2>
                    <p>$95.000</p>
                </div>
            </article>
        )
    }
}


export default Totales;