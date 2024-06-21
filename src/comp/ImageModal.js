// Modal.js
import React from 'react';
import ProjectimageCarousel from './ProjectimageCarousel'
import '../style/ImageModal.css'; // optional: for modal styling

const Modal = ({ show, handleClose, objectId }) => {
  return (
    show && (
      <div className="modal-backdrop">
        <div className="modal-content">
          <button className="modal-close" onClick={handleClose}>
            &times;
          </button>
          <div className='image-modal'>
            <ProjectimageCarousel objectid={objectId}/>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
