import React, { Component } from 'react';
import GuarantorItem from './GuarantorItem';
import GuarantorPopup from './GuarantorPopup';

class GuarantorCard extends Component {
  render() {

    const guarantors=this.props.guarantor.map((guarantorItem)=> {
    return(
      <GuarantorItem guarantorItem={guarantorItem} />
    )
  });
    return (
      <div className="panel panel-default">
        <div className="panel-heading"><button  onClick={GuarantorPopup} className="pull-right">Add</button>
         <h4>Guarantors</h4></div>
          <div className="panel-body">
            <div className="list-group">
              {guarantors}

            </div>
          </div>
      </div>
    );
  }
}

export default GuarantorCard;
