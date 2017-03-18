import React, { Component } from 'react';
import {Link} from 'react-router';


class Footer extends Component {
  render() {
    return (
      <div className="container">
        <footer id="footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-3 column">
                  <h4>Information</h4>
                  <ul className="nav">
                    <li><Link to="#">About us</Link></li>
                    <li><Link to="#">How it works</Link></li>
                    <li><Link to="#">Benefits</Link></li>
                  </ul>
                </div>
              <div className="col-xs-6 col-md-3 column">
                  <h4>Follow Us</h4>
                  <ul className="nav">
                    <li><Link to="#">Twitter</Link></li>
                    <li><Link to="#">Facebook</Link></li>
                  </ul>
              </div>
              <div className="col-xs-6 col-md-3 column">
                  <h4>Contact Us</h4>
                  <ul className="nav">
                    <li><Link to="#">Email</Link></li>
                    <li><Link to="#">Headquarters</Link></li>
                  </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
