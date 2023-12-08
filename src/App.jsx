import { FooterWithSitemap } from "./components/common/footer/footer.jsx";
import Header from "./components/common/header";
import AboutUs from "./pages/onboard/aboutUs.jsx";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Store from "./pages/onboard/store.jsx";
import Landing from "./pages/landing.jsx";
import Help from "./pages/onboard/help.jsx";
import Contact from "./pages/onboard/contact.jsx";
import UserSignIn from "./pages/auth/userSignIn.jsx";
import UserSignUp from "./pages/auth/userSignUp.jsx";

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
        </Routes>
      </Router>
      <FooterWithSitemap />
    </>
  );
}

export default App;
