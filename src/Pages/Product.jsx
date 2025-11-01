import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/Context";
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductDisplay.jsx/ProductDisplay";
import DesriptionBox from "../Components/DescriptionBox/DesriptionBox";
import RelatedProduct from "../Components/RelatedProducts/RelatedProduct";



const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DesriptionBox />
      <RelatedProduct/>
    </div>
  );
};

export default Product;
