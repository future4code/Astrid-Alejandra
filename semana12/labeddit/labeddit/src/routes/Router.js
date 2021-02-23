import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import FeedPage from "../pages/FeedPage";
import PostDetailsPage from "../pages/PostDetailsPage";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <LoginPage />
        </Route>
        <Route exact path={"/signup"}>
          <SignUpPage />
        </Route>
        <Route exact path={"/feed"}>
          <FeedPage />
        </Route>
        <Route exact path={"/posts/:postid"}>
          <PostDetailsPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
