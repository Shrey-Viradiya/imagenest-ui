import React, { useEffect, useState } from 'react';
import PinCard from '../components/PinCard/PinCard';
import styled from 'styled-components';

const PinContainer = styled.div`
  column-count: 6;
  column-gap: 10px;
  margin: 50px auto 0; // Adjust 50px to the height of your navigation bar
  width: 80%;
`;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

const HomePage = () => {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/pins/board/1')
      .then(response => response.json())
      .then(data => setPins(shuffleArray(data)))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <PinContainer>
      {pins.map(pin => <PinCard key={pin.id} pin={pin} />)}
    </PinContainer>
  );
};

export default HomePage;