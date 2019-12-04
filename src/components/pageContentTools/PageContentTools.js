import React from 'react';
import { connect } from 'react-redux';


const PageContentTools = (props) => {
  console.log('tools props', props);

  return (
    <div className="tools-wrapper m-t-10 m-b-30">
    <div>
        <button type="button" className="btn basic">Show More</button>
    </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
      state: state
  }
};
  
export default connect(mapStateToProps)(PageContentTools);
