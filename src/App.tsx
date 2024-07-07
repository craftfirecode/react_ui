import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import './generatedStyles.css';
import './../App.scss';
import TypoPage from "./pages/TypoPage";
import ButtonPage from "./pages/ButtonPage";
import GridPage from "./pages/GridPage";

function App() {
  return (
    <div className="">
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
            <li>
              <Link to="/grid" className="hover:text-gray-300">
                Grid & Display & Spacing
              </Link>
            </li>
          </ul>
        </nav>     

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/typoPage" element={<TypoPage />} />
          <Route path="/grid" element={<GridPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
