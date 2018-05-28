import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as customerActions from '../../../actions/customerActions';
import {connect} from 'react-redux';
//import { history } from '../../../_healpers/history';

class Edit extends Component {
  constructor(props) {
    super(props);
    //alert(this.props.product)
    this.state = {
      UserId: this.props.product.UserId,
      First_Name: this.props.product.First_Name,
      Phone: this.props.product.Phone,
      Mail: this.props.product.Mail
    }
    this.onSubmit = this.onSubmit.bind(this);    //for submit
    this.onChange = this.onChange.bind(this);    //for text change while edit
  }

  onChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    })
  }

  onSubmit = (e) => {
    debugger;
    let editData = {
      "UserId": this.props.match.params.id,
      "First_Name": this.state.First_Name,
      "Phone": this.state.Phone,
      "Mail": this.state.Mail,
    }
    this.props.actions.editCustomer(editData)
    .then(
        res => {
          debugger;
            this.props.actions.fetchAllCustomers();
           
        }
    );
}

  render() {
    console.log("props", this.props)

    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">  <br />
            <h3 class="panel-title">
              Edit Employee Details
            </h3>
          </div>
          <br />
          <div class="panel-body">

            <h4><NavLink to="/"><span class="btn btn-primary" aria-hidden="true">Back to Employee List</span> </NavLink></h4>
            <form action="/index" onSubmit={this.onSubmit}>

              <div class="form-group col-md-3">
                <label for="description">User Id:</label>
                <input type="text" class="form-control" name="UserId" value={this.state.UserId} onChange={this.onChange} placeholder="User Id" />
              </div>

              <div class="form-group col-md-3">
                <label for="title">First Name:</label>
                <input type="text" class="form-control" name="First_Name" value={this.state.First_Name} onChange={this.onChange} placeholder="First Name" />
              </div>

              <div class="form-group col-md-3">
                <label for="title">Phone:</label>
                <input type="text" class="form-control" name="Phone" value={this.state.Phone} onChange={this.onChange} placeholder="Phone" />
              </div>

              <div class="form-group col-md-3">
                <label for="description">Email Address:</label>
                <input type="text" class="form-control" name="Mail" value={this.state.Mail} onChange={this.onChange} placeholder="Email Address" />
              </div>

              <button type="submit" className="btn btn-primary col-md-1">Save</button> &nbsp;
                <button type="reset" className="btn btn-info col-md-1">Reset</button>
            
             </form>
           
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state,ownProps,abc= ownProps.match.params.id){
  debugger;
  return {
    
    product :state.customerR.find(emp => {
      debugger;
      return parseInt(emp.UserId,10) === parseInt(abc,10);
  })
};
}

function mapDispatchToProps(dispatch){
  return{
      actions : bindActionCreators(customerActions , dispatch)
  };
}
export default  connect(mapStateToProps, mapDispatchToProps ) (Edit);