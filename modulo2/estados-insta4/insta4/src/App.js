import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/501/501'}
          fotoPost={'https://picsum.photos/201/150'}
        />

        <Post
          nomeUsuario={'robertinha'}
          fotoUsuario={'https://picsum.photos/510/510'}
          fotoPost={'https://picsum.photos/202/150'}
        />

        <Post
          nomeUsuario={'lindinha'}
          fotoUsuario={'https://picsum.photos/150/150'}
          fotoPost={'https://picsum.photos/200/151'}
        />
      </MainContainer>
    );
  }
}

export default App;
