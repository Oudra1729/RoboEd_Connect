import React from "react";
import './App.css'
import Navbar from "../src/components/Coaching/Navbar";
import Box1 from "./components/Coaching/Box1";
import Box2 from "./components/Coaching/Box2";
import Box3 from "./components/Coaching/Box3";
import Box4 from "./components/Coaching/Box4";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Box1/>
      <Box2/>
      <Box3/>
      <Box4/>
    </div>
  )
};

export default App;