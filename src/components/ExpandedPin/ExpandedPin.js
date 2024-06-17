import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LoadingGif from '../PinForm/LoadingGif';

const ExpandedPinContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 25px;
    border-radius: 8px;
    height: 80vh;
    min-width: 50vw;
    box-sizing: border-box;

    transition: box-shadow 0.3s ease-in-out;

    &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
`;

const ImageContainer = styled.div`
    flex: 0 0 auto;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 30vw;
    max-width: 60vw;
`;

const Image = styled.img`
    height: 100%;
    width: auto;
    object-fit: cover;
`;

const ContentContainer = styled.div`
    flex: 1;
    height: 100%;
    padding: 16px;
    min-width: 20vw;
    max-width: 30vw;
`;

const Title = styled.h2`
    font-size: 20px;
    margin-bottom: 8px;
    text-align: left;
    color: ${props => props.theme.darkRed};
`;

const Description = styled.p`
    font-size: 16px;
    color: #666;
    text-align: left;
`;

const ExpandedPin = ({ imageSrc, title, description }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const img = new window.Image();
        img.onload = () => setLoading(false);
        img.src = imageSrc;
    }, [imageSrc]);

    return (
        <ExpandedPinContainer>
            <ImageContainer>
                {loading ? <LoadingGif /> : <Image src={imageSrc} alt="Pin Image" />}
            </ImageContainer>
            <ContentContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </ContentContainer>
        </ExpandedPinContainer>
    );
};

export default ExpandedPin;