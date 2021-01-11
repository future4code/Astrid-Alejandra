import { checkPropTypes } from "prop-types";
import React from "react";
import styled from "styled-components";

export default function PerguntaFechada(props) {
    return (
        <div>
            <p>{props.pergunta}</p>
            <select>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
            </select>
        </div>
        )
}
