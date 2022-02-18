import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

export const App = () => {
  const expenses = [
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
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
