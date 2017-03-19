import React, { Component } from 'react';
import $ from 'jquery';
import browserHistory, {Router, Link} from 'react-router';
import axios from 'axios';


class BioPopup extends Component {

  constructor()
    {
        super();

        this.handleBio=this.handleBio.bind(this);

    }

    handleBio(e){
           e.preventDefault();

            var data = {"firstname":" ", "lastname":" ", "username": " ", "phone_number":" ", "country": "", "dateofbirth":""};


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
                <p className="center login-form-text">Tell us about yourself</p>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-social-person-outline prefix"></i>
                <input className="validate" id="firstname" type="firstname" />
                <label for="email" data-error="wrong" data-success="right" className="center-align">Fistname</label>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-social-person-outline prefix"></i>
                <input className="validate" id="lastname" type="lastname" />
                <label for="email" data-error="wrong" data-success="right" className="center-align">Lastname</label>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-social-person-outline prefix"></i>
                <input id="username" type="text" className="validate"/>
                <label for="username" className="center-align">Username</label>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-social-person-outline prefix"></i>
                <input id="phone_number" type="text" className="validate"/>
                <label for="phone_number" className="center-align">Phone number</label>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-social-person-outline prefix"></i>
                <input id="country" type="text" className="validate"/>
                <label for="country" className="center-align">Country</label>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-social-person-outline prefix"></i>
                <input id="dateofbirth" type="text" className="validate"/>
                <label for="dateofbirth" className="center-align">Date of birth (yyyy-mm-dd)</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <button  onClick={this.handleBio}   className="btn waves-effect waves-light col s12">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default BioPopup;
