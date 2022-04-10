import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 238.2,
    date: new Date(2022, 3, 3),
  },
  {
    id: "e2",
    title: "Car travels",
    amount: 40.8,
    date: new Date(2022, 3, 24),
  },
  { id: "e3", title: "Food", amount: 300, date: new Date(2022, 3, 11) },
  { id: "e4", title: "Others", amount: 132.5, date: new Date(2022, 3, 7) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
