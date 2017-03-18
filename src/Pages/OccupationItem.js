import React, { Component } from 'react';


class OccupationItem extends Component {

  render() {
    const _this=this;
    return (
      <div>
        <p>Status: {_this.props.employmentItem.status} <br />
           Average Income: {_this.props.employmentItem.average_income}       <br />
        </p>
      </div>
    );
  }
}

export default OccupationItem;
