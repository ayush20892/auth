import React from "react";
import "../assests/css/wishListCard.css";
import { useAuth } from "../context/authContext";
import { getProduct } from "../util/productCalls";
import { deleteFromWishlist, addToWishlist } from "../util/networkCalls";
import { useNavigate } from "react-router-dom";

function WishListCard({ productItem, type }) {
  const { product } = productItem;
  const { authState, authDispatch } = useAuth();
  const navigate = useNavigate();

  async function removeFromWishlist(productId) {
    await deleteFromWishlist(productId);
    authDispatch({ type: "REMOVE_FROM_WISHLIST", payload: productId });
  }

  async function addToWishlistHandler(productId) {
    if (authState.userId !== "") {
      await addToWishlist(productId);
      authDispatch({
        type: "ADD_TO_WISHLIST",
        payload: getProduct(authState.productList, productId),
      });
      return;
    }
    navigate("/user/login", { replace: "true" });
  }

  if (type === "product")
    return (
      <div className="wishlist-card">
        <h5>{productItem.name}</h5>
        <h6>{productItem.price}</h6>(
        <button onClick={() => addToWishlistHandler(productItem._id)}>
          Add to wishList
        </button>
        )
      </div>
    );

  return (
    <div className="wishlist-card">
      <h5>{product.name}</h5>
      <h6>{product.price}</h6>
      {type === "wishlist" && (
        <button onClick={() => removeFromWishlist(product._id)}>Remove</button>
      )}
    </div>
  );
}

export default WishListCard;
