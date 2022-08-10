import "./App.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Header from "./components/Header";
import Account from "./components/Account";
import RealTimeChart from "./components/RealTimeChart";

function App() {
  return (
    <>
      <Router  Redirect to="/" >
        <div className="app">

          <Routes>
            <Route path="/realtimechart" element={   <>{" "}  <Header/> <RealTimeChart/> <Footer/>{" "} </> } />
            <Route path="/account" element={   <>{" "}  <Header/> <Account/> <Footer/>{" "} </> } />
            <Route path="/login" element={<Login />} />
            <Route path="/"    element={  <>  {" "}  <Home/>  <Footer/>{" "}  </> } />
            <Route path="/tradingpage" element={   <>{" "}  <Home/>  <Footer/>{" "} </> } />
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
