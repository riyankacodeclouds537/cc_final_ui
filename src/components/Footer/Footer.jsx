import React, { useState } from 'react';
import './footer.css';
import FinalSubmitModal from '../FinalSubmitModal/FinalSubmitModal';
import { toast, ToastContainer } from 'react-toastify';  // Correct import for toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css';  // Importing the Toastify CSS

const Footer = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  // Function to handle Final Submit button click
  const handleSubmitClick = () => {
    setModalVisible(true); // Show the modal when the button is clicked
  };

  // Function to handle "OK" button click in the modal (confirm submit)
  const handleConfirmSubmit = () => {
    setModalVisible(false); // Hide the modal
    toast.success('Exam submitted successfully!', { 
      
      autoClose: 3000,
    });
    // Handle the actual form submission here
  };

  // Function to handle "Cancel" button click in the modal
  const handleCancelSubmit = () => {
    setModalVisible(false); // Close the modal without submitting
  };

  return (
    <div className="footer">
      {/* Final Submit Button */}
      <button onClick={handleSubmitClick}>Final Submit</button>

      {/* Modal Component */}
      {isModalVisible && (
        <FinalSubmitModal
          onConfirm={handleConfirmSubmit}
          onCancel={handleCancelSubmit}
        />
      )}

      {/* ToastContainer to display the toast */}
      <ToastContainer />
    </div>
  );
};

export default Footer;
