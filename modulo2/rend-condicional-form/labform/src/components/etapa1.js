import React from "react";
import styled from "styled-components";

const Dados = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;

`


export default class Etapa1 extends React.Component{
    state = {
        nome: "",
        idade: "",
        email: "",

    }

    changeNome = (event) => {
      this.setState({nome: event.target.value})

    };

    changeIdade = (event) => {
      this.setState ({idade: event.target.value})

    };

    changeEmail = (event)=>{
      this.setState ({email: event.target.value})

    }

    render() {
        return (
            <Dados>
                <h1>ETAPA 1 - DADOS GERAIS</h1>

                <div>
                  <h3>1. Qual o seu nome?</h3>
                  <input
                  placeholder="Digite seu nome aqui"
                  value={this.state.nome}
                  onChange = {this.changeNome}
                  />
                </div>

                <div>
                  <h3>2. Qual sua idade?</h3>
                  <input
                  placeholder="Digite sua idade aqui"
                  value={this.state.idade}
                  onChange = {this.changeIdade}
                  />
                </div>
                
                <div>
                  <h3>3. Qual seu e-mail?</h3>
                  <input
                  placeholder="Digite seu e-mail aqui"
                  value={this.state.email}
                  onChange = {this.changeEmail}
                  />
                </div>

                <div>
                  <h3>4. Qual sua escolaridade?</h3>
                  <select>
                      <option>Ensino médio incompleto</option>
                      <option>Ensino médio completo</option>
                      <option>Ensino superior incompleto</option>
                      <option>Ensino superior completo</option>
                  </select>
                </div>

            </Dados>
        

        
        )
        
    }
}