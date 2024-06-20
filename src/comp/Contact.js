import React from 'react';
import '../style/Contact.css';

const Contact = () => {
    return (
        <>
            <div className='contact-section' id="contact">
                <div className='contact-heading'>Contact</div>
                <div className='contact-para'>Feel free to reach out to me via email or connect with me on LinkedIn, GitHub and watch my youtube channel for DSA. I look forward to discussing potential opportunities with you.</div>
                <div className='social-media-contact'>
                    <div className='social-media-link-contact twitter'><i className="fa-brands fa-twitter" style={{ cursor: 'pointer' }}></i></div>
                    <div className='social-media-link-contact youtube'><i className="fa-brands fa-youtube" style={{ cursor: 'pointer' }}></i></div>
                    <div className='social-media-link-contact instagram'><i className="fa-brands fa-instagram" style={{ cursor: 'pointer' }}></i></div>
                    <div className='social-media-link-contact facebook'><i className="fa-brands fa-facebook" style={{ cursor: 'pointer' }}></i></div>
                    <div className='social-media-link-contact linkedin'><i className="fa-brands fa-linkedin" style={{ cursor: 'pointer' }}></i></div>
                </div>
            </div>
        </>
    )
}

export default Contact
