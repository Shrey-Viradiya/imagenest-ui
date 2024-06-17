import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ExpandedPin from '../components/ExpandedPin/ExpandedPin';
import LoadingGif from '../components/PinForm/LoadingGif';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
`;

const ExpandedPinPage = () => {
  const { id } = useParams();
  const [pin, setPin] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/pins/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setPin(data);
      setIsLoading(false);
    })
    .catch(error => {
      console.error('Error:', error);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return <LoadingGif />;
  }

  return (
    <Container>
      <ExpandedPin imageSrc={pin.image_url} title={pin.title} description={pin.description} />
    </Container>
  );
};

export default ExpandedPinPage;