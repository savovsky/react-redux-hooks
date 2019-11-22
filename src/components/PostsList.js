import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';
import Post from './Post';

class PostsList extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map((post, i) => {
      if ( i < 20) {
        return (
          <div key={post.id}>
            <Post
              title={post.title}
              body={post.body}
              userId={post.userId}
            />
          </div>
        );
      }

      return null;
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

export default connect(mapStateToProps, { fetchPosts })(PostsList);
