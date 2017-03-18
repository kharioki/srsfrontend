import React, { Component } from 'react';
import SideForm from './SideForm';
import Link from 'react-router';


class SideMenu extends Component {
  render() {
    return (
      <div className="SideMenu">
        <div className="panel panel-default">
          <div className="panel-heading">
            <Link to="#" className="pull-right">View all</Link>
              <h4>Bootply Editor &amp; Code Library</h4>
          </div>
            <div className="panel-body">
              <p><img src="//placehold.it/150x150" className="img-circle pull-right" alt=""/> <Link to="#">The Bootstrap Playground </Link> </p>
              <div className="clearfix"></div>
              <hr />

            </div>
        </div>
        <SideForm />

        <div className="panel panel-default">
          <div className="panel-thumbnail"><img src="/assets/example/bg_4.jpg" className="img-responsive" alt=""/></div>
          <div className="panel-body">
            <p className="lead">Social Good</p>
            <p>1,200 Followers, 83 Posts</p>

            <p>
              <img src="https://lh6.googleusercontent.com/-5cTTMHjjnzs/AAAAAAAAAAI/AAAAAAAAAFk/vgza68M4p2s/s28-c-k-no/photo.jpg" width="28px" height="28px" alt=""/>
              <img src="https://lh4.googleusercontent.com/-6aFMDiaLg5M/AAAAAAAAAAI/AAAAAAAABdM/XjnG8z60Ug0/s28-c-k-no/photo.jpg" width="28px" height="28px" alt=""/>
              <img src="https://lh4.googleusercontent.com/-9Yw2jNffJlE/AAAAAAAAAAI/AAAAAAAAAAA/u3WcFXvK-g8/s28-c-k-no/photo.jpg" width="28px" height="28px" alt=""/>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SideMenu;
