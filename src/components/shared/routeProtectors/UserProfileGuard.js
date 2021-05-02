import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom";
import { api, handleError } from '../../../helpers/api';

/**
 * routeProtectors interfaces can tell the router whether or not it should allow navigation to a requested route.
 * They are functional components. Based on the props passed, a route gets rendered.
 * In this case, if the user is authenticated (i.e., a token is stored in the local storage)
 * {props.children} are rendered --> The content inside the <GameGuard> in the App.js file, i.e. the user is able to access the main app.
 * If the user isn't authenticated, the components redirects to the /login screen
 * @Guard
 * @param props
 */

export const UserProfileGuard = props => {
    const [lobbyId, setlobbyId] = useState([]);
    const [finalid, setfinalid] = useState([]);
    useEffect(() =>
    {
      const checkifUserInLobby = async () => {
          try{
            const response = await api.get('/lobbies/'+ lobbyId);
            console.log(response);
            const players = response.data.users;
            players.map(player => {
              if(player.userId == localStorage.getItem("userId")){
                  setfinalid(lobbyId);
              }
            })
          } catch (error) {

          }
      }
      checkifUserInLobby();
    }, [lobbyId]);

    useEffect(() =>
    {
      const fetchlobbies = async () => {
          const response = await api.get('/lobbies/');
          const lobbies = response.data;
          lobbies.map(lobby => {
            setlobbyId(lobby.lobbyId);
          })
      }
      fetchlobbies();
    }, []);

    if(finalid.length != 0){
        return <Redirect to={'lobbies/' + finalid} />;
    }
    else{
        return props.children;
    }
};
