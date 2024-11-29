import React from 'react';
import './finalsubmitmodal.css';

const FinalSubmitModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>Are you ready to submit?</p>
        <button className="modal-btn" onClick={onConfirm}>OK</button>
        <button className="modal-btn" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default FinalSubmitModal;  // Make sure it's a default export
