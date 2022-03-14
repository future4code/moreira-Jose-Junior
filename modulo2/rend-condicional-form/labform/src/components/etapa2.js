import React from "react";
import styled from "styled-components";


const Dados = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
`


export default class Etapa2 extends React.Component {
    state = {
        curso: "",
        local: ""

    }

    changeCurso = (event)=> {
        this.setState ({curso: event.target.value})

    };
    changeLocal = (event) =>{
        this.setState ({local: event.target.value})

    }

    render () {
        return (
            <Dados>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <div>
                    <h3>5. Qual seu curso?</h3>
                    <input
                    placeholder="Digite seu curso aqui"
                    value={this.state.curso}
                    onChange ={this.changeCurso}
                    />

                </div>

                <div>
                    <h3>6. Qual a unidade de ensino?</h3>
                    <input
                    placeholder="Digite onde estudou"
                    value={this.state.local}
                    onChange = { this.changeLocal}
                    />
                </div>
            </Dados>
        )
    }
}