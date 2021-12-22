import React from "react"



import "../styles/styles.css"


//Import Components
import CustomCursor from "../components/CustomCursor";

import Header from "../components/header"
import Banner from "../components/banner"
import Rando from "../components/rando"


function IndexPage() {


 

 

  return (
    <>
  <CustomCursor/>
  
  <div className="main-container" id="main-container" data-scroll-container>
  
    
    
    <Header />
    <Banner />
    <Rando/>
  
    
  </div>
  
  </>




  )
}
    


export default IndexPage
