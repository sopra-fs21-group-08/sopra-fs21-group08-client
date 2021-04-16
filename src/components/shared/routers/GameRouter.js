import React from "react";
import styled from "styled-components";
import { Redirect, Route } from "react-router-dom";
import UserProfile from "../../Pages/UserProfile";
import Lobby from "../../Pages/Lobby";
import Game from "../../Pages/Game";
import Map from "../../Pages/Map";
import Background from "../../../views/Background";
import {Container, Row, Col} from "react-bootstrap";

class GameRouter extends React.Component {
    constructor() {
    super();
    this.state = {
        selectedUser: undefined,
    };
    this.onSelectUser = this.onSelectUser.bind(this);
}

    onSelectUser(user) {
        this.setState({
            selectedUser: user
        });
    }

  render() {
    /**
     * "this.props.base" is "/app" because as been passed as a prop in the parent of GameRouter, i.e., App.js
     */
    return (
      <>
        <Route
          exact
          path={`${this.props.base}/profile`}
        
          render={() => 
            <>
            <Container style={{position: "absolute", zIndex: 10}} fluid>
            <UserProfile onSelectUser={this.onSelectUser}/>
            </Container>
            <Background />
            </>}
        />

        <Route
          exact
          path={`${this.props.base}/lobbies/:id`}
          render={() => 
            <div>
              <Container style={{position: "absolute", zIndex: 10}} fluid>
              <Lobby />
              </Container>
              <Background />
            </div>
          }
        />
        
        <Route
          exact
          path={`${this.props.base}/map`}
          render={() => 
            <div>
              <Map/>
            </div>
          }
        />

        <Route
          exact
          path={`${this.props.base}`}
          render={() => <Redirect to={`${this.props.base}/profile`} />}
        />

        <Route
          exact
          path={`${this.props.base}/...`}
          render={() => <UserProfile user={this.state.selectedUser}/>}
        />

        <Route
          exact
          path={`${this.props.base}/:id`}
          render={() => 
            <div>
              <Game />
            </div>
          }
        />
      </>
    );
  }
}

export default GameRouter;



