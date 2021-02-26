import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import Layout from './../components/layout';
import userReducers from '../Store/Reducers/user.reducers';

const store = createStore(userReducers, applyMiddleware(thunk));

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default MyApp;
