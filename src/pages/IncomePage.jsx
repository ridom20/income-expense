import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const IncomePage = () => {
  const [income, setIncome] = useState("");
  const [incomeList, setIncomeList] = useState([]);

  const incomeSubmit = () => {
    setIncomeList([...incomeList, income]);
    setIncome("");
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="card bg-base-100 shadow-xl">
        <h3 className="text-xl  text-black-800  mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-black-400  inline-flex items-center justify-center">Income</h3>
          <div className="card-body mb-5">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Type your income"
                className="input input-bordered input-primary w-full max-w-xs"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
              />
              <button className="btn btn-primary" onClick={incomeSubmit}>
                Add
              </button>
            </div>
            {incomeList.length >= 1 && (
              <h2 className="card-title">Income List</h2>
            )}

            {incomeList.length > 0 &&
              incomeList.map((item, id) => {
                return (
                  <div
                    className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center"
                    key={id}
                  >
                    {item}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomePage;
