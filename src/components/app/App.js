import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from "../pages/MainPage";
import Footer from "../footer/Footer";
import OurCoffy from "../pages/OurCoffy";
import OurCoffyAI from "../pages/OurCoffyAI";


function App() {
  return (
    <Router>
      <div>
        <main>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/ourcoffee" element={<OurCoffy />} />
              <Route path="/ourcoffee/:coffyId" element={<OurCoffyAI/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
