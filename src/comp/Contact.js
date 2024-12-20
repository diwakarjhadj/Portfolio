import React from 'react';
import '../style/Contact.css';

const Contact = () => {
    const handleNavigation = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer'); // Opens the link in a new tab
    };
    return (
        <>
            <div className='contact-section' id="contact">
                <div className='contact-heading'>Contact</div>
                <div className='contact-para'>Feel free to reach out to me via email or connect with me on LinkedIn, GitHub and watch my youtube channel for DSA. I look forward to discussing potential opportunities with you.</div>
                <div className='social-media-contact'>
                    <div className='social-media-link-contact twitter'><i className="fa-brands fa-twitter" title="Twitter" style={{ cursor: 'pointer' }}></i></div>
                    <div className='social-media-link-contact youtube'
                     onClick={() => handleNavigation('https://www.youtube.com/@diwakarjha5339')}  title="Youtube"><i className="fa-brands fa-youtube" style={{ cursor: 'pointer' }}></i></div>
                    <div className='social-media-link-contact instagram' title="instagram"><i className="fa-brands fa-instagram" style={{ cursor: 'pointer' }}></i></div>
                    <div className='social-media-link-contact facebook' title="Facebook"><i className="fa-brands fa-facebook" style={{ cursor: 'pointer' }}></i></div>
                    <div className='social-media-link-contact linkedin'
                     onClick={() => handleNavigation('https://www.linkedin.com/in/diwakar-jha-22a436218/')} title="Linkedin"><i className="fa-brands fa-linkedin" style={{ cursor: 'pointer' }}></i></div>
                </div>
            </div>
        </>
    )
}

export default Contact
