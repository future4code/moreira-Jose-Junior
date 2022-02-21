import React from 'react';
import styled from "styled-components"

const BigcardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`;

const CardImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;

`;
const Texto = styled.h4`
margin-bottom: 15px;
`;
const Card2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <BigcardContainer>
            <CardImg src={ props.imagem } />
            <Card2>
                <Texto>{ props.nome }</Texto>
                <p>{ props.descricao }</p>
            </Card2>
        </BigcardContainer>
    )
}

export default CardGrande;