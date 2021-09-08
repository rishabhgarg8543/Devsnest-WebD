import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function ProductComponents() {
  const products = useSelector((state) => state.allProducts.product);
  console.log(products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <div class="ui card" key={id} style={{ marginLeft: "70px" }}>
        <Link to={`/product/${id}`}>
          <div class="content">
            <div class="right floated meta"></div>
            <img
              class="ui image"
              src={image}
              alt = "test"
              style={{
                maxWidth: "200px",
                maxHeight: "250px",
                minHeight: "250px",
                minWidth: "200px",
              }}
            ></img>
          </div>
          <div class="image"></div>
          <div className="content floated">
            <div className="header">{title}</div>
            <div className="meta price">Rs{price}</div>
            <div className="meta">hi{category} </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
}