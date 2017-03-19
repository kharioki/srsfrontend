import React, { Component } from 'react';
import $ from 'jquery';
import {Link} from 'react-router';


class Navbar extends Component {

    render() {
    return (
        <nav className="navbar navbar-trans navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-collapsible"/>
                <span className="sr-only"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              <Link to="#" className="navbar-brand">Imperium</Link>
            </div>
            <div className="navbar-collapse collapse" id="navbar-collapsible">
              <ul className="nav navbar-nav navbar-left"  />

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
