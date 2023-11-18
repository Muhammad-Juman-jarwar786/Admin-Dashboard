import React from 'react'
import { useState } from 'react'
import '../productmanagement/AddProduct.css'

const SetSalary = () => {

  const [amount, setAmount] = useState("");
  const [employee, setEmployee] = useState("");
  const [employeeType, setEmployeeType] = useState("");

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleEmployeeChange = (event) => {
    setEmployee(event.target.value);
  };
  const handleEmployeeTypeChange = (event) => {
    setEmployeeType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("amount", amount);
    console.log("employee", employee);
    console.log("employeeType", employeeType);
    setAmount("");
    setEmployee("");
    setEmployeeType("");
};


  return (
    <React.Fragment>
      <a href='#' className="home-button">Home</a>
      <div className='customer-heading-div'>
        <h1 className="add-customer-heading">Please Fill The Employee Info:</h1>
      </div>
      
 <form className="product-form" onSubmit={handleSubmit}>
      <label htmlFor="product-name">Set Amount</label>
      <input
        placeholder="Rs"
        id="Salary-amount"
        type="number"
        value={amount}
        onChange={handleAmountChange}
      />
      <label htmlFor="product-name">Employee Type</label>
      <select 
        id="employee-type"
        type="text"
        value={employeeType}
        onChange={handleEmployeeTypeChange}>
        <option value="volvo">Select Employee Type</option>
        <option value="senior">Senior</option>
        <option value="junior">Junior</option>
        <option value="labour">Labour</option>
      </select>
      <label htmlFor="product-name">Employee</label>
      <select 
        id="employee"
        type="text"
        value={employee}
        onChange={handleEmployeeChange}>
        <option value="volvo">Select Employee</option>
        <option value="employee1">Wajahat</option>
        <option value="employee2">shoukat</option>
        <option value="employee3">ali nawaz</option>
      </select>

      <button type="submit">Set Salary</button>
    </form>
    </React.Fragment>
  )
}

export default SetSalary
