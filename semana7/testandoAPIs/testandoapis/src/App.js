import React from "react";
import "./App.css";
import styled from "styled-components";
import axios from "axios";
import {baseUrl} from "./components/spaceX/constants";


const Main = styled.div `
  text-align: center;
`

export default class App extends React.Component {
  state = {
    missions: [],
    
  }
  getMissionNames = () => {
    axios
      .get(`${baseUrl}/missions`)
      .then((response) => {this.setState({ missions: response.data})})
      .catch((error) => {alert("It was not possible to show the missions. Try again later!")});
  };
  
  render() {
    return (
      <Main>
        <h2>SpaceX Missions</h2>
        <button onClick={this.getMissionNames}>Click here to show the missions</button>
        {this.state.missions.map((mission) => {
          return (
            <div key={mission.mission_id}>
              <h3>{mission.mission_name}</h3>
              <p>Description: ${mission.description}`}</p>
              <a href={mission.wikipedia}>Read more!</a>
            </div>
          )
        })}
      </Main>
    )
  }
}


