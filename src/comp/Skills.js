import React from 'react'
import '../style/Skills.css';
const Skills = () => {
    return (
        <>
            <div className='skills-section' id='skills'>
                <div className='skills-heading'>Skills</div>
                <div className='skills-para'>
                Welcome to my skills section, where I showcase my professional Skills that empower me to excel in my field and industry. With a passion for specific aspect or niche, I bring a unique blend of technical proficiency, creative problem-solving, and collaborative spirit to every project. My skills are not just a list but a testament to my commitment to staying at the forefront of industry and delivering exceptional results.
                </div>
                <div className='skills-progress'>
                    <div className='techskill-progress'>
                        <div className='main-skillperformance'>
                            <div className='skillname-rate'>
                                <div className='skills-name'>HTML</div>
                                <div className='skills-rate'>100%</div>
                            </div>

                            <div className="progress  skill-performance">
                                <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='main-skillperformance'>
                            <div className='skillname-rate'>
                                <div className='skills-name'>CSS</div>
                                <div className='skills-rate'>90%</div>
                            </div>

                            <div className="progress  skill-performance">
                                <div className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                        </div>
                        <div className='main-skillperformance'>
                            <div className='skillname-rate'>
                                <div className='skills-name'>JAVASCRIPT</div>
                                <div className='skills-rate'>75%</div>
                            </div>
                            <div className="progress skill-performance">
                                <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='main-skillperformance'>
                            <div className='skillname-rate'>
                                <div className='skills-name'>JAVA</div>
                                <div className='skills-rate'>70%</div>
                            </div>
                            <div className="progress skill-performance">
                                <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='main-skillperformance'>
                            <div className='skillname-rate'>
                                <div className='skills-name'>C++</div>
                                <div className='skills-rate'>80%</div>
                            </div>
                            <div className="progress skill-performance">
                                <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                    </div>
                    <div className='frameworkskill-progress'>
                        <div className='main-skillperformance'>
                            <div className='skillname-rate'>
                                <div className='skills-name'>Node</div>
                                <div className='skills-rate'>80%</div>
                            </div>
                            <div className="progress skill-performance">
                                <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='main-skillperformance'>
                            <div className='skillname-rate'>
                                <div className='skills-name'>React</div>
                                <div className='skills-rate'>85%</div>
                            </div>
                            <div className="progress skill-performance">
                                <div className="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='main-skillperformance'>
                            <div className='skillname-rate'>
                                <div className='skills-name'>Vue</div>
                                <div className='skills-rate'>60%</div>
                            </div>
                            <div className="progress skill-performance">
                                <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className='main-skillperformance'>
                            <div className='skillname-rate'>
                                <div className='skills-name'>Git Hub</div>
                                <div className='skills-rate'>65%</div>
                            </div>
                            <div className="progress skill-performance">
                                <div className="progress-bar" role="progressbar" style={{ width: "65%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className='main-skillperformance'>
                            <div className='skillname-rate'>
                                <div className='skills-name'>Docker</div>
                                <div className='skills-rate'>50%</div>
                            </div>
                            <div className="progress skill-performance">
                                <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Skills
