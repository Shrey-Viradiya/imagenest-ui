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

const HomePage = () => {
  const [pins, setPins] = useState([]);
  const [columns, setColumns] = useState([[], [], [], [], [], [], [], []]); // Adjust the number of columns based on your layout
  const [pinIds, setPinIds] = useState(new Set());

  const fetchPins = async () => {
    const response = await fetch(`http://localhost:8000/pins?number=30`);
    const data = await response.json();
    const newPins = data.filter(newPin => !pins.some(pin => pin.id === newPin.id));
    setPins(oldPins => [...oldPins, ...newPins]);
  };

  useEffect(() => {
    fetchPins();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      fetchPins();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const newColumns = [...columns];
    pins.forEach(pin => {
      if (!pinIds.has(pin.id)) {
        const shortestColumn = newColumns.reduce((shortest, current, i) => current.length < shortest.length ? current : shortest, newColumns[0]);
        shortestColumn.push(pin);
        setPinIds(oldPinIds => new Set([...oldPinIds, pin.id]));
      }
    });
    setColumns(newColumns);
  }, [pins]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '100vw'}}>
      {columns.map((column, i) => (
        <div key={i}>
          {column.map(pin => (
            <Link to={`/pin/${pin.id}`} key={pin.id} style={{ textDecoration: 'none' }}>
              <PinCard pin={pin} />
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};
  
  
export default HomePage;
  
