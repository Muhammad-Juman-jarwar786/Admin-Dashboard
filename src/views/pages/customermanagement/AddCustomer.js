import React from 'react'
import { useState } from 'react'
import './AddCustomer.css'

const AddCustomer = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [shop, setShop] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add customer to database or perform any other action
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Address:', address)
    console.log('Phone:', phone)
    console.log('Shop:', shop)
  }

  return (
    <React.Fragment>
      <a href='#' className="home-button">Home</a>
      <div className='customer-heading-div'>
        <h1 className="add-customer-heading">Please Fill The Customer Info:</h1>
      </div>
      <form className='form-container' onSubmit={handleSubmit}>
        <div className="input-row">
          <div className="input-group">
            <label className="input-label">Name:</label>
            <input
              type="text"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label className="input-label">Email:</label>
            <input
              type="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="input-row">
          <div className="input-group">
            <label className="input-label">Address:</label>
            <input
              type="text"
              className="input-field"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label className="input-label">Phone:</label>
            <input
              type="tel"
              className="input-field"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="input-row">
          <div className="input-group">
            <label className="input-label">Shop Name:</label>
            <input
              type="text"
              className="input-field"
              value={shop}
              onChange={(e) => setShop(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label className="input-label">Customer Type:</label>
            <select className="select-field">
              <option value="volvo">Select Type</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div className="button-row">
          <button type="submit" className="add-customer-button">Add Customer</button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default AddCustomer
