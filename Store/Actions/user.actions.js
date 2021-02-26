import axios from 'axios';

export const signUpUser = data => async dispatch => {
  try {
    const response = await axios.post(
      `https://beta-api.vue.co/auth/signup`,
      data
    );
    dispatch({ type: 'SIGNUP_SUCCESS' });
  } catch (e) {
    dispatch({ type: 'SIGNUP_FAILURE', payload: e.response.data.message });
  }
};

export const userExists = username => async dispatch => {
  try {
    const response = await axios.get(
      `https://beta-api.vue.co/auth/username/${username}/exists`
    );
    if (response.data.exists) {
      dispatch({ type: 'USER_EXIST_FAILURE', payload: 'Username Reserved' });
    } else {
      dispatch({ type: 'USER_EXIST_SUCCESS' });
    }
  } catch (e) {
    dispatch({ type: 'USER_EXIST_FAILURE', payload: e.response.data.message });
  }
};

export const emailExists = email => async dispatch => {
  try {
    const response = await axios.get(
      `https://beta-api.vue.co/auth/email/${email}/exists`
    );
    if (response.data.exists) {
      dispatch({
        type: 'EMAIL_EXIST_FAILURE',
        payload: 'Email Already Registered',
      });
    } else {
      dispatch({ type: 'EMAIL_EXIST_SUCCESS' });
    }
  } catch (e) {
    dispatch({ type: 'EMAIL_EXIST_FAILURE', payload: e.response.data.message });
  }
};
