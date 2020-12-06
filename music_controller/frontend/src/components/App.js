import React, { Component } from 'react';
import { render } from "react-dom";
import Homepage from "./Homepage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"



export default class App extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return <div>
            <Router>
                <Switch>
                    <Route exact path ="/" component={Homepage}/>
                    <Route path ="/join" component ={RoomJoinPage}/>
                    <Route pat ="/create" component ={CreateRoomPage}/>
                </Switch>
            </Router>
        </div>
        
    }
}

const appDiv = document.getElementById("app");
render(<App />,appDiv)