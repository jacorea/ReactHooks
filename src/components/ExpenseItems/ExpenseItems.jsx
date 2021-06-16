import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const ExpenseItems = ({ expenseItems }) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const handleFilteredYear = (selectedFilteredYear) => {
    setFilteredYear(selectedFilteredYear);
  };

  return (
    <div>
      <ExpensesFilter
        onFilteredYear={handleFilteredYear}
        selectedfilteredYear={filteredYear}
      />
      <Card>
        {expenseItems
          .filter((expense) => expense.date.getFullYear() === filteredYear)
          .map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
};

export default ExpenseItems;
