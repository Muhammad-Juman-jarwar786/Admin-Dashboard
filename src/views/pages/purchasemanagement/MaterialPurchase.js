import React from 'react'
import { useState } from 'react'
import '../productmanagement/AddProduct.css'

const MaterialPurchase = () => {

  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name: ", productName);
    console.log("Quantity: ", quantity);
    console.log("Price: ", price);
    console.log("Company: ", company);
    setProductName("");
    setQuantity("");
    setPrice("");
    setCompany("");
};


  return (
    <React.Fragment>
      <a href='#' className="home-button">Home</a>
      <div className='customer-heading-div'>
        <h1 className="add-customer-heading">Please Fill The Purchasing Info:</h1>
      </div>
      
 <form className="product-form" onSubmit={handleSubmit}>
    <label htmlFor="product-name">Product Name</label>
      <select 
        id="product-name"
        type="text"
        value={productName}
        onChange={handleProductNameChange}>
        <option value="volvo">Select Product Name</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <label htmlFor="product-name">Product Quantity</label>
      <input
        placeholder="Quantity"
        id="product-quantity"
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <label htmlFor="product-price">Price</label>
      <input
        placeholder="Rs"
        id="product-price"
        type="number"
        value={price}
        onChange={handlePriceChange}
      />
      <label htmlFor="company">Company Name</label>
      <input
        placeholder="XYZ Company"
        id="company"
        type="text"
        value={company}
        onChange={handleCompanyChange}
      />
      <button type="submit">Purchase Now</button>
    </form>
    </React.Fragment>
  )
}

export default MaterialPurchase
