import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  width: 200px;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px ${props => props.theme.darkRed};
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

const PinCard = ({ pin }) => {
console.log(pin)
  return (
    <Card>
      <Image src={pin.image_url} alt={pin.title} />
      <Title>{pin.title}</Title>
      <Description>{pin.description}</Description>
    </Card>
  );
};

export default PinCard;