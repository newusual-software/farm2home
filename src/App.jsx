import { FooterWithSitemap } from "./components/common/footer/footer.jsx";
import Header from "./components/common/header";
import AboutUs from "./pages/onboard/aboutUs.jsx";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Store from "./pages/onboard/store.jsx";
import Landing from "./pages/landing.jsx";
import Help from "./pages/onboard/help.jsx";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-store" element={<Store />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Router>
      <FooterWithSitemap />
    </>
  );
}

export default App;
