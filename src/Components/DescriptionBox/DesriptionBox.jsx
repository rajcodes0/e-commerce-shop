import React from "react";
import "./DescriptionBox.css";
const DesriptionBox = () => {
  return (
    <div className="desriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box"> Decription</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="description-description">
        <p>
          n ecommerce shop description is a concise overview that introduces
          your online store to potential customers, highlighting your brand's
          identity, the products you offer, and the value you provide. It serves
          as a first impression, aiming to attract visitors and encourage them
          to explore your product offerings further. A well-crafted description
          should clearly communicate what your store sells, who it's for, and
          why customers should choose you over competitors. It often includes
          key details such as the types of products available, your unique
          selling proposition, and any notable brand values or commitments, like
          sustainability or customer service.
        </p>
      </div>
    </div>
  );
};

export default DesriptionBox;
