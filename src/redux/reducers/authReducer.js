const initialState = {
  isLoggedIn: false,
  username: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true, username: action.payload.username };
    case 'LOGOUT':
      return { ...state, isLoggedIn: false, username: null };
    default:
      return state;
  }
};

export default authReducer;
