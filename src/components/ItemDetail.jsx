import "./styles/ItemDetail.css";
//import ItemCount from "./ItemCount";
import { useState } from "react";
import taza from "../assets/images/taza.jpg"
import auriculares from "../assets/images/auriculares.jpg"
import remerablanca from "../assets/images/remerablanca.jpg"
import remeranegra from "../assets/images/remeranegra.jpg"

const producto =     {
    id: "taza",
    nombre: "Taza Tigres Sueltos",
    precio: 800, 
    stock: 9,
    url: taza
}

export default function Item ({}){
    const [productoVar, setProducto] = useState(); 
    const fetch = () => new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(producto);
        }, 2000);
    });

    fetch().then(
        function (value) {
            console.log("este es el value")
            console.log(value);
            setProducto(value);
            
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
                <div class="container">
                    <div class="grid second-nav">
                        <div class="column-xs-12">
                            <nav>
                                <ol class="breadcrumb-list">
                                    <li class="breadcrumb-item"><a href="#">Inicio</a></li>
                                    <li class="breadcrumb-item"><a href="#">Merchandising</a></li>
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
                    <p>¿Qué es mejor? ¿una taza aburrida o una de Tigres Sueltos? <br /> *Plot twist: ya sabés la respuesta*</p>
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