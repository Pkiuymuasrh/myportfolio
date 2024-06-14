import React from 'react'
import './About.css'
import theme_pattern from'../../assets/theme_pattern.svg'
import profile_img from "../../assets/profile_img.svg";
import myprofile from "../../assets/myprofile.jpg";
const About = () => {
    return (
      <div id='about' className='about'>
        <div className="about-title">
          <h1>About me</h1>
          <img src={theme_pattern} alt=""/>
        </div>
        <div className="about-sections">
          <div className="about-left">
              <img src={myprofile} alt=''/>
          </div>
          <div className="about-right">
              <div className="about-para">
                  <p>I'm an engineer skilled in both core subjects and software development. Passionate about innovation, I strive to make impactful contributions that shape the future.</p>
                  <p>I've been diligently improving my industry-specific skills through various projects and courses, ensuring that I maintain proper industry work ethics throughout my endeavors.</p>
              </div>
              <div className="about-skills">
                  <div className="about-skill">
                      <p>HTML, CSS & JavaScript</p>
                      <hr style={{width: '50%'}}/>
                  </div>
                  <div className="about-skill">
                      <p>Reactjs & Nodejs</p>
                      <hr style={{width: '60%'}}/>
                  </div>
                  <div className="about-skill">
                      <p>SQL, R & Tableau</p>
                      <hr style={{width: '70%'}}/>
                  </div>
                  <div className="about-skill">
                      <p>C & C++</p>
                      <hr style={{width: '80%'}}/>
                  </div>
                  <div className="about-skill">
                      <p>Python & Java</p>
                      <hr style={{width: '50%'}}/>
                  </div>
              </div>
          </div>
        </div>
        <div className="about-achievements">
              <div className="about-achievement">
                  <h1>1+</h1>
                  <p>INTERNSHIP</p>
                  <hr />
              </div>
              <div className="about-achievement">
                  <h1>10+</h1>
                  <p>PROJECTS COMPLETED</p>
                  <hr />
              </div>
              <div className="about-achievement">
                  <h1>3 STAR</h1>
                  <p>CODER IN C, C++ & SQL</p>
                  <hr />
              </div>
        </div>
        <div className="hero-scroll">
        <marquee behavior="scroll" direction="left" scrollamount="10" loop="infinite">
          
        </marquee>
      </div>
      </div>
      
    );
  }
   

export default About