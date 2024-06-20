import React from 'react';
import '../style/Resume.css';
// import {useLocation} from 'react-router-dom';

// const PDF_file = 'http://localhost:3000/resume1.pdf';

const location = window.location.href;
const PDF_file = `${location}resume1.pdf`;
const Resume = () => {
    console.log("Location::::", location);
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
                <div className='resume-para'>Results-driven software developer with over 1.5 years of experience in designing and developing web applications. Proficient in JavaScript, React, and Node.js, with a strong background in database management.</div>
                <div className='main-resume-description'>
                    <div className='resume-intro-description'>
                        <div className='resume-intro'>
                            <h4>Summary</h4>
                            <div className='person-name'>Diwakar Jha</div>
                            <div className='person-desc'>
                                <div className='description-text'>
                                    Hi, I'm Diwakar Jha, a Software developer based in Noida. I specialize in creating responsive and dynamic websites and have a passion for clean and efficient code. I have 1.5 years of experience in web development.
                                </div>
                                <div className='person-short-desc'>
                                    <div className='short-desc'>
                                        <li>Noida, Uttar-Pradesh</li>
                                        <li>+917678296368</li>
                                        <li>dkj9650964906@gmail.com</li>
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
                                    Hi, I'm Diwakar Jha, a Software developer based in Noida. With a degree in Computer Science from IIMT College of Engineering Greater Noida
                                </div>
                            </div>
                            <div className='senior-secondaryeducation'>
                                <div className='person-name'>Intermediate</div>
                                <div className='person-desc'>
                                    <div className='education-year'>2017-19</div>
                                    <div className='education-institute'>R S S International School, Noida</div>
                                    <div className='education-summary'>I Completed the Intermediate from R S S International School Noida I took the Science Stream in the Intermediate and Learn About the Science.</div>
                                </div>
                            </div>

                            <div className='junior-secondaryeducation'>
                                <div className='person-name'>Matriculation</div>
                                <div className='person-desc'>
                                    <div className='education-year'>2015-17</div>
                                    <div className='education-institute'>R S S International School, Noida</div>
                                    <div className='education-summary'>
                                        I Completed the Intermediate from R S S International School Noida. I Participated lot of the function for growth of my career.</div>
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
                                            <li>I Learn About the Frontend Skills which is the React and vue.js</li>
                                            <li>In this Company I learn about that to how to improve the skill with the Project.</li>
                                            <li>Team Collaboration to work in the Particular Project and how to deal with the Client.</li>
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
                                        This was the three months of the Internship Programmme where I Learned under my Senior Tech Lead which is the Basic of HTML, CSS and JavaScript and How to implement in the project.
                                    </div>
                                </div>
                                <div className='senior-secondaryeducation'>
                                    <div className='person-name'>DSA Intern</div>
                                    <div className='person-desc'>
                                        <div className='education-year'>2022-22</div>
                                        <div className='education-institute'>Two Waits Private LTD.</div>
                                        <div className='education-summary'>This was the three months of the Internship Programmme where I Learned About the DSA and how to build the logic to solve the Particular problem within a minimum Time and Space Complexity.</div>
                                    </div>
                                </div>

                                <div className='junior-secondaryeducation'>
                                    <h4>Coding Competition</h4>
                                    <div className='person-name'>Geeks for Geeks</div>
                                    <div className='person-desc'>
                                        <div className='education-institute'>Get the Reward Gfg T-shirt For Good Rank in Gfg Coding Competition</div>
                                        <div className='education-summary'>
                                            GFG is one of the largest website where to learn about the Technical knowledge I was Participated in 100 days to solve the DSA Problem and Get the Reward as a Famous Goodies which is GFG T-shirt.
                                        </div>
                                    </div>
                                </div>
                                <div className='junior-secondaryeducation'>
                                    <div className='person-name'>Leetcode</div>
                                    <div className='person-desc'>
                                        <div className='education-institute'>To Participate Leetcode Biweekly Contenst And Get the Rank Under 2000</div>
                                        <div className='education-summary'> To Weekly and Bi-weekly Participate in the contest where you can check the Performance in Globally according to your Rank.
                                        </div>
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
