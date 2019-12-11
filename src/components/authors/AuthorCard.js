import React from 'react';
import { connect } from 'react-redux';

const AuthorCard = (props) => {
  return (
    <div className="card author p-20 m-10">
      <h3 className="card-header m-b-15">{props.user.name}</h3>
      <div className="card-footer">{props.user.website}</div>
    </div>
  );
};

AuthorCard.defaultProps = {
  user: {}
}


const mapStateToProps = (state, props) => {
  return {
    user: state.users.users.find(user => user.id === props.userId)
  }
};

export default connect(mapStateToProps)(AuthorCard);
