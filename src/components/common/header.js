import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
//import * as auth_Action from '../../actions/auth_Actions';
//import { bindActionCreators } from 'redux';
//import { login } from '../../actions/auth_Actions';
import { history } from '../../_healpers/history';

class Header  extends React.Component {
 constructor(props){
  super(props);
  this.handelLogout = this.handelLogout.bind(this);

 }
  handelLogout(e){
  //  const { dispatch } = this.props;
    localStorage.removeItem('user');
    history.push('/login')   
 }

  render(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3" >
  <a className="navbar-brand">Employee Details</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">

    <h6 className="Signoutalig">Welcome {JSON.parse(localStorage.getItem('userName'))} !</h6> &nbsp;&nbsp;&nbsp;

      <li className="nav-item active">
        <NavLink className="nav-link" exact to="/">Employee<span className="sr-only">(current)</span></NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About Us</NavLink>
      </li>
      
&nbsp;&nbsp;&nbsp;
      <li className="nav-item">
        <button className="btn btn-success"  onClick={this.handelLogout}>Logout</button>
      </li>
    </ul>
    
  </div>
</nav>
    );
}
}
function mapStateToProps(state,ownProps){
  debugger;
  return {
     
  DATA  :state.auth
};
}

export default connect(mapStateToProps)(Header);
