import React from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../../actions/usersActions';
import AuthorCard from './AuthorCard';


class AuthorsPage extends React.Component {

  componentDidMount() {
    this.props.fetchUsers();
  }

  renderList() {
    return this.props.users.map((user) => {
      return (
        <AuthorCard key={user.id} user={user} />
      );
    });
  }

  render() {
    console.log(this.props.users);
    return (
      <div className="columns-container">
        <div className="column-wrapper">
          <div className="column">{this.renderList()}</div>
        </div>
        <div className="column-wrapper">
          <div className="column"></div>
        </div>
        <div className="column-wrapper">
          <div className="column"></div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.users.users
  }
};

export default connect(mapStateToProps, { fetchUsers })(AuthorsPage);