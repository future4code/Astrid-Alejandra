import React from "react";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import CreateTrip from "../components/CreateTrip";
import TripsList from "../components/TripsList";
import Candidates from "../components/Candidates";
import ErrorPage from "../pages/ErrorPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path={"/application-form"}>
          <ApplicationFormPage />
        </Route>
        <Route exact path={"/login"}>
          <LoginPage />
        </Route>
        <Route exact path={"/trips/create"}>
          <CreateTrip />
        </Route>
        <Route exact path={"/trips/list"}>
          <TripsList />
        </Route>
        <Route exact path={"/trips/details"}>
          <Candidates />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
