import { useState } from "react";
import "./styles/ItemCount.css";
import ItemList from "./ItemList.jsx";

export default function ItemCount({stock, initial}) {
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
      <div className="container">
        <button onClick={() => changeCounter(-1)}>-</button>
        <p>Cantidad: {counter}</p>
        <button onClick={() => changeCounter(1)}>+</button>
      </div>
  );
}