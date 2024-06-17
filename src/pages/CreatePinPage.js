import React from 'react';
import PinForm from '../components/PinForm/PinForm'; // Import the styled components
import styled from 'styled-components';

export const PinFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

.pin-form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; /* Full width */
    height: 90vh; /* 80% of the viewport height */
    overflow: auto;
  }
  
  .pin-form {
    display: flex;
    flex-direction: column;
    width: 50%; /* Half of the container's width */
    max-width: 600px; /* Set a maximum width */
    max-height: 80vh; /* Set a maximum height */
    padding: 2em;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-title {
    margin-bottom: 1em;
    text-align: center;
    color: #333;
  }
  
  .pin-label {
    margin-bottom: 0.5em;
    color: #333;
  }

  .pin-input {
    padding: 0.5em;
    margin-bottom: 1em;
    border: 1px solid ${props => props.theme.beige};
    border-radius: 4px;
    font-size: 1em; /* Regular font size */
  }

  .pin-button {
    margin-top: 20px;
    padding: 0.5em 1em;
    border: none;
    border-radius: 4px;
    background-color: ${props => props.theme.darkRed};
    color: ${props => props.theme.beige};
    cursor: pointer;
    font-size: 1em; /* Regular font size */
  }

  .pin-button:hover {
    background-color: ${props => props.theme.lightRed};
  }
`;

const CreatePinPage = () => {
  return (
    <PinFormContainer>
      <PinForm />
    </PinFormContainer>
  );
};

export default CreatePinPage;