import React from 'react';
import { connect } from 'react-redux';

import AppNavLinks from './AppNavLinks';
import LinearLoader from '../loaders/LinearLoader';


const AppNav = (props) => {
  console.log('props', props);

  return (
    <header className="header-wrapper m-t-10 m-b-10">
      <h1 className="m-0 p-0">JSONPlaceholder</h1>
      <AppNavLinks />
      <div className="progress-bar-container m-t-10">
        {props.fetching && <LinearLoader />}
      </div>
    </header>
  );
};


const mapStateToProps = (state) => {
  return {
      fetching: state.posts.fetching || state.users.fetching
    }
  };
  
  export default connect(mapStateToProps)(AppNav);
