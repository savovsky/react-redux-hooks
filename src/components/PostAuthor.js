import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

class PostAuthor extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    console.log(this.props);
    const user = this.props.user;

    return (
      <>
        <div>author: {user ? user.name : 'unknown'}</div>
      </>
    );
  }

}

const mapStateToProps = (state, props) => {
  return {
    user: state.users.find(user => user.id === props.userId)
  }
};

export default connect(mapStateToProps, { fetchUser })(PostAuthor);