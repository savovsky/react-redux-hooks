import React from 'react';
import { Link } from 'react-router-dom'

import PostAuthor from './PostAuthor';

const Post = (props) => (
  <Link to={`/post/${props.postId}`}>
    <div className="card card-link" >
      <h3 className="card-title">{props.title}</h3>
      <p>{props.body}</p>
      <PostAuthor userId={props.userId} />
    </div>
  </Link>
);

export default Post;
