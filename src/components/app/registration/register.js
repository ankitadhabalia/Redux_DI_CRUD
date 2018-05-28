import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import * as auth_Action from '../../../actions/auth_Actions';
//import { Register } from '../../../actions/auth_Actions';
import '../registration/regg.css'

class register extends React.Component {
    constructor(props) {
        super(props);
        // reset login status
       
        this.state = {
            Email: '',
            Password: '',
            ConfirmPassword: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit(e) {
        debugger;
 console.log(e);
        e.preventDefault();
        this.setState({ submitted: true });
        const {  Email, Password, ConfirmPassword } = this.state;
        const { dispatch } = this.props;
        if (Email && Password && ConfirmPassword) {
            dispatch(auth_Action.Register( Email, Password, ConfirmPassword));
        }
    }
    render() {
        return (
            <div className="container">
                <div className=" divreg">
                <form onSubmit={this.handleSubmit} >
                    <h2>Register Form</h2>
                    <div className="input-container">
                        <i className="fa fa-user icon"></i>
                        <input className="input-field" type="Email" placeholder="Email" name="Email" value={this.state.Email} onChange={this.handleChange} />
                    </div>

                    <div className="input-container">
                        <i className="fa fa-envelope icon"></i>
                        <input className="input-field" type="password" placeholder="Password" name="Password" value={this.state.Password} onChange={this.handleChange} />
                    </div>

                    <div className="input-container">
                        <i className="fa fa-key icon"></i>
                        <input className="input-field" type="password" placeholder="ConfirmPassword" name="ConfirmPassword" value={this.state.ConfirmPassword} onChange={this.handleChange} />
                    </div>

                    <button type="submit" className="button">Register</button>
                    <br/><br />
                    <NavLink type="submit" className="button" to="/login" >Login</NavLink>
                </form>
            </div>
            </div>
        );
    }
}
function mapStateToProps(state,ownProps){
    return {
       
    DATA  :state.auth
};
}


export default connect(mapStateToProps )(register);
