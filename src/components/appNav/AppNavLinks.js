import React from 'react';
import { NavLink } from 'react-router-dom'


const AppNavLinks = () => (
    <nav className="app-nav-links-wrapper m-t-10">
      <NavLink to="/" activeClassName="active" exact>Home</NavLink>
      <NavLink to="/posts" activeClassName="active">Posts</NavLink>
      <NavLink to="/authors" activeClassName="active">Authors</NavLink>
      <NavLink to="/photos" activeClassName="active">Photos</NavLink>
    </nav>
);

export default AppNavLinks
