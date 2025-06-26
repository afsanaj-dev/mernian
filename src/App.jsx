import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import ProfileLayout from "./components/layouts/profileLayouts/ProfileLayout";
import MarketPlaceLayout from "./components/layouts/marketPlaceLayouts/MarketPlaceLayout";
import ProductList from "./pages/ProductList";
import ProductDisplay from "./pages/ProductDisplay";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import MarketPlaceProfile from "./pages/MarketPlaceProfile";
import ProductCategory from "./pages/ProductCategory";
import Friends from "./pages/Friends";

function App() {
  return (
    <Routes>
      {/* Profile*/}
      <Route path="/" element={<ProfileLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route path="marketPlace-profile" element={<MarketPlaceProfile />} />
        <Route path="friends" element={<Friends />} />
      </Route>

      {/* Marketplace */}
      <Route path="/marketplace" element={<MarketPlaceLayout />}>
        <Route index element={<ProductList />} />
        <Route path="product-category" element={<ProductCategory />} />
        <Route path="product-display" element={<ProductDisplay />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
