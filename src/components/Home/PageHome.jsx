import React from "react";
import "../../styles/Home/PageHome.css";

import BoxH1 from "./BoxH1";
import Footer from "./Footer";
import Navbar from "./Navbar";
import BoxH2 from "./BoxH2";
import BoxH3 from "./BoxH3";
import BoxH4 from "./BoxH4";
import BoxH5 from "./BoxH5";

const PageHome = () => {
    return (
      <div>
        <Navbar/>
        <BoxH1/>
        <BoxH2/>
        <BoxH3/>
        <BoxH4/>
        <BoxH5/>
        <Footer/>
      </div>
    )
  };
  
  export default PageHome;