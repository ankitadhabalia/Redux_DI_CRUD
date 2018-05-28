import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as auth_Action from '../../../actions/auth_Actions';

class login extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
            Username: '',
            Password: '',
            submitted: false,
            loading: true,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1500); // simulates an async action, and hides the spinner
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        debugger;
        e.preventDefault();
        this.setState({ submitted: true });
        const { Username, Password } = this.state;
        const { dispatch } = this.props;
        if (Username && Password) {
            dispatch(auth_Action.login(Username, Password));
        }
    }

    render() {
        return (
            <div class="container py-5">
    <div class="row">
        <div class="col-md-12">
            <h2 class="text-center text-white mb-4"> Login Form  </h2>
            <div class="row">
                <div class="col-md-6 mx-auto">
                 
                    <div class="card rounded-0">
                        <div class="card-header">
                            <h3 class="mb-0">Login</h3>
                        </div>
                        <div class="card-body">
                            <form class="form" onSubmit={this.handleSubmit} autocomplete="off" id="formLogin" novalidate="" method="POST">
                                <div class="form-group">
                                    <label for="uname1"><h4><i>Email</i></h4></label>
                                    <input type="text" class="form-control form-control-lg rounded-0" name="Username" value={this.state.Username} onChange={this.handleChange} id="uname1" required=""/>
                                    <div class="invalid-feedback">Oops, you missed this one.</div>
                                </div>
                                <div class="form-group">
                                    <label><h4><i>Password</i></h4></label>
                                    <input type="password" class="form-control form-control-lg rounded-0" name="Password" value={this.state.Password} onChange={this.handleChange} id="pwd1" required="" autocomplete="new-password"/>
                                    <div class="invalid-feedback">Enter your password too!</div>
                                </div>
                               
                                <button type="submit" class="btn btn-success btn-lg float-right" id="btnLogin">Login</button>&nbsp; &nbsp; &nbsp;
                                <Link  className="btn btn-link" to="/register" >Create an account!</Link>
                            </form>
                        </div>
                    </div>
                </div>
              </div>
        </div>
    </div>
</div>
        );
    }
}

function mapStateToProps(state,ownProps){
    debugger;
    return { 
    DATA  :state.auth
    };
}
export default connect(mapStateToProps )(login);