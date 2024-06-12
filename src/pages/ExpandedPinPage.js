import React from 'react';
import { useParams } from 'react-router-dom';
import ExpandedPin from '../components/ExpandedPin/ExpandedPin';

const ExpandedPinPage = () => {
  const { id } = useParams();
  // Fetch the pin with the given ID from your API and store it in state
  // For now, we'll use a placeholder pin
  const pin = { id, title: '', description: '', image: '' };

  return (
    <div>
      <ExpandedPin pin={pin} />
    </div>
  );
};

export default ExpandedPinPage;