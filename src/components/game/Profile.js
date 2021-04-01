import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { api, handleError } from '../../helpers/api';
import Player from '../../views/Player';
import { Spinner } from '../../views/design/Spinner';
import { Button } from '../../views/design/Button';
import { withRouter } from 'react-router-dom';
import Game from "./Game";

const Container = styled(BaseContainer)`
  color: white;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PlayerContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

const Id = styled.div`
  margin-left: auto;
  margin-right: 20px;
  font-weight: bold;
`;

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            newUsername: null,
            newDob: null,
        };

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeDob = this.handleChangeDob.bind(this);
    }

    async componentDidMount() {
        try {
            const response = await api.get('/users/' + this.state.user.id);

            this.setState({ user: response.data });

        } catch (error) {
            alert(`Something went wrong while fetching the user. Does it respond?: \n${handleError(error)}`);
        }
    }

    async putUser() {
        try {
            const requestBody = JSON.stringify({
                username: this.state.user.username,
                dob: this.state.user.dob,
                token: localStorage.getItem('token'),
            });
            await api.put('/users/' + this.state.user.id, requestBody);
            alert("Change submitted successfully");
        } catch (error) {
            alert(`Something went wrong during process: \n${handleError(error)}`);
        }
    }


    changeUser() {
        const newUserDetail = this.state.user;
        newUserDetail.username = this.state.newUsername;
        newUserDetail.dob = this.state.newDob;
        this.setState({user: newUserDetail});
        this.putUser();
    }

    back() {
        this.props.history.push('/game');
    }

    handleChangeUsername(event) {
        this.setState({newUsername: event.target.value});
    }

    handleChangeDob(event) {
        this.setState({newDob: event.target.value});
    }

    render() {
        if (this.state.user === undefined){
            this.props.history.push("/game");
            return null;
        }
        return (
            <Container>
                <div>
                    <PlayerContainer>
                        <Id>Username: {this.state.user.username}</Id>
                        <Id>Id: {this.state.user.id}</Id>
                        <Id>Status: {this.state.user.status}</Id>
                        <Id>Creation Date: {this.state.user.creationDate}</Id>
                        <Id>Birth Date: {this.state.user.dob}</Id>
                        <input
                            type="text" value={this.state.newUsername}
                            onChange={this.handleChangeUsername}
                            placeholder="New Username"/>
                        <input
                            type="date"
                            name="dob"
                            min="1900-01-01"
                            max="2021-01-01"
                            value={this.state.newDob}
                            onChange={this.handleChangeDob}

                        />
                        <ButtonContainer>
                            <Button
                                width="100%"
                                onClick={() => {
                                    this.changeUser();
                                }}
                            >
                                Change User
                            </Button>
                        </ButtonContainer>
                        <ButtonContainer>
                            <Button
                                width="100%"
                                onClick={() => {
                                    this.back();
                                }}
                            >
                                Back
                            </Button>
                        </ButtonContainer>
                    </PlayerContainer>
                </div>
            </Container>
        );
    }
}

export default withRouter(Profile);