import React, { useState } from "react";
import "./NewExpense.css";

function NewExpense({ setExpenses }) {
  const [inputExpense, setInputExpense] = useState({});
  function titleChangeHandler(event) {
    event.preventDefault();
    setInputExpense({ ...inputExpense, title: event.target.value });
  }

  function priceChangeHandler(event) {
    event.preventDefault();
    setInputExpense({ ...inputExpense, price: event.target.value });
  }

  function dateChangeHandler(event) {
    event.preventDefault();
    setInputExpense({ ...inputExpense, date: event.target.value });
  }

  function descriptionChangeHandler(event) {
    event.preventDefault();
    setInputExpense({ ...inputExpense, description: event.target.value });
  }

  function submitHandler(event) {
    console.log("submit handler");
    event.preventDefault();
    setExpenses((prev) => [...prev, inputExpense]);
    setInputExpense({ title: "", price: "", description: "", date: "" });
  }

  return (
    <div className="main">
      <section className="section1">
        <button onClick={submitHandler}>Add Expense</button>
      </section>
      <section className="section2">
        <form>
          <input
            type="text"
            placeholder="Item Name"
            value={inputExpense.title}
            onChange={titleChangeHandler}
          />
          <input
            type="text"
            placeholder="Description"
            value={inputExpense.description}
            onChange={descriptionChangeHandler}
          />
          <input
            type="number"
            placeholder="price"
            value={inputExpense.price}
            onChange={priceChangeHandler}
          />
          <input
            type="date"
            value={inputExpense.date}
            onChange={dateChangeHandler}
          />
        </form>
      </section>
    </div>
  );
}

export default NewExpense;
