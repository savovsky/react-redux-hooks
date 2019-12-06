import React from 'react';
import { connect } from 'react-redux';
import PostAuthor from './PostAuthor';

const PostPage = (props) => {
  return (
    <div className="post-wrapper">
      <h3 className="post-title">{props.post.title}</h3>
      <div className="post-author">
        Post <PostAuthor userId={props.post.userId} />
      </div>
      <div className="post-body">{props.post.body}</div>
    </div>
  )
};

PostPage.defaultProps = {
  post: {}
}

const mapStateToProps = (state, props) => {
return {
    post: state.posts.posts.find((el) => +props.match.params.id === el.id)
  }
};

export default connect(mapStateToProps)(PostPage);
