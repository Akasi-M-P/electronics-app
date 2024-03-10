/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage"
import Cart from "./components/Cart";
import { useState } from "react";





function App() {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [modalShow, setModalShow] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);

  const cartLength = cart.length;
  
 
  
  const handleOpenCart = () => {
    setShowCart(!showCart)
  }

  const handleAddToCart = (product) => {
    // Check if product already exists in cart
    const isProductInCart = cart.some((productItem) => productItem.id === product.id);
    if(isProductInCart) {
      // If product already exists in cart, update quantity
      const updatedCart = cart.map((cartItem) => cartItem.id === product.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
      setCart(updatedCart);
    } else {
      // If product does not exist in the cart, add it with a quantity of 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  const handleDeleteCartItem = (product) => {
    const updatedCart = cart.filter(item => item.id !== product);
    setCart(updatedCart)
  }

  const handleTotalPrice = () => {
    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    return totalPrice.toFixed(2);
  }

  const handleProductQuantity = (productItem, newQuantity) => {
    const updatedCart = cart.map(product => product.id === productItem ? 
      {...product, quantity: newQuantity} : product)
      setCart(updatedCart)
  }

    const handleClearCart = () => {
      setCart([]);
      setShowCart(false);
      setAddedProduct(null)
    }


     const handleAddedProduct = (product) => {
       setAddedProduct((curProduct) =>
         curProduct?.id === product.id ? null : product
       );
     };

    
  return (
    <>
      <div>
        <HomePage
          onOpenCart={handleOpenCart}
          onAddProduct={handleAddToCart}
          cartLength={cartLength}
          onClearCart={handleClearCart}
          onAddedProduct={handleAddedProduct}
          addedProduct={addedProduct}
          setAddedProduct={setAddedProduct}
        />
        {showCart && (
          <Cart
            onOpenCart={handleOpenCart}
            cartProducts={cart}
            onDelete={handleDeleteCartItem}
            totalPrice={handleTotalPrice()}
            modalShow={modalShow}
            setModalShow={setModalShow}
            onUpdateQuantity={handleProductQuantity}
            onClearCart={handleClearCart}
          />
        )}
      </div>
    </>
  );
}

export default App
