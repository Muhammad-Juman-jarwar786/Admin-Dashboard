import React from 'react'
import { useState } from 'react'
import './AddProduct.css'

const AddProduct = () => {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [address, setAddress] = useState('')
  // const [phone, setPhone] = useState('')
  // const [shop, setShop] = useState('')

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductDescriptionChange = (event) => {
    setProductDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to submit the product form
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault()
    // Add customer to database or perform any other action
  //   console.log('Name:', name)
  //   console.log('Email:', email)
  //   console.log('Address:', address)
  //   console.log('Phone:', phone)
  //   console.log('Shop:', shop)
  // }

  return (
    <React.Fragment>
      <a href='#' className="home-button">Home</a>
      <div className='customer-heading-div'>
        <h1 className="add-customer-heading">Please Fill The Product Info:</h1>
      </div>
 <form className="product-form" onSubmit={handleSubmit}>
      <label htmlFor="product-name">Product Name</label>
      <input
        placeholder="Product Name"
        id="product-name"
        type="text"
        value={productName}
        onChange={handleProductNameChange}
      />
      <label htmlFor="product-name">Product Category</label>
      <select>
        <option value="volvo">Select Product Category</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="saab">Saab</option>
      </select>

      <label htmlFor="product-description">Product Description</label>
      <textarea
        placeholder="Product Description"
        id="product-description"
        value={productDescription}
        onChange={handleProductDescriptionChange}
      />

      <button type="submit">Add Product</button>
    </form>
    </React.Fragment>
  )
}

export default AddProduct
