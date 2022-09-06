import React from "react";
import Card from "../Card/Card";
import "./ExpenseFilter.css";
function ExpenseFilter({ filteredExpenses, setFilteredExpenses, expenses }) {
  let filterData = [
    { month: "jan", value: 0, barHeight: 0 },
    { month: "feb", value: 0, barHeight: 0 },
    { month: "mar", value: 0, barHeight: 0 },
    { month: "apl", value: 0, barHeight: 0 },
    { month: "may", value: 0, barHeight: 0 },
    { month: "jun", value: 0, barHeight: 0 },
    { month: "jul", value: 0, barHeight: 0 },
    { month: "aug", value: 0, barHeight: 0 },
    { month: "sep", value: 0, barHeight: 0 },
    { month: "oct", value: 0, barHeight: 0 },
    { month: "nov", value: 0, barHeight: 0 },
    { month: "dec", value: 0, barHeight: 0 },
  ];
  function toShowBars() {
    let prices = filteredExpenses.map((each) => each.price);
    let max = Math.max(...prices);
    console.log(max);

    filteredExpenses.forEach((element) => {
      let date = new Date(element.date);
      let month = date.getMonth();
      filterData[month].value += +element.price;
      filterData[month].barHeight = 100 - (filterData[month].value / max) * 100;
    });
    console.log(filterData);
  }
  toShowBars();
  function selectHandler(event) {
    event.preventDefault();
    console.log(expenses);
    let filteredExpenses = expenses.filter((each) => {
      let year = new Date(each.date).getFullYear().toString();
      console.log(year);
      console.log(event.target.value);
      return event.target.value === year;
    });
    console.log(filteredExpenses);
    setFilteredExpenses(filteredExpenses);
  }
  return (
    <Card>
      <div className="filter-main">
        <div className="filter-section1">
          <h3>filter by year</h3>
          <select onChange={selectHandler}>
            <option value="2018">2018</option>
            <option value="2019">2019</option>{" "}
            <option value="2020">2020</option>
          </select>
        </div>
        <div className="filter-section2">
          {filterData.map((each) => (
            <div>
              <div className="div-bar">
                <div
                  className="div-bar-inner"
                  style={{ height: `${each.barHeight}%` }}
                ></div>
              </div>
              <div className="div-bar-matter">
                <p>{each.month}</p>
                <p>{each.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default ExpenseFilter;
