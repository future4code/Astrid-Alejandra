import React from 'react';
import './App.css';
import fotoPerfil from './images/bemporad-labedin.jpeg';
import fotoRoraima from './images/bemporad-roraima.jpg';
import fotoVinho from './images/servicovinho.jpg'
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoPerfil} 
          nome="Ástrid Bemporad" 
          descricao="Oi, eu sou a Ástrid! Tenho 26 anos, moro no Brasil mas sou da Venezuela, e atualmente estou estudando para ser desenvolvedora e me dedicar a trabalhos na área de tecnologia."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno />
      </div>
      <div className="page-section-container">
        <CardPequeno />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={fotoRoraima}
          nome="Guia de Turismo" 
          descricao="Guia de Turismo no Monte Roraima." 
        />
        
        <CardGrande 
          imagem={fotoVinho} 
          nome="Garçonete" 
          descricao="Serviços de requinte em vários hoteis e restaurantes de Petrópolis e Caracas." 
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
