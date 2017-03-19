import React, { Component } from 'react';
import {Link} from 'react-router';


class Sidebar extends Component {
  render() {
    return (
      <div className="container">
        <div className="column col-sm-2 col-xs-1 sidebar-offcanvas" id="sidebar">
          	<ul className="nav">
      			  <li><Link to="#" data-toggle="offcanvas" className="visible-xs text-center"> <i className="glyphicon glyphicon-chevron-right"></i> </Link> </li>
        	  </ul>
            <ul className="nav hidden-xs" id="lg-menu">
                <li className="active"><Link to="#featured"><i className="glyphicon glyphicon-list-alt"></i> Featured </Link></li>
                <li><Link to="#"><i className="glyphicon glyphicon-list"></i> Stories </Link></li>
                <li><Link to="#"><i className="glyphicon glyphicon-paperclip"></i> Saved </Link></li>
                <li><Link to="#"><i className="glyphicon glyphicon-refresh"></i> Refresh </Link></li>
            </ul>
            <ul className="list-unstyled hidden-xs" id="sidebar-footer">
                <li>
                  <Link to="http://www.bootply.com"><h3>Bootstrap</h3> <i className="glyphicon glyphicon-heart-empty"></i> Simple Fast Loans </Link>
                </li>
            </ul>
            <ul className="nav visible-xs" id="xs-menu">
              	<li><Link to="#featured" className="text-center"><i className="glyphicon glyphicon-list-alt"></i> </Link> </li>
                <li><Link to="#stories" className="text-center"><i className="glyphicon glyphicon-list"></i> </Link></li>
              	<li><Link to="#" className="text-center"><i className="glyphicon glyphicon-paperclip"></i> </Link></li>
                <li><Link to="#" className="text-center"><i className="glyphicon glyphicon-refresh"></i> </Link></li>
            </ul>
          </div>
      </div>
    );
  }
}

export default Sidebar;
