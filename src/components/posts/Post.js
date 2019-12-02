import React from 'react';
import { Link } from 'react-router-dom'

import PostAuthor from './PostAuthor';

const Post = (props) => (
  <div className="grid-item">
    <div className="card card-link" >
      <Link to={`/post/${props.postId}`}>
        <h3 className="card-title">{props.title}</h3>
        <p>{props.body}</p>
        <PostAuthor userId={props.userId} />
      </Link>
    </div>
  </div>
);

export default Post;
