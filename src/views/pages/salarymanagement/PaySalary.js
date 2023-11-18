import React from 'react'
import { useState } from 'react'
import '../productmanagement/AddProduct.css'

const PaySalary = () => {

  const [employeeName, setEmployeeName] = useState("");
  const [employeeType, setEmployeeType] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleEmployeeNameChange = (event) => {
    setEmployeeName(event.target.value);
  };

  const handleEmployeeTypeChange = (event) => {
    setEmployeeType(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setDate(newDate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("employeeName", employeeName);
    console.log("employeeType", employeeType);
    console.log("amount", amount);
    console.log("date", date);
    setEmployeeName("");
    setEmployeeType("");
    setAmount("");
    setDate("");
    };

  return (
    <React.Fragment>
      <a href='#' className="home-button">Home</a>
      <div className='customer-heading-div'>
        <h1 className="add-customer-heading">Please Fill The Employee Info:</h1>
      </div>
      
 <form className="product-form" onSubmit={handleSubmit}>
    <label htmlFor="product-name">Employee Name</label>
    <input
      placeholder="Shoukat Ali"
      id="employee-name"
      type="text"
      value={employeeName}
      onChange={handleEmployeeNameChange}
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
      <label htmlFor="product-name">Set Amount</label>
      <input
        readOnly
        placeholder="Rs"
        id="Salary-amount"
        type="number"
        value={amount}
        onChange={handleAmountChange}
      />
      <label htmlFor="product-name">Paid Date</label>
      <input
        readOnly
        type="date"
        id="employee-joining-date"
        value={date}
        onChange={handleDateChange}
      />
      <button type="submit">Pay Now</button>
    </form>
    </React.Fragment>
  )
}

export default PaySalary
