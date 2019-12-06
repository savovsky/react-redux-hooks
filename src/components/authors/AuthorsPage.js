import React from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../../actions/usersActions';
import AuthorCard from './AuthorCard';
import DnDContainer from '../dNd/DnDContainer';
import DnDItem from '../dNd/DnDItem';


class AuthorsPage extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.fetchUsers();
    }
  }

  renderList() {
    return this.props.users.map((user) => {
      return (
        <DnDItem id={user.id} key={user.id}>
          <AuthorCard user={user} />
        </DnDItem>
      );
    });
  }

  render() {
    // console.log(this.props.users);
    return (
      <div className="columns-container">
        <div className="column-wrapper">
          <div className="column">
            <DnDContainer id="c-1">
              {this.renderList()}
            </DnDContainer>
          </div>
        </div>
        <div className="column-wrapper">
          <div className="column">
            <DnDContainer id="c-2" />
          </div>
        </div>
        <div className="column-wrapper">
          <div className="column">
            <DnDContainer id="c-3" />
          </div>
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