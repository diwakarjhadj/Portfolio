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
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                    </div>
                    <div className='about-image-desc'>
                        <div className='about-images'>
                            <div className='about-image'>
                                <img src={profileImage} alt='Internet connection' />
                            </div>
                        </div>
                        <div className='about-image-description'>
                            <div className='about-desc-heading'>
                                UI/UX Designer & Web Developer
                            </div>
                            <div className='about-desc-text'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className='about-all-desc'>
                                <div className='personal-desc1'>
                                    <div className='website'><i className="fa-solid fa-chevron-right" style={{ color: "#2bd1d4" }}></i><strong> website: </strong>www.example.com</div>
                                    <div className='website'><i className="fa-solid fa-chevron-right" style={{ color: "#2bd1d4" }}></i><strong> Phone: </strong>+123 456 7890</div>
                                    <div className='website'><i className="fa-solid fa-chevron-right" style={{ color: "#2bd1d4" }}></i><strong> City: </strong>New York, USA</div>
                                </div>
                                <div className='personal-desc2'>
                                    <div className='website'><i className="fa-solid fa-chevron-right" style={{ color: "#2bd1d4" }}></i><strong> Degree: </strong>B.Tech</div>
                                    <div className='website'><i className="fa-solid fa-chevron-right" style={{ color: "#2bd1d4" }}></i><strong> Email: </strong>email@example.com</div>
                                    <div className='website'><i className="fa-solid fa-chevron-right" style={{ color: "#2bd1d4" }}></i><strong> Freelance: </strong>Available</div>
                                </div>
                            </div>
                            <div className='personal-text-desc'>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About
