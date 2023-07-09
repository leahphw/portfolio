import React, { useContext } from "react";
import About from "./components/about/about";
import Intro from "./components/intro/intro";
import Contact from "./components/contact/contact";
import ProjectList from "./components/projectList/projectList";
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
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
};

export default App;
