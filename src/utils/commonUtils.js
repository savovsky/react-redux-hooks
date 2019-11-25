export const to = (promise) => {
  return promise
    .then(responce => [responce, null])
    .catch(error => [null, error]);
};
