import React from "react";
import styled from "styled-components";
import "./App.css";
import axios from "axios";
import CreatePlaylist from "./components/CreatePlaylist";
import AllPlaylists from "./components/AllPlaylists";
import AddSongs from "./components/AddSongs";
import PlaylistDetails from "./components/PlaylistDetails";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <p>Testando App.js</p>
        <CreatePlaylist />
        <AllPlaylists />
        <AddSongs />
        <PlaylistDetails />
      </div>
    )
  }
}