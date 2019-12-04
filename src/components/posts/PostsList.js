import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../../actions/postsActions';
import Post from './Post';

class PostsList extends React.Component {

  state = {
    postsDisplayed: 6
  };

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map((post, i) => {
      if ( i < this.state.postsDisplayed) {
        return (
          <div className="grid-item m-b-15" key={post.id}>
            <Post
              postId={post.id}
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

  renderButton() {
    if (this.state.postsDisplayed < this.props.posts.length) {
      return (
        <div className="posts-footer m-t-10 m-b-30">
        <button
          type="button"
          className="btn basic"
          onClick={() => this.setState({postsDisplayed: this.state.postsDisplayed + 6})}
        >Show More
        </button>
      </div>
      );
    }

    return null;
  }

  render() {
    console.log(this.props.posts);
    return (
      <>
        <div className="grid-container">
          {this.renderList()}
        </div>
        {this.renderButton()}
      </>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
};

export default connect(mapStateToProps, { fetchPosts })(PostsList);
