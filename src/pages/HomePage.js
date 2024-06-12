import React, { useEffect, useState } from 'react';
import PinCard from '../components/PinCard/PinCard';

const HomePage = () => {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/pins/board/1')
      .then(response => response.json())
      .then(data => setPins(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      {pins.map(pin => <PinCard key={pin.id} pin={pin} />)}
    </div>
  );
};

export default HomePage;