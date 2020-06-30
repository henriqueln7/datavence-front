import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import CreateProject from "./pages/CreateProject";
import CreateUser from "./pages/CreateUser";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/create-project" component={CreateProject} />
      <Route exact path="/create-user" component={CreateUser} />
    </BrowserRouter>
  );
}

export default Routes;
