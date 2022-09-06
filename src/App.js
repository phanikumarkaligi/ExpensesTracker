import logo from "./logo.svg";
import "./App.css";
import NewExpense from "./Components/NewExpense/NewExpense";
import ExpenseFilter from "./Components/ExpenseFilter/ExpenseFilter";
import ExpensesList from "./Components/ExpensesList/ExpensesList";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  return (
    <div className="App">
      <NewExpense setExpenses={setExpenses} />
      <ExpenseFilter
        expenses={expenses}
        setFilteredExpenses={setFilteredExpenses}
        filteredExpenses={filteredExpenses}
      />
      <ExpensesList expenses={filteredExpenses} />
    </div>
  );
}

export default App;
