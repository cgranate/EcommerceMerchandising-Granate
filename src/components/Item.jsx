import "./styles/ItemCount.css";
import ItemCount from "./ItemCount";
import { useState } from "react";

export default function Item ({prod}){
    console.log(prod)
    const [producto, setProducto] = useState(prod); 

    return (
            <>
                <div className="counter-container">
                    <div>
                        <img src={producto.url} alt={producto.id} />
                        <h3>{producto.nombre}</h3>
                        <h4>${producto.precio}</h4>
                        <ItemCount stock={producto.stock} initial={1} />
                        <h5>Agregar al carrito</h5>
                    </div>
                </div> 
            </>
    )
}
