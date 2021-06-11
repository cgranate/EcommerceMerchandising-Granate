import { useCart } from "./CartProvider.jsx";




export default function Cart({}){
    const cart = useCart();
    console.log(cart.cart)
    return(
        <h1 style={{textAlign: 'center'}}>Carrito de compras</h1>
    )
}