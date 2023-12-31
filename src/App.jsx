import { FooterWithSitemap } from "./components/common/footer/footer.jsx";
import ProtectedRoute from "./components/protectedRoute";
import Header from "./components/common/header";
import AboutUs from "./pages/onboard/aboutUs.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./pages/onboard/store.jsx";
import Landing from "./pages/landing.jsx";
import Help from "./pages/onboard/help.jsx";
import Contact from "./pages/onboard/contact.jsx";
import UserSignIn from "./pages/auth/userSignIn.jsx";
import UserSignUp from "./pages/auth/userSignUp.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDescription from "./pages/authenticatedPages/productDescription.jsx";
import Cart from "./components/cart/cart.jsx";
import Checkout from "./pages/authenticatedPages/checkout.jsx";
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          {/* landing route */}
          <Route path="/" element={<Landing />} />
          {/* onboard routes */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-store" element={<Store />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          {/* authentication routes */}
          <Route path="/sign-in" element={<UserSignIn />} />
          <Route path="/sign-up" element={<UserSignUp />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Landing />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/product/:id" element={<ProductDescription />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </Router>
      <FooterWithSitemap />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
