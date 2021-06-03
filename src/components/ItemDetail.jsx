import "./styles/ItemDetail.css"
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom"
import blanco from "../assets/images/blanco.jpg"
import negro from "../assets/images/negro.jpg"
import rojo from "../assets/images/rojo.jpg"
import azul from "../assets/images/azul.jpg"
import taza from "../assets/images/taza.jpg"
import auriculares from "../assets/images/auriculares.jpg"
import remerablanca from "../assets/images/remerablanca.jpg"
import remeranegra from "../assets/images/remeranegra.jpg"

const productos = [
    {
        id: "blanco",
        nombre: "Álbum Blanco",
        categoria:"Albumes",
        precio: 3200,
        stock: 9,
        url: blanco
    },
    {
        id: "negro",
        nombre: "Álbum Negro",
        categoria:"Albumes",
        precio: 3200,
        stock: 12,
        url: negro
    },
    {
        id: "rojo",
        nombre: "Álbum Rojo",
        categoria:"Albumes",
        precio: 3200, 
        stock: 7,
        url: rojo
    },
    {
        id: "azul",
        nombre: "Álbum Azul",
        categoria:"Albumes",
        precio: 3200, 
        stock: 2,
        url: azul
    },
    {
        id: "taza",
        nombre: "Taza Tigres Sueltos",
        categoria: "Accesorios",
        precio: 800, 
        stock: 9,
        url: taza
    },
    {
        id: "auriculares",
        nombre: "Headset Tigres Sueltos",
        categoria: "Accesorios",
        precio: 18000, 
        stock: 10,
        url: auriculares
    },
    {
        id: "remerablanca",
        nombre: "Remera blanca Tigres Sueltos",
        categoria:"Ropa",
        precio: 600, 
        stock: 6,
        url: remerablanca
    },
    {
        id: "remera-negra",
        nombre: "Remera negra Tigres Sueltos",
        categoria:"Ropa",
        precio: 600,
        stock: 6,
        url: remeranegra
    }
];

export default function Item (){
    const [productoVar, setProducto] = useState(); 
    const params = useParams();
    const fetch = () => new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(productos);
        }, 2000);
    });

    fetch().then(
        function (value) {
            console.log("este es el value")
            console.log(value);
            console.log(params.id);
            value.map(producto => producto.id==params.id ? setProducto(producto) : "")            
        },
        function (reason){
            //rechazo
        }
    );
    
    if(productoVar == null){
        return(
        <p>Pagina Cargando</p>
        )
    }else{
    return (
            <>
                <div class="container-all">
                    <div class="grid second-nav">
                        <div class="column-xs-12">
                            <nav>
                                <ol class="breadcrumb-list">
                                    <li class="breadcrumb-item"><a href="/">Inicio</a></li>
                                    <li class="breadcrumb-item"><a href="/merch">Merchandising</a></li>
                                    <li class="breadcrumb-item active">{productoVar.nombre}</li>
                                </ol>
                            </nav>
                        </div>
                </div>
                <div class="grid product">
                <div class="column-xs-12 column-md-7">
                    <div class="product-gallery">
                        <div class="product-image">
                            <img class="active" src={productoVar.url} />
                        </div>
                    </div>
                </div>
                <div class="column-xs-12 column-md-5">
                    <h1>{productoVar.nombre}</h1>
                    <h2>${productoVar.precio}</h2>
                    <div class="description">
                    <p>¿Qué es mejor? ¿Algo aburrido o un/a {productoVar.nombre}? <br /> *Plot twist: ya sabés la respuesta*</p>
                    </div>
                <button class="add-to-cart">Añadir al carrito</button>
                </div>
                </div>
                <div class="grid related-products">
                <div class="column-xs-12">
                    <h3>También podría gustarte</h3>
                </div>
                <div class="container-others">
                    <div>
                        <img src={auriculares} />
                        <h4>Auriculares</h4>
                        <p class="price">$18.000</p>
                    </div>
                    <div>
                        <img src={remerablanca} />
                        <h4>Remera blanca</h4>
                        <p class="price">$600</p>
                    </div>
                    <div>
                        <img src={remeranegra} />
                        <h4>Remera negra</h4>
                        <p class="price">$600</p>
                    </div>
                </div>
                </div>
                </div>
            </>
        
    )
    }
}