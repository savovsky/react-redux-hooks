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
          <>
            <Post
              id={post.id}
              title={post.title}
              body={post.body}
              userId={post.userId}
            />
          </>
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
        {this.renderList()}
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
