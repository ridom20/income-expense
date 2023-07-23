import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const ExpensePage = () => {
  const [expense, setExpense] = useState("");
  const [expenseList, setExpenseList] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  const expenseSubmit = () => {
    if (expense.trim() !== "") {
      const expenseAmount = parseFloat(expense);
      setExpenseList([...expenseList, expenseAmount]);
      setTotalExpense(totalExpense + expenseAmount);
      setExpense("");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="card bg-base-100 shadow-xl">
          <h3 className="text-xl text-black-800 mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-black-400 inline-flex items-center justify-center">Expense</h3>
          <div className="card-body mb-5">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Type your expense"
                className="input input-bordered input-primary w-full max-w-xs"
                value={expense}
                onChange={(e) => setExpense(e.target.value)}
              />
              <button className="btn btn-primary" onClick={expenseSubmit}>
                Add
              </button>
            </div>
            {expenseList.length >= 1 && (
              <h2 className="card-title">Expense List</h2>
            )}

            {expenseList.length > 0 &&
              expenseList.map((item, id) => {
                return (
                  <div
                    className="bg-red-100 hover:bg-red-200 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400 inline-flex items-center justify-center"
                    key={id}
                  >
                    {item}
                  </div>
                );
              })}

            {expenseList.length > 0 && (
              <h3 className="mt-3">
                Total Expense: {totalExpense.toFixed(2)}
              </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensePage;
