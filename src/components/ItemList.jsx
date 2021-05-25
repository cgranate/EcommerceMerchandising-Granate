import Item from "./Item"
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
        precio: 3200,
        stock: 9,
        url: blanco
    },
    {
        id: "negro",
        nombre: "Álbum Negro",
        precio: 3200,
        stock: 12,
        url: negro
    },
    {
        id: "rojo",
        nombre: "Álbum Rojo",
        precio: 3200, 
        stock: 7,
        url: rojo
    },
    {
        id: "azul",
        nombre: "Álbum Azul",
        precio: 3200, 
        stock: 2,
        url: azul
    },
    {
        id: "taza",
        nombre: "Taza Tigres Sueltos",
        precio: 800, 
        stock: 9,
        url: taza
    },
    {
        id: "auriculares",
        nombre: "Auriculares Tigres Sueltos",
        precio: 18000, 
        stock: 10,
        url: auriculares
    },
    {
        id: "remerablanca",
        nombre: "Remera blanca Tigres Sueltos",
        precio: 600, 
        stock: 6,
        url: remerablanca
    },
    {
        id: "remera-negra",
        nombre: "Remera negra Tigres Sueltos",
        precio: 600,
        stock: 6,
        url: remeranegra
    }
];

const fetch = () => new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(productos);
    }, 2000);
});

fetch().then(
    function (value) {
        console.log(value);
    },
    function (reason){
        //rechazo
    }
);

const ItemList = () => {
    return(
    productos.map(producto => <Item prod={producto} />))
}

export default ItemList;