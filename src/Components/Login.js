import React, { Component } from 'react';
import $ from 'jquery';
import browserHistory, {Router, Link} from 'react-router';
import axios from 'axios';


class Login extends Component {

  constructor()
    {
        super();
        this.login=this.login.bind(this);
        //this.register=this.register.bind(this);
        this.handleLogin=this.handleLogin.bind(this);

    }

    onLogin(e)
    {

        return axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
                })
            .then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
            console.log(error);
            });
    }



  handleLogin(e)
    {
        e.preventDefault();

        return axios.post('https://shielded-inlet-71502.herokuapp.com/api/v1/authenticate',
        {"email":"emmanuel@yahoo.com", "password":"emmanuel@yahoo.com"},
        { headers: {"Accept": "application/json; charset=utf-8",
                    "Content-Type":"application/json; charset=utf-8"}}
                )

            .then(function (response) {
            console.log(response.data.auth_token);
              //this.context.router.replace('/app');
              //this.context.history.pushState(null, '/app');
              browserHistory.push('/app?tk='+response.data.auth_token);
            })
            .catch(function (error) {
            console.log(error);
            });
	  }



    login(e){
           e.preventDefault();

            var data = {"email":"emmanuel@yahoo.com", "password":"emmanuel@yahoo.com"};


      $.ajax({

        type: 'POST',
        url: 'https://shielded-inlet-71502.herokuapp.com/api/v1/authenticate',

        dataType: 'json',
        cache: true,
        success: function(data){
            var transitionTo = Router.transitionTo;
            //transitionTo('/app', query={keyword: input_value});
            transitionTo('/App');
            console.log(data);

        }.bind(this),
        error: function(xhr,status,err){
          console.log(err);
        }
      });
    }

    render() {
    return (
      <div id="login-page" className="row">
        <div className="col s12 z-depth-6 card-panel">
          <form className="login-form">
            <div className="row">
              <div className="input-field col s12 center">
                <p className="center login-form-text">Welcome to Imperium</p>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-social-person-outline prefix"></i>
                <input className="validate" id="email" type="email" />
                <label for="email" data-error="wrong" data-success="right" className="center-align">Email</label>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-action-lock-outline prefix"></i>
                <input id="password" type="password" />
                <label for="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <button  onClick={this.handleLogin}   className="btn waves-effect waves-light col s12">Login</button>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 m6 l6">
                <p className="margin medium-small"><a href="register.html">Register Now!</a></p>
              </div>
              <div className="input-field col s6 m6 l6">
                <p className="margin right-align medium-small"><a href="forgot-password.html">Forgot password?</a></p>
              </div>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default Login;
