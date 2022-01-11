import React from "react";
import "../assests/css/productPage.css";
import { useAuth } from "../context/authContext";
import WishListCard from "../components/wishListCard";

function Product() {
  const { authState } = useAuth();
  return (
    <div>
      <h1>Products Page</h1>
      <div className="product-listing">
        {authState.productList.map((item) => {
          return (
            <div key={item._id}>
              <WishListCard productItem={item} type="product" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
