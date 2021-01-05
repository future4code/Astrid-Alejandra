import React from "react";
import styled from "styled-components";
import PerguntaAberta from "./PerguntaAberta"

export default class Etapa1 extends React.Component {

    render () {
        return(
            <div>
                <h2>ETAPA 2: Informações do Ensino Superior</h2>
                <PerguntaAberta pergunta={"1- Qual é o curso?"} />
                <PerguntaAberta pergunta={"2- Qual é a unidade de Ensino?"} />
            </div>
        )
    }
}