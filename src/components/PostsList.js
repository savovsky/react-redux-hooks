import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/postsActions';
import Post from './Post';

class PostsList extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map((post, i) => {
      if ( i < 25) {
        return (
          <div className="card" key={post.id}>
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
        <h2>Posts</h2>
        {this.renderList()}
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
};

export default connect(mapStateToProps, { fetchPosts })(PostsList);
