import "./styles/ItemCount.css";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";

export default function Item ({prod}){
    console.log(prod)
    const [producto, setProducto] = useState(prod); 
    const params = useParams();
    const routeClick = () => {
        console.log("click")
    }

    return (
            <>
                <Router>
                <div className="counter-container">
                    <div>
                        <img src={producto.url} alt={producto.id}/>
                        <a href={"/item/"+producto.id}>{producto.nombre}</a>
                        <h4>${producto.precio}</h4>
                        <ItemCount stock={producto.stock} initial={1} />
                        <h5>Agregar al carrito</h5>
                    </div>
                </div> 
                <Switch>
                    <Route exact path="/item/:producto.id" ></Route>
                </Switch>
            </Router>
            </>
    )
}
