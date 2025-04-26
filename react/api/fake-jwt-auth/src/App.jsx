import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Header from "./components/Header";
import PrivateRoute from "./components/route/PrivateRoute";

function App() {
  return (
    <> 
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
        
    </>
  );
}

export default App;
