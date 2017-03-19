import React, { Component } from 'react';
import $ from 'jquery';
import browserHistory, {Router, Link} from 'react-router';
import axios from 'axios';


class OccupationPopup extends Component {

  constructor()
    {
        super();

        this.handleOccupation=this.handleOccupation.bind(this);

    }

    handleOccupation(e){
           e.preventDefault();

            var data = {"status":" ", "start":" ", "end": " ", "average_income":""};


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
              <div className="mdl-selectfield">
                <label for="status" className="center-align">Status</label>
                  <select class="browser-default">
                    <option value="" disabled selected>Choose your option</option>
                    <option value="1">Employed</option>
                    <option value="2">Un-Employed</option>
                    <option value="3">Self-employed</option>
                  </select>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-social-person-outline prefix"></i>
                <input id="start" type="text" className="validate"/>
                <label for="start" className="center-align">Start-date(yyyy-mm-dd)</label>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-social-person-outline prefix"></i>
                <input id="end" type="text" className="validate" />
                <label for="end" className="center-align">End-date(yyyy-mm-dd)</label>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-social-person-outline prefix"></i>
                <input id="average_income" type="text" className="validate" />
                <label for="average_income" className="center-align">Average Income</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <button  onClick={this.handleOccupation}   className="btn waves-effect waves-light col s12">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default OccupationPopup;
