import React from "react";
import Etapa3 from "./etapa3"


export default class Etapa2 extends React.Component {
    state = {
        curso: "",

    }

    changeNome = ()=> {

    };
    changeLocal = () =>{

    }

    render () {
        return (
            <div>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <div>
                    <h3>5. Qual seu curso?</h3>
                    <input
                    placeholder="Digite seu curso aqui"
                    value={this.state.curso}
                    onChange ={this.changeNome}
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

                <button onClick={this.Etapa3}>Próxima etapa</button>
            </div>
        )
    }
}