import React from 'react';
import '../style/Project.css';
import projectImage1 from '../img/portfolio-1.jpg';
import projectImage2 from '../img/portfolio-2.jpg';
import projectImage3 from '../img/portfolio-3.jpg';
const Project = () => {
    return (
        <>
            <div className='project-section' id="project">
                <div className='project-heading'>Project</div>
                <div className='project-para'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</div>
                <div className='main-project-image'>
                    <div className='project-image1'>
                        <div className='project-image'>
                            <img src={projectImage1} alt="Internet Connection" />
                            <div className='projectname-detail'>
                                <div className='projectname' title="project name">
                                    +
                                </div>
                                <div className='project-detail' title="code link">
                                    <i className="fa-solid fa-link"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project-image2'>
                        <div className='project-image'>
                            <img src={projectImage2} alt="Internet Connection" />
                            <div className='projectname-detail'>
                                <div className='projectname' title="project name">
                                    +
                                </div>
                                <div className='project-detail' title="code link">
                                    <i className="fa-solid fa-link"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project-image3'>
                        <div className='project-image'>
                            <img src={projectImage3} alt="Internet Connection" />
                            <div className='projectname-detail'>
                                <div className='projectname' title="project name">
                                    +
                                </div>
                                <div className='project-detail' title="code link">
                                    <i className="fa-solid fa-link"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Project;
