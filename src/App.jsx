import React from "react";
import Navbar from "./component/Navbar";
import Background from "./component/Background";
import Header from "./component/Header";
import Aboutme from "./component/Aboutme";
import Services from "./component/Services";
import Mywork from "./component/Mywork";
import Contactus from "./component/Contactus";
import Footer from "./component/Footer";
// import './App.css';
const App = () => {
  return (
    <div>
      <Navbar />
      <Background />
      <Header/>
      <Aboutme/>
      <Services/>
      <Mywork/>
      <Contactus/>
      <Footer/>
    

    
    </div>
  );
};

export default App;
