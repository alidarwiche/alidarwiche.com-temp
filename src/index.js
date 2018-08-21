import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Kiera from './Kiera';
import './index.css';



ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/kiera" component={Kiera} />
    </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
