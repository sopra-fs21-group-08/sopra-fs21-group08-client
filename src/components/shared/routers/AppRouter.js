import React from "react";

import {Container} from "react-bootstrap";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Login from "../../Pages/Login";
import GameRouter from "./GameRouter";
import Register from "../../Pages/Register";
import Background from "../../../views/Background";
import { GameGuard } from "../routeProtectors/GameGuard";
import { LoginGuard } from "../routeProtectors/LoginGuard";


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
          <Redirect from="*" to="/login"></Redirect>
        </Switch>
      </BrowserRouter>
    );
  }
}


export default AppRouter;
