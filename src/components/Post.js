import React from 'react';

import PostAuthor from './PostAuthor';

const Post = (props) => {
  return (
    <>
      <h3 style={{color: 'darkcyan'}}>{props.title}</h3>
      <p>{props.body}</p>
      <PostAuthor userId={props.userId} />
    </>
  );
}

export default Post;
