import React from 'react';

import PostAuthor from './PostAuthor';

const Post = (props) => {
  return (
    <div className="card" key={props.id}>
      <h3 className="post-title">{props.title}</h3>
      <p>{props.body}</p>
      <PostAuthor userId={props.userId} />
    </div>
  );
}

export default Post;
