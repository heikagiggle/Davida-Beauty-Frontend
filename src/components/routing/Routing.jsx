import { Routes, Route } from "react-router-dom";
import Login from "../authentication/Login";
import Cart from "../cart/Cart";
import MyOrder from "../order/MyOrder";
import HomePage from "../home/HomePage";
import ProductPage from "../products/ProductPage";
import SingleProduct from "../singleproducts/SingleProduct";
import Logout from "./../authentication/Logout";
import SignUp from "../authentication/SignUp";
import ProtectedRoute from "./ProtectedRoute";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/myorders" element={<MyOrder />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  );
};

export default Routing;
