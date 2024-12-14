import { ThemeProvider } from "styled-components";
import { useState} from "react";
import { darkTheme} from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router >
        <Navbar />
        <HeroSection/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Education/>
        <Contact/>
        <Footer/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
