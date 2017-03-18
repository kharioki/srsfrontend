import React, { Component } from 'react';
import OccupationItem from './OccupationItem';

class Occupation extends Component {
  render() {

    const employment=this.props.employment.map((employmentItem)=> {
    return(
      <OccupationItem employmentItem={employmentItem} />
    )
  });
    return (
      <div className="panel panel-default">
        <div className="panel-heading"><a href="#" className="pull-right">Edit</a>
         <h4>Occupation</h4></div>
          <div className="panel-body">
            <div className="list-group">
              {employment}

            </div>
          </div>
      </div>
    );
  }
}

export default Occupation;
