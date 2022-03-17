import React from "react";
import styled from "styled-components";



const formulario = styled.div`
border: 5px;
`



export default class Forms extends React.Component {

    state = {
        inputUsuario: "",
        inputMensagem: "",

        botEnviar: [{
            usuario: "",
            mensagem: ""
        }
        ]

    }

    changeinputUsuario = (event)=> {
        this.setState ({inputUsuario: event.target.value})

    }

    changeinputMensagem = (event) => {
        this.setState ({inputMensagem: event.target.value})

    }

    botaoEnviar = () => {
        const novoBotEnviar =[...this.state.botEnviar, {usuario: this.state.inputUsuario, mensagem: this.state.inputMensagem}]
        this.setState({botEnviar: novoBotEnviar,
            inputUsuario: "",
            inputMensagem: ""
        })

    }


    render () {

        const listaBotEnviar = this.state.botEnviar.map((enviado, indexEnviado)=>{
            return (
                <div key={indexEnviado}>
                    <span><b>{enviado.usuario}</b></span>
                    <span>{enviado.mensagem}</span>
                </div>
            )
        })

        return (
            <formulario>
                {listaBotEnviar}
                <input
                placeholder="Usuário"
                value={this.state.inputUsuario}
                onChange={this.changeinputUsuario}
                />

                <input
                placeholder="Mensagem"
                value={this.state.inputMensagem}
                onChange={this.changeinputMensagem}
                />

                <button onClick={this.botaoEnviar}>Enviar</button>
            </formulario>
        )
    }
}