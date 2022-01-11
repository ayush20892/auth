import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Product from "./pages/productPage";
import User from "./pages/userPage";
import { PrivateRoute } from "./util/PrivateRoute";
import Wishlist from "./pages/wishListPage";
import {
  getAllCartItems,
  getAllProducts,
  getAllWishlistItems,
} from "./util/networkCalls";
import { useAuth } from "./context/authContext";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const session = JSON.parse(localStorage.getItem("session"));
  const { authDispatch } = useAuth();

  async function loadInitialData() {
    const { success, productResult } = await getAllProducts();
    if (success)
      authDispatch({ type: "LOAD_PRODUCTS", payload: productResult });

    if (session?.userId) {
      const cartItems = await getAllCartItems();
      const wishListItems = await getAllWishlistItems();
      const payload = {
        userId: session?.userId,
        cart: cartItems.cart,
        wishlist: wishListItems.wishlist,
      };
      authDispatch({ type: "START_SESSION", payload });
    }
    setIsLoading(false);
  }

  useEffect(() => {
    loadInitialData();
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <Navbar />
        <h1>Loading....</h1>
      </div>
    );
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
        <Route path="/user/:action" element={<User />} />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
