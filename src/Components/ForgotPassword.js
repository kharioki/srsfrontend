import React, { Component } from 'react';
import $ from 'jquery';
import {Link} from 'react-router';


class ForgotPassword extends Component {
    render() {
    return (
      <div id="login-page" className="row">
        <div className="col s12 z-depth-6 card-panel">
          <form className="login-form">
            <div className="row">
              <div className="input-field col s12 center">
                <img src="#" alt="" className="responsive-img valign profile-image-login" />
                <p className="center login-form-text">Forgot Password</p>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-social-person-outline prefix"></i>
                <input className="validate" id="email" type="email" />
                <label for="email" data-error="wrong" data-success="right" className="center-align">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <Link to="forgot-password.html" className="btn waves-effect waves-light col s12">Recover my Password</Link>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 m6 l6">
                <p className="margin medium-small"><a href="register.html">Register Now!</a></p>
              </div>
              <div className="input-field col s6 m6 l6">
                  <p className="margin right-align medium-small"><a href="login.html">Login</a></p>
              </div>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
