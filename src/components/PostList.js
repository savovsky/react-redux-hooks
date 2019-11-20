import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div key={post.id}>
          <h3 style={{color: 'darkcyan'}}>{post.title}</h3>
          <p>{post.body}</p>
          <UserHeader userId={post.userId} />
        </div>
      );

    });
  }

  render() {
    console.log(this.props.posts);
    return (
      <div>
        <h2>Posts List</h2>
        <div>{this.renderList()}</div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
