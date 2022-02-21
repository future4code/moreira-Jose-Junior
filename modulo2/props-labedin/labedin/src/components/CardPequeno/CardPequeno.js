import React from 'react';
import styled from "styled-components"

const LittleCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px 5px;
    margin-bottom: 5px;
    height: 100px;
`;

const LittleImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`;

const Littleh4 = styled.h4`
    margin-bottom: 0px;
    margin-right: 8px ;
`;

const LittleDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`



function CardPequeno(props) {
    return (
        <div>
            <LittleCardContainer>
               <LittleImg src={props.imagem} />
               <LittleDiv>
                <Littleh4>E-mail:</Littleh4>
                </LittleDiv>
                <LittleDiv>
                <p>{props.endemail}</p>
               </LittleDiv>
            </LittleCardContainer>
        
        </div>
    )
}

export default CardPequeno;