import React from "react";
import styled from "styled-components";
import { Redirect, Route, Switch } from "react-router-dom";
import UserProfile from "../../Pages/UserProfile";
import GameOver from "../../Pages/GameOver";
import Lobby from "../../Pages/Lobby";
import Game from "../../Pages/Game";
import Map from "../../Pages/Map";
import Background from "../../../views/Background";
import {Container, Row, Col} from "react-bootstrap";
import { UserProfileGuard } from "../routeProtectors/UserProfileGuard";

class GameRouter extends React.Component {

  render() {
    /**
     * "this.props.base" is "/app" because as been passed as a prop in the parent of GameRouter, i.e., App.js
     */
    return (
      <Switch>
        <Route
          exact
          path={`${this.props.base}/profile`}
        
          render={() =>
            <UserProfileGuard>
            <Container style={{position: "absolute", zIndex: 10}} fluid>
            <UserProfile />
            </Container>
            <Background />
            </UserProfileGuard>
          }
        />

        <Route
          exact
          path={`${this.props.base}/gameover`}

          render={() =>
            <>
            <Container style={{position: "absolute", zIndex: 10}} fluid>
            <GameOver />
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
          path={`${this.props.base}/:id`}
          render={() => 
            <div>
              <Game />
            </div>
          }
        />
      </Switch>
    );
  }
}

export default GameRouter;



