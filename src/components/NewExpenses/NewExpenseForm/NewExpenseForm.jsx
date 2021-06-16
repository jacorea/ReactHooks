import React, { useState } from "react";

import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: new Date()
  });

  const handleInputChange = (event) => {
    let { name, value } = event.target;

    setUserInput((prevState) => ({
      ...prevState,
      [name]: name === "date" ? new Date(value) : value
    }));
  };

  const handleExpenseFormSubmit = (event) => {
    event.preventDefault();
    const expenseData = { ...userInput };
    props.onSaveExpenseData(expenseData);

    setUserInput({
      title: "",
      amount: "",
      date: new Date()
    });
  };

  return (
    <form onSubmit={handleExpenseFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={handleInputChange}
            name="title"
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleInputChange}
            name="amount"
            value={userInput.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleInputChange}
            name="date"
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
