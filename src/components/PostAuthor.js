import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions/usersActions';

class PostAuthor extends React.Component {

  componentDidMount() {
    console.log(this.props);
      this.props.fetchUser(this.props.userId);
  }

  render() {
    // console.log(this.props);
    const user = this.props.user;

    return (
      <div className="post-author">
        author: {user ? user.name : 'unknown'}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.users.users.find(user => user.id === props.userId)
  }
};

export default connect(mapStateToProps, { fetchUser })(PostAuthor);
