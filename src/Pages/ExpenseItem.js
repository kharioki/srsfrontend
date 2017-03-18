import React, { Component } from 'react';


class ExpenseItem extends Component {

  render() {
    const _this=this;
    return (
      <div>
        <p>Expense Type: {_this.props.expenseItem.expense_type} <br />
           Amount: {_this.props.expenseItem.amount}       <br />
         Period (months): {_this.props.expenseItem.period}   <br />
        </p>
      </div>
    );
  }
}

export default ExpenseItem;
