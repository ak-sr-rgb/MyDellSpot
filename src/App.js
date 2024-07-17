import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Stats from "./Stats";
import ParkingSpotBooking from './components/Parking/ParkingSpotBooking';
import Register from "./Register";
import Home from "./Home";
function App() {
  return (
    <div className="App">   
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/book" element={<ParkingSpotBooking />} />
                <Route path="/stats" element={<Stats />} />
            </Routes>
        </Router>
    
    </div>
  );
}

export default App;
