import React from "react";
import styled from "styled-components"


const Dados = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
`

export default class Etapa3 extends React.Component{
    state = {
        motivo:"",

    }

    changeMotivo = (event) => {
        this.setState({motivo: event.target.value})

    }

    render () {
        return (
            <Dados>
                <h1>ETAPA - 3 INFORMAÕES GERAIS DE ENSINO</h1>

                <div>
                    <h3>5. Porque você não terminou um curso de graduação?</h3>
                    <input
                    placeholder="Digite o motivo aqui"
                    value={this.state.motivo}
                    onChange = {this.changeMotivo}
                    />
                </div>

                <div>
                    <h3>6. Você fez algum curso coplementar?</h3>
                    <select>
                        <option>Curso de inglês</option>
                        <option>Curso técnico</option>
                        <option>Outros tipos de cursos</option>
                    </select>
                </div>
            </Dados>
        )
    }
}