import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../productmanagement/ProductModal.css';

const SalaryModal = ({ modaltitle,customer, onUpdate, onCancel }) => {
  const [name, setName] = useState(customer.name);
  const [designation, setDesignation] = useState(customer.designation);
  const [amount, setAmount] = useState(customer.amount);
//   const [phone, setPhone] = useState(customer.phone);
//   const [address, setAddress] = useState(customer.address);
//   const [shop, setShop] = useState(customer.shop);

  const handleSave = () => {
    onUpdate({ ...customer, name, designation, amount });
  };

  return (
    <div className="updating-modal-container">
      <div className="updating-modal">
        <h2>{modaltitle}</h2>
        <div className="form-row">
          <label htmlFor="name-input">Employee</label>
          <input id="name-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="name-input">Designation</label>
          <select id="type-input" type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} >
            <option value="Manager">Manager</option>
            <option value="Salesman">Salesman</option>
            <option value="Staff">Staff</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="description-input">Amount</label>
          <textarea id="description-input" type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        {/*<div className="form-row">
          <label htmlFor="phone-input">Phone</label>
          <input id="phone-input" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="address-input">Address</label>
          <textarea id="address-input" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="phone-input">Shop</label>
          <input id="shop-input" type="text" value={shop} onChange={(e) => setShop(e.target.value)} />
        </div> */}
        <div className="button-row">
          <button onClick={handleSave}>Save</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
 
SalaryModal.propTypes = {
  modaltitle: PropTypes.string.isRequired,
  customer: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default SalaryModal;
