import React, { Component } from 'react';
import $ from 'jquery';
import browserHistory, {Router, Link} from 'react-router';
import axios from 'axios';


class SavingsPopup extends Component {

  constructor()
    {
        super();

        this.handleSavings=this.handleSavings.bind(this);

    }

    handleSavings(e){
           e.preventDefault();

            var data = {"account_number":" ", "amount":" ", "date": " "};


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
                <input id="account_number" type="text" className="validate"/>
                <label for="account_number" className="center-align">Account number</label>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-social-person-outline prefix"></i>
                <input id="amount" type="text" className="validate"/>
                <label for="amount" className="center-align">Average amount</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <button  onClick={this.handleSavings}   className="btn waves-effect waves-light col s12">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SavingsPopup;
