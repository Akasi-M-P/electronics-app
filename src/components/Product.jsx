/* eslint-disable react/prop-types */

import Button from "./Button";


const Product = ({
  product,
  onAddProduct,
  onAddedProduct,
  addedProduct,
}) => {
  const handleAdded = () => {
    onAddProduct(product);
    onAddedProduct(product);
  };

  const isAdded = addedProduct?.id === product.id;

  return (
    <div className="product">
      <img src={product.image} alt="" />
      <p className="product-name">{product.name}</p>
      <div className="price-buy-container">
        <p className="product-price">${product.price}</p>
        <Button
          className={"buy-product"}
          onClick={handleAdded}
        >
          {isAdded ? "Added" : "Buy"}
        </Button>
      </div>
    </div>
  );
};
export default Product