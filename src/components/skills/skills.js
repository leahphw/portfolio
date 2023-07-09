import React from "react";
import "./skills.css"
import PythonLogo from "../../assets/python-logo.png";
import JavaLogo from "../../assets/java-logo.png";
import JavascriptLogo from "../../assets/javascript-logo.png";
import SolidityLogo from "../../assets/solidity-logo.png";
import SQLLogo from "../../assets/sql-logo.png";
import HTMLLogo from "../../assets/html-logo.png";
import CSSLogo from "../../assets/css-logo.png";
import ReactLogo from "../../assets/react-logo.png";
import NodeJSLogo from "../../assets/nodejs-logo.png";
import BootstrapLogo from "../../assets/bootstrap-logo.png";
import SwiftLogo from "../../assets/swift-logo.png";
import XcodeLogo from "../../assets/xcode-logo.png";
import DjangoLogo from "../../assets/django-logo.png";
import GitLogo from "../../assets/git-logo.png";

const Skills = () => {
  const skills = [
    { name: "Python", logo: PythonLogo },
    { name: "Java", logo: JavaLogo },
    { name: "JavaScript", logo: JavascriptLogo },
    { name: "Solidity", logo: SolidityLogo },
    { name: "SQL", logo: SQLLogo },
    { name: "HTML", logo: HTMLLogo },
    { name: "CSS", logo: CSSLogo },
    { name: "React", logo: ReactLogo },
    { name: "Node.js", logo: NodeJSLogo },
    { name: "Bootstrap", logo: BootstrapLogo },
    { name: "Swift", logo: SwiftLogo },
    { name: "Xcode", logo: XcodeLogo },
    { name: "Django", logo: DjangoLogo },
    { name: "Git", logo: GitLogo }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills & Tech Stack</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <img src={skill.logo} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
