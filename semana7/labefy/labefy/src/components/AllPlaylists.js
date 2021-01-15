import React from "react";
import "../App.css"
import styled from "styled-components";
import axios from "axios";

export default class AllPlaylists extends React.Component {
    render () {
        return (
            <div>
                <h2>Playlists</h2>
                <ul>
                    <li>Playlist 1 <button>x</button></li>
                    <li>Playlist 2 <button>x</button></li>
                    <li>Playlist 3 <button>x</button></li>
                </ul>
                <hr />
            </div>
        )
    }
}
