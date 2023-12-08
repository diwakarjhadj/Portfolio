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
                        Hello Everyone! 👋 I'm Diwakar Jha,In this Section we will Discuss about my career and my skills I'm passionate to discuss about my career and my skills . Here's a little bit about me:
                    </div>
                    <div className='about-image-desc'>
                        <div className='about-images'>
                            <div className='about-image'>
                                <img src={profileImage} alt='Internet connection' />
                            </div>
                        </div>
                        <div className='about-image-description'>
                            <div className='about-desc-heading'>
                                SOFTWARE DEVELOPER ENGINEER -I
                            </div>
                            <div className='about-desc-text'>
                            <p>My Name is Diwakar Jha And I'm the software Developer Engineer in w3 Villa Technology private Ltd. I had Completed My B.tech in (CSE) Computer Science and Engineer.</p>
                            </div>
                            <div className='about-all-desc'>
                                <div className='personal-desc1'>
                                    <div className='website'><i className="fa-solid fa-chevron-right" style={{ color: "#2bd1d4" }}></i><strong> website: </strong>www.example.com</div>
                                    <div className='website'><i className="fa-solid fa-chevron-right" style={{ color: "#2bd1d4" }}></i><strong> Phone: </strong>+123 456 7890</div>
                                    <div className='website'><i className="fa-solid fa-chevron-right" style={{ color: "#2bd1d4" }}></i><strong> City: </strong>Noida, UP, INDIA</div>
                                </div>
                                <div className='personal-desc2'>
                                    <div className='website'><i className="fa-solid fa-chevron-right" style={{ color: "#2bd1d4" }}></i><strong> Degree: </strong>B.Tech</div>
                                    <div className='website'><i className="fa-solid fa-chevron-right" style={{ color: "#2bd1d4" }}></i><strong> Email: </strong>dkj9650964906@gmail.com</div>
                                    <div className='website'><i className="fa-solid fa-chevron-right" style={{ color: "#2bd1d4" }}></i><strong> Freelance: </strong>Available</div>
                                </div>
                            </div>
                            <div className='personal-text-desc'>Apart from the coding I love to listening the music,dancing and Swimming, And Playing the Outdoor Game Like Cricket, and Football I like to play chess and video Games. I like to watch the Movies And Many More Exciting Things to do.</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About
