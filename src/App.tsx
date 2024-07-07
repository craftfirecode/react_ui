import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./simplyStyle/main.scss";
import HomePage from "./pages/HomePage";
import { Button } from "./components/ui/button";
import './generatedStyles.css';

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
          </ul>
        </nav>

        <h1>Headline 1</h1>
        <h2>Headline 2</h2>
        <h3>Headline 3</h3>
        <h4>Headline 4</h4>
        <h5>Headline 5</h5>
        <h6>Headline 6</h6>

        <Button variant="primary" size="sm">Demo</Button> 
        <Button variant="secondary" size="sm">Demo</Button> 
        <Button variant="danger" size="sm">Demo</Button> 

        <Button variant="primary" size="default">Demo</Button> 
        <Button variant="secondary" size="default">Demo</Button> 
        <Button variant="danger" size="default">Demo</Button> 
        
        <Button variant="primary" size="lg">Demo</Button> 
        <Button variant="secondary" size="lg">Demo</Button> 
        <Button variant="danger" size="lg">Demo</Button> 

        <Button variant="outline_primary" size="sm">Demo</Button> 
        <Button variant="outline_secondary" size="sm">Demo</Button> 
        <Button variant="outline_danger" size="sm">Demo</Button> 

        <Button variant="outline_primary" size="default">Demo</Button> 
        <Button variant="outline_secondary" size="default">Demo</Button> 
        <Button variant="outline_danger" size="default">Demo</Button> 
        
        <Button variant="outline_primary" size="lg">Demo</Button> 
        <Button variant="outline_secondary" size="lg">Demo</Button> 
        <Button variant="outline_danger" size="lg">Demo</Button> 

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
