import React, {useState} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/privateRoute";

function App() {
    return (
        <Router>
            <div className="App">
                {localStorage.getItem('token') ? <PrivateRoute component={BubblePage}/> : <Route exact path="/" component={Login}/>}
            </div>
        </Router>
    );
}

export default App;
