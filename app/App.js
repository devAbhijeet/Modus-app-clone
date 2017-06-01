import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './config/route';

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
)