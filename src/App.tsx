import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import DatePickerPage from "./pages/DatePickerPage";
import CalendarPage from "./pages/CalendarPage";

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
              <Link to="/datePicker" className="hover:text-gray-300">
                Date Picker
              </Link>
            </li>
            <li>
              <Link to="/calandar" className="hover:text-gray-300">
                Calendar
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/datePicker" element={<DatePickerPage />} />
          <Route path="/calandar" element={<CalendarPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
