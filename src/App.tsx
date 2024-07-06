import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import DatePickerPage from "./pages/DatePickerPage";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/datePicker" element={<DatePickerPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
