import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LoginGuard } from "../routeProtectors/LoginGuard";
import Login from "../../Pages/Login";
import Game from "../../Pages/Game";
import Register from "../../Pages/Register";
import Background from "../../../views/Background";
import { GameGuard } from "../routeProtectors/GameGuard";
import GameRouter from "./GameRouter";
import {Container, Row, Col} from "react-bootstrap";


class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <>
            <Route
              path="/game"
              render={() => (
                <GameGuard>
                  <GameRouter base={"/game"} />
                </GameGuard>
              )}
            />
          </>
        </Switch>
        <Switch>
          <>
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
          </>
        </Switch>
        <Switch>
          <>
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
          </>
        </Switch>
        <Switch>
          <>
          <Route
              path="/zoia"
              exact
              render={() => (
                <>
                  <Container style={{position: "absolute", zIndex: 10}} fluid>
                  <Game />
                  </Container>
                </>
              )}
            />
          </>
        </Switch>
      </BrowserRouter>
    );
  }
}


export default AppRouter;

//Todo: delete <Switch> to lobby
