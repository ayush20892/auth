import axios from "axios";
axios.defaults.withCredentials = true;

export const signup = async (name, email, password) => {
  try {
    const {
      data: { success, user },
    } = await axios.post(
      "https://backend-ayush.herokuapp.com/api/v1/signup",
      {
        name,
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
    return { success, user };
  } catch (err) {
    console.log(err);
  }
};

export const login = async (email, password) => {
  try {
    const {
      data: { success, user },
    } = await axios.post(
      "https://backend-ayush.herokuapp.com/api/v1/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
    return { success, user };
  } catch (err) {
    console.log(err);
  }
};

export const logout = async (email, password) => {
  try {
    await axios.get("https://backend-ayush.herokuapp.com/api/v1/logout", {
      withCredentials: true,
    });
  } catch (err) {
    console.log(err);
  }
};

export const forgotPassword = async (email) => {
  try {
    const {
      data: { success },
    } = await axios.post(
      "https://backend-ayush.herokuapp.com/api/v1/forgotPassword",
      {
        email,
      },
      {
        withCredentials: true,
      }
    );
    return { success };
  } catch (err) {
    console.log(err);
  }
};

export const verifyCode = async (forgotCode) => {
  try {
    const {
      data: { success },
    } = await axios.post(
      "https://backend-ayush.herokuapp.com/api/v1/verifyCode",
      {
        forgotCode,
      },
      {
        withCredentials: true,
      }
    );
    return { success };
  } catch (err) {
    console.log(err);
  }
};

export const passwordReset = async (password, confirmPassword) => {
  try {
    const {
      data: { success, user },
    } = await axios.post(
      "https://backend-ayush.herokuapp.com/api/v1/password/reset",
      {
        password,
        confirmPassword,
      }
    );
    return { success, user };
  } catch (err) {
    console.log(err);
  }
};

export const userDashboard = async (email, password) => {
  try {
    return await axios.get(
      "https://backend-ayush.herokuapp.com/api/v1/userDashboard",
      {
        withCredentials: true,
      }
    );
  } catch (err) {
    console.log(err);
  }
};

export const getAllProducts = async () => {
  try {
    const {
      data: { success, productResult },
    } = await axios.get(
      "https://backend-ayush.herokuapp.com/api/v1/getAllProducts",
      {
        withCredentials: true,
      }
    );
    return { success, productResult };
  } catch (err) {
    console.log(err);
  }
};

export const getAllWishlistItems = async () => {
  try {
    const {
      data: { success, wishlist },
    } = await axios.get(
      "https://backend-ayush.herokuapp.com/api/v1/user/wishlist",
      {
        withCredentials: true,
      }
    );
    return { success, wishlist };
  } catch (err) {
    console.log(err);
  }
};

export const addToWishlist = async (productId) => {
  try {
    await axios({
      method: "post",
      url: "https://backend-ayush.herokuapp.com/api/v1/user/wishlist",
      data: {
        productId: productId,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteFromWishlist = async (productId) => {
  try {
    await axios({
      method: "delete",
      url: "https://backend-ayush.herokuapp.com/api/v1/user/wishlist",
      data: {
        productId: productId,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllCartItems = async () => {
  try {
    const {
      data: { success, cart },
    } = await axios.get(
      "https://backend-ayush.herokuapp.com/api/v1/user/cart",
      {
        withCredentials: true,
      }
    );
    return { success, cart };
  } catch (err) {
    console.log(err);
  }
};

export const addToCart = async (productId) => {
  try {
    await axios({
      method: "post",
      url: "https://backend-ayush.herokuapp.com/api/v1/user/cart",
      data: {
        productId: productId,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteFromCart = async (productId) => {
  try {
    await axios({
      method: "delete",
      url: "https://backend-ayush.herokuapp.com/api/v1/user/cart",
      data: {
        productId: productId,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
