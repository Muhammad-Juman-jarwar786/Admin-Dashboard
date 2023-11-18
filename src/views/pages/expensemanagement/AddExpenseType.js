import React, { useState } from 'react';
import '../productmanagement/ProductType.css'

const AddExpenseType = () => {

  const [expense, setExpense] = useState([]);
  const [newExpense, setNewExpense] = useState('');

  const handleExpenseChange = (event) => {
    setNewExpense(event.target.value);
  };

  const addExpense = (event) => {
    event.preventDefault();
    setExpense([...expense, newExpense]);
    setNewExpense('');
  };

  return (
    <React.Fragment>
        <a href='#' className='btn-TopLeft-corner'>Home</a>
        <div className='customerType-input-btn'>
          <input className='Input-define-cutomer-type' value={newExpense} onChange={handleExpenseChange} type="text" placeholder="Expense Type" />
          <button className='btn-Input-right-submit' onClick={addExpense}>Add Expense type</button>
        </div>
        <div>
          <h2 className='heading-AddCustomerType'>Add Expense Types</h2>
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Expense Type</th>
              </tr>
            </thead>
            <tbody>
              {expense.map((expense, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{expense}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </React.Fragment>
  );
};

export default AddExpenseType;
