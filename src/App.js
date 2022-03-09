import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance ",
    amount: 294.67,
    date: new Date(2022, 1, 28),
  },
  {
    id: "e2",
    title: "Groceries",
    amount: 300.67,
    date: new Date(2022, 1, 28),
  },
  {
    id: "e3",
    title: "Rent",
    amount: 500.67,
    date: new Date(2022, 1, 28),
  },
  {
    id: "e4",
    title: "Cell Phone",
    amount: 94.67,
    date: new Date(2022, 1, 28),
  },
];

export const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
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
