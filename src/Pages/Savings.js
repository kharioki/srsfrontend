import React, { Component } from 'react';
import SavingItem from './SavingItem';

class Savings extends Component {
  render() {

    const allSavings=this.props.savings.map((savingsItem)=> {
    return(
      <SavingItem savingsItem={savingsItem} />
    )
  });
    return (
      <div className="panel panel-default">
        <div className="panel-heading"><a href="#" className="pull-right">Edit</a>
         <h4>My Savings</h4></div>
          <div className="panel-body">
            <div className="list-group">
              {allSavings}

            </div>
          </div>
      </div>
    );
  }
}

export default Savings;
