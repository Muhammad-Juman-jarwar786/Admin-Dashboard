import React from 'react'
import { useState } from 'react'
import '../productmanagement/AddProduct.css'

const EggSales = () => {

  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [shed, setShed] = useState("");

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleShedChange = (event) => {
    setShed(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name: ", productName);
    console.log("Quantity: ", quantity);
    console.log("Price: ", price);
    console.log("Shed: ", shed);
    setProductName("");
    setQuantity("");
    setPrice("");
    setShed("");
};


  return (
    <React.Fragment>
      <a href='#' className="home-button">Home</a>
      <div className='customer-heading-div'>
        <h1 className="add-customer-heading">Please Fill The Material Info:</h1>
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
        <label htmlFor="shed-name">Customer</label>
      <select 
        id="shed-name"
        type="text"
        value={shed}
        onChange={handleShedChange}>
        <option value="">Select Customer</option>
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
        <option value="d">d</option>
        <option value="e">e</option>
        <option value="f">f</option>
        <option value="g">g</option>
        <option value="h">h</option>
        <option value="i">i</option>
        <option value="j">j</option>
        <option value="k">k</option>
      </select>

      <button type="submit">Add Eggs</button>
    </form>
    </React.Fragment>
  )
}

export default EggSales
