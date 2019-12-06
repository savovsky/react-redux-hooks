import React from 'react';

const AuthorCard = ({user}) => {
  return (
    <div className="card author p-20 m-10">
      <h3 className="card-header m-b-15">{user.name}</h3>
      <div className="card-footer">{user.website}</div>
    </div>
  );
};

export default AuthorCard;
