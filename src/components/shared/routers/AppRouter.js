import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LoginGuard } from "../routeProtectors/LoginGuard";
import Login from "../../Pages/Login";
import Lobby from "../../Pages/Lobby";
import Register from "../../Pages/Register";
import Background from "../../../views/Background";
import Game from "../../Pages/UserProfile";
import { GameGuard } from "../routeProtectors/GameGuard";
import GameRouter from "./GameRouter";
import {Container, Row, Col} from "react-bootstrap";


class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div>
            <Route
              path="/game"
              render={() => (
                <GameGuard>
                  <Container style={{position: "absolute", zIndex: 10}} fluid>
                  <GameRouter base={"/game"} />
                  </Container>
                  <Background />
                </GameGuard>
              )}
            />
          </div>
        </Switch>
        <Switch>
          <div>
            <Route
              path="/login"
              exact
              render={() => (
                <LoginGuard>
                  <Container style={{position: "absolute", zIndex: 10}} fluid>
                  <Login />
                  </Container>
                  <Background />
                </LoginGuard>
              )}
            />
            <Route path="/" exact render={() => <Redirect to={"/login"} />} />
          </div>
        </Switch>
        <Switch>
          <div>
            <Route
              path="/register"
              exact
              render={() => (
                <LoginGuard>
                  <Container style={{position: "absolute", zIndex: 10}} fluid>
                  <Register />
                  </Container>
                  <Background />
                </LoginGuard>
              )}
            />
            <Route path="/" exact render={() => <Redirect to={"/login"} />} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}


export default AppRouter;

//Todo: delete <Switch> to lobby
