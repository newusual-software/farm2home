import Header from "./components/common/header";
import Home from "./pages/homePage.jsx"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
       
    </>
  );
}

export default App;
