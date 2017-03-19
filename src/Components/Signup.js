import React, { Component } from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import axios from 'axios';


class Signup extends Component {

  constructor()
    {
        super();

        //this.register=this.register.bind(this);
        this.handleSignup=this.handleSignup.bind(this);

    }


  handleSignup(e)
    {
           e.preventDefault();

        return axios.post('https://shielded-inlet-71502.herokuapp.com/api/v1/users',
        {user : {"email":"nmasheti@stakewithme.com" , "password":"nevie1024"}},
        { headers: {"Accept": "application/json; charset=utf-8",
                    "Content-Type":"application/json; charset=utf-8"}}
                )
            .then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
            console.log(error);
            });
    }

    render() {
    return (
      <div id="login-page" className="row">
        <div className="col s12 z-depth-6 card-panel">
          <form className="login-form">
            <div className="row">
              <div className="input-field col s12 center">
                <p className="center login-form-text">SignUp</p>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-communication-email prefix"></i>
                <input id="email" type="email" className="validate"/>
                <label for="email" className="center-align">Email</label>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-action-lock-outline prefix"></i>
                <input id="password" type="password" className="validate"/>
                <label for="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <button  onClick={this.handleSignup}   className="btn waves-effect waves-light col s12">Sign Up</button>
              </div>
              <div className="input-field col s12">
                <p className="margin center medium-small sign-up">Already have an account? <Link to="#">Login</Link></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
function toggleMenu(){
    if($(".navbar-collapse").hasclassName('collapse')){
      $(".navbar-collapse").removeclassName('collapse');
    }
    else{
      $(".navbar-collapse").addclassName('collapse');
    }
  }

export default Signup;
