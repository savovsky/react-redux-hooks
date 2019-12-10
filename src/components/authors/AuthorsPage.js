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

  user(id) {
    return this.props.users.find((user) => user.id === id);
  }

  renderList(boardId) {
    return this.props.dndBoards[boardId].map((id) => {
      return (
        <DnDItem id={id} key={id}>
          <AuthorCard userId={id} />
        </DnDItem>
      );
    });
  }

  render() {
    return (
      <div className="columns-container">
        <div className="column-wrapper">
          <div className="column">
            <DnDContainer id="b1">
              {this.renderList('b1')}
            </DnDContainer>
          </div>
        </div>
        <div className="column-wrapper">
          <div className="column">
          <DnDContainer id="b2">
              {this.renderList('b2')}
            </DnDContainer>
          </div>
        </div>
        <div className="column-wrapper">
          <div className="column">
          <DnDContainer id="b3">
              {this.renderList('b3')}
            </DnDContainer>
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    dndBoards: state.dndBoards
  }
};

export default connect(mapStateToProps, { fetchUsers })(AuthorsPage);