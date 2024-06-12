import React, { useEffect, useState } from 'react';
import PinCard from '../components/PinCard/PinCard';
import styled from 'styled-components';

const PinContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
  justify-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
`;

const HomePage = () => {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/pins/board/1')
      .then(response => response.json())
      .then(data => setPins(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <PinContainer>
      {pins.map(pin => <PinCard key={pin.id} pin={pin} />)}
    </PinContainer>
  );
};

export default HomePage;