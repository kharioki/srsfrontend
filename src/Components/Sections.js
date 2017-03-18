import React, { Component } from 'react';
import {Link} from 'react-router';

class Sections extends Component {
  render() {
    return (
      <div className="Sections">
        <section className="container-fluid" id="section1">
        	<h1 className="text-center v-center">Micro loans made...</h1>

        	<div className="container">
            <div className="row">
                <div className="col-sm-4">
                  <div className="row">
                    <div className="col-sm-10 col-sm-offset-2 text-center"><h3>Easy</h3><p>There is other content and snippets of details or features that can be placed here..</p><i className="fa fa-cog fa-5x"></i></div>
                  </div>
                </div>
                <div className="col-sm-4 text-center">
                  <div className="row">
                    <div className="col-sm-10 col-sm-offset-1 text-center"><h3>Fast</h3><p>You may also want to create content that compells users to scroll down more..</p><i className="fa fa-user fa-5x"></i></div>
                  </div>
                </div>
                <div className="col-sm-4 text-center">
                  <div className="row">
                    <div className="col-sm-10 text-center"><h3>Convinient</h3><p>In the first 30 seconds of a user's visit to your site they decide if they're going to stay..</p><i className="fa fa-mobile fa-5x"></i></div>
                  </div>
                </div>
            </div>
          <div className="row"><br />

      		</div>
        </div>
      </section>

      <section className="container-fluid" id="section2">
        <div className="row">
        	<div className="col-sm-8 col-sm-offset-2 text-center">
              <h1>Who are we?</h1>
              <br />
      		    <p className="lead">hhhj</p>
              <br />
            	<i style={{fontSize:120}} className="fa fa-camera fa-5x"></i>
            	<p>Big ol Camera Icon</p>
          </div>
        </div>
      </section>

      <section className="container-fluid" id="section3">
      	<h1 className="text-center">Your information is safe...</h1>
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <h3 className="text-center">Vertical scrolling has become a popular and lasting trend in Web design.</h3>
              <div className="row">
                <div className="col-xs-4 col-xs-offset-1">Some brand-tacular designs even have home page content that is taller that 12,000 pixels. That's a lotta content.</div>
                <div className="col-xs-2"></div>
                <div className="col-xs-4 text-right">Anyhoo, this is just some random blurb of text, and Bootply.com is a playground and code editor for Bootstrap.</div>
              </div>
              <p className="text-center">
                <img src="/assets/example/img_mtnpeople.png" className="img-responsive center-block" alt="" />
              </p>
            </div>
         </div>
      </section>

      <section className="container-fluid" id="section4">
      	<h2 className="text-center">Grow your credit score...</h2>
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
            <img src="/assets/example/bg_smartphones.jpg" className="img-responsive center-block "  alt=""/>
            <p className="text-center">Images will scale down proportionately as browser width narrows.</p>
            </div>
          </div>
      </section>

      <section className="container-fluid" id="section6">
      	<h2 className="text-center">Do you see what I mean?</h2>
          <p className="text-center lead">Add some compelling information here</p>
          <img src="/assets/example/bg_iphone.png" className="img-responsive center-block " alt="" />

      </section>

      <section className="container" id="section7">
      	<h1 className="text-center">We're on social media</h1>
          <div className="row">
            <div className="col-sm-1 col-sm-offset-2 col-xs-4 text-center">
             <i className="fa fa-github fa-4x"></i>
            </div>
            <div className="col-sm-1 col-xs-4 text-center">
             <i className="fa fa-foursquare fa-4x"></i>
            </div>
            <div className="col-sm-1 col-xs-4 text-center">
             	<i className="fa fa-facebook fa-4x"></i>
            </div>
            <div className="col-sm-1 col-xs-4 text-center">
             <i className="fa fa-pinterest fa-4x"></i>
            </div>
            <div className="col-sm-1 col-xs-4 text-center">
             <i className="fa fa-google-plus fa-4x"></i>
            </div>
            <div className="col-sm-1 col-xs-4 text-center">
             <i className="fa fa-twitter fa-4x"></i>
            </div>
            <div className="col-sm-1 col-xs-4 text-center">
             <i className="fa fa-dribbble fa-4x"></i>
            </div>
            <div className="col-sm-1 col-xs-4 text-center">
             <i className="fa fa-instagram fa-4x"></i>
            </div>
        </div>
        <div className="row">
        	<div className="col-md-12 text-center">
            <br />
            <br />
            <p>
          	<Link to="#">Follow us.</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
    );
  }
}

export default Sections;
