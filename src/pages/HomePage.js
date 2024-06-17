import React, { useEffect, useState } from 'react';
import PinCard from '../components/PinCard/PinCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PinContainer = styled.div`
  column-gap: 10px;
  margin: 50px auto 0;
  width: 80%;

  @media (max-width: 750px) {
    column-count: 2;
  }

  @media (min-width: 750px) and (max-width: 1000px) {
    column-count: 3;
  }

  @media (min-width: 1000px) and (max-width: 1400px) {
    column-count: 4;
  }

  @media (min-width: 1400px) and (max-width: 1550px) {
    column-count: 5;
  }

  @media (min-width: 1550px) {
    column-count: 6;
  }
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
        fetch('http://127.0.0.1:8000/pins?number=100')
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
        {pins.map(pin => (
          <Link to={`/pin/${pin.id}`} key={pin.id} style={{ textDecoration: 'none' }}>
          <PinCard pin={pin} />
          </Link>
        ))}
      </PinContainer>
    );
  };
  
  export default HomePage;
  
