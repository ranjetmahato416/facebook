// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Navbar";
import Body from "./Body";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element= {<Body/> }></Route>
          <Route path='/Dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
