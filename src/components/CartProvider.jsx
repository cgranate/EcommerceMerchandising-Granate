import { useState, createContext, useContext } from "react";


const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const INITIAL_STATE = {
    addedItems: [{ name: "Bicicleta", quantity: 1 }],
    totalPrice: 0
  };

export const CartProvider = ({children}) =>{
const [cart, setCart] = useState(INITIAL_STATE);


const isInCart = (id) =>{
    let flag = false;
    for (let i = 0; i < cart.length; i++){
        if(cart[i].id===id){
            flag=true
        }
    }
    return flag
}

const addItem = (item, quantity) =>{
    if(isInCart(item.id)){
        console.log("Item is already in Cart");
        return;
    } 
    
    const newAddedItems =  { ...item, quantity: quantity };
      
      setCart({ ...cart, addedItems: newAddedItems });
      console.log(newAddedItems)
}

const removeItem = (itemId) =>{
    let flagDelete = false;
    for (let j = 0; j < cart.length; j++){
        if(cart[j].id===itemId){
            cart.splice(j,1);
            flagDelete=true
        }
    }
    if(flagDelete){
        return ("success")
    }else{
        return ("failure")
    }
}

const clear = () =>{
    setCart([])
}

const getCart = () =>{
    return cart
}

return <CartContext.Provider value={{cart, isInCart, addItem, removeItem, clear, getCart}}>
    {children}
</CartContext.Provider>


}





/*addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
removeItem(itemId) // Remover un item del cart por usando su id
clear() // Remover todos los items
isInCart: (id) => true|false*/
