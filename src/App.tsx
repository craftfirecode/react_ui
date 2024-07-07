import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./simplyStyle/main.scss";
import HomePage from "./pages/HomePage";
import './generatedStyles.css';
import TypoPage from "./pages/TypoPage";
import ButtonPage from "./pages/ButtonPage";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <nav className="bg-gray-800 text-white p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/button" className="hover:text-gray-300">
                Button
              </Link>
            </li>
            <li>
              <Link to="/typoPage" className="hover:text-gray-300">
                Typo
              </Link>
            </li>
          </ul>
        </nav>     

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/typoPage" element={<TypoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
