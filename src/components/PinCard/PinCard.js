import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LoadingGif from '../PinForm/LoadingGif';

const Card = styled.div`
  break-inside: avoid;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  width: 200px;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px ${props => props.theme.purpleBlue};
  }
`;

const Image = styled.img`
  display: inline-block;
  vertical-align: top;
  width: 100%;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 18px;
  color: ${props => props.theme.darkRed};
`;

const Description = styled.p`
  font-size: 14px;
  color: ${props => props.theme.lightRed};
`;

const ImageContainer = styled.div`
`;

const PinCard = ({ pin }) => {
  const [loading, setLoading] = useState(true);

  const shortDescription = pin.description.length > 25
    ? `${pin.description.slice(0, 25)}...`
    : pin.description;

    useEffect(() => {
      const img = new window.Image();
      img.onload = () => setLoading(false);
      img.src = pin.thumbnail_url;
  }, [pin.thumbnail_url]);

  return (
    <Card>
      <ImageContainer>
                {loading ? <LoadingGif /> : <Image src={pin.thumbnail_url} alt={pin.title} />}
      </ImageContainer>
      <Title>{pin.title}</Title>
      <Description>{shortDescription}</Description>
    </Card>
  );
};

export default PinCard;