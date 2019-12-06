import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import AppNav from '../components/appNav/AppNav';
import HomePage from '../components/home/HomePage';
import PostsList from '../components/posts/PostsList';
import PostPage from '../components/posts/PostPage';
import AuthorsPage from '../components/authors/AuthorsPage';
import PhotosList from '../components/photos/PhotosList';
import PageNotFound from '../components/pageNotFound/PageNotFound';

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <AppNav />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/posts" component={PostsList} />
          <Route path="/post/:id" component={PostPage} />
          <Route path="/authors" component={AuthorsPage} />
          <Route path="/photos" component={PhotosList} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
);

export default AppRouter;
