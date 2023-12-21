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
          {/* authentication routes */}
          <Route path="/sign-in" element={<UserSignIn />} />
          <Route path="/sign-up" element={<UserSignUp />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Landing />} />
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
