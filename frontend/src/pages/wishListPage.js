import React from "react";
import "../assests/css/productPage.css";
import WishListCard from "../components/wishListCard";
import { useAuth } from "../context/authContext";

function Wishlist() {
  const { authState } = useAuth();
  return (
    <div>
      <h1>Welcome to wishlist</h1>
      <div className="product-listing">
        {authState.wishlist.map((item) => {
          return (
            <div
              key={item.product._id}
              style={{ maxWidth: "300px", margin: "20px" }}
            >
              <WishListCard productItem={item} type="wishlist" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Wishlist;
