import React from "react";

export default class Etapa3 extends React.Component{
    state = {
        motivo:"",

    }

    changeMotivo = () => {

    }

    render () {
        return (
            <div>
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

                <button onClick={this.Final}>Próxima etapa</button>
            </div>
        )
    }
}