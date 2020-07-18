import React from "react";

import { bubbleLogin } from "../api/bubbleAPI";


const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        let credentials = {
            'username': event.target.username.value,
            'password': event.target.password.value,
        };

        bubbleLogin(credentials)
            .then((response) => {
                console.log(response.data.payload);
                localStorage.setItem('token', response.data.payload);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label><input type="text" placeholder="username" name="username"/></label>
                <label><input type="password" placeholder="password" name="password"/></label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
