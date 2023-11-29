import { FooterWithSitemap } from "./components/common/footer/footer.jsx";
import Header from "./components/common/header";
import AboutUs from "./pages/aboutUs.jsx";
import Home from "./pages/homePage.jsx"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Store from "./pages/store.jsx";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-store" element={<Store />} />
        </Routes>
      </Router>
      <FooterWithSitemap />
    </>
  );
}

export default App;
