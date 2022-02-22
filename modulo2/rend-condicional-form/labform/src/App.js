import React from 'react';
import './App.css';
import Etapa1 from './components/etapa1'
import Etapa2 from './components/etapa2';
import Etapa3 from './components/etapa3';
import Final from './components/final';


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
          return<Final/>
      }

    }
  return (
    <div>
      <div>
      {this.renderizaTela()}
      </div>

      <div>
        {this.state.telaInicial !== 4 && (<button onClick={this.etapaSeguinte}>Próxima etapa</button>)}
      </div>
    </div>
  );
  }
}
