import React, { useMemo, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Theme } from "./Theme";
import { UserContext } from "./userContext";
import { members } from "./DB/DB";
import { Signup } from "./Pages/Signup";


//interface types should be changed in accordance with backend later on

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  projects?: { _id: string }[];
}

export interface IProject {
  _id: string;
  name: string;
  status: string;
  dateStarted: string;
  users: { _id: string }[];
  bugs?:{_id:string}[]
}

export interface IBug {
  _id: string;
  name: string;
  priority: string;
  dateStarted: string;
  status: string;
  lastUpdated: string;
  author: { _id: string };
}

export function App() {
  //this obv should come from a backend fetch after login
  //object of the current logged in user
  const [me, setMe] = useState<IUser>(members[0]);
  const UserValue = useMemo(() => ({ me, setMe }), [me, setMe]);

  //i should make a reducer file with a dispatch function that returns if the current user belongs to the current displayed project
  return (
    <ThemeProvider theme={Theme}>
      <UserContext.Provider value={UserValue}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Home" exact component={Home} />
            <Route path="/Signup" exact component={Signup} />
            {/* <Route path="/"  component={ErrorPage}/> */}
          </Switch>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeProvider>
  );
}
