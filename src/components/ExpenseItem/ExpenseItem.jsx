import React from "react";
import "./ExpenseItem.css";
import ExpenseDateBanner from "../ExpenseDateBanner/ExpenseDateBanner";
import Card from "../Card/Card";

const ExpenseItem = ({ title, amount, date, id }) => (
  <Card className="expense-item">
    <ExpenseDateBanner date={date} />
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">{`$${amount}`}</div>
    </div>
  </Card>
);

export default ExpenseItem;
