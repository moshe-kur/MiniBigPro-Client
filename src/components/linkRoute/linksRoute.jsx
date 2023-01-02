import { Route, Routes } from "react-router-dom";
import NavBar from "../navBar/navBar";

import { About, ContactUs, Products, NotFound, Home } from "../../Pages";
import { OneProduct } from "../../Pages/oneProduct/oneProduct";

const LinkRoute = () => {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<OneProduct></OneProduct>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default LinkRoute;
