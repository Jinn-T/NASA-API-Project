import "./App.module.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // do we need BrowserRouter as?
import Home from "./containers/Home";
import LandSat from "./containers/LandSat";
import NavBar1 from "./components/NavBar";
import MarsWeather from "./containers/MarsWeather";
import EventTracker from "./containers/EventTracker";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar1 />
                <Routes>
                    <Route path="/" component={Home} element={<Home />}></Route>
                    <Route path="/landsat" component={LandSat}></Route>
                    <Route path="/marsweather" component={MarsWeather}></Route>
                    <Route
                        path="/eventtracker"
                        component={EventTracker}
                    ></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
