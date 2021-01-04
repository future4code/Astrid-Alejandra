import React from "react";
import styled from "styled-components";

export default class Etapa1 extends React.Component {

    render () {
        return(
        <div>
            <h2>ETAPA 1: Dados gerais</h2>
            <p>1- Qual é o seu nome?</p>
            <input />
            <p>2- Qual é a sua idade? </p>
            <input />
            <p>Qual é o seu email?</p>
            <input />
            <p>Qual é a sua escolaridade?</p>
            <input />


            // 1. Nome [pergunta aberta]
            // 2. Idade [pergunta aberta]
            // 3. Email [pergunta aberta]
            // 4. Qual o grau de escolaridade [pergunta com seleção]
            //     - Ensino Médio Incompleto
            //     - Ensino Médio Completo
            //     - Ensino Superior Incompleto
            //     - Ensino Superior Completo
        </div>


        )
    }
}