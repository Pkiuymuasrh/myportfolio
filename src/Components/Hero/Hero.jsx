import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import myprofile from "../../assets/myprofile.jpg";
import resume from "../../assets/resume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={myprofile} alt="" />
      <h1>
        <span>I'm Piyush,</span>CSE Engineer based in India
      </h1>
      <p>
        Eager engineering student poised to launch career in the industry!
        Backed by a robust educational foundation and a fervent passion for
        coding. Proficient across various programming languages and frameworks.
        Thrilled by the prospect of acquiring new knowledge and collaborating
        within a team environment.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={resume} download>
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
