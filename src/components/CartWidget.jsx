import React from 'react'
import cartIcon from '../assets/icon/shopping_cart_black_24dp.svg'

const CartWidget = () => {
    return (
        <>
            <div className="cart-container">
                <img src={cartIcon} alt="" />
            </div>
        </>
    )
}

export default CartWidget;
