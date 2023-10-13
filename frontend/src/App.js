import React, { } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import ResetPassword from './containers/ResetPassword';
import Activate from './containers/Activate';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';

import { Provider } from 'react-redux';
import store from './store';

import Layout from './hocs/Layout';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
      <Layout>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
          <Route exact path="/password/rest/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
          <Route exact path="/activate/:uid/:token" element={<Activate />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </Provider>
)

export default App;
