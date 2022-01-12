import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import eu from './components/foto/eu.jpg';
import bio from './components/foto/bio.png';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardPequeno2 from './components/CardPequeno/CardPequeno2/CardPequeno2'
import endereco from './components/foto/ende.jpg'
import email1 from './components/foto/email.png'
import styled from 'styled-components';

//const ImageButton = styled.


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={eu} 
          nome="José Antonio" 
          descricao="Oi, eu sou o Antonio, formado em Ciências Biológicas pela UFPE e aluno da Labenu, a melhor escola de programação."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="card-menor">
        <CardPequeno
        imagem={email1}
        endemail="antonio.santos2@ufpe.br"
        />
      </div>

      <div className="card-menor">
        <CardPequeno2
        imagem={endereco}
        endemora=" Inácio de Barros Barreto, 24. Várzea-Recife"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Aprendendo a progrmar!" 
        />
        
        <CardGrande 
          imagem={bio} 
          nome="Ciências Biológicas" 
          descricao="Cuidando da vida." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
