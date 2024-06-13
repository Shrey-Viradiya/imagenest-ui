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
      // Try to get data from localStorage
      const cachedPins = localStorage.getItem('pins');
      const timestamp = localStorage.getItem('timestamp');
  
      const oneMinute = 60 * 1000; // 60,000 milliseconds
      const isDataOld = Date.now() - timestamp > oneMinute;
  
      if (cachedPins && !isDataOld) {
        // If there's data in localStorage and it's not old, use it
        setPins(shuffleArray(JSON.parse(cachedPins)));
      } else {
        // If there's no data in localStorage or it's old, fetch it
        fetch('http://127.0.0.1:8000/pins/')
          .then(response => response.json())
          .then(data => {
            // Store the fetched data and the current timestamp in localStorage
            localStorage.setItem('pins', JSON.stringify(data));
            localStorage.setItem('timestamp', Date.now());
            setPins(shuffleArray(data));
          })
          .catch(error => console.error('Error:', error));
      }
    }, []);
  
    return (
      <PinContainer>
        {pins.map(pin => <PinCard key={pin.id} pin={pin} />)}
      </PinContainer>
    );
  };
  
  export default HomePage;
  
