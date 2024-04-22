import React from "react";
import "../../styles/Home/PageHome.css";

import BoxH1 from "./BoxH1";
import Footer from "./Footer";
import Navbar from "./Navbar";
import BoxH2 from "./BoxH2";

const PageHome = () => {
    return (
      <div>
        <Navbar/>
        <BoxH1/>
        <BoxH2/>
        {/* <Footer/> */}
      </div>
    )
  };
  
  export default PageHome;