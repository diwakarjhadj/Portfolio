import React, { useState } from 'react';
import ImageModal from './ImageModal';
import '../style/Project.css';
import Kivo from '../img/Kivo.png';
import Chatwoot from '../img/Chatwoot1.png';
import pprtrl from '../img/pprtrl1.png';
import DocSign from '../img/DocSign1.png';
import Ribago from '../img/Ribago1.png';
const Project = () => {
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    }
    return (
        <>
            <div className='project-section' id="project">
                <div className='project-heading'>Project</div>
                <div className='project-para'>Here are some of the projects I have worked on, which demonstrate my skills and passion for web development, Each project showcases different aspects of my expertise, from specific skills in, front-end development and Backend to another skills database management.</div>
                <div className='main-project-image'>
                    <div className='project-image1'>
                        <div className='project-image'>
                            {/* <img src={projectImage1} alt="Internet Connection" /> */}
                            <img src={Kivo} alt='Internet Connection'/>
                            <div className='projectname-detail'>
                                <div className='projectname' title="project name" onClick={handleOpenModal}>
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
                            <img src={Chatwoot} alt="Internet Connection" />
                            <div className='projectname-detail'>
                                <div className='projectname' title="project name" onClick={handleOpenModal}>
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
                            <img src={pprtrl} alt="Internet Connection" />
                            <div className='projectname-detail'>
                                <div className='projectname' title="project name" onClick={handleOpenModal}>
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
                            <img src={DocSign} alt="Internet Connection" />
                            <div className='projectname-detail'>
                                <div className='projectname' title="project name" onClick={handleOpenModal}>
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
                            <img src={Ribago} alt="Internet Connection" />
                            <div className='projectname-detail'>
                                <div className='projectname' title="project name" onClick={handleOpenModal}>
                                    +
                                </div>
                                <div className='project-detail' title="code link">
                                    <i className="fa-solid fa-link"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='image-modal'>
                    {/* <ProjectimageCarousel/> */}
                    {/* <button onClick={handleOpenModal}>Open Modal</button> */}
                    <ImageModal show={showModal} handleClose={handleCloseModal} />
                </div>
            </div>
        </>

    )
}

export default Project;
