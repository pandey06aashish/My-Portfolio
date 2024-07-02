import React from 'react';
import './About.css';
import about_profile from '../../assets/profile.png'
import about_cursor from '../../assets/cursor.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={about_cursor} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img className='my_img' src={about_profile} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque excepturi omnis odio expedita suscipit, ex reiciendis facilis ipsum dolor quaerat, accusamus alias fuga repellat eius tenetur pariatur voluptatibus illo sunt.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deserunt nesciunt autem, sapiente voluptas sed quos, iste maxime accusantium incidunt ratione, doloribus ex asperiores suscipit voluptates cupiditate quia et id?</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>Development</p>
                        <hr style={{width:"52%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>DSA </p>
                        <hr style={{width:"80%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Database</p>
                        <hr style={{width:"32%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Devops Tools</p>
                        <hr style={{width:"89%"}}/>
                    </div>
                </div>
            </div>
            </div>
            <div className="about-achievements">
                <div className="aboutachivement">
                    <h1>10+</h1>
                    <p>Full Stack Project Completed</p>
                </div>
                <hr />
                <div className="aboutachivement">
                    <h1>20+</h1>
                    <p>Open Source Contributions</p>
                </div>
                <hr />
                <div className="aboutachivement">
                    <h1>8.5 GPA</h1>
                    <p>In my BCA program</p>
                </div>
        </div>
    </div>
  );
};

export default About;
