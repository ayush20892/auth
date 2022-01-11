export function authReducer(acc, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST": {
      return {
        ...acc,
        wishlist: [...acc.wishlist, action.payload],
      };
    }
    case "REMOVE_FROM_WISHLIST":
      return {
        ...acc,
        wishlist: acc.wishlist.filter(
          (item) => item.product._id !== action.payload
        ),
      };
    case "CREATE_SESSION": {
      localStorage.setItem(
        "session",
        JSON.stringify({ userId: action.payload._id })
      );
      return {
        ...acc,
        userId: action.payload._id,
        cart: action.payload.cart,
        wishlist: action.payload.wishlist,
      };
    }
    case "START_SESSION": {
      return {
        ...acc,
        userId: action.payload.userId,
        cart: action.payload.cart,
        wishlist: action.payload.wishlist,
      };
    }
    case "END_SESSION": {
      localStorage.setItem("session", JSON.stringify({ userId: null }));
      return { ...acc, userId: null, cart: [], wishlist: [] };
    }
    case "LOAD_PRODUCTS":
      return { ...acc, productList: action.payload };

    default:
      return { ...acc };
  }
}
