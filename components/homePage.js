import React from 'react';
import { connect } from 'react-redux';
import './../styles/index.scss';
import logo from '../static/logo.svg';
import banner from '../static/banner.png';
import LoginForm from './loginForm';
import ThankYou from './thankyou';
import TermsConditions from './popup';

const HomePage = props => {
  return (
    <div className='content-wrapper'>
      {/* <TermsConditions /> */}
      <div className='banner'>
        <img src={banner} alt='banner' />
      </div>
      <div className='right-content'>
        <div className='header'>
          {/* <img src={logo} alt="logo"/> */}
          <svg
            width='124'
            height='29'
            viewBox='0 0 124 29'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M18.0182 18.218C20.8548 16.58 22.5727 13.7034 22.5727 10.3075C22.5727 4.39469 18.178 0.439468 11.9056 0.439468H0V28.4057H7.31117V19.7761H11.2264L15.9407 28.4057H24.1308V28.2059L18.0182 18.218ZM7.31117 6.75184H11.5461C13.8233 6.75184 15.1817 8.0303 15.1817 10.1477C15.1817 12.3051 13.8233 13.5836 11.5461 13.5836H7.31117V6.75184Z'
              fill='#1C1919'
            />
            <path
              d='M31.3671 21.8536V17.4989H40.7558V11.1066H31.3671V6.9516H41.5548V0.439468H24.0959V28.4057H41.9144V21.8536H31.3671Z'
              fill='#1C1919'
            />
            <path
              d='M55.3144 28.8452C62.9452 28.8452 67.8193 24.4105 69.0978 17.7386H61.9065C60.9077 20.2955 58.6304 21.8936 55.5941 21.8936C51.4791 21.8936 48.7224 18.8972 48.7224 14.4226C48.7224 9.90803 51.4791 6.9516 55.5941 6.9516C58.3907 6.9516 60.5481 8.30996 61.6668 10.5872H68.938C67.4598 4.23488 62.7055 0 55.3144 0C47.0844 0 41.2514 5.95281 41.2514 14.4226C41.2514 22.8923 47.0844 28.8452 55.3144 28.8452Z'
              fill='#1C1919'
            />
            <path
              d='M87.1022 18.2182C89.9388 16.5802 91.6567 13.7037 91.6567 10.3078C91.6567 4.39492 87.262 0.439697 80.9896 0.439697H69.084V28.4059H76.3952V19.7763H80.3104L85.0247 28.4059H93.2148V28.2062L87.1022 18.2182ZM76.3952 6.75207H80.63C82.9073 6.75207 84.2656 8.03053 84.2656 10.148C84.2656 12.3054 82.9073 13.5838 80.63 13.5838H76.3952V6.75207Z'
              fill='#1C1919'
            />
            <path
              d='M102.489 0.439697H91.382V28.4059H102.489C111.078 28.4059 116.831 22.8127 116.831 14.3829C116.831 6.03294 111.078 0.439697 102.489 0.439697ZM102.449 21.8538H98.6932V6.99178H102.449C106.803 6.99178 109.36 9.74846 109.36 14.3829C109.36 19.0972 106.803 21.8538 102.449 21.8538Z'
              fill='#1C1919'
            />
            <circle cx='120.415' cy='24.7666' r='3.58476' fill='#DE4C4C' />
          </svg>
        </div>
        <div className='form-wrapper'>
          {props.signUpSuccess ? <ThankYou /> : <LoginForm />}
        </div>
        <div className='footer'>
          <p className='copyright'>© 2021 Recrd, Inc. All Rights Reserved</p>
          <p className='copyright'>info@recrd.com</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  signUpSuccess: state ? state.signUpSuccess : false,
});

export default connect(mapStateToProps, null)(HomePage);
