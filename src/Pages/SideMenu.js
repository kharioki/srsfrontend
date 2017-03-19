import React, { Component } from 'react';
import SideForm from './SideForm';
import {Link} from 'react-router';


class SideMenu extends Component {
  render() {
    return (
      <div className="SideMenu">
        <div className="panel panel-default">
          <div className="panel-heading">
            <Link to="#" className="pull-right">View all</Link>
              <h4>Your credit score</h4>
          </div>
            <div className="panel-body">
              <p><img src="//placehold.it/150x150" className="img-circle pull-right" alt=""/> <Link to="#"> Credit score </Link> </p>
              <div className="clearfix"></div>
              <hr />

            </div>
        </div>
        <SideForm />

      </div>
    );
  }
}

export default SideMenu;
