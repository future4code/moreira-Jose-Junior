import React from "react";
import styled from "styled-components"


const Dados = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`


export default class Final extends React.Component{
    state = {

    }

    render() {
        return (
        <Dados>
            <h1>Muito obrigado por participar 
            de nossa pesquisa! Em breve entraremos em contato.</h1>
            </Dados>
        )
    }
}