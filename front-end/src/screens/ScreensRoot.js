import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import ScreensSelectProvider from "./ScreensSelectProvider";
import ScreensDisplayUserData from "./ScreensDisplayUserData";
import { Launch } from "../Launch";
import { Text, View } from "react-native";
import Endpoints from "../Endpoints"
import axios from "axios"
import ScreensSignIn from "./ScreensSignIn";
import ScreensSignUp from "./ScreensSignUp";
import { AuthProvider } from "../auth/AuthProvider"
import { AuthContext} from '../auth/AuthProvider'
//import {google} from "googleapis"
import app from "../auth/FireBaseApp"

var rootElement = document.getElementById("root");

//var google = require("googleapis");

const rend = () => {
  axios.post('/test', Endpoints)
  .then(response => {
    console.log(JSON.stringify(response))
  })

  return (<div>hello</div>)
}
export default function Router (props) {
  //const currentUser = useContext(AuthContext)
  return (
    <AuthProvider>
      <BrowserRouter>
        <React.Fragment>
          <Route 
            exact path = "/" 
            render = {() => {
              //const currentUser = useContext(AuthContext)
              console.log("*")
              app.auth().signOut()
              .then(console.log("*"))
              .catch(error => alert(error))
            }}
            />
          <Route path = "/provider-selection" component={ScreensSelectProvider} />
          <Route path = "/data" component={ScreensDisplayUserData} />
          <Route path = "/signin" component={ScreensSignIn} />
          <Route path = "/signup" component={ScreensSignUp} />
          <Route path = "/test" component={rend} />
          <Route
            path = "/launch"
            render = {() => {
              Launch();
            }}
          />
          <Route
            path="/willredirect"
            render={() => {
              window.location.href = "results.html";
            }}
          />
        </React.Fragment>
      </BrowserRouter>
    </AuthProvider>
    
  );
};

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");

styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


