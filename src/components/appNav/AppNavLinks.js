import React from 'react';
import { NavLink } from 'react-router-dom'


const AppNavLinks = () => (
    <div className="app-nav-links-wrapper">
      <NavLink to="/" activeClassName="active" exact>Home</NavLink>
      <NavLink to="/posts" activeClassName="active">Posts</NavLink>
      <NavLink to="/authors" activeClassName="active">Authors</NavLink>
      <NavLink to="/photos" activeClassName="active">Photos</NavLink>
      <NavLink to="/albums" activeClassName="active">Albums</NavLink>
    </div>
);

export default AppNavLinks
