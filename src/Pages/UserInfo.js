import React, { Component } from 'react';
import BioPopup from './BioPopup';


class UserInfo extends Component {

  render() {
    const _this=this;
    return (
      <div className="panel panel-default">
        <div className="panel-heading"><button  onClick={BioPopup} className="pull-right">Add</button>
        <img src="" className="img-responsive"  alt=""/>
          <div className="panel-body">
            <div className="list-group">
            <p>  <span> {_this.props.user.firstname } {_this.props.user.lastname}</span> <br />
              Country: <br />
            4 Connections  <br />
          </p>
          <hr/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default UserInfo;
