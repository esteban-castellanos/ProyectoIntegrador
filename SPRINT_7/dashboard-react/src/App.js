import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Totales from './components/Totales';
import UltimosProductos from './components/UltimosProductos';
import Tiendas from './components/Tiendas';
import Categorias from './components/Categorias';
import ProductosMasVendidos from './components/ProductosMasVendidos';
import TiendasMasVendidas from './components/TiendasMasVendidas';

function App() {
  return (
    <div>
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Healthy Journey</title>
        <link href="https://fonts.googleapis.com/css2?family=Kreon:wght@300;400;600;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@300;400;600&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"/>
      </head>
      <body className="body">
        <header>
          <Header/>
        </header>
        <main className="row" id="main">
          <Navbar/>
          <section className="section col-10 row">
                <Totales/>
              <article className="col-12 row articulo">
                <UltimosProductos/>
                <Tiendas/>
              </article>
              <article className="col-12 row articulo">
                <Categorias/>
                <ProductosMasVendidos/>
                <TiendasMasVendidas/>
              </article>
          </section>
        </main>
      </body>
    </div>
  );
}

export default App;
