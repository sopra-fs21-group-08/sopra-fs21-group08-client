import React from "react";
import { Redirect } from "react-router-dom";

/**
 *
 * Another way to export directly your functional component.
 */
export const RegistrationGuard = props => {
    if (!localStorage.getItem("token")) {
        return props.children;
    }
    // if user is already logged in, redirects to the main /game
    return <Redirect to={"/login"} />;
};
