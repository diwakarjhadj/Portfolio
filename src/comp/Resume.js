import React from 'react';
// import { Link } from 'react-router-dom';
import '../style/Resume.css';


const PDF_file = 'http://localhost:3000/resume2.pdf';
const Resume = () => {

    const downloadFile = (url) => {
        fetch(url).then((response) => response.blob()).then((blob) => {
            const blobURL = window.URL.createObjectURL(new Blob([blob]));
            const FileName = url.split('/').pop()
            const aTag = document.createElement('a');
            aTag.href = blobURL;
            aTag.setAttribute('download', FileName);
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
        })

    }
    return (
        <>
            <div className='resume-section' id="resume">
                <div className='resume-heading'>Resume</div>
                <div className='resume-para'>In my career journey, I've honed a diverse set of skills that uniquely qualify me for success in my field and industry. From technical proficiency to interpersonal finesse, I bring a comprehensive skill set to the table. Here's a glimpse of what I offer:</div>
                <div className='main-resume-description'>
                    <div className='resume-intro-description'>
                        <div className='resume-intro'>
                            <h4>Summary</h4>
                            <div className='person-name'>Diwakar Jha</div>
                            <div className='person-desc'>
                                <div className='description-text'>
                                    My Name is Diwakar Jha And I'm the Software Developer Engineer And Completed my Bachelor Degree Which is well reputed Course in B.TECH( Bachelor Of Technology.) and My Branch is Computer Science And Engineering which is Four Year Programming Course. My B.TECH Batch is(2019-2023).
                                </div>
                                <div className='person-short-desc'>
                                    <div className='short-desc'>
                                        <li>Noida, Uttar-Pradesh</li>
                                        <li>(123) 456-7891</li>
                                        <li>abc@Example.com</li>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='education-intro'>
                            <h4>Education</h4>
                            <div className='person-name'>Bachelor of Technology (B.Tech)</div>
                            <div className='person-desc'>
                                <div className='education-year'>2019-23</div>
                                <div className='education-institute'>IIMT College of Engineering, Greater Noida</div>
                                <div className='education-summary'>
                                    I had completed my B.Tech from IIMT College Of Engineering Which is Situated in Greater Noida, My College is Affiliated With Prestigious University which is AKTU(A.P.J. Abdul Kalam Technical University.)
                                </div>
                            </div>
                            <div className='senior-secondaryeducation'>
                                <div className='person-name'>Intermediate</div>
                                <div className='person-desc'>
                                    <div className='education-year'>2017-19</div>
                                    <div className='education-institute'>R S S International School, Noida</div>
                                    <div className='education-summary'>
                                        I had Completed my Intermediate from R S S International School  Which is Situated in Noida, My School is Affiliated With Prestigious BOARD which is CBSE (Central Board of Secondary Education.)
                                    </div>
                                </div>
                            </div>

                            <div className='junior-secondaryeducation'>
                                <div className='person-name'>Matriculation</div>
                                <div className='person-desc'>
                                    <div className='education-year'>2015-17</div>
                                    <div className='education-institute'>R S S International School, Noida</div>
                                    <div className='education-summary'>
                                        I had Completed my Matriculation from R S S International School  Which is Situated in Noida, My School is Affiliated With Prestigious BOARD which is CBSE (Central Board of Secondary Education.)
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='resume-Experience'>
                        <div className='resume-experience-description'>
                            <div className='resume-experience-intro'>
                                <h4>Professional Experience</h4>
                                <div className='person-name'>Software Developer Engineer (SDE-I) </div>
                                <div className='person-desc'>
                                    <div className='education-year'>2023-present</div>
                                    <div className='education-institute'>w3Villa Technology private Ltd.</div>
                                    <div className='person-short-desc'>
                                        <div className='short-desc'>
                                            <li>Lead in the design, development, and implementation the Technical Skills in the Project, To Gain the Technical Experience of the company.</li>
                                            <li>Aspiring the New Skills to Continuously Growing My Carrer as well as Company's Benefit.</li>
                                            <li>This is my Training Certificate of W3 Villa: <a href="https://drive.google.com/file/d/1DYQE9enJroKXQDFVEFEku_Q6gxpBSx9g/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Certificate</a></li>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='education-intro'>
                                <h4>Internship</h4>
                                <div className='person-name'>Summer Intern</div>
                                <div className='person-desc'>
                                    <div className='education-year'>2022-22</div>
                                    <div className='education-institute'>ConsultIt Private LTD.</div>
                                    <div className='education-summary'>
                                        I have Successfully completed my Summer Internship of 3 months in which I have got the Knowldge About my the Technical Skills which is React and Node.js This is the Certificate: <a href="https://drive.google.com/file/d/1NRWhW9n-z1JsNtfx1kx_odJem02iiCQ_/view?usp=sharing" target="_blank" rel="noopener noreferrer">Software Engineer Intern</a>
                                    </div>
                                </div>
                                <div className='senior-secondaryeducation'>
                                    <div className='person-name'>DSA Intern</div>
                                    <div className='person-desc'>
                                        <div className='education-year'>2022-22</div>
                                        <div className='education-institute'>Two Waits Private LTD.</div>
                                        <div className='education-summary'>
                                        I have Successfully completed my DSA (Data Structure and Algorithm) Internship of 1 months in which I have got the Knowledge About my the Problem Solving Skills. This is the Certificate: <a href="https://drive.google.com/file/d/1OocKgoQUXQgOX0p7wBOPCgHgS9g16HC4/view?usp=sharing" target="_blank" rel="noopener noreferrer">DSA Certificate</a>
                                        </div>
                                    </div>
                                </div>

                                <div className='junior-secondaryeducation'>
                                    <h4>Coding Competition</h4>
                                    <div className='person-name'>Geeks for Geeks</div>
                                    <div className='person-desc'>
                                        <div className='education-institute'>Get the Reward Gfg T-shirt For Good Rank in Gfg Coding Competition</div>
                                        <div className='education-summary'>
                                            I have Successfully Completed My 8 week Winter Interview Preperation which is organized by mr Sandeep jain sir They Guide about the Technical skills as well as Soft Skills This is the Certificate: <a href="https://drive.google.com/file/d/1u6kR_-SmWbbP3oMWnmEBLFri3qDWK_26/view?usp=sharing" target="_blank" rel="noopener noreferrer">Course Completion</a>
                                            <p>I got the Gfg Recommendation Course which is Organized by the Gfg of Bi-wizard 5.0 coding Contest By Sandeep Jain Sir <a href="https://drive.google.com/file/d/1LmFVrmRW70TttriP4vDU0GMPN0B-yRTy/view?usp=sharing" target="_blank" rel="noopener noreferrer">Bi-wizard Certificate</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='junior-secondaryeducation'>
                                    <div className='person-name'>Leetcode</div>
                                    <div className='person-desc'>
                                        <div className='education-institute'>To Participate Leetcode Biweekly Contenst And Get the Rank Under 2000</div>
                                        <div className='education-summary'>I am Participate the Leetcode Weekly and Bi-Weekly Coding Contest which is Organizing by the Leetcode Community.</div>
                                    </div>
                                    <div className='resume-pdf'><button onClick={() => { downloadFile(PDF_file) }}>Download PDF</button></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume
