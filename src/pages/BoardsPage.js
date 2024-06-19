import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BoardsContainer = styled.div`
    align-items: center;
    justify-content: center;
    width: 100vw;
`;

const Title = styled.h1`
    text-align: center;
    color: ${props => props.theme.darkRed};
    font-size: 2em;
    margin: 20px;
`;

const BoardsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    width: 100%;
`;

const Card = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 300px;
    height: 320px;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;
`;

const CardTitle = styled.h2`
    margin: 0;
    color: ${props => props.theme.lightRed};
`;

const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
    margin: 20px;
`;

const Image = styled.img`
    width: 130px;
    height: 130px;
    object-fit: cover;
`;

const BoardsPage = () => {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/boards/user/1', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            const boardsWithPinsPromises = data.map(board => {
                return fetch(`http://localhost:8000/pins/board/${board.id}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(pins => {
                    return {...board, pins: pins.slice(0, 4)};
                });
            });
            return Promise.all(boardsWithPinsPromises);
        })
        .then(boardsWithPins => setBoards(boardsWithPins))
        .catch(error => console.error('Error:', error));
    }, []);

    return (
        <BoardsContainer>
            <Title>Boards</Title>
            <BoardsGrid>
                {boards.map((board, index) => (
                    <Card key={index}>
                        <CardTitle>{board.name}</CardTitle>
                        <ImageContainer>
                            {board.pins.map((pin, index) => (
                                <Image key={index} src={pin.thumbnail_url} alt={pin.description} />
                            ))}
                        </ImageContainer>
                    </Card>
                ))}
            </BoardsGrid>
        </BoardsContainer>
    );
};

export default BoardsPage;