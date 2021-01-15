import React from "react";
import "../App.css"
import styled from "styled-components";
import axios from "axios";

export default class PlaylistDetails extends React.Component {
    render () {
        return (
            <div>
                <h3>Nome da playlist</h3>
                    <ul>
                        <li>Nome da música 1</li>
                        <li>Nome da música 2</li>
                        <li>Nome da música 3</li>
                    </ul>
                <hr />
            </div>
        )
    }
}
