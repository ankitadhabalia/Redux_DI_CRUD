import React, { Component } from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import 'react-select/dist/react-select.css';
import * as customerActions from '../../../actions/customerActions';
import { bindActionCreators } from 'redux';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      UserId: '',
      First_Name: '',
      Phone: '',
      Mail: ''
  };
  this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    let addData = {
        "UserId" : this.state.UserId,
        "First_Name" : this.state.First_Name,
        "Phone": this.state.Phone,
        "Mail": this.state.Mail,
    } 
    this.props.actions.addCustomer(addData)
    .then(
        res => {
          debugger;
            this.props.actions.fetchAllCustomers();
           
        }
        
    );
  }

  render() {
   
    return (
      <div class="container">
          <div class="panel panel-default">
              <div class="panel-heading"> <br/>
                  <h3 class="panel-title">
                      Add Employee
                  </h3>
              </div>
              <br/>
              <div class="panel-body">
                  <h4><NavLink to="/"><span class="btn btn-primary" aria-hidden="true">Employee List</span> </NavLink></h4>

                  <form action="/index" onSubmit={this.onSubmit}>

                      <div class="form-row">
                          <div class="form-group col-md-4">
                              <label for="description">UserId:</label>
                              <input type="text" class="form-control" name="UserId" value={this.state.UserId} onChange={this.onChange} placeholder="User Id" />
                          </div>
                      </div>

                      <div class="form-row">
                          <div class="form-group col-md-4">
                              <label for="title">First Name:</label>
                              <input type="text" class="form-control" name="First_Name" value={this.state.First_Name} onChange={this.onChange} placeholder="First Name" />
                          </div>
                      </div>

                      <div class="form-row">
                          <div class="form-group col-md-4">
                              <label for="description">Phone :</label>
                              <input type="text" class="form-control" name="Phone" value={this.state.Phone} onChange={this.onChange} placeholder="Phone Number" />
                          </div>
                      </div>

                      <div class="form-row">
                          <div class="form-group col-md-4">
                              <label for="description">Email Address:</label>
                              <input type="text" class="form-control" name="Mail" value={this.state.Mail} onChange={this.onChange} placeholder="Email Address" />
                          </div>
                      </div>

                    <button type="submit" class="btn btn-primary col-md-1">Submit</button>
                  </form>
              </div>
          </div>
      </div>
  );
  }
}
function mapStateToProps(state,ownProps){
    return {
       
    product :state.customerR
};
}

function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators(customerActions , dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps )(Create);