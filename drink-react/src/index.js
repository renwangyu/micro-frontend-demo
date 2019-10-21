import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
// import App from './App';
import Cola from './pages/cola';
import Wine from './pages/wine';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route path="/drink/cola" component={Cola} />
        <Route path="/drink/wine" component={Wine} />
        <Redirect to="/drink/cola" />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('drink')
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
