import React from 'react';
import { Formik, Form, Field } from 'formik';
import { DebounceInput } from 'react-debounce-input';
import { connect } from 'react-redux';
import {
  userExists,
  emailExists,
  signUpUser,
} from '../Store/Actions/user.actions';

import * as Yup from 'yup';

import './../styles/index.scss';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 8 characters')
    .required('Required'),
  terms: Yup.boolean().oneOf(
    [true],
    'The terms and conditions must be accepted.'
  ),
});

const LoginForm = props => {
  const login = async values => {
    const data = {
      username: values.username,
      password: values.password,
      email: values.email,
    };
    await props.signUpUser(data);
  };

  const handleInputChange = async (e, fieldName, p) => {
    p.setFieldValue(fieldName, e.target.value);
    if (fieldName === 'username') {
      await props.userExists(e.target.value);
    } else {
      await props.emailExists(e.target.value);
    }
  };

  const initialValues = { username: '', email: '', password: '', terms: false };

  return (
    <div className='form-content'>
      <h2>Sign up for early access.</h2>
      <p>Join the waiting list to participate in the beta launch of recrd.</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={login}
        render={
          p => [
            <Form>
              <div className='form'>
                <div className='form-field flex-col'>
                  <label>Username</label>
                  <DebounceInput
                    name='username'
                    type='text'
                    value={p.values.username}
                    debounceTimeout={500}
                    onChange={e => handleInputChange(e, 'username', p)}
                  />
                  {p.errors.username && p.touched.username && (
                    <div className='form-error'>{p.errors.username}</div>
                  )}
                  {props.userExistError && (
                    <div className='form-error'>{props.userExistError}</div>
                  )}
                </div>

                <div className='form-field flex-col'>
                  <label>Email Address</label>
                  <DebounceInput
                    name='email'
                    type='email'
                    value={p.values.email}
                    debounceTimeout={500}
                    onChange={e => handleInputChange(e, 'email', p)}
                  />
                  {p.errors.email && p.touched.email && (
                    <div className='form-error'>{p.errors.email}</div>
                  )}
                  {props.emailExistError && (
                    <div className='form-error'>{props.emailExistError}</div>
                  )}
                </div>
                <div className='form-field'>
                  <label>Password</label>
                  <input
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={p.values.password}
                    onChange={p.handleChange}
                  />
                  {p.errors.password && p.touched.password && (
                    <div className='form-error'>{p.errors.password}</div>
                  )}
                </div>

                <div className='form-field '>
                  <div className='agreement-field'>
                    <input
                      name='terms'
                      type='checkbox'
                      id='agreement'
                      value={p.values.agreement}
                      onChange={p.handleChange}
                    />
                    <label htmlFor='agreement'>
                      {' '}
                      By joing the waitlist means you have accepted our{' '}
                      <span className='redirect-link'>
                        Terms and Conditions
                      </span>{' '}
                      and <span className='redirect-link'>Privacy Policy</span>.
                    </label>
                  </div>
                  {p.errors.terms && p.touched.terms && (
                    <div className='form-error'>{p.errors.terms}</div>
                  )}
                </div>

                {props.signupError && (
                  <div className='form-field'>
                    <div className='form-error'>
                      Something weird happened...
                    </div>
                  </div>
                )}

                <div className='form-field button'>
                  <button
                    type={'submit'}
                    className='btn'
                    disabled={
                      !(p.isValid && p.dirty) ||
                      props.userExistError ||
                      props.emailExistError
                    }
                  >
                    Join
                  </button>
                </div>
              </div>
            </Form>,
          ] // imagine that these all do stuff in cWRP and cDU but render `null`
        }
      />
    </div>
  );
};

const mapStateToProps = state => ({
  userExistError: state ? state.userExistError : null,
  emailExistError: state ? state.emailExistError : null,
  signupError: state ? state.signupError : null,
});

const mapDispatchToProps = dispatch => ({
  userExists: data => dispatch(userExists(data)),
  emailExists: data => dispatch(emailExists(data)),
  signUpUser: data => dispatch(signUpUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
