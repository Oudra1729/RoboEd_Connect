import React from "react";
import "./App.css";
import PageCoaching from "./components/Coaching/PageCoaching";
import  PageInformatique from "./components/Informatique/PageInformatique";
import PageHome from "./components/Home/PageHome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Home/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<PageHome />} />
          <Route path="PageHome" element={<PageHome />} />
          <Route path="PageCoaching" element={<PageCoaching />} />
          <Route path="PageInformatique" element={<PageInformatique/>} />
          <Route path="home" element={<PageHome />}>
            <Route index element={<PageHome />} />
            <Route path="home" element={<PageHome />} />
            <Route path="coach" element={<PageCoaching />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
