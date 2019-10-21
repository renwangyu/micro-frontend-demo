import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
// import App from './App';
import Cola from './pages/cola';
import Wine from './pages/wine';
// import * as serviceWorker from './serviceWorker';
import singleSpaReact from 'single-spa-react';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// __webpack_public_path__ = window.getPublicPath && window.getPublicPath('drink');

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: () => (<BrowserRouter>
                  <div className="container">
                    <Switch>
                      <Route path="/drink/cola" component={Cola} />
                      <Route path="/drink/wine" component={Wine} />
                      <Redirect to="/drink/cola" />
                    </Switch>
                  </div>
                </BrowserRouter>),
})

// 项目启动的钩子
export const bootstrap = [
  reactLifecycles.bootstrap,
]
// 项目启动后的钩子
export const mount = [
  reactLifecycles.mount,
]
// 项目卸载的钩子
export const unmount = [
  reactLifecycles.unmount,
]
