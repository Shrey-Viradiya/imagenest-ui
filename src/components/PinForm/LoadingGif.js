import React from 'react';
import styled, { keyframes } from 'styled-components';

const l3 = keyframes`
  100% {background-position: right -30px top 0}
`;

export const Loader = styled.div`
  width: 120px;
  height: 20px;
  transform: skewX(-45deg);
  background: 
    linear-gradient(#f03355 0 0) left -30px top 0/30px 20px no-repeat 
    #ccc;
  animation: ${l3} 1s infinite linear;
`;

const LoadingGifContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh; // adjust this to change the vertical position of the loader
`;


const LoadingGif = () => {
    return (
        <div className="loading-gif">
           <LoadingGifContainer>
            <Loader />
        </LoadingGifContainer>
        </div>
    );
};

export default LoadingGif;