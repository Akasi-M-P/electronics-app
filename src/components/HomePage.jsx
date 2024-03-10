/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Product from "./Product"
import Button from "./Button"
import {products} from "./Data"



const HomePage = ({
  onOpenCart,
  onAddProduct,
  cartLength,
  onAddedProduct,
  addedProduct
}) => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h2>
          buy<span>ELECTRO</span>
        </h2>
        <Button className={"open-cart-btn"} onClick={onOpenCart}>
          opencart({cartLength})
        </Button>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            onAddProduct={onAddProduct}
            addedProduct={addedProduct}
            onAddedProduct={onAddedProduct}
          />
        ))}
      </div>
    </div>
  );
};
export default HomePage