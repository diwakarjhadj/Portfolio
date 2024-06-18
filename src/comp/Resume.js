import React from 'react';
import '../style/Resume.css';


const PDF_file = 'http://localhost:3000/resume1.pdf';
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
                <div className='resume-para'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</div>
                <div className='main-resume-description'>
                    <div className='resume-intro-description'>
                        <div className='resume-intro'>
                            <h4>Summary</h4>
                            <div className='person-name'>Diwakar Jha</div>
                            <div className='person-desc'>
                                <div className='description-text'>
                                    Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.
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
                                    Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.
                                </div>
                            </div>
                            <div className='senior-secondaryeducation'>
                                <div className='person-name'>Intermediate</div>
                                <div className='person-desc'>
                                    <div className='education-year'>2017-19</div>
                                    <div className='education-institute'>R S S International School, Noida</div>
                                    <div className='education-summary'>
                                        Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.
                                    </div>
                                </div>
                            </div>

                            <div className='junior-secondaryeducation'>
                                <div className='person-name'>Matriculation</div>
                                <div className='person-desc'>
                                    <div className='education-year'>2015-17</div>
                                    <div className='education-institute'>R S S International School, Noida</div>
                                    <div className='education-summary'>
                                        Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.
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
                                            <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                                            <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
                                            <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
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
                                        Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.
                                    </div>
                                </div>
                                <div className='senior-secondaryeducation'>
                                    <div className='person-name'>DSA Intern</div>
                                    <div className='person-desc'>
                                        <div className='education-year'>2022-22</div>
                                        <div className='education-institute'>Two Waits Private LTD.</div>
                                        <div className='education-summary'>
                                            Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.
                                        </div>
                                    </div>
                                </div>

                                <div className='junior-secondaryeducation'>
                                    <h4>Coding Competition</h4>
                                    <div className='person-name'>Geeks for Geeks</div>
                                    <div className='person-desc'>
                                        <div className='education-institute'>Get the Reward Gfg T-shirt For Good Rank in Gfg Coding Competition</div>
                                        <div className='education-summary'>
                                            Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.
                                        </div>
                                    </div>
                                </div>
                                <div className='junior-secondaryeducation'>
                                    <div className='person-name'>Leetcode</div>
                                    <div className='person-desc'>
                                        <div className='education-institute'>To Participate Leetcode Biweekly Contenst And Get the Rank Under 2000</div>
                                        <div className='education-summary'>
                                            Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.
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
