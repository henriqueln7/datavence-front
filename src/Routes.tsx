import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import CreateProject from "./pages/CreateProject";
import CreateUser from "./pages/CreateUser";
import ProjectList from "./pages/ProjectList";
import ProjectDetails from "./pages/ProjectDetails";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/create-project" component={CreateProject} />
      <Route exact path="/create-user" component={CreateUser} />
      <Route exact path="/projects" component={ProjectList} />
      <Route exact path="/projects/:id" component={ProjectDetails} />
    </BrowserRouter>
  );
}

export default Routes;
