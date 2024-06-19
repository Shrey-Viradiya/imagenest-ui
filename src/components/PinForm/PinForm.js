import React, { useState, useEffect } from 'react';
import LoadingGif from './LoadingGif';
import styled from 'styled-components';

const Form = styled.form`
max-height: calc(100vh - 60px); 
overflow-y: auto;
`;

const CheckboxInput = styled.input`
  margin: 10px; /* Adjust as needed */
`;

const PinForm = () => {

  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [isPrivate, setIsPrivate] = useState(false); 
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/boards/user/1/')
      .then(response => response.json())
      .then(data => setBoards(data));
  }, []);

  const handleBoardChange = (event) => {
    setSelectedBoard(event.target.value);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('board_id', selectedBoard);
    formData.append('owner_id', 1);
    formData.append('is_private', isPrivate);
    formData.append('file', file);

    const response = await fetch('http://localhost:8000/pins/create/', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    console.log(data);
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);

    // Create a URL representing the file
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handleIsPrivateChange = (event) => {
    setIsPrivate(event.target.checked);
  };

  return (
    <div className="pin-form-container">
      <Form className="pin-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Create a New Pin</h2>
        <label className="pin-label" htmlFor="title">Title</label>
        <input 
          className="pin-input" 
          id="title" 
          type="text" 
          placeholder="Enter pin title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="pin-label" htmlFor="description">Description</label>
        <input 
          className="pin-input" 
          id="description" 
          type="text" 
          placeholder="Enter pin description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
        />
        <label className="pin-label" htmlFor="board">Board</label>
        <select 
          className="pin-input" 
          id="board" 
          value={selectedBoard} 
          onChange={handleBoardChange}
        >
          {boards.map(board => (
            <option key={board.id} value={board.id}>{board.name}</option>
          ))}
        </select>
        <label className="pin-label" htmlFor="file">Image</label>
        <input 
          className="pin-input" 
          id="file" 
          type="file" 
          onChange={handleFileChange}
        />
        {previewUrl && <img src={previewUrl} alt="Preview" />}
        <label>
        Private:
        <CheckboxInput type="checkbox" checked={isPrivate} onChange={handleIsPrivateChange} />
      </label>
        <button className="pin-button" type="submit">Create Pin</button>

        {isLoading && <LoadingGif />}
        {isSubmitted && <p>Pin created successfully!</p>}
      </Form>

    </div>
  );
};

export default PinForm;