import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CustomerModal.css';

const CustomerModal = ({ modaltitle,customer, onUpdate, onCancel }) => {
  const [name, setName] = useState(customer.name);
  const [type, setType] = useState(customer.type);
  const [email, setEmail] = useState(customer.email);
  const [phone, setPhone] = useState(customer.phone);
  const [address, setAddress] = useState(customer.address);
  const [shop, setShop] = useState(customer.shop);

  const handleSave = () => {
    onUpdate({ ...customer, name, type, email, phone, address, shop });
  };

  return (
    <div className="customer-modal-container">
      <div className="customer-modal">
        <h2>{modaltitle}</h2>
        <div className="form-row">
          <label htmlFor="name-input">Name</label>
          <input id="name-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="name-input">Type</label>
          <input id="type-input" type="text" value={type} onChange={(e) => setType(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="email-input">Email</label>
          <input id="email-input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-row">
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
        </div>
        <div className="button-row">
          <button onClick={handleSave}>Save</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
 
CustomerModal.propTypes = {
  modaltitle: PropTypes.string.isRequired,
  customer: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default CustomerModal;
