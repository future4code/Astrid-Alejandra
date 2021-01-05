import React from "react";
import styled from "styled-components";

export default class Etapa1 extends React.Component {

    render () {
        return(
            <div>
                <h2>ETAPA 3: Informações gerais de Ensino</h2>
                <p>Por que você não terminou um curso de graduação?</p>
                <input />
                <p>Você fez algum curso complementar?</p>
                <select>
                    <option value="">Nenhum</option>
                    <option value="">Curso técnico</option>
                    <option value="">Cursos de inglês</option>
                </select>
            </div>
        )
    }
}