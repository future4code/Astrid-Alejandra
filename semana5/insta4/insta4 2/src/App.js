import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {

  state = {
    publicacoes: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "kai",
        fotoUsuario: "https://picsum.photos/50/60",
        fotoPost: "https://picsum.photos/200/140"
      },
      {
        nomeUsuario: "prupru",
        fotoUsuario: "https://picsum.photos/50/70",
        fotoPost: "https://picsum.photos/200/160"
      }
   ]
  }

  listaDeComponentes = this.state.publicacoes.map((publicacao) => {
    return(
      <Post />
    );
  })
  render() {


    return (
      <div className={'app-container'}>
        {this.listaDeComponentes}
      </div>
    );
  }
  
}

export default App;
