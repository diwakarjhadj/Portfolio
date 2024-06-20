import React, { useState, useEffect } from 'react';
import '../style/About.css';
import profileImage from '../img/Diwakar.jpeg';
const About = () => {
    const [text, setText] = useState('');
    const originalText = 'I am a software Developer Engineer!';
    const typingSpeed = 100;


    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= originalText.length) {
                setText(originalText.slice(0, currentIndex));
                currentIndex += 1;
            } else {
                clearInterval(typingInterval);
            }
        }, typingSpeed);

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <>
            <div className='About-section'>
                <div className='intro-section' id="home">
                    <div className='background-text'>
                        <div>Hi <span className="wave">👋</span>I am Diwakar Jha</div>
                        <p>{text}</p>
                    </div>
                </div>
                <div className='main-about-desc' id='about'>
                    <div className='main-About'>About</div>
                    <div className='about-desc'>
                    Hi, I'm Diwakar Jha, a Software developer based in Noida. I specialize in creating responsive and dynamic websites and have a passion for clean and efficient code, I have 1.5 years of experience in web development. I am working with w3villa Technology a large corporations, focusing on front-end development in <b>React.js</b> and <b>Vue.js</b> as well as Backend knowledge in <b>Node.js</b>.
</div>
                    <div className='about-image-desc'>
                        <div className='about-images'>
                            <div className='about-image'>
                                <img src={profileImage} alt='Internet connection' />
                            </div>
                        </div>
                        <div className='about-image-description'>
                            <div className='about-desc-heading'>
                                Software Developer Engineer
                            </div>
                            <div className='about-desc-text'>
                                <p> My expertise includes HTML, CSS, JavaScript, and React. I am proficient in various development tools and constantly learning new technologies to stay current in the ever-evolving tech landscape. I have successfully completed projects within in a given amount of time with the Clean Code. I Learn with many senior Experience people , where I led the front-end development team, and the interactive web app for User Experience.</p>
                            </div>
                            <div className='about-all-desc'>
                                <div className='personal-desc1'>
                                    <div className='website'><i className="fa-solid fa-chevron-right" style={{ color: "#2bd1d4" }}></i><strong> website: </strong>www.example.com</div>
                                    <div className='website'><i className="fa-solid fa-chevron-right" style={{ color: "#2bd1d4" }}></i><strong> Phone: </strong>+91 7678296368</div>
                                    <div className='website'><i className="fa-solid fa-chevron-right" style={{ color: "#2bd1d4" }}></i><strong> City: </strong>Noida, India</div>
                                </div>
                                <div className='personal-desc2'>
                                    <div className='website'><i className="fa-solid fa-chevron-right" style={{ color: "#2bd1d4" }}></i><strong> Degree: </strong>B.Tech</div>
                                    <div className='website'><i className="fa-solid fa-chevron-right" style={{ color: "#2bd1d4" }}></i><strong> Email: </strong>dkj9650964906@gmail.com</div>
                                    <div className='website'><i className="fa-solid fa-chevron-right" style={{ color: "#2bd1d4" }}></i><strong> Freelance: </strong>Available</div>
                                </div>
                            </div>
                            <div className='personal-text-desc'> When I'm not coding, I enjoy Dancing, Swiming, and exploring new tech gadgets. I believe in lifelong learning and the power of technology to make the world a better place. Feel free to browse through my portfolio to see some of my work. If you’d like to collaborate or just want to say hi, you can reach me or connect with me on LinkedIn, E-mail and GitHub.</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About
