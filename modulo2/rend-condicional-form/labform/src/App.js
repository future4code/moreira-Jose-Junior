import React from 'react';
import styled from 'styled-components';
import './App.css';
import Etapa1 from './components/etapa1'
import Etapa2 from './components/etapa2';
import Etapa3 from './components/etapa3';
import Final from './components/final';


const botProximaEtapa = styled.div`
margin: auto;
`


export default class App extends React.Component {

  state = {
    telaInicial: 1

  }

  etapaSeguinte = () => {
    this.setState({telaInicial: this.state.telaInicial + 1})
  }

  render (){

    const renderizaTela = () => {
      switch (this.state.telaInicial){
        case 1:
          return <Etapa1/>;
        case 2:
          return <Etapa2/>;
        case 3:
          return <Etapa3/>;
        case 4:
          return <Final/>;
        default:
          return<div><p>ERRO! PÁGINA NÂO ENCONTRADA</p></div>
      }

    }
  return (
    <div>
      <div>
      {renderizaTela()}
      </div>

      <botProximaEtapa>
        {this.state.telaInicial !== 4 && (<button onClick={this.etapaSeguinte}>
          Próxima etapa</button>)}
      </botProximaEtapa>
    </div>
  );
  }
}
