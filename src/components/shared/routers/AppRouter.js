import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LoginGuard } from "../routeProtectors/LoginGuard";
<<<<<<< HEAD
import Login from "../../Pages/Login"

=======
import Login from "../../login/Login";
import {RegistrationGuard} from "../routeProtectors/RegistrationGuard";
import Registration from "../../Registration/Registration";
>>>>>>> 48871a623ed6c7da327f2dacbc4ac3905dd64397

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div>
            <Route
              path="/login"
              exact
              render={() => (
                <LoginGuard>
                  <Login />
                </LoginGuard>
              )}
            />
<<<<<<< HEAD
            <Route path="/" exact render={() => <Redirect to={"/login"} />} />
=======
              <Route
                  path="/registration"
                  exact
                  render={() => (
                      <RegistrationGuard>
                          <Registration />
                      </RegistrationGuard>
                  )}
              />
            <Route path="/" exact render={() => <Redirect to={"/game"} />} />
>>>>>>> 48871a623ed6c7da327f2dacbc4ac3905dd64397
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}


export default AppRouter;
