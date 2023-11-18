import React from 'react'
import { useState } from 'react'
import '../productmanagement/AddProduct.css'

const AddExpense = () => {

  const [expenseName, setExpenseName] = useState("");
  const [expenseType, setExpenseType] = useState("");
  const [employees, setEmployees] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");

  const handleExpenseNameChange = (event) => {
    setExpenseName(event.target.value);
  };

  const handleExpenseTypeChange = (event) => {
    setExpenseType(event.target.value);
  };

  const handleEmployeesChange = (event) => {
    setEmployees(event.target.value);
  };

  const handleExpenseDescriptionChange = (event) => {
    setExpenseDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Expense Name:", expenseName);
    console.log("Expense Description:", expenseDescription);
  };

  return (
    <React.Fragment>
      <a href='#' className="home-button">Home</a>
      <div className='customer-heading-div'>
        <h1 className="add-customer-heading">Please Fill The Expense Info:</h1>
      </div>
 <form className="product-form" onSubmit={handleSubmit}>
      <label htmlFor="expense-name">Expense Name</label>
      <input
        placeholder="Expense Name"
        id="expense-name"
        type="text"
        value={expenseName}
        onChange={handleExpenseNameChange}
      />
      <label htmlFor="pxpense-name">Expense Type</label>
      <select value={expenseType} onChange={handleExpenseTypeChange} id='expense-type'>
        <option value="expense-type">Select Expense Type</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </select>
        <label htmlFor="employees">Employees</label>
        <select value={employees} onChange={handleEmployeesChange} id='employees'>
            <option value="employees">Select Employees</option>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
            <option value="e">e</option>
        </select>
      <label htmlFor="product-description">Product Description</label>
      <textarea
        placeholder="Product Description"
        id="product-description"
        value={expenseDescription}
        onChange={handleExpenseDescriptionChange}
      />

      <button type="submit">Add Expense</button>
    </form>
    </React.Fragment>
  )
}

export default AddExpense
