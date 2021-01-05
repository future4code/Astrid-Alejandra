import React from "react";
import styled from "styled-components";
import PerguntaAberta from "./PerguntaAberta"
import PerguntaFechada from "./PerguntaFechada";

export default class Etapa1 extends React.Component {

    render () {
        return(
            <div>
                <h2>ETAPA 1: Dados gerais</h2>
                <PerguntaAberta pergunta={"1- Qual é o seu nome?"}/>
                <PerguntaAberta pergunta={"2- Qual é a sua idade?"}/>
                <PerguntaAberta pergunta={"3- Qual é o seu email?"}/>
                <PerguntaFechada pergunta={"4- Qual é a sua escolaridade?"}/>
                <select>
                    <option value="">Ensino Médio Incompleto</option>
                    <option value="">Ensino Médio Completo</option>
                    <option value="">Ensino Superior Incompleto</option>
                    <option value="">Ensino Superior Completo</option>
                </select>
                

            </div>


        )
    }
}