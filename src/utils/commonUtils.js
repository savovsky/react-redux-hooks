export const to = (promise) => {
  return promise
    .then(responce => [responce, null])
    .catch(error => [null, error]);
};

export const stringTruncate = (str, length) => {
  if (str.length > length) {
      return str.substring(0, length).concat('...');
  }
  return str;
};

export const getUsersIds = (users) => {
  return users.map(user => user.id);
}
