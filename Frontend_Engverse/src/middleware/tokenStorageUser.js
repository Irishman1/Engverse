export const loginStorage = (store) => (next) => (action) => {
  if (action.type === 'USER') {
    localStorage.setItem('engverse-user', JSON.stringify(action.payload));
  }
  return next(action);
}

export const logoutStorage = (store) => (next) => (action) => {
  if (action.type === 'USER_LOGOUT') {
    localStorage.removeItem('engverse-user');
  }
  return next(action);
}
