import React from "react";
import styled from "styled-components";



const formulario = styled.div`
background-color: azure;
`

export default class Forms extends React.Component {

    state = {
        usuario: "",
        mensagem: ""

    }

    changeUsuario = (event)=> {
        this.setState ({usuario: event.target.value})

    }

    changeMensagem = (event) => {
        this.setState ({mensagem: event.target.value})

    }

    botaoEnviar = () => {

    }


    render () {
        return (
            <formulario>
                <input
                placeholder="Usuário"
                value={this.state.usuario}
                onChange={this.changeUsuario}
                />

                <input
                placeholder="Mensagem"
                value={this.state.mensagem}
                onChange={this.changeMensagem}
                />

                <button>Enviar</button>
            </formulario>
        )
    }
}