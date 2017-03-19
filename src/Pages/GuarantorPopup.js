import React, { Component } from 'react';
import $ from 'jquery';
import browserHistory, {Router, Link} from 'react-router';
import axios from 'axios';


class GuarantorPopup extends Component {

  constructor()
    {
        super();

        this.handleGuarantor=this.handleGuarantor.bind(this);

    }

    handleGuarantor(data){
          //  e.preventDefault();

            var data = {"fullname":" ", "business":" ", "annual_income": " "};


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
                <input className="validate" id="fullname" type="fullname" />
                <label for="fullname" data-error="wrong" data-success="right" className="center-align">Fullname</label>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-social-person-outline prefix"></i>
                <input id="business" type="text" className="validate"/>
                <label for="business" className="center-align">Business</label>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-social-person-outline prefix"></i>
                <input id="annual_income" type="text" className="validate"/>
                <label for="annual_income" className="center-align">Average annual income</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <button  onClick={this.handleGuarantor}   className="btn waves-effect waves-light col s12">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default GuarantorPopup;
