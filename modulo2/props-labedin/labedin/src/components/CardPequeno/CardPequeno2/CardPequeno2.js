import React from 'react';
import styled from "styled-components"

const LittleCard2Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px 5px;
    margin-bottom: 5px;
    height: 100px;
`;

const LittleCard2Imag = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`;

const Littleh4 = styled.h4`
    margin-bottom: 0px;
    margin-right: 8px ;
`;

const LittleCard3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`




function CardPequeno2(props) {
    return (
        <div>
            <LittleCard2Container>
               <LittleCard2Imag src={props.imagem} />
               <LittleCard3>
                <Littleh4>E-mail:</Littleh4>
                </LittleCard3>
                <LittleCard3>
                <p>{props.endemora}</p>
               </LittleCard3>
            </LittleCard2Container>
        
        </div>
    )
}

export default CardPequeno2;