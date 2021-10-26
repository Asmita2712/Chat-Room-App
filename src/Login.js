import { Button } from '@material-ui/core';
import React from 'react'
import { auth, provider } from './firebase';
import "./Login.css";
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [{}, dispatch]  = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login_container">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjiJDmDlKPS_UEf6C21aGwq2Ts6dflcGTXlu1zMc3qVU9R25rU9YNn5OkMoTcTAKDFqM&usqp=CAU"
                    alt=""
                />

                <div className="login_text">
                    <h1>Sign in to Chatroom App</h1>
                </div>

                <Button type="submit" onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    );
}

export default Login