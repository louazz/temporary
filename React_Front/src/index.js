import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Item from './pages/Item';
import ItemList from './pages/Listitem';
import SignUp from './pages/SignUp';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
RouteProps,
withRouter
} from "react-router-dom";
ReactDOM.render(
  
  <React.StrictMode>
 <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/signup" component={SignUp} />
      <Route path="/itemlist" component={ItemList} />
      <Route path="/item/:id" component={Item} />
    
    </Switch>
  </Router>

    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
