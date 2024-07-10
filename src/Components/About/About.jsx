import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div id='About' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Welcome to my portfolio! I'm passionate about designing web and making vlogs. With a keen eye for detail and a commitment to creativity, I strive to give a new view to this world. Through my work, I aim to provide a perfect user-friendly websites through which people can interact.</p>
                        <p>Explore my portfolio to discover how I bring ideas to life and create meaningful experiences. Within this portfolio, you'll find a collection of my work, showcasing my skills, experiences, and achievements. As you peruse through these pages, I invite you to not just witness my work, but to envision the possibilities that lie ahead. Whether you're seeking a creative partner, a strategic advisor, or simply a fellow enthusiast, I'm here to embark on the journey with you.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>SQL</p>
                            <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Python</p>
                            <hr style={{ width: "60%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>4+</h1>
                    <p>Major Projects Completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>12+</h1>
                    <p>Minor Projects Completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>30+</h1>
                    <p>Happy Clients</p>
                </div>
            </div>
        </div>
    )
}

export default About
