import React, { Component } from 'react';


class GuarantorItem extends Component {

  render() {
    const _this=this;
    return (
      <div>
        <p>Account: {_this.props.GuarantorItem.fullname} <br />
           Amount: {_this.props.GuarantorItem.business}       <br />
        </p>
      </div>
    );
  }
}

export default GuarantorItem;
