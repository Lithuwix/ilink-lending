import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Main_Content from './components/Main_Content/Main_Content';
import Footer from './components/Footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = (props) => {
  return (
      <div className="app_wrapper">
          <Header />
          <Main_Content />
          <Footer />
      </div>
  )
}

export default App;

