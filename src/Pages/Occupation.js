import React, { Component } from 'react';
import OccupationItem from './OccupationItem';
import OccupationPopup from './OccupationPopup';

class Occupation extends Component {
  render() {

    const employment=this.props.employment.map((employmentItem)=> {
    return(
      <OccupationItem employmentItem={employmentItem} />
    )
  });
    return (
      <div className="panel panel-default">
        <div className="panel-heading"><button  onClick={OccupationPopup} className="pull-right">Add</button>
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
