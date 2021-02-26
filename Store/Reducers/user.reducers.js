const initialState = {
  error: false,
  userExistError: null,
  emailExistError: null,
  signUpSuccess: false,
  signupError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_EXIST_SUCCESS':
      return {
        ...state,
        signupError: null,
        userExistError: null,
      };
    case 'USER_EXIST_FAILURE':
      return {
        ...state,
        signupError: null,
        userExistError: action.payload,
      };

    case 'EMAIL_EXIST_SUCCES':
      return {
        ...state,
        signupError: null,
        emailExistError: null,
      };
    case 'EMAIL_EXIST_FAILURE':
      return {
        ...state,
        signupError: null,
        emailExistError: action.payload,
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        signUpSuccess: true,
        signupError: null,
      };
    case 'SIGNUP_FAILURE':
      return {
        ...state,
        signUpSuccess: false,
        signupError: action.payload,
      };

    default:
      return state;
  }
};
