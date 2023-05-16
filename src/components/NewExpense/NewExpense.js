import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

const NewExpense = (props) => {
  const [toAdd, setToAdd] = useState(false);

  const showAddExpense = () => {
    setToAdd(true);
  };

  const hideaddExpense = () => {
    setToAdd(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setToAdd(false);
  };

  return (
    <div className="new-expense">
      {!toAdd && <button onClick={showAddExpense}>Add New Expenses</button>}
      {toAdd && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideaddExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
