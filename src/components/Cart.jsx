/* eslint-disable react/prop-types */
import CartItem from "./CartItem"
import AOS from "aos";
import "aos/dist/aos.css"; 
import Button from "./Button";
// import MakePayment from "./MakePayment";
import PayModal from "./PayModal";
import { useState } from "react";
AOS.init(); 


const Cart = ({
  onOpenCart,
  cartProducts,
  onDelete,
  totalPrice,
  onUpdateQuantity,
  onClearCart
}) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="cart-container" data-aos="fade-left">
      <div className="close-clear-container">
        <Button onClick={onClearCart} className={"close-clear-cart-btn"}>
          Clear Cart
        </Button>
        <Button className={"close-clear-cart-btn"} onClick={onOpenCart}>
          close cart
        </Button>
      </div>
      <div className="cart-item-container">
        {cartProducts.map((product) => (
          <CartItem
            cartProduct={product}
            key={product.id}
            onDelete={onDelete}
            onUpdateQuantity={onUpdateQuantity}
          />
        ))}
      </div>
      <div className="pay-btn-container">
        <p className="total-price">Total Price: $ {totalPrice}</p>
        <Button className={"pay-btn"} onClick={() => setModalShow(true)}>
          Pay
        </Button>
      </div>
      <PayModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        totalPrice={totalPrice}
        cartProducts={cartProducts}
      />
    </div>
  );
};
export default Cart