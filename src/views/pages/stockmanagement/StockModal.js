import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../productmanagement/ProductModal.css';

const StockModal = ({ modaltitle,customer, onUpdate, onCancel }) => {
  const [product, setProduct] = useState(customer.product);
  const [category, setCategory] = useState(customer.category);
  const [quantity, setQuantity] = useState(customer.quantity);
  const [price, setPrice] = useState(customer.price);
  const [shed, setShed] = useState(customer.shed);


  const handleSave = () => {
    onUpdate({ ...customer, product, category, quantity, price, shed });
  };

  return (
    <div className="updating-modal-container">
      <div className="updating-modal">
        <h2>{modaltitle}</h2>
        <div className="form-row">
          <label htmlFor="name-input">Product</label>
          <input id="name-input" type="text" value={product} onChange={(e) => setProduct(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="name-input">Category</label>
          <select id="type-input" type="text" value={category} onChange={(e) => setCategory(e.target.value)} >
            <option value="Cement">Cement</option>
            <option value="Steel">Steel</option>
            <option value="Wood">Wood</option>
            <option value="Paint">Paint</option>
            <option value="Bricks">Bricks</option>
            <option value="Tiles">Tiles</option>
          </select>
        </div>
        <div className="form-row">
            <label htmlFor="name-input">Quantity</label>
            <input id="type-input" type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>
        <div className="form-row">
            <label htmlFor="name-input">Price</label>
            <input id="type-input" type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="form-row">
            <label htmlFor="name-input">Shed</label>
            <select id="type-input" type="text" value={shed} onChange={(e) => setShed(e.target.value)} >
                <option value="Shed 1">Shed 1</option>
                <option value="Shed 2">Shed 2</option>
                <option value="Shed 3">Shed 3</option>
                <option value="Shed 4">Shed 4</option>
                <option value="Shed 5">Shed 5</option>
            </select>
        </div>
        <div className="button-row">
          <button onClick={handleSave}>Save</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
 
StockModal.propTypes = {
  modaltitle: PropTypes.string.isRequired,
  customer: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default StockModal;
