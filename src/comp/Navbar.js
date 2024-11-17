import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../style/Navbar.css';
import profileImage from '../img/Diwakar.jpeg';

window.addEventListener('scroll', function () {
    var portfolioHeading = document.querySelector('.portfoio-heading-bottom');
    var resumeLink = document.querySelector('.resumeLink');
    var homeLink = document.querySelector('.homeLink');
    var aboutLink = document.querySelector('.aboutLink');
    var skillsLink = document.querySelector('.skillsLink');
    var projectLink = document.querySelector('.projectLink');
    if (window.scrollY + window.innerHeight === document.documentElement.scrollHeight) {

        resumeLink.classList.remove('active');
        portfolioHeading.style.color = 'aqua';
    }
    else if (homeLink.classList.contains('active') || aboutLink.classList.contains('active') || skillsLink.classList.contains('active') || projectLink.classList.contains('active')) {
        resumeLink.classList.remove('active');
    }
    else {

        resumeLink.classList.add('active');
        portfolioHeading.style.color = '';
    }


});


const Navbar = () => {
    const handleNavigation = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer'); // Opens the link in a new tab
    };

    const [isBarsVisible, setIsBarsVisible] = useState(true);

    const toggleIcons = () => {
        setIsBarsVisible(!isBarsVisible);
    };

    const handleLinkClick = () => {
        const windowWidth = window.innerWidth;

        // Check if the window width is at most 991px
        if (windowWidth <= 991) {
            toggleIcons();
        }
        // Add any additional logic you may need when a link is clicked
    };

    useEffect(() => {
        // Function to handle window resize events
        const handleResize = () => {
            const windowWidth = window.innerWidth;

            // Check if the window width is at most 991px
            if (windowWidth <= 991) {
                setIsBarsVisible(true); // Reset the visibility when the window is resized to 991px or less
            } else {
                setIsBarsVisible(false); // Hide the icons when the window is wider than 991px
            }
        };

        // Attach the handleResize function to the window resize event
        window.addEventListener('resize', handleResize);

        // Call handleResize once initially to handle the initial window width
        handleResize();

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            <div className='main-section'>
                <div className={`main-width ${isBarsVisible ? '' : 'move-left'}`} onClick={toggleIcons}>
                    <div className='portfolio-image'>
                        <div className='main-profile-image'>
                            <div className='profile-image'>
                                <img src={profileImage} alt='Internet connection' />
                            </div>
                            <div className='profile-name'>Diwakar Jha</div>
                        </div>
                        <div className='social-media'>
                            <div className='social-media-link twitter' title="Twitter"><i className="fa-brands fa-twitter"></i></div>
                            <div className='social-media-link youtube'
                                onClick={() => handleNavigation('https://www.youtube.com/@diwakarjha5339')} title="Youtube"
                            >
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                            <div className='social-media-link instagram' title="Instagram"><i className="fa-brands fa-instagram"></i></div>
                            <div className='social-media-link facebook' title="Facebook"><i className="fa-brands fa-facebook"></i></div>
                            <div className='social-media-link linkedin'
                            onClick={() => handleNavigation('https://www.linkedin.com/in/diwakar-jha-22a436218/')} title="Linkedin"><i className="fa-brands fa-linkedin"></i></div>
                        </div>

                        <div className='portflio-maindesc'>
                            <div className='portfoio-heading home'> <Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={handleLinkClick} className='homeLink'> <span style={{ cursor: 'pointer' }}><i className="fa-solid fa-house"></i> Home</span></Link></div>
                            <div className='portfoio-heading about'>  <Link to="about" spy={true} smooth={true} offset={0} duration={500} onClick={handleLinkClick} className='aboutLink'><span style={{ cursor: 'pointer' }}><i className="fa-regular fa-user"></i> About</span></Link></div>
                            <div className='portfoio-heading skills' >  <Link to="skills" spy={true} smooth={true} offset={0} duration={500} onClick={handleLinkClick} className='skillsLink'><span style={{ cursor: 'pointer' }}><i className="fa-regular fa-address-card"></i> Skills</span> </Link></div>
                            <div className='portfoio-heading project'>  <Link to="project" spy={true} smooth={true} offset={0} duration={500} onClick={handleLinkClick} className='projectLink'> <span style={{ cursor: 'pointer' }}><i className="fa-solid fa-ranking-star"></i> Projects</span> </Link></div>
                            <div className='portfoio-heading resume'>   <Link to="resume" spy={true} smooth={true} offset={0} duration={500} onClick={handleLinkClick} className='resumeLink'><span style={{ cursor: 'pointer' }}><i className="fa-regular fa-file"></i> Resume</span></Link> </div>
                            <div className='portfoio-heading-bottom contact'>   <Link to="contact" spy={true} smooth={true} offset={0} duration={500} onClick={handleLinkClick}> <span style={{ cursor: 'pointer' }}><i className="fa-regular fa-envelope"></i> Contact</span> </Link> </div>
                        </div>
                    </div>
                </div>
                <div className='image-width'>

                    <div className='hemburger-menu'>
                        <div className={`bars ${isBarsVisible ? 'hide-hemburger' : 'show-hemburger'}`} onClick={toggleIcons}>
                            <i className="fa-solid fa-bars"></i>
                        </div>
                        <div className={`x-mark ${!isBarsVisible ? 'hide-hemburger' : 'show-hemburger'}`} onClick={toggleIcons}>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </div>
                    </div>
                    <div className='background-Image'>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
