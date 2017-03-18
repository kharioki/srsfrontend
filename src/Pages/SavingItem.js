import React, { Component } from 'react';


class SavingItem extends Component {

  render() {
    const _this=this;
    return (
      <div>
        <p>Account: {_this.props.savingsItem.account_number} <br />
           Amount: {_this.props.savingsItem.amount}       <br />
        </p>
      </div>
    );
  }
}

export default SavingItem;
