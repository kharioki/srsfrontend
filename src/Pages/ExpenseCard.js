import React, { Component } from 'react';
import ExpenseItem from './ExpenseItem';
import {Link} from 'react-router';
import ExpensePopup from './ExpensePopup';

class ExpenseCard extends Component {
  constructor()
 {
   super();
   this.addItem=this.addItem.bind(this);
   //this.state(expense_type:" ",amount:" ", period:" ");

 }

 addItem(expenseObject)
 {
   expenseObject={"expense_type":"Rent", "amount":this.state.amount}
   this.props.addExpense(expenseObject);
   console.log("expense added");

 }

 onAmountEntered(e)
 {
   e.preventDefault();

  this.setState("amount":e.value);

 }
  render() {

    const expenses=this.props.expenditure.map((expenseItem)=> {
    return(
      <ExpenseItem expenseItem={expenseItem} />
    )
  });
    return (
      <div className="panel panel-default">
        <div className="panel-heading"><Link to="#" className="pull-right" onClick={this.addItem.bind(this)}>Edit</Link>
         <h4>Expenditure</h4></div>
          <div className="panel-body">
            <div className="list-group">
              {expenses}

            </div>
          </div>
      </div>
    );
  }
}

export default ExpenseCard;
