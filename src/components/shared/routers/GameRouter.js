import React from "react";
import styled from "styled-components";
import { Redirect, Route } from "react-router-dom";
import Game from "../../Pages/UserProfile";
import Profile from "../../Pages/UserProfile";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

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
      <Container>
        <Route
          exact
          path={`${this.props.base}/profile`}
          render={() => <Game />}
          render={() => <Profile onSelectUser={this.onSelectUser}/>}
        />

        <Route
          exact
          path={`${this.props.base}`}
          render={() => <Redirect to={`${this.props.base}/profile`} />}
        />
          <Route
              exact
              path={`${this.props.base}/...`}
              render={() => <Profile user={this.state.selectedUser}/>}
          />
      </Container>
    );
  }
}
/*
* Don't forget to export your component!
 */
export default GameRouter;
