import React from 'react'
import { useState } from 'react'
import '../productmanagement/AddProduct.css'

const AddEmployee = () => {

  const [productName, setProductName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");
  const [date, setDate] = useState("");

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleDesignationChange = (event) => {
    setDesignation(event.target.value);
  };

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setDate(newDate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(productName, contact, email, address, designation, date)
    setProductName("");
    setContact("");
    setEmail("");
    setAddress("");
    setDesignation("");
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
        value={productName}
        onChange={handleProductNameChange}
      />
      <label htmlFor="product-name">Employee Contact</label>
      <input
        placeholder="+92 300 1234567"
        id="employee-contact"
        type="number"
        value={contact}
        onChange={handleContactChange}
      />
      <label htmlFor="product-name">Employee Email</label>
      <input
        placeholder="123@gmail.com"
        id="employee-email"
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      <label htmlFor="product-name">Employee Address</label>
      <input
        placeholder="House No. 123, Street No. 1, City, Country"
        id="employee-address"
        type="text"
        value={address}
        onChange={handleAddressChange}
      />
      <label htmlFor="product-name">Employee Designation</label>
      <select 
        id="designation"
        type="text"
        value={designation}
        onChange={handleDesignationChange}>
        <option value="volvo">Select Employee Designation</option>
        <option value="volvo">Volvo</option>
        <option value="saab">nothing</option>
        <option value="saab">Saab</option>
      </select>

      <label htmlFor="product-name">Date of Joining</label>
      <input
        type="date"
        id="employee-joining-date"
        value={date}
        onChange={handleDateChange}
      />

      <button type="submit">Add Employee</button>
    </form>
    </React.Fragment>
  )
}

export default AddEmployee
