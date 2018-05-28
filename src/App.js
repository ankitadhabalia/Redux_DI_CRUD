import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import About from './components/common/about';
//import Home from './components/app/home';
import Customer from './components/app/customer';
import Create from './components/app/customer/create';
import Edit from './components/app/customer/edit';
import { PrivateRoute } from './PrivateRoute';
import register from './components/app/registration/register';
import login from './components/app/login/login.js';
import { history } from './_healpers/history';

class App extends Component {
  constructor(props) {
    super(props);
   // const { dispatch } = this.props;
    history.listen((location, action) => {
    });
}
  render() {
    return (
      <div className="container-fluid">
        <Router history ={history}>

          <div>
            <PrivateRoute exact path="/" component={Customer} ></PrivateRoute>
            <Route exact path='/login' component={login}></Route>
            <Route exact path='/register' component={register}></Route>
            <PrivateRoute exact path="/about" component={About} ></PrivateRoute>
            <PrivateRoute exact path="/create" component={Create} ></PrivateRoute>
            <PrivateRoute exact path='/edit/:id' component={Edit} ></PrivateRoute>
          </div >

        </Router >
      </div >
    );
  }
}

export default App;
