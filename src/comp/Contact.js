import React from 'react';
import '../style/Contact.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
const Contact = () => {
    return (
        <>
            <div className='contact-section' id="contact">
                <div className='contact-heading'>Contact</div>
                <div className='contact-para'>I welcome inquiries and am available for discussions about potential opportunities, collaboration, or any questions you may have. Feel free to reach out via email or connect with me on LinkedIn. I look forward to engaging with you!</div>
                <div className='social-media-contact'>
                    <Router>
                        <Link>
                            <div className='social-media-link-contact twitter'><i className="fa-brands fa-twitter" style={{ cursor: 'pointer' }}></i></div>
                        </Link>
                        <Link to='https://www.youtube.com/channel/UCjZGcg-NwI96hksQsIcQJDA' target='_blank'>
                            <div className='social-media-link-contact youtube'><i className="fa-brands fa-youtube" style={{ cursor: 'pointer' }}></i></div>
                        </Link>
                        <Link>
                            <div className='social-media-link-contact instagram'><i className="fa-brands fa-instagram" style={{ cursor: 'pointer' }}></i></div>
                        </Link>
                        <Link>
                            <div className='social-media-link-contact facebook'><i className="fa-brands fa-facebook" style={{ cursor: 'pointer' }}></i></div>
                        </Link>
                        <Link to='https://www.linkedin.com/in/diwakar-jha-22a436218/' target='_blank'>
                            <div className='social-media-link-contact linkedin'><i className="fa-brands fa-linkedin" style={{ cursor: 'pointer' }}></i></div>
                        </Link>
                    </Router>





                </div>
            </div>
        </>
    )
}

export default Contact
