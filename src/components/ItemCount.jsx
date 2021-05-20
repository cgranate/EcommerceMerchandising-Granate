import { useState } from "react";
import "./styles/ItemCount.css";
import taza from "../assets/images/taza.jpg";

export default function App({stock, initial}) {
  const [counter, setCounter] = useState(initial);
  const [error, setError] = useState("");

  const changeCounter = (value) => {
      if (stock >= counter + value){
        if(counter + value > -1){
          setCounter(counter + value);
          setError("")
        }
      }
      else{  
        setError("No hay más stock disponible en este momento")
      }
  };

  return (
    <div className="counter-container">
      <img src={taza} alt="taza" />
      <h3>Taza Tigres Sueltos</h3>
      <div className="container">
        <button onClick={() => changeCounter(-1)}>-</button>
        <p>Cantidad: {counter}</p>
        <button onClick={() => changeCounter(1)}>+</button>
      </div>
      <h4>Agregar al carrito</h4>
    </div>
  );
}