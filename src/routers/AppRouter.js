import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import AppNav from '../components/appNav/AppNav';
import HomePage from '../components/home/HomePage';
import PostsList from '../components/posts/PostsList';
import PostPage from '../components/posts/PostPage';
import AuthorsList from '../components/authors/AuthorsList';
import PhotosList from '../components/photos/PhotosList';
import AlbumsList from '../components/albums/AlbumsList';
import PageNotFound from '../components/pageNotFound/PageNotFound';

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <AppNav />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/posts" component={PostsList} />
          <Route path="/post/:id" component={PostPage} />
          <Route path="/authors" component={AuthorsList} />
          <Route path="/photos" component={PhotosList} />
          <Route path="/albums" component={AlbumsList} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
);

export default AppRouter;