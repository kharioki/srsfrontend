import React, { Component } from 'react';


class UserInfo extends Component {

  render() {
    const _this=this;
    return (
      <div className="panel panel-default">
        <img src="" className="img-responsive"  alt=""/>
          <div className="panel-body">
            <p>  <span> {_this.props.user.firstname }&nbsp {_this.props.user.lastname}</span> <br />
              Country: <br />
            4 Connections  <br />
          </p>
          <hr/>
        </div>
    </div>
    );
  }
}

export default UserInfo;
