import React from "react";
import Card from "../Card/Card";
import "./ExpenseItem.css";

function ExpenseItem({ expenses }) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let date = new Date(expenses.date);
  return (
    <Card>
    <div className="item-main">
      <div className="item-section1">
        <h3>{days[date.getDay()]}</h3>
        <h3>{date.getDate()}</h3>
        <h3>{date.toLocaleString("en-US", { month: "long" })}</h3>
      </div>
      <div className="item-section2">{expenses.title}</div>
      <div className="item-section3">{expenses.description}</div>

      <div className="item-section4">{`${expenses.price}$`}</div>
    </div>
    </Card>
  );
}

export default ExpenseItem;
