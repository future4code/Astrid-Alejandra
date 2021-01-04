import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSalvadoBranco from '../../img/bookmark-white.svg'
import iconeSalvadoPreto from '../../img/bookmark-black.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

export class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvado: false,
  }
 
  onClickCurtida = () => {
    this.setState({
     curtido: !this.state.curtido
    // achei que estava usando o ! para ter acesso ao curtido: true, quer dizer, o coração preto. então o !this.state.curtido, simplesmente muda o boolean que esteja no value, seja qual for. então o inicial ainda é false. 
    })
    if(this.state.curtido) {
    //então, se this.state.curtido = true, isso, mas a função vai correr no else, pois o valor inicial é false. 
      this.state.numeroCurtidas = this.state.numeroCurtidas - 1
      console.log("Descurtiu")
    //console.log me salvando, porque não tava entendendo muito bem, e achei que tava começando com o valor true, só que não, o valor inicial não foi mudado. 
    }else{
    //como a função começa a correr aqui, é no else que vai estar o mais um. foi difícil mas entendi!
      this.state.numeroCurtidas = this.state.numeroCurtidas + 1
      console.log("Curtiu")
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickSalvar = () => {
    this.setState({
      salvado: !this.state.salvado
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let iconeSalvado
    if(this.state.salvado) {
      iconeSalvado = iconeSalvadoPreto
    } else {
      iconeSalvado = iconeSalvadoBranco
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={publicacao.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />
        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
        <IconeComContador
          icone={iconeSalvado}
          onClickIcone={this.onClickSalvar}
        />
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post