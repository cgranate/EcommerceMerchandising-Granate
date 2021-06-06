import Item from "./Item"
import SubCategoryNavBar from "./SubCategoryNavBar"
import { useState } from "react"
import blanco from "../assets/images/blanco.jpg"
import negro from "../assets/images/negro.jpg"
import rojo from "../assets/images/rojo.jpg"
import azul from "../assets/images/azul.jpg"
import taza from "../assets/images/taza.jpg"
import auriculares from "../assets/images/auriculares.jpg"
import remerablanca from "../assets/images/remerablanca.jpg"
import remeranegra from "../assets/images/remeranegra.jpg"
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom"

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

function ProductPrint({valores,urlParams}){
    if(urlParams.id == undefined && urlParams !='home'){
        return (valores.map(producto => <Item prod={producto} />))
    } else if(urlParams == "home"){
        return (
            valores.map(producto => producto.precio>=1000 ? <Item prod={producto}/> : "")
            )
    }else{
        return (valores.map(producto => producto.categoria==urlParams.id ? <Item prod={producto}/> : ""))
    }
}

export default function ItemList ({}){
    const [productosVar, setProductos] = useState(); 
    const params = useParams();
    console.log(params);

    const fetch = () => new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(productos);
        }, 2000);
    });

    fetch().then(
        function (value) {
            console.log(value);
            setProductos(value);
        },
        function (reason){
            //rechazo
        }
    );
    
    if(productosVar == null){
        return(
        <p>Pagina Cargando</p>
        )
    }else{
        return(
            <Router>
                <div>
                <SubCategoryNavBar/>
                </div>
                <Switch>
                    <Route path="/:categoria" children={<ProductPrint valores={productosVar} urlParams={params} />}></Route>
                    <Route path="/" children={<ProductPrint valores={productosVar} urlParams={'home'} />}></Route>
                </Switch>
            </Router>
        )
    }
}