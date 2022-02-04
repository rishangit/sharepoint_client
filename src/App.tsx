import React from "react";
import { useRoutes } from "react-router-dom";
// import { Helmet } from 'react-helmet';
import "./App.css";
import MainComponent from "@modules/main";
import LoginComponent from "./modules/auth/login";
import { PrivateRouteLoggedUser } from "@sys/privertRoute";

function App() {
  let element = useRoutes([
    // A route object has the same properties as a <Route>
    // element. The `children` is just an array of child routes.
    {
      path: "login",
      element: <LoginComponent />,
    },
    { path: '*', element: <PrivateRouteLoggedUser component={MainComponent}/> },
  ]);

  return element;
}

export default App;
