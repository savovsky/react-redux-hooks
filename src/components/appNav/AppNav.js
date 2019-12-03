import React from 'react';
import { connect } from 'react-redux';

import AppNavLinks from './AppNavLinks';
import LinearLoader from '../loaders/LinearLoader';


const AppNav = (props) => {
  console.log('props', props);

  return (
    <div className="header-wrapper">
      <h1>JSONPlaceholder</h1>
      <AppNavLinks />
      <div className="progress-bar-container">
        {props.fetching && <LinearLoader />}
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
      fetching: state.posts.fetching || state.users.fetching
    }
  };
  
  export default connect(mapStateToProps)(AppNav);
