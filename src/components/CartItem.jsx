import Button from "./Button";

/* eslint-disable react/prop-types */
const CartItem = ({ cartProduct, onDelete, onUpdateQuantity }) => {
  return (
    <div className="cart-product">
      <img src={cartProduct.image} alt="" />
      <p className="cart-product-name">{cartProduct.name}</p>
      <div className="cart-price-buy-container">
        <p className="cart-product-price">{cartProduct.price}</p>
        <div className="qty-label-input">
          <label>Qty</label>
          <input
            type="number"
            min="1"
            value={cartProduct.quantity}
            onChange={(e) =>
              onUpdateQuantity(cartProduct.id, parseInt(e.target.value, 10))
            }
          />
        </div>

        <Button
          className={"cart-remove-product"}
          onClick={() => onDelete(cartProduct.id)}
        >
          remove
        </Button>
      </div>
    </div>
  );
};
export default CartItem