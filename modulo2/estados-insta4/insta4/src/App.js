import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const NovoInputPost = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid black;
padding: 20px;
height: 200px;
margin: 20px;
width: 15%;
`

class App extends React.Component {

  state = {
    pessoas: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/501/501",
        fotoPost: "https://picsum.photos/201/150"
      },
      {
        nomeUsuario: "robertinha",
        fotoUsuario: "https://picsum.photos/510/510",
        fotoPost: "https://picsum.photos/202/150"
      },
      {
        nomeUsuario: "lindinha",
        fotoUsuario: "https://picsum.photos/150/150",
        fotoPost: "https://picsum.photos/200/151"
      }
    ],
    novoNome: "",
    novaFoto: "",
    novaFotoPost: ""
  }

  changeNovoNome = (event)=> {
    this.setState({novoNome: event.target.value})
  };

  changeNovaFoto = (event) =>{
    this.setState({novaFoto: event.target.value})
  };

  changeNovafotoPost = (event) => {
    this.setState({novaFotoPost: event.target.value})
  };

  addPost = () => {
    const novoPost = {
      nomeUsuario: this.state.novoNome,
      fotoUsuario: this.state.novaFoto,
      fotoPost: this.state.novaFotoPost
    }

    this.setState({
      pessoas: [... this.state.pessoas, novoPost]
    })

  }

  render() {

    const arrayPosts = this.state.pessoas.map((pessoa)=>{
      return (
        <Post
          nomeUsuario = {pessoa.nomeUsuario}
          fotoUsuario = {pessoa.fotoUsuario}
          fotoPost = {pessoa.fotoPost}
        />
      )
    })
    
    return (

      <MainContainer>

        <NovoInputPost>
          <input
          placeholder={"Nome de usuário"}
          value={this.state.novoNome}
          onChange = {this.changeNovoNome}
          />

          <input
          placeholder= {"Foto de usuário"}
          value={this.state.novaFoto}
          onChange ={this.changeNovaFoto}
          />

          <input
          placeholder={"Foto de post"}
          value={this.state.novaFotoPost}
          onChange={this.changeNovafotoPost}
          />

          <button onClick={this.addPost}>Criar novo Post</button>
        </NovoInputPost>
        {arrayPosts}
      </MainContainer>
    );
  }
}

export default App;
