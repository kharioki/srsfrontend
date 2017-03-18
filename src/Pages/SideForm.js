import React, { Component } from 'react';



class SideForm extends Component {
  render() {
    return (
      <div className="SideForm">
        <form>
          <div className="input-group">
            <div className="input-group-btn">
            <button className="btn btn-default">+1</button><button className="btn btn-default"><i className="glyphicon glyphicon-share"></i></button>
            </div>
            <input type="text" className="form-control" placeholder="Add a comment.." />
          </div>
        </form>
      </div>
    );
  }
}

export default SideForm;
