import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import * as customerActions from '../../../actions/customerActions';
import Header from '../../common/header';
//import axios from 'axios';

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserId: '',
      First_Name: '',
      Phone: '',
      Mail: '',
      redirectToEdit: false,
    };
     this.handleDelete = this.handleDelete.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
    this.myFunction = this.myFunction.bind(this);
    this.typeHead = this.typeHead.bind(this);             //for search text
  }

  handleDelete(customerId) {
    this.props.actions.deleteCustomer(customerId)
      .then(response => {
        this.props.actions.fetchAllCustomers();
      });
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  //searching by typehead
  typeHead(e) {
    e.preventDefault();
    this.props.actions.search(e.target.value);
  }

  page(num) {
    this.props.actions.fetchAllCustomers(num);
  }

  //searching by name and displaying on particular page 
  myFunction() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  render() {
    const allCustomers = this.props.products
    return (
      <div>
        <Header />
         <datalist Id="customerName" >
          {allCustomers.map(cus => {
            return (
              <option value={cus.First_Name} />
            )
          })}
        </datalist >

        <div className="form-group">
          <div className="row">
            <table className="table">
              <tr>
                <td> <NavLink to="/create" className="btn btn-info col-md-5" > Add Record </NavLink> </td>

                <td>
                  <div class="col-md-12">
                    <input type="text" className="form-control" id="myInput" name="First_Name"  
                    list="customerName" onBlur={this.typeHead} placeholder="Enter Your First Name" />
                  </div>
                </td>
                <td>
                  <button className="btn btn-info" onClick={this.myFunction}> Search </button>

                </td>
              </tr>
            </table>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>UserId</th>
              <th>First_Name</th>
              <th>Phone</th>
              <th>Mail</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="myTable">

            {allCustomers.map(customer => {
              return (
                <tr> <td>{customer.UserId}</td>
                  <td>{customer.First_Name}</td>
                  <td>{customer.Phone}</td>
                  <td>{customer.Mail}</td>
                  <td>
                 
                    <NavLink className="btn btn-success col-md-4" to={`/edit/${customer.UserId}`} >Edit</NavLink> {' '}
                    
                    <a className="btn btn-danger col-md-4" style={{ cursor: 'pointer', color : '#FFFFFF' }} onClick={() => this.handleDelete(customer.UserId)}> Delete </a>{' '} 

                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
       
        <center>
          <ul className="pagination">
            <li className="page-item"><button className="page-link" onClick={this.page.bind(this, 1)}>1</button></li>
            <li className="page-item"><button className="page-link" onClick={this.page.bind(this, 2)}>2</button></li>
            <li className="page-item"><button className="page-link" onClick={this.page.bind(this, 3)}>3</button></li>
            <li className="page-item"><button className="page-link" onClick={this.page.bind(this, 4)}>4</button></li>
            <li className="page-item"><button className="page-link" onClick={this.page.bind(this, 5)}>5</button></li>
          </ul>
        </center>
       
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    products: state.customerR
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(customerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Customer);