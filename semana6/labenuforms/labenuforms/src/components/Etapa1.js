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