import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import DatePickerPage from "./pages/DatePickerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/datePicker" element={<DatePickerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
