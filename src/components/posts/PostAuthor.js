import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../../actions/usersActions';

class PostAuthor extends React.Component {

  // componentDidMount() {
  //     this.props.fetchUser(this.props.userId);
  // }

  render() {
    const user = this.props.user;

    return (
      <>
        {`by ${user ? user.name : 'unknown'}`}
      </>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.users.users.find(user => user.id === props.userId)
  }
};

export default connect(mapStateToProps, { fetchUser })(PostAuthor);
