import "./App.module.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // do we need BrowserRouter as?
import Home from "./containers/Home";
import LandSat from "./containers/LandSat";
import NavBar1 from "./components/NavBar";
import MarsRover from "./containers/MarsRover";
import EventTracker from "./containers/EventTracker";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar1 />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/landsat"
            component={LandSat}
            element={<LandSat />}
          ></Route>
          <Route path="/marsrover" element={<MarsRover />}></Route>
          <Route path="/eventtracker" element={<EventTracker />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
