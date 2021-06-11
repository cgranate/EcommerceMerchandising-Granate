import "./styles/ItemDetail.css"
import { useState, useCallback } from "react";
import { BrowserRouter as Router, Switch, Route, useParams, Link, useHistory } from "react-router-dom"
import ItemCount from "./ItemCount.jsx"
import blanco from "../assets/images/blanco.jpg"
import negro from "../assets/images/negro.jpg"
import rojo from "../assets/images/rojo.jpg"
import azul from "../assets/images/azul.jpg"
import taza from "../assets/images/taza.jpg"
import auriculares from "../assets/images/auriculares.jpg"
import remerablanca from "../assets/images/remerablanca.jpg"
import remeranegra from "../assets/images/remeranegra.jpg"
import { useCart } from "./CartProvider.jsx";

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
    const cart = useCart();

    const [productoVar, setProducto] = useState();
    const [contador, setContador] = useState(1);
    const params = useParams();
    const history = useHistory();
    const [newButton, setNewButton] = useState([]);
    const fetch = () => new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(productos);
        }, 2000);
    });


    const handleCounterChange = useCallback ((counter)=>{
        setContador(counter);
    })

    const handleCartAdd = event =>{
        setNewButton(<button className="add-to-cart" onClick={changeRouteToCart}>Terminar tu compra</button>)
    }

    const changeRouteToCart = () =>{
        cart.addItem(productoVar,contador);
        let path = '/cart';
        history.push(path)
    }



    fetch().then(
        function (value) {
            //console.log("este es el value")
            //console.log(value);
            //console.log(params.id);
            value.map(producto => producto.id==params.id ? setProducto(producto) : "")            
        },
        function (reason){
            //rechazo
        }
    );
    
    if(productoVar == null){
        return(
        <p>Pagina cargando</p>
        )
    }else{
    return (
            <>
                <div className="container-all">
                    <div className="grid second-nav">
                        <div className="column-xs-12">
                            <nav>
                                <ol className="breadcrumb-list">
                                    <li className="breadcrumb-item"><a href="/">Inicio</a></li>
                                    <li className="breadcrumb-item"><a href="/merch">Merchandising</a></li>
                                    <li className="breadcrumb-item active">{productoVar.nombre}</li>
                                </ol>
                            </nav>
                        </div>
                </div>
                <div className="grid product">
                <div className="column-xs-12 column-md-7">
                    <div className="product-gallery">
                        <div className="product-image">
                            <img className="active" src={productoVar.url} />
                        </div>
                    </div>
                </div>
                <div className="column-xs-12 column-md-5">
                    <h1>{productoVar.nombre}</h1>
                    <h2>${productoVar.precio}</h2>
                    <div className="description">
                    <p>¿Qué es mejor? ¿Algo aburrido o un/a {productoVar.nombre}? <br /> *Plot twist: ya sabés la respuesta*</p>
                </div>
                <ItemCount stock = {productoVar.stock} isDetail={true} initial={1} onChildClick={handleCounterChange} onFinalClick={handleCartAdd} ></ItemCount>
                {newButton}
                </div>
                </div>
                <div className="grid related-products">
                <div className="column-xs-12">
                    <h3>También podría gustarte</h3>
                </div>
                <div className="container-others">
                    <div>
                        <img src={auriculares} />
                        <h4>Auriculares</h4>
                        <p className="price">$18.000</p>
                    </div>
                    <div>
                        <img src={remerablanca} />
                        <h4>Remera blanca</h4>
                        <p className="price">$600</p>
                    </div>
                    <div>
                        <img src={remeranegra} />
                        <h4>Remera negra</h4>
                        <p className="price">$600</p>
                    </div>
                </div>
                </div>
                </div>
            </>
        
    )
    }
}