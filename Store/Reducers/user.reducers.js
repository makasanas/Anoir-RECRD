const initialState = {
  error: false,
  userExistError: null,
  emailExistError: null,
  signupError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_EXIST_SUCCESS':
      return {
        ...state,
        signupError: false,
        userExistError: null,
      };
    case 'USER_EXIST_FAILURE':
      return {
        ...state,
        signupError: false,
        userExistError: action.payload,
      };

    case 'EMAIL_EXIST_SUCCES':
      return {
        ...state,
        signupError: false,
        emailExistError: null,
      };
    case 'EMAIL_EXIST_FAILURE':
      return {
        ...state,
        signupError: false,
        emailExistError: action.payload,
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        signupError: false,
      };
    case 'SIGNUP_FAILURE':
      return {
        ...state,
        signupError: true,
      };

    default:
      return state;
  }
};
