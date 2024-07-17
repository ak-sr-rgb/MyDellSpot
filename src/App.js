import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Register from "./Register";
import Home from "./Home";
function App() {
  return (
    <div className="App">   
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<Register />} />
            </Routes>
        </Router>
    
    </div>
  );
}

export default App;
