import React, { Component } from 'react';
import {Link} from 'react-router';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';

class Sections extends Component {
  render() {
    return (
    <div className="Sections">
      <section className="container-fluid" id="section1">
        <div className="row">
          <div className="col-md-8">
        	  <h1 className="text-center v-center">Micro loans made...</h1>
            	<div className="container">
                <div className="row">
                    <div className="col-sm-4">
                      <div className="row">
                        <div className="col-sm-10 col-sm-offset-2 text-center"><h3>Easy</h3>
                        <p>Simple process</p><i className="fa fa-cog fa-5x"></i></div>
                      </div>
                    </div>
                    <div className="col-sm-4 text-center">
                      <div className="row">
                        <div className="col-sm-10 col-sm-offset-1 text-center"><h3>Fast</h3>
                        <p>You get your credit score in minutes</p><i className="fa fa-user fa-5x"></i></div>
                      </div>
                    </div>
                    <div className="col-sm-4 text-center">
                      <div className="row">
                        <div className="col-sm-10 text-center"><h3>Convenient</h3>
                        <p>You do not need a financial history</p><i className="fa fa-mobile fa-5x"></i></div>
                      </div>
                    </div>
                </div>
              <div className="row"><br />

          		</div>
            </div>
          </div>
          <div className="col-md-4">
            <Login />
            <Signup />
          </div>
        </div>
      </section>

      <section className="container-fluid" id="section4">
      	<h2 className="text-center">Grow your credit score...</h2>
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
              <h4 className="text-center">Build your credit score by telling us more.</h4>
              <h5 className="text-center">Fast forward your credit score with guarantors.</h5>
            <img src="/public/Assets/css/images/seed.JPG" className="img-responsive center-block "  alt=""/>

            </div>
          </div>
      </section>

      <section className="container-fluid" id="section6">
      	<h2 className="text-center">Don't worry, Your information is safe</h2>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <img src="./public/Assets/css/images/infosec.PNG" className="img-responsive center-block " alt="" />
          </div>
          <div className="col-md-6 col-sm-6">
            <h4 className="text-center lead">We will not share any personal information</h4>
            <br />
            <h4 className="text-center lead">Borrower and Guarantor info is protected</h4>
            <br />
            <h4 className="text-center lead">We notify you on missed payments</h4>
          </div>
        </div>
      </section>

      <section className="container" id="section7">
      	<h1 className="text-center">We're on social media</h1>
          <div className="row">
            <div className="col-sm-4 col-xs-4 text-center">
             	<i className="fa fa-facebook fa-4x"></i>
            </div>
            <div className="col-sm-4 col-xs-4 text-center">
             <i className="fa fa-twitter fa-4x"></i>
            </div>
            <div className="col-sm-4 col-xs-4 text-center">
             <i className="fa fa-instagram fa-4x"></i>
            </div>
            <br />
            <br />
        </div>
        <hr />
        <div className="row">
        	<div className="col-md-12 text-center">
            <h2 className="text-center">Contact Us</h2>
                  <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 column">
                        <h4>Information</h4>
                        <ul className="nav">
                          <li><Link to="#">About us</Link></li>
                          <li><Link to="#">How it works</Link></li>
                          <li><Link to="#">Benefits</Link></li>
                        </ul>
                      </div>

                    <div className="col-xs-6 col-md-6 column">
                        <h4>Contact Us</h4>
                        <ul className="nav">
                          <li><Link to="#">Email</Link></li>
                          <li><Link to="#">Headquarters</Link></li>
                        </ul>
                    </div>
                  </div>
          </div>
        </div>
      </section>
    </div>
    );
  }
}

export default Sections;
