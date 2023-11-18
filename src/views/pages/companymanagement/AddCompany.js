import React from 'react'
import { useState } from 'react'
import Description from 'src/components/Description'
import '../customermanagement/AddCustomer.css'

const AddCompany = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add customer to database or perform any other action
    console.log('Name:', name)
    console.log('Address:', address)
    console.log('Phone:', phone)
    console.log('Description:', description)
    setName("")
    setAddress("")
    setPhone("")
    setDescription("")
  }

  return (
    <React.Fragment>
      <a href='#' className="home-button">Home</a>
      <div className='customer-heading-div'>
        <h1 className="add-customer-heading">Please Fill The Company Info:</h1>
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
            <label className="input-label">Contact No:</label>
            <input
              type="tel"
              className="input-field"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          {/* <div className="input-group">
            <label className="input-label">Email:</label>
            <input
              type="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div> */}
        </div>
        {/* <div className="input-row"> */}
          {/* <div className="input-group"> */}
            <div className='address-label'>
                <label className="input-label">Address:</label>
            </div>
            <input
              type="text"
              className="input-field address-field"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <Description 
                label="Description" 
                name="description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
            />
          {/* </div> */}
        {/* </div> */}
        {/* <div className="input-row">
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
        </div> */}
        <div className="button-row">
          <button type="submit" className="add-customer-button">Add Customer</button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default AddCompany
