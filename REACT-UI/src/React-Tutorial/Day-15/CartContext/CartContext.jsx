import { createContext, useContext, useState } from "react";

// Create a Cart Context with default values
const CartContext = createContext({ cart: [], addToCart: () => { } });

function Cart() {
    const { cart } = useContext(CartContext);

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

function AddToCart() {
    const { addToCart } = useContext(CartContext);

    const handleAddItem = () => {
        addToCart("New Item");
    };

    return (
        <div>
            <h2>Add to Cart</h2>
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
}

function CartDemo() {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            <div className="container-fluid p-4">
                <h1>Cart Demo</h1>
                <Cart />
                <AddToCart />
            </div>
        </CartContext.Provider>
    );
}

export default CartDemo;
