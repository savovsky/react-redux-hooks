import React from 'react';
import { Link } from 'react-router-dom'

import PostAuthor from './PostAuthor';
import * as Utils from '../../utils/commonUtils';

const Post = (props) => (
  <Link to={`/post/${props.postId}`}>
    <div className="card p-20">
        <h3 className="card-header m-b-15">{Utils.stringTruncate(props.title, 30)}</h3>
        <div className="card-body m-b-15">{Utils.stringTruncate(props.body, 150)}</div>
        <div className="card-footer">
          <PostAuthor userId={props.userId} />
        </div>
    </div>
  </Link>
);

export default Post;
