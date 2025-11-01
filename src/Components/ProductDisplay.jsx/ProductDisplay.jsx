import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_Icon from "../Assets/star_icon.png";
import star_dull_Icon from "../Assets/star_dull_icon.png";

import { ShopContext } from "../../Context/Context";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_Icon} alt="" />
          <img src={star_Icon} alt="" />
          <img src={star_Icon} alt="" />
          <img src={star_Icon} alt="" />
          <img src={star_dull_Icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisply-right-description">
          A lightweigthh running jacket designed for comfort and performance.
          Featuring breathable mesh uppers, responsive cushioning, and durable
          outsoles, these shoes are perfect for both casual joggers and serious
          runners.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>

        <p className="productdisplay-right-category">
          <span>category:</span>Women,T-shirt,crop-top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:</span>Modern,Latest,Old Money
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
