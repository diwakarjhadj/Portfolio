import React from 'react';
import '../style/Contact.css';

const Contact = () => {
    return (
        <>
            <div className='contact-section' id="contact">
                <div className='contact-heading'>Contact</div>
                <div className='contact-para'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</div>
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
