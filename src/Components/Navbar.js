import React, { Component } from 'react';
import $ from 'jquery';
import Link from 'react-router';


class Navbar extends Component {
    render() {
    return (
        <nav className="navbar navbar-trans navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">

              <button className="navbar-toggle" onClick={() => {toggleMenu();}} style={{position: 'absolute', right: 0, top: 0}} />
                <span className="sr-only"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>

              <Link to="#" className="navbar-brand">Brand</Link>
            </div>
            <div className="navbar-collapse collapse" id="navbar-collapsible">
              <ul className="nav navbar-nav navbar-left" />
                <li><Link to="#section1">Home</Link></li>
                <li><Link to="#section2">About Us</Link></li>
                <li><Link to="#section3">How it works</Link></li>
                <li><Link to="#section4">Growth</Link></li>
                <li><Link to="#section6"></Link></li>
                <li><Link to="#section7">Contact us</Link></li>
                <li>&nbsp;</li>

              <form className="navbar-form">
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-chevron-down"></span></button>
                      <ul className="dropdown-menu">
                        <li><Link to="#">Category 1</Link></li>
                        <li><Link to="#">Category 2</Link></li>
                        <li><Link to="#">Category 3</Link></li>
                        <li><Link to="#">Category 4</Link></li>
                        <li><Link to="#">Category 5</Link></li>
                      </ul>
                    </div>
                    <input type="text" className="form-control" placeholder="What are searching for?" />
                    <span className="input-group-addon"><span className="glyphicon glyphicon-search"></span> </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </nav>
    );
  }
}
function toggleMenu(){
    if($(".navbar-collapse").hasClass('collapse')){
      $(".navbar-collapse").removeClass('collapse');
    }
    else{
      $(".navbar-collapse").addClass('collapse');
    }
  }

export default Navbar;
