import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

function ExpensesList(props) {
  let expensesItems = props.expenses.map((each) => (
    <ExpenseItem expenses={each} />
  ));
  return <div>{expensesItems}</div>;
}

export default ExpensesList;
