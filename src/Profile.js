import React, { Component } from 'react';
import $ from 'jquery';
import browserHistory, { Link } from 'react-router';
import axios from 'axios';
import ExpenseCard from './Pages/ExpenseCard';
import Savings from './Pages/Savings';
import Occupation from './Pages/Occupation';
import SideMenu from './Pages/SideMenu';
import UserInfo from './Pages/UserInfo';
import GuarantorCard from './Pages/GuarantorCard';
import './App.css';

class Profile extends Component {

  constructor(){
    super();
    this.state = {
      loading:true,
      expenditure:[],
      savings:[],
      employment:[],
      guarantor:[],
      user:{}

    }
    // this.login=this.login.bind(this);
    // this.handleSignup=this.handleSignup.bind(this);
    // this.addExpense = this.addExpense.bind(this);
  }

  // onLogin(e)
  //   {
  //       return axios.post('/user', {
  //           firstName: 'Fred',
  //           lastName: 'Flintstone'
  //               })
  //           .then(function (response) {
  //           console.log(response);
  //           })
  //           .catch(function (error) {
  //           console.log(error);
  //           });
  //   }
  // handleSignup(e)
  //   {
  //          e.preventDefault();
  //
  //       return axios.post('https://shielded-inlet-71502.herokuapp.com/api/v1/users',
  //       {user : {"firstname":"Jery" , "email":"nmasheti@stakewithme.com" , "password":"nevie1024"}},
  //       { headers: {"Accept": "application/json; charset=utf-8",
  //                   "Content-Type":"application/json; charset=utf-8"}}
  //               )
  //           .then(function (response) {
  //           console.log(response);
  //           })
  //           .catch(function (error) {
  //           console.log(error);
  //           });
  //   }
  //
  // handleLogin(e)
  //   {
  //          e.preventDefault();
  //
  //       return axios.post('https://shielded-inlet-71502.herokuapp.com/api/v1/authenticate',
  //       {"email":"emmanuel@yahoo.com", "password":"emmanuel@yahoo.com"},
  //       { headers: {"Accept": "application/json; charset=utf-8",
  //                   "Content-Type":"application/json; charset=utf-8"}}
  //               )
  //
  //           .then(function (response) {
  //           console.log(response.data.auth_token);
  //             //this.context.router.replace('/app');
  //             //this.context.history.pushState(null, '/app');
  //             browserHistory.push('/Profile');
  //           })
  //           .catch(function (error) {
  //           console.log(error);
  //           });
	// 	}

  getUserinfo(){
    var token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE0OTAwMjQ4NTZ9.erfRgSBHy7ZHJbf0lVDswZKWk-4u_JmI-KArp60ZYSw";
      //console.log("token chat", token);
    $.ajax({
      url: 'https://sheltered-eyrie-12048.herokuapp.com/api/v1/users/2.json',
      beforeSend: function (xhr) {
        xhr.setRequestHeader ("Authorization", token);
      },
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({user: data, savings:data.savings, employment:data.employment, guarantor:data.guarantor, loading:false},function(){
          console.log("Tony");
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr,status,err){
        console.log("Tony nahhhhh");
        console.log(err);
      }
    });
  }

  getExpenditure(){
    var token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE0OTAwMjQ4NTZ9.erfRgSBHy7ZHJbf0lVDswZKWk-4u_JmI-KArp60ZYSw";
      //console.log("token chat", token);
    $.ajax({
      url: 'https://sheltered-eyrie-12048.herokuapp.com/api/v1/expenditures.json',
      beforeSend: function (xhr) {
        xhr.setRequestHeader ("Authorization", token);
      },
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({expenditure: data, loading:false},function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr,status,err){
        console.log(err);
      }
    });
  }
// addExpense(expenseObject)
//    {
//
//
//        return axios.post('https://shielded-inlet-71502.herokuapp.com/api/v1/authenticate',
//        {"expense_type":"Rent", "amount":"500" ,"period":"12"},
//        { headers: {"Accept": "application/json; charset=utf-8",
//                    "Content-Type":"application/json; charset=utf-8"}}
//                )
//
//            .then(function (response) {
//            console.log(response);
//              //this.context.router.replace('/app');
//              //this.context.history.pushState(null, '/app');
//              this.getExpenditure();
//            })
//            .catch(function (error) {
//            console.log(error);
//            });
//    }



  componentWillMount(){
    this.getExpenditure();
    this.getUserinfo();

  }


  render() {
    console.log("userr", this.state.user.savings);
    console.log("userr", this.state.user.employment);

    const _this=this;


  return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
           <UserInfo user={this.state.user}/>
           <Occupation employment={this.state.employment} />
           <ExpenseCard expenditure={this.state.expenditure}/>
           <Savings savings={this.state.savings}/>
          </div>
          <div className="col-md-4">
          <SideMenu />
          <GuarantorCard guarantor={this.state.guarantor}/>

          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
