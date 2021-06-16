import React, { useState } from "react";
import Card from "./components/Card/Card";
import ExpenseItems from "./components/ExpenseItems/ExpenseItems";
import NewExpense from "./components/NewExpenses/NewExpense/NewExpense";
import INITIAL_EXPENSES from "./data.utls";
import "./styles.css";

export default function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (addedExpense) => {
    setExpenses((prevExpenses) => {
      return [addedExpense, ...prevExpenses];
    });
  };

  return (
    <Card>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItems expenseItems={expenses} />
    </Card>
  );
}
