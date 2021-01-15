import React from "react";
import "../App.css"
import styled from "styled-components";
import axios from "axios";

export default class CreatePlaylist extends React.Component {
    render () {
        return (
            <div>
                <label>Create a new playlist</label>
                <input placeholder="Playlist name"/>
                <button id="savePlaylist">Save</button>
                <hr />
            </div>
        )
    }
}
