import React, { Component } from 'react';
import $ from 'jquery';
import browserHistory, {Router, Link} from 'react-router';
import axios from 'axios';


class ExpensePopup extends Component {

  constructor()
    {
        super();

        this.handleExpenditure=this.handleExpenditure.bind(this);

    }

    handleExpenditure(e){
           e.preventDefault();

            var data = {"expense_type":" ", "amount":" ", "period": " "};


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
                <p className="center login-form-text">Add your expenditure</p>
              </div>
            </div>

            <div className="row margin">
              <div className="mdl-selectfield">
                <label for="expense_type" className="center-align">Status</label>
                  <select class="browser-default">
                    <option value="" disabled selected>Choose your option</option>
                    <option value="1">Rent</option>
                    <option value="2">Transportation</option>
                    <option value="3">Utility Bill</option>
                  </select>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-social-person-outline prefix"></i>
                <input id="amount" type="text" className="validate"/>
                <label for="amount" className="center-align">Average amount</label>
              </div>
            </div>
            <div className="row margin">
              <div className="mdl-selectfield">
                <label for="period" className="center-align">Period(months)</label>
                  <select class="browser-default">
                    <option value="" disabled selected>Choose your option</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="1">4</option>
                    <option value="2">5</option>
                    <option value="3">6</option>
                    <option value="1">7</option>
                    <option value="2">8</option>
                    <option value="3">9</option>
                    <option value="1">10</option>
                    <option value="2">11</option>
                    <option value="3">12</option>
                    <option value="1">13</option>
                    <option value="2">14</option>
                    <option value="3">15</option>
                    <option value="1">16</option>
                    <option value="2">17</option>
                    <option value="3">18</option>
                    <option value="1">19</option>
                    <option value="2">20</option>
                    <option value="3">21</option>
                    <option value="1">22</option>
                    <option value="2">23</option>
                    <option value="3">24</option>
                  </select>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <button  onClick={this.handleExpenditure}   className="btn waves-effect waves-light col s12">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ExpensePopup;
