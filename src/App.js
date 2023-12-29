import React, { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from "./components/about/about";
import Intro from "./components/intro/intro";
import Contact from "./components/contact/contact";
import ProjectList from "./components/projectList/projectList";
import NavBar from "./components/navbar/NavBar";
import Toggle from "./components/toggle/toggle";
import Skills from "./components/skills/skills";
import { ThemeContext } from "./context";

const App = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <NavBar />
      <Toggle />
      <Intro/>
      <About />
      <Skills />
      <ProjectList />
      <Contact />
    </div>
  );
};

export default App