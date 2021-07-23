import './App.css';
import React, { useState } from 'react';
import { Body } from './components/Body/BodyElement';
import Header from './components/Header/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import NewProject from './components/NewProject';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTop from './components/Scrollup';

function App() {
  const [darktheme, setDarktheme] = useState(false);
  const changeTheme = () => {
    setDarktheme(!darktheme);
    console.log(darktheme);
  }

  return (
    <>
      <Body className={`${darktheme ? 'darkTheme' : ''}`}>
        <Header changeTheme={changeTheme} darktheme={darktheme} />
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Portfolio />
        <NewProject />
        <Contact />


        <ScrollTop />
      </Body>
      <div className={`${darktheme ? 'darkTheme' : ''}`

      }>
        <Footer />
      </div>
    </>
  );
}

export default App;
