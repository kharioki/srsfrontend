import React, { Component } from 'react';


class Cards extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading"><a href="#" className="pull-right">Edit</a>
         <h4>Expenditure</h4></div>
          <div className="panel-body">
            <div className="list-group">
              <p>Rent</p>
              <p>Transportation</p>
              <p>Feeding</p>
            </div>
          </div>
      </div>
    );
  }
}

export default Cards;
